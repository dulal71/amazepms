

const DecorativeGlows = () => {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      <div className="absolute left-1/3 top-2/3 h-64 w-64 rounded-full bg-cyan-500/[0.04] blur-3xl" />
      <div className="absolute left-1/2 top-1/4 h-0.5 w-32 rotate-45 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      <div className="absolute right-1/4 top-3/4 h-0.5 w-24 -rotate-12 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
    </div>
    );
};

export default DecorativeGlows;