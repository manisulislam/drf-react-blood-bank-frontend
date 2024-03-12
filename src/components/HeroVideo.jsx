import videoBg from "../assets/every_blood.mp4"


const HeroVideo =()=>{
    return (
        <>
        <div>
            <video src={videoBg} autoPlay muted loop>
            </video>
        </div>
        </>
    )

}
export default HeroVideo;