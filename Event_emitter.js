const EventEmitter=require('events');
const {prependListener}=require('process');

const eventemitter=new EventEmitter();

eventemitter.on('started',function f1(){
    console.log("event 1 is running now...");
})

eventemitter.on('process',function f2(process){
    console.log(`event 2 is process : ${process}% `);
})

eventemitter.on('completed',function f3(){  
    console.log(`event is Completed`);
});

eventemitter.emit('started');   
eventemitter.emit('process',50);   
eventemitter.emit('process',100);   
eventemitter.emit('completed');

eventemitter.prependListener('event', function f0(){  
    console.log("event stating...");     
});

console.log(eventemitter.getMaxListeners()); 
eventemitter.setMaxListeners(5);

console.log(eventemitter.getMaxListeners()); 


console.log(eventemitter.eventNames());
console.log(eventemitter.listeners("event"));

console.log(eventemitter.listenerCount('event'))   
eventemitter.removeAllListeners('event');  
console.log(eventemitter.listeners('event'));


// const events = require('events');
// // const eventEmitter=new events()

// class Task extends events.EventEmitter {
//   constructor() {
//     super();
//   }

//   start() {
//     this.emit('started');

//     setTimeout(() => {
//       this.emit('progress', 50);
//       setTimeout(() => {
//         this.emit('progress', 100);
//         this.emit('completed');
//       }, 1000);
//     }, 2000);
//   }
// }

// const task = new Task();


// task.on('started',()=> {
//     console.log('Task started');
// })

// task.on('progress',(progress)=>{
//     console.log(`Progress: ${progress}%`);
// })

// task.on('completed',()=>{
//     console.log('Task completed');
// })
// task.start();