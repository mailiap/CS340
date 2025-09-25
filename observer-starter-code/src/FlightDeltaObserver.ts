import { Observer } from "./Observer";

export class FlightDeltaObserver implements Observer {
    currentFlight: any = null;
    
    update(flight: any): void {
    if (this.currentFlight) {
      const dLon = flight.longitude - this.currentFlight.longitude;
      const dLat = flight.latitude - this.currentFlight.latitude;
      const dVel = flight.velocity - this.currentFlight.velocity;
      const dAlt = flight.baro_altitude - this.currentFlight.geo_altitude;

      console.log(
        `Flight Deltas:\n` +
        `ΔLongitude: ${dLon.toFixed(2)}, ΔLatitude: ${dLat.toFixed(2)}, ΔVelocity: ${dVel.toFixed(2)}, ΔAltitude: ${dAlt.toFixed(2)}\n`
      );
    }
    this.currentFlight = flight;
  }
}
