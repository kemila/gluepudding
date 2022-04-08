/*
 * @Description: 
 * @Author: zhengqi
 * @Date: 2022-04-08 11:44:40
 * @LastEditTime: 2022-04-08 13:45:30
 */
import {World} from '../ecs/ecs'

const world = new World();
let frame = 0
const startTime = new Date();
// world.addEntity()
(function animate() {
  frame++
  console.log(frame);
  requestAnimationFrame( animate );
  const d = new Date() as any - (startTime as any)
  world.update(d);
  
})()