function Button({ children, handler }) {
  return (
    <button
      onClick={() => handler()}
      className="text-color-cyan-500 border border-neutral-300 p-1 rounded-lg hover:bg-primary hover:text-black transition-all"
    >
      {children}
    </button>
  );
}

export default Button;
