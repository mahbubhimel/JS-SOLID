// import {driverRobot} from "./driverRobot.js";
import {DriverWhoCanDrivePlaneAndBike} from "./driverWhoCanDrivePlaneAndBike.js";
import { GardenerRobot } from "./gardenerRobot.js";
import { Robot } from "./robot.js";
import { WoodCutter } from "./woodCutter.js";

var rob = new Robot();

function RobotSeminar(rob){
    console.log(rob.speak());
    console.log(rob.walk());
    console.log(rob.recharge());
}

// let y = new DriverWhoCanDrivePlaneAndBike();
// RobotSeminar(y);
// // console.log(y.drivePlane());
// // console.log(y.driveBike());
// // console.log(y.canDrive());

let gr = new GardenerRobot;
RobotSeminar(gr);
gr.gardening(new WoodCutter);








