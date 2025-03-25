declare module 'aos' {
  const AOS: {
    init: (config?: any) => void;
    refresh: () => void;
    refreshHard: () => void;
  };
  export default AOS;
}