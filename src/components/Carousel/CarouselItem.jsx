import Card from "../Card/Card"


function CarouselItem() {

  const url1="https://t4.ftcdn.net/jpg/04/14/22/55/240_F_414225555_k4FE9n2fjaBen0QlOW1kSjaQBWfjfCjF.jpg"
  const url2="https://as2.ftcdn.net/v2/jpg/06/42/04/87/1000_F_642048721_wsyk7mdohdWwtekvP1DNDbWaidH8A2iD.jpg"
  const url3="https://cdn.vectorstock.com/i/1000x1000/67/78/gadget-shop-horizontal-banner-vector-37966778.webp"
  const url4="https://t4.ftcdn.net/jpg/05/12/31/31/240_F_512313150_SXjoxQrERJnZZeMzLQPjEYCQS67qdJFs.jpg"

  return (
    <>
      <div>
        <p className="text-center font-mono text-3xl text-red-500 md:my-4 bg-gray-400 p-2">Explore Our Products</p>
      </div>
      <div className="carousel w-full md:my-7 h-[500px] md:mb-[200px]">
        <div id="slide1" className="carousel-item relative w-full ">
          
          <img src={url1} className="w-full h-[500px]" />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <img src={url2} className="w-full h-[500px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img src={url3} className="w-full h-[500px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <img src={url4} className="w-full h-[500px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarouselItem
