import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <p onClick={() => navigate("/privacypolicy")}>
        &copy; {new Date().getFullYear()} githunt. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
