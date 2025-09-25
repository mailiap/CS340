import { FlightFeed } from "./FlightFeed";
import { FlightStatusObserver } from "./FlightStatusObserver";
import { FlightDeltaObserver } from "./FlightDeltaObserver";
import { Subject
  
 } from "./Subject";
main();

function main() {
  let feed = new FlightFeed();

  // Attach observers to the feed
  feed.attachObserver(new FlightStatusObserver);
  feed.attachObserver(new FlightDeltaObserver);

  // Start monitoring
  feed.start();
}
