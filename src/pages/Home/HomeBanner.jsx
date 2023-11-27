

function HomeBanner() {
  return (
    <div className="hero min-h-screen bg-base-200 my-8">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Car Shop</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  )
}

export default HomeBanner
