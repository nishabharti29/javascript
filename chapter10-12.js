class Counter {
    #count = 0;
    increment() {
      this.#count++;
    }
    getCount() {
      return this.#count;
    }
    #logCount() {
      console.log("Current count:", this.#count);
    }
  
    accessLogCount(){
      this.#logCount();
    }
  }
  const myCounter = new Counter();
  myCounter.increment();
  console.log(myCounter.getCount()); 
  myCounter.accessLogCount();