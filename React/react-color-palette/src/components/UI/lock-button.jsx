import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock, faLock } from '@fortawesome/free-solid-svg-icons';

const IconButton = ({accent, state, handler}) => {
  return (
    <button onClick={handler}>
      {state ? (
        <FontAwesomeIcon icon={faLock} style={{ color: accent }} />
      ) : (
        <FontAwesomeIcon icon={faUnlock} style={{ color: accent }} />
      )}
    </button>
  );
};

export default IconButton;
