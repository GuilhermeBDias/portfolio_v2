import type { Variants } from "motion/react";

type RevealVariantsOptions = {
  hiddenY?: number;
  hiddenX?: number;
  exitY?: number;
  exitX?: number;
  duration?: number;
  exitDuration?: number;
  delay?: number;
  exitDelay?: number;
  blur?: number;
  exitBlur?: number;
};

type StaggerVariantsOptions = {
  staggerChildren?: number;
  delayChildren?: number;
};

export const createRevealVariants = ({
  hiddenY = 24,
  hiddenX,
  exitY = -24,
  exitX,
  duration = 0.5,
  exitDuration = 0.35,
  delay,
  exitDelay = 0,
  blur,
  exitBlur,
}: RevealVariantsOptions = {}): Variants => {
  const hiddenState = {
    opacity: 0,
    ...(hiddenX !== undefined ? { x: hiddenX } : { y: hiddenY }),
    ...(blur !== undefined ? { filter: `blur(${blur}px)` } : {}),
  };

  const showState = {
    opacity: 1,
    ...(hiddenX !== undefined ? { x: 0 } : { y: 0 }),
    ...(blur !== undefined ? { filter: "blur(0px)" } : {}),
    transition: {
      duration,
      ...(delay !== undefined ? { delay } : {}),
    },
  };

  const exitState = {
    opacity: 0,
    ...(exitX !== undefined ? { x: exitX } : { y: exitY }),
    ...(exitBlur !== undefined ? { filter: `blur(${exitBlur}px)` } : {}),
    transition: {
      duration: exitDuration,
      delay: exitDelay,
      ...(exitDelay !== undefined ? { delay: exitDelay } : {}),
    },
  };

  return {
    hidden: hiddenState,
    show: showState,
    exit: exitState,
  };
};

export const createStaggerVariants = ({
  staggerChildren = 0.3,
  delayChildren = 0.4,
}: StaggerVariantsOptions = {}): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
      staggerDirection: 1,
    },
  },

  exit: {
    transition: {
      staggerChildren,
      delayChildren,
      staggerDirection: -1,
    }
  }
});

type PresenceFadeVariantsOptions = {
  duration?: number;
  exitDuration?: number;
  initialScale?: number;
  exitScale?: number;
};

export const createPresenceFadeVariants = ({
  duration = 0.45,
  exitDuration = 0.45,
  initialScale,
  exitScale,
}: PresenceFadeVariantsOptions = {}): Variants => ({
  hidden: {
    opacity: 0,
    ...(initialScale !== undefined ? { scale: initialScale } : {}),
  },
  show: {
    opacity: 1,
    ...(initialScale !== undefined ? { scale: 1 } : {}),
    transition: {
      duration,
    },
  },
  exit: {
    opacity: 0,
    ...(exitScale !== undefined ? { scale: exitScale } : {}),
    transition: {
      duration: exitDuration,
    },
  },
});