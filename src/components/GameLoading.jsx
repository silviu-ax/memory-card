import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameLoading = () => (
  <FontAwesomeIcon
    icon={faSpinner}
    spin
    style={{
      fontSize: "4rem",
      marginTop: "2rem",
      "--fa-primary-color": "#e0e0e0",
      "--fa-secondary-color": "#878787",
    }}
  />
);

export default GameLoading;
