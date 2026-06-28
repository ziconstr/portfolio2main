export function ParallaxSection() {
  return (
    <section
      aria-label="Featured highlight"
      className="relative h-[60vh] bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(2,6,23,0.75), rgba(15,23,42,0.65)), url('/images/nordlys.png')",
      }}>
      <div className="relative text-center px-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
          Crafting Code, Building Experiences
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Front-end development built with intention, care, and a focus on the user.
        </p>
      </div>
    </section>
  )
}
