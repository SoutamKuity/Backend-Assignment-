const EventEmitter=require('events')

const EventEmittingObj=new EventEmitter();
EventEmittingObj.on('ev1',(disp)=>{
    console.log(`The Value of disp is ${disp}`)
})

module.exports={EventEmittingObj}