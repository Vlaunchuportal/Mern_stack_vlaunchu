import main from "../assets/images/logo.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            “Nothing in the world can take the place of persistence. Talent will
            not; nothing is more common than unsuccessful men with talent.
            Genius will not; unrewarded genius is almost a proverb. Education
            will not; the world is full of educated derelicts. Persistence and
            determination alone are omnipotent. The slogan "press on" has solved
            and will always solve the problems of the human race.” – Calvin
            Coolidge
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
