class PubSub {
  constructor() {
    this.events = {};
  }
  subscribe(event, callback) {
    if (!this.events[event]) {
      // no subscriber to this event
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return () => this.unsubscribe(event, callback);
  }

  publish(event, data) {
    if (!this.events[event]) return; // b/c no subscriber to that event so no need to do anything
    // if there are subscriber to that event
    // go through each subscriber callback & execute it
    this.events[event].forEach((callback) => {
      callback(data);
    });
  }
  unsubscribe(event, callback) {
    if (!this.events[event]) return;
    // we need to remove that callback from that event
    this.events[event] = this.events[event].filter((cb) => cb !== callback);
  }
  subscribeOnce(event, callback) {
    const wrapper = (data) => {
      callback(data);
      this.unsubscribe(event, wrapper);
    };
    this.subscribe(event, wrapper);
  }
}

const p = new PubSub();

let sid = p.subscribe("airforce1", (data) =>
  console.log("sidharth airforce 1 update with color: ", data)
);
let rohan = p.subscribe("airforce1", (data) =>
  console.log("rohan airforce update with color: ", data)
);
p.subscribeOnce("airforce1", (data) => {
  console.log("chinku airforce update with color: ", data);
});
let adityaUnsubscribe = p.subscribe("airforce1", (data) =>
  console.log("aditya airforce 1 update with color: ", data)
);
let anishUnsubscribe = p.subscribe("airforce1", (data) =>
  console.log("anishl airforce 1 update with color: ", data)
);
p.subscribe("reebok", (data) =>
  console.log("anishl reebok 1 update with color: ", data)
);
p.subscribe("adidas", (data) =>
  console.log("sid adidas 1 update with color: ", data)
);

p.publish("adidas", "black");
p.publish("reebok", "black");
p.publish("airforce1", "red");
adityaUnsubscribe();
anishUnsubscribe();
p.publish("airforce1", "yellow");
