import React from 'react'

const Testimonial = () => {
    return (
        <div id='testimonial'>
            <h2>Testimonial</h2>
            <section>
                <TestimonialCard name={"Ranveer"}
                    feedback={"A web development virtuoso,Aditya weaves digital magic into every project."}
                />
                <TestimonialCard name={"Dev"}
                    feedback={"Web development made easy, thanks to Aditya's exceptional skills and commitment."}
                />
                <TestimonialCard name={"Pratik"}
                    feedback={"Aditya is a web development wizard, turning ideas into beautiful, functional websites with ease."}
                />

            </section>

        </div>
    )
}

const TestimonialCard = ({ name, feedback }) => (
    <article>
        <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
        />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial