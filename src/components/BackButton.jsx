import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return <Button text="Back" clickFunction={handleClick} />;
};
