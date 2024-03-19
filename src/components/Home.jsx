import HeroVideo from "./HeroVideo"
import image1 from "../assets/health_screen.jpg"
import { useState, useEffect } from 'react'
import axios from 'axios'
// http://127.0.0.1:8000/api/v1/donor_list/

const Home = () => {
  const [donor, setDonor] = useState([])
  
  useEffect(() => {
    axios.get(' http://127.0.0.1:8000/api/v1/donor_list/')
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          setDonor(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching blog data:', error);
      });
  }, []);
  return (
    <>
      <HeroVideo></HeroVideo>
      <h1 className="py-8 text-2xl text-red-500 font-semibold text-center">The Surprising Benefits of Donating Blood</h1>


      <section className="flex align-items-centre justify-around py-8 ">
        <div className="px-8">
          <img src={image1} alt="" className="w-full" />
        </div>
        <div className="px-4 mt-4">
          <h3 className="text-1xl font-semibold mb-4">A free health screening </h3>
          <p>“By going to donate blood, you are getting a mini-physical,” says DeSimone.

            Before you are allowed to donate, your vital signs will be checked to make sure you are fit enough for the procedure. This exam might turn up a condition that needs medical attention, such as high blood pressure or a heart arrhythmia like atrial fibrillation. In addition, you’ll be screened for infectious diseases you may be unaware of.</p>
        </div>
      </section>

      <section >
        <h2 className="text-2xl font-semibold my-6 px-12 text-start">A healthier heart and vascular system</h2>
        <p className="text-1xl px-12">Regular blood donation is linked to lower blood pressure and a lower risk for heart attacks. “It definitely helps to reduce cardiovascular risk factors,” says DeSimone.

          Health Matters
          This article originally appeared in Health Matters(link is external and opens in a new window), an online publication of NewYork-Presbyterian.

          What’s the connection? “If your hemoglobin is too high, blood donation helps to lower the viscosity of the blood, which has been associated with the formation of blood clots, heart attacks, and stroke,” DeSimone says. “Interestingly, these benefits are more significant in men compared to women. We think maybe it’s because women have menstrual cycles, so they do it naturally without donating blood.”</p>

      </section>
      <section >
        <h2 className="text-2xl font-semibold my-6 px-12 text-start">A happier, longer life</h2>
        <p className="text-1xl px-12">One blood donation can save up to three lives, according to DeSimone. People usually donate because it feels good to help others, and altruism and volunteering have been linked to positive health outcomes, including a lower risk for depression and greater longevity.

          “Giving blood is a way to engage in the immediate community and help people around you,” Vossoughi adds. “People who do these types of things and engage in their community in this way tend to have better health and longer lives.”</p>

      </section>
      <section >
        <h2 className="text-2xl font-semibold my-6 px-12 text-start">A calorie-free snack </h2>
        <p className="text-1xl px-12">“For one blood donation, it takes your body about 500 calories to replace it,” Vossoughi says. Thus, the juice and cookies you’re offered after giving blood are a “zero-calorie snack,” she says. If you prefer, go for a fancy dessert instead!</p>

      </section>

      <section >
        <div className="my-8 bg-blue-300 p-12">
          <h2 className="text-1xl font-semibold py-4">Blood Donation Tips</h2>
          <p>
            If you plan to give blood, follow these steps:
            <br />
            <br />

            <span className="font-bold">Drink plenty of water.</span> Staying hydrated makes it easier to find your veins and prevents you from becoming light-headed after donating, Vossoughi says.
            <br />
            <br />
            <span className="font-bold">Eat well beforehand.</span> Don’t skip breakfast, and be sure to eat snacks offered to you. “These things will help you tolerate the donation well and feel like yourself the rest of the day,” she says.
            <br />
            <br />
            <span className="font-semibold">Exercise before donating blood, not afterward.</span> It’s OK to go to the gym before you donate blood but not so wise afterward. “We don’t want people getting dizzy,” Vossoughi says. “You’ve basically done your workout for the day once you’ve donated blood.”
            <br />
            <br />
            <span className="font-semibold">Take iron tablets.</span> The American Red Cross recommends that individuals who donate blood frequently take an iron supplement or a multivitamin with iron. “More and more, we’re recommending that teenage donors in particular take iron, because it’s been shown that teenage donors may become iron deficient after blood donation,” DeSimone says.</p>
        </div>
      </section>

      <section >

        <h1 className="py-8 text-2xl text-red-500 font-semibold text-center">Our All Donor List Below </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-12">
        {donor.map(s => (
          <div className='my-4' key={s.id}>
            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">Donar Name: {s.name}</h2>
                <p className="text-gray-700 text-base">Donar Blood group: {s.blood_group}</p>
                <p className="text-gray-700 text-base">Location: {s.location}</p>
                <p className="text-gray-700 text-base">Phone Number: {s.phone_number}</p>
              </div>
              
            </div>
          </div>
        ))}</div>
      </section>

    </>
  )
}

export default Home