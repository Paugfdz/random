export function FloralBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10 z-0">
      {/* Flores decorativas */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-accent rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-40 right-1/3 w-44 h-44 bg-chart-4 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-chart-5 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-1/3 right-10 w-28 h-28 bg-primary rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 left-1/2 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20" />
    </div>
  );
}
