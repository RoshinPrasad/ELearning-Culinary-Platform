import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../authUtils";
import Cookies from "js-cookie";
import react from "react";
import './styles.css'


const Head = () => {
  const navigate = useNavigate();

  const logoutSubmit = () => {
    window.location.reload();
    Cookies.remove("userDetails");
    Cookies.remove("accessToken");

    localStorage.removeItem("userDetails");
    localStorage.removeItem("accessToken");
    

    navigate("../");
  };

  const profileSubmit = () => {
    navigate("../user-profile");
  };

  const signUpSubmit = () => {
    navigate("../login");
  };

  const mentorSubmit = () => {
    navigate("../mentorsignup");
  };

  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
           <h1 style={{ color: "#EF0107" }}>
              S <span style={{ color: "red" }}>K &nbsp;</span>
              <span style={{ color: "white" }}>Co<span className='dig'>
  <span className='jumping-o'>o</span>
</span>ks</span>
            </h1>
            <span style={{ color: "white" }}>
              ONLINE CULINARY EDUCATION & LEARNING
            </span>
          </div>

          <div>
            {isAuthenticated() ? (
              <>
                <button
                  style={{ color: "black", backgroundColor: "light" ,height: '20px',padding: '0 10px', transition: 'transform 0.3s',fontWeight: 'bold',borderRadius: '12px'}}
                  onClick={profileSubmit}
                >
                  Profile
                </button>&nbsp;
                <button
                  style={{ color: "#BA0021", backgroundColor: "gray" ,height: '20px',padding: '0 10px', transition: 'transform 0.3s',borderRadius: '12px' ,':hover': {   backgroundColor: 'red' },}}
                  onClick={logoutSubmit}
                  onMouseOver={(e) => {e.target.style.backgroundColor = 'red';}}
                    onMouseOut={(e) => {e.target.style.backgroundColor = 'gray';}}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                style={{ color: "black", backgroundColor: "light" ,height: '20px',padding: '0 10px', transition: 'transform 0.3s',fontWeight: 'bold',borderRadius: '12px'}}
                onClick={signUpSubmit}
                onMouseOver={(e) => { e.target.style.transform = 'rotate(-15deg)';
                  setTimeout(() => { e.target.style.transform = 'rotate(15deg)';  }, 100);
                  setTimeout(() => { e.target.style.transform = 'rotate(0deg)';  }, 200); }}
                onMouseOut={(e) => {   e.target.style.transform = 'rotate(0deg)'; }}
              >
                LOGIN
              </button>
            )}
            &nbsp;
            <button
              style={{ color: "black", backgroundColor: "aqua" , borderLeft: "1px solid black",height: '20px',padding: '0 10px',borderRadius: '15px',}}
              onClick={mentorSubmit}
              onMouseOver={(e) => { e.target.style.transform = 'rotate(-15deg)';
                  setTimeout(() => { e.target.style.transform = 'rotate(15deg)';  }, 100);
                  setTimeout(() => { e.target.style.transform = 'rotate(0deg)';  }, 200); }}
                onMouseOut={(e) => {   e.target.style.transform = 'rotate(0deg)'; }}
            >
              Become a Mentor
            </button>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
