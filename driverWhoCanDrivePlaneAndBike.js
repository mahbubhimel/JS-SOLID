
import { Plane } from "./Plane.js";
import { Bike } from "./Bike.js";
import { driverRobot } from "./driverRobot.js";

export class DriverWhoCanDrivePlaneAndBike extends driverRobot{
    drivePlane(){
        console.log("i can drive plane and bike");
    }
    driveBike() {
        console.log("i can drive bike and plane");
    }

    canDrive(){
        let x = "i can drive both plane and bike";
        console.log(x+" I can drive faster than my parent robot");
    }
}

