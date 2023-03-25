import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameLoading = () => (
  <FontAwesomeIcon
    icon={faSpinner}
    spinPulse
    style={{
      "--fa-primary-color": "#d9d9d9",
      "--fa-secondary-color": "#d9d9d9",
      fontSize: "3rem",
    }}
  />
);

export default GameLoading;
