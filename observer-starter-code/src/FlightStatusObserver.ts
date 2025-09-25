import { Flight } from "./entity/Flight";
import { Observer } from "./Observer";

export class FlightStatusObserver implements Observer {
  update(flight: any): void {
    console.log(
      `Flight Status:\n` +
      `Transponder ID: ${flight.icao24}, Callsign: ${flight.callsign}, Country: ${flight.origin_country},\n` +
      `Longitude: ${flight.longitude}, Latitude: ${flight.latitude}, Velocity: ${flight.velocity}, Altitude: ${flight.geo_altitude}\n`
    );
  }
}

