// components/Hero.js
import HeroImage from '../assets/StudyingGroup.jpeg';

const Hero = () => {
    return (
        <div className="relative w-full h-100">
            <img
                src={HeroImage}
                alt="Hero"
                className="w-full h-full object-cover object-center" // Centered the image
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                <h1 className="text-white text-4xl font-bold">Welcome to StudyTogether</h1>
                <p className="text-white text-lg mt-2">Collaborate, learn, and grow with others.</p>
            </div>
        </div>
    );
};

export default Hero;
