// Official Velocity Wear logo (sourced from velocity-wear.com).
// The artwork is a self-contained wordmark, so no extra text is rendered.
export default function Logo({ className = 'h-11', priority = false }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/velocity-logo.png"
      alt="Velocity Wear"
      width={500}
      height={486}
      draggable={false}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={`site-logo ${className} w-auto select-none`}
    />
  );
}
