export function ParallaxSection() {
  return (
    <section
      aria-label="Featured highlight"
      className="relative h-[55vh] md:h-[60vh] bg-cover bg-center bg-fixed flex items-center justify-center my-0"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(17,17,17,0.7), rgba(17,17,17,0.55)), url('/images/nordlys.png')",
      }}>
      <div className="relative text-center px-6 max-w-3xl">
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight text-cream">
          Crafting code, building experiences.
        </h2>
        <p className="mt-6 text-base md:text-lg text-cream/80 max-w-xl mx-auto">
          Front-end development built with intention, care, and a focus on the user.
        </p>
      </div>
    </section>
  )
}
