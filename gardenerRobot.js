import { Robot } from "./robot.js";
import {Tools} from "./tools.js";



export class GardenerRobot extends Robot{
    
    constructor(){
        super();
        var x = new Tools();
    }
    
    gardening(x){
        x.useTools();
    }

    
}