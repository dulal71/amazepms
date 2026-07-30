import React from 'react';

const FloatingParticles = () => {
    return (
       <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/4 top-1/4 h-1.5 w-1.5 rounded-full bg-blue-400/30" />
      <div className="absolute right-1/3 top-1/3 h-1 w-1 rounded-full bg-purple-400/20" />
      <div className="absolute left-2/3 bottom-1/4 h-2 w-2 rounded-full bg-cyan-400/20" />
      <div className="absolute right-1/4 top-2/3 h-1 w-1 rounded-full bg-blue-400/25" />
      <div className="absolute left-1/5 bottom-1/3 h-1.5 w-1.5 rounded-full bg-blue-500/15" />
      <div className="absolute right-2/5 top-1/5 h-1 w-1 rounded-full bg-purple-500/20" />
    </div>
    );
};

export default FloatingParticles;