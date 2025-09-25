import { Link } from "react-router-dom";
import Post from "./Post";
import { Status } from "tweeter-shared";
import { useUserNavigation } from "../userInfo/UserHooks";

interface Props {
  status: Status;
  url: string;
}

const StatusItem = (props: Props) => {
  const { navigateToUser } = useUserNavigation();

  return (
    <div className="col bg-light mx-0 px-0">
      <div className="container px-0">
        <div className="row mx-0 px-0">
          <div className="col-auto p-3">
            <img
              src={props.status.user.imageUrl}
              className="img-fluid"
              width="80"
              alt="Posting user"
            />
          </div>
          <div className="col">
            <h2>
              <b>
                {props.status.user.firstName} {props.status.user.lastName}
              </b>{" "}
              -{" "}
              <Link
                to={`${props.url}/${props.status.user.alias}`}
                onClick={(event) => navigateToUser(event, props.url)}
              >
                {props.status.user.alias}
              </Link>
            </h2>
            {props.status.formattedDate}
            <br />
            <Post status={props.status} featurePath={`${props.url}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusItem;