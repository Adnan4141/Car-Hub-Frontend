

function AboutUs() {
    return (
        <div className="hero min-h-screen bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">About Car Service!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <hr />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-[200px]">
                        <div className="bg-green-300">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWKGy277xfDaOfi6Lf4I3Oyb1iw5lxP2jpg&usqp=CAU" alt="" width={80} />
                            </div>
                            <p>Tiitle</p>
                            <p>Description</p>
                            <p>Repair</p>
                        </div>
                        <div className="bg-green-300">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWKGy277xfDaOfi6Lf4I3Oyb1iw5lxP2jpg&usqp=CAU" alt="" width={80} />
                            </div>
                            <p>Tiitle</p>
                            <p>Description</p>
                            <p>Repair</p>
                        </div>
                        <div className="bg-green-300">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWKGy277xfDaOfi6Lf4I3Oyb1iw5lxP2jpg&usqp=CAU" alt="" width={80} />
                            </div>
                            <p>Tiitle</p>
                            <p>Description</p>
                            <p>Repair</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs
