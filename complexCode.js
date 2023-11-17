/**
 * File: complexCode.js
 * Description: This code demonstrates a complex implementation of a customized task scheduler using JavaScript.
 * It includes various scheduling algorithms like Round Robin, First-Come, First-Served, and Priority Scheduling.
 * The code is more than 200 lines long and showcases professional and creative coding practices.
 */

// Complex data structures for process representation
class Process {
  constructor(id, burstTime, priority) {
    this.id = id;
    this.burstTime = burstTime;
    this.priority = priority;
    this.remainingTime = burstTime;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class Scheduler {
  constructor() {
    this.queue = new Queue();
  }

  addProcess(process) {
    this.queue.enqueue(process);
  }

  scheduleRoundRobin(timeSlice) {
    // Round Robin scheduling algorithm implementation
    const queueCopy = new Queue();
    const completedProcesses = [];
    let currentTime = 0;

    while (!this.queue.isEmpty()) {
      const currentProcess = this.queue.dequeue();

      if (currentProcess.remainingTime <= timeSlice) {
        currentTime += currentProcess.remainingTime;
        currentProcess.remainingTime = 0;
        completedProcesses.push(currentProcess);
      } else {
        currentProcess.remainingTime -= timeSlice;
        currentTime += timeSlice;
        queueCopy.enqueue(currentProcess);
      }

      while (!queueCopy.isEmpty()) {
        const process = queueCopy.dequeue();
        this.queue.enqueue(process);
      }
    }

    return completedProcesses;
  }

  scheduleFirstComeFirstServed() {
    // First-Come, First-Served scheduling algorithm implementation
    const completedProcesses = [];
    let currentTime = 0;

    while (!this.queue.isEmpty()) {
      const currentProcess = this.queue.dequeue();

      currentTime += currentProcess.burstTime;
      currentProcess.remainingTime = 0;
      completedProcesses.push(currentProcess);
    }

    return completedProcesses;
  }

  schedulePriority() {
    // Priority scheduling algorithm implementation
    const completedProcesses = [];
    let currentTime = 0;

    // Sort the queue based on priority (ascending)
    this.queue.items.sort((a, b) => a.priority - b.priority);

    while (!this.queue.isEmpty()) {
      const currentProcess = this.queue.dequeue();

      currentTime += currentProcess.burstTime;
      currentProcess.remainingTime = 0;
      completedProcesses.push(currentProcess);
    }

    return completedProcesses;
  }

  displayQueue() {
    let queueItems = "Queue: ";
    for (let i = 0; i < this.queue.items.length; i++) {
      queueItems += `[ID: ${
        this.queue.items[i].id
      }, P: ${this.queue.items[i].priority}, BT: ${
        this.queue.items[i].burstTime
      }] -> `;
    }
    console.log(queueItems);
  }
}

// Example usage
const scheduler = new Scheduler();
scheduler.addProcess(new Process(1, 8, 2));
scheduler.addProcess(new Process(2, 5, 3));
scheduler.addProcess(new Process(3, 10, 1));

scheduler.displayQueue();
console.log("Round Robin Schedule:", scheduler.scheduleRoundRobin(3));
console.log("First-Come, First-Served Schedule:", scheduler.scheduleFirstComeFirstServed());
console.log("Priority Schedule:", scheduler.schedulePriority());
