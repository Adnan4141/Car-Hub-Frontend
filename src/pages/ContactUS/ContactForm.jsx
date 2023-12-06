

function ContactForm() {
    return (
        <>
            <div className="text-center text-4xl p-3">
                <h2 className="text-orange-600">Contact</h2>
                <p className="text-yellow-800">Leave Your Meassage</p>

            </div>
            <form action="" className="p-10 text-center w-full md:w-2/4 flex flex-col mx-auto" >
                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Email</p>
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full " />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Subject</p>
                    <input type="text" placeholder="Enter Your Subject" className="input input-bordered w-full" />
                </div>

                <div className="text-left">
                    <p className="text-2xl my-2 mx-2">Bio</p>
                    <input type="text" placeholder="Enter Your Bio" className="input input-bordered w-full" />
                </div>

                <div className="my-4">
                    <button className="Text-center text-white bg-red-700 btn btn-outline btn-warning">Submit</button>
                </div>

            </form>
            </>
            )
}

            export default ContactForm
