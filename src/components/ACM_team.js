import { TfiLinkedin } from "react-icons/tfi";
function Our_Team() {
    let message = "lorem ipsum"
    return (
        <>
            <section className='section-white'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h2 className='section-title'>The Team Behind ACM</h2>
                            <p className='section-subtitle'>
                                {message}
                            </p>
                        </div>
                        <div className='col-sm-6 col-md-4'>
                            <div className='team-item'>
                                <img src="https://imagizer.imageshack.com/img922/678/CW1JNG.jpg" className='team-img' alt='pic' />
                                <h3>Sudeep Sahu</h3>
                                <div className='team-info'>
                                    <p>Chairperson</p>
                                    <p>Sudeep is awesome and bla bla bla bla</p>
                                    <ul className='team-icon'>
                                        <li>
                                            <a href="https://www.linkedin.com/in/sudeep2102/" className="linkedin">
                                                {/* Replace with linkedin later */}
                                                {/* <i className="fa fa-twitter"> </i> */}
                                                <TfiLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="github">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4'>
                            <div className='team-item'>
                                <img src="https://imagizer.imageshack.com/img924/6608/cCkVtp.jpg" className='team-img' alt='pic' />
                                <h3>Chahak Sengar</h3>
                                <div className='team-info'>
                                    <p>Vice Chairperson</p>
                                    <p>Sudeep is awesome and bla bla bla bla</p>
                                    <ul className='team-icon'>
                                        <li>
                                            <a href="#" className="twitter">
                                                {/* Replace with linkedin later */}
                                                <i class="bi bi-linkedin"> </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="facebook">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-4'>
                            <div className='team-item'>
                                <img src="https://imagizer.imageshack.com/img923/7446/HwfBkn.jpg" className='team-img' alt='pic' />
                                <h3>Yash Jugade</h3>
                                <div className='team-info'>
                                    <p>Treasurer</p>
                                    <p>Sudeep is awesome and bla bla bla bla</p>
                                    <ul className='team-icon'>
                                        <li>
                                            <a href="#" className="twitter">
                                                {/* Replace with linkedin later */}
                                                <i className="fa fa-twitter"> </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="facebook">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Our_Team