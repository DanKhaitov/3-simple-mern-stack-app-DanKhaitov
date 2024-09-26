import { useEffect } from "react"
import { useState } from "react"


const About = () => {
    const [about, setAbout] = useState('')
    const [imgURL, setImgURL] = useState('')
    useEffect(() => {
        fetchAbout()
    })

    const fetchAbout = async () => {

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`, requestOptions)
            const result = await response.json()
            setAbout(result.about)
            setImgURL(result.imgURL)
        } catch (error) {
            console.error('failed to fetch about us data')
        }
    }

    return (
        <div>
            <div>{about}</div>

            <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/StewieFeature.jpg" alt="a photo of a funny guy"></img>
        </div>
    )
}

export default About