import { Variants, Transition } from 'framer-motion'

export const floatTransition: Transition = {
  duration: 4,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
}

export const idleFloat = {
  y: [0, -6, 0],
  rotate: [0, 1, -1, 0],
}

export const hoverLift = {
  scale: 1.05,
  y: -4,
  rotate: 2,
  transition: { duration: 0.2 },
}

export const tapPress = {
  scale: 0.97,
  transition: { duration: 0.1 },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}
