"use client";

import { forwardRef, type ComponentType, useSyncExternalStore } from "react";
import { motion } from "framer-motion";

type StoreState = {
  background: string;
};

let storeState: StoreState = {
  background: "#0099FF",
};

const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const getSnapshot = () => storeState;

const setStore = (partial: Partial<StoreState>) => {
  storeState = { ...storeState, ...partial };
  listeners.forEach((listener) => listener());
};

const useStore = (): [StoreState, (partial: Partial<StoreState>) => void] => {
  const state = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  return [state, setStore];
};

const randomColor = () => {
  const value = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${value}`;
};

export function withRotate(Component: ComponentType<any>): ComponentType<any> {
  const MotionComponent = motion(Component);
  return forwardRef((props, ref) => {
    return (
      <MotionComponent
        ref={ref}
        {...props}
        animate={{ rotate: 90 }}
        transition={{ duration: 2 }}
      />
    );
  });
}

export function withHover(Component: ComponentType<any>): ComponentType<any> {
  const MotionComponent = motion(Component);
  return forwardRef((props, ref) => {
    return <MotionComponent ref={ref} {...props} whileHover={{ scale: 1.05 }} />;
  });
}

export function withRandomColor(Component: ComponentType<any>): ComponentType<any> {
  const MotionComponent = motion(Component);
  return forwardRef((props, ref) => {
    const [store, updateStore] = useStore();

    return (
      <MotionComponent
        ref={ref}
        {...props}
        animate={{ background: store.background }}
        onClick={() => {
          updateStore({ background: randomColor() });
        }}
      />
    );
  });
}
