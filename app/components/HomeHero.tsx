import './hero.css';

const HomeHero = () => {
  return (
    <div>
      <video autoPlay loop muted playsInline>
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <div className="title-slogan">
          <h1 className='title'>We&apos;ve cracked the code</h1>
          <p className='slogan'>Innovation thrives when you engage in meaningful work and make it fun.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeHero;