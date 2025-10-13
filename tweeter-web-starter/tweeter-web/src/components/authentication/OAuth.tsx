import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useMessageActions } from "../toaster/MessageHooks";

interface Props {
  oAuthHeading: string;
}

interface OAuth {
  icon: Parameters<typeof FontAwesomeIcon>["0"]["icon"];
  oAuthProvider: string;
}

const OAuthButton = (props: OAuth) => {
  const { displayInfoMessage } = useMessageActions();

  const displayInfoMessageWithDarkBackground = (message: string): void => {
    displayInfoMessage(message, 3000, "text-white bg-primary");
  };

  return (
    <button
      type="button"
      className="btn btn-link btn-floating mx-1"
      onClick={() =>
        displayInfoMessageWithDarkBackground(
          `${props.oAuthProvider} registration is not implemented.`
        )
      }
    >
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id={`${props.oAuthProvider.toLowerCase()}Tooltip`}>
            {props.oAuthProvider}
          </Tooltip>
        }
      >
        <FontAwesomeIcon icon={props.icon} />
      </OverlayTrigger>
    </button>
  );
};

const OAuth = (props: Props) => {
  return (
    <>
      <h1 className="h5 mb-3 fw-normal">{props.oAuthHeading}</h1>
      <div className="text-center mb-3">
        <OAuthButton oAuthProvider="Google" icon={["fab", "google"]} />
        <OAuthButton oAuthProvider="Facebook" icon={["fab", "facebook"]} />
        <OAuthButton oAuthProvider="Twitter" icon={["fab", "twitter"]} />
        <OAuthButton oAuthProvider="LinkedIn" icon={["fab", "linkedin"]} />
        <OAuthButton oAuthProvider="Github" icon={["fab", "github"]} />
      </div>
    </>
  );
};

export default OAuth;
