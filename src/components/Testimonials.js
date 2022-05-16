import * as React from "react"
import { CgShapeZigzag } from 'react-icons/cg'

import suzanne from '../images/suzanne.jpeg'
import '../styles/components/testimonials.css'

const Testimonials = () => {
    return (
        <section className="testimonialsSection" id="testimonials">
            <h1 className="testimonialsSectionTitle">TESTIMONIALS</h1>
            <div className="testimonials">
                <div className="testimonialItem">
                    <h2 className="sectionTitle">My Testimonials</h2>
                    <div className="recommendation">
                        <div className="recommendationText">
                            <p className="text">"Margret is a brilliant, self-motivated lady who has demonstrated her commitment and eagerness to learn during the past year that I have known her. Her professionalism is profound and her willingness to always go the extra mile to achieve her goals is commendable. She is honest, reliable and highly organized team player who is easy to work with. Margret's flair for hard work and finding solutions makes her a big asset and a great resource."</p><br />
                        </div>
                        <div className="recommendationDetails">
                            <div className="recommendationImg">
                                <img src={suzanne} alt="Recommendation author" className="rPhoto" />
                            </div>
                            <div className="info">
                                <small>Suzanne Nyawanda</small>
                                <small>Corporate Communications | Digital Communications | Public Relations | Strategy</small>
                                <small>October 24, 2019 - Mentor</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <span className="border"><CgShapeZigzag /></span> */}
        </section>
    )
}

export default Testimonials