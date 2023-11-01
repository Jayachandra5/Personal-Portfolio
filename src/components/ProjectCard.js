import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, href }) => {
  const cardStyle = {
    color: "white", // Set the text color to white
  };

  return (
    <Col size={12} sm={6} md={4}>
      <a href={href}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx" style={cardStyle}>
            <h4 style={cardStyle}>{title}</h4>
            <span style={cardStyle}>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
