/// <reference types="vite/client" />
declare module 'particlesjs';
declare const __BUILD_TIME__: string;
declare module 'typewriter-effect/dist/core' {
  const Typewriter: typeof import('typewriter-effect').TypewriterClass;
  export default Typewriter;
}
