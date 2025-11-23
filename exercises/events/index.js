// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
  trigger(eventName) {
    const eventQueue = this.events[eventName];

    if (eventQueue) {
      for (let callback of eventQueue) {
        callback();
      }
    }
  }
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
