import React from "react";
const BlogList = () => {
    return (
        <>
            <h1 className="text-center text-success my-1"></h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div class="card">
                            <img src="https://images.pexels.com/photos/163186/globuli-medical-bless-you-homeopathy-163186.jpeg?
                            auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">Healing Through Nature</h4>
                                <p class="card-text">Only spread a fern-frond over a man's head and worldly cares are cast out,
                                    and freedom and beauty and peace come in.</p>
                                <a href="#" class="btn btn-primary">View more</a><br></br>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/723241/pexels-photo-723241.jpeg?
                            auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Scenic View of the Beach</h5>
                                <p class="card-text">Simple but true. Life is just better at the beach.
                                    Everything is better at the beach!
                                    With no where to go and no where to be, a day at the beach is just what you need</p>
                                <a href="#" class="btn btn-secondary">View more</a><br></br>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/10739769/pexels-photo-10739769.jpeg?
                            cs=srgb&dl=pexels-oksana-abramova-10739769.jpg&fm=jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">Nature pexels</h4>
                                <p class="card-text">Plants provide us with the oxygen that we
                                    breathe so they really are vitally important.
                                    Not only that, but they are often beautiful to look at too!.</p>
                                <a href="#" class="btn btn-success">View more</a><br></br>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://images.pexels.com/photos/9144234/pexels-photo-9144234.jpeg?
                            auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 class="card-title">Ice hill mountain</h4>
                                <p class="card-text">Ice Mountain's ice vents provide a habitat for
                                    boreal species of plants commonly found in Subarctic regions!.</p>
                                <a href="#" class="btn btn-info">View more</a><br></br>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default BlogList;