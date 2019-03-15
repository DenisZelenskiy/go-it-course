"use strict";

const body = document.body;

class Stopwatch {
  constructor(parent) {
    this.parent = parent;
    this.arrLapsValues = [];
    this.currentLap;
    this.isActive = false;
    this.deltatime = null;
    this.pausetime = 0;
    this.id = null;
  }
  createStopwatchElements(parent) {
    // CREATE ELEMENTS
    this.stopwatch = document.createElement("div");
    this.jsTime = document.createElement("p");
    this.jsStart = document.createElement("button");
    this.jsTakeLap = document.createElement("button");
    this.jsReset = document.createElement("button");
    this.jsLaps = document.createElement("ul");

    //ADD CLASS
    this.stopwatch.classList.add("stopwatch");
    this.jsTime.classList.add("time", "js-time");
    this.jsStart.classList.add("btn", "js-start");
    this.jsTakeLap.classList.add("btn", "js-take-lap");
    this.jsReset.classList.add("btn", "js-reset");
    this.jsLaps.classList.add("laps", "js-laps");

    //COntent
    this.jsTime.textContent = "00:00.0";
    this.jsStart.textContent = "Start";
    this.jsTakeLap.textContent = "Lap";
    this.jsReset.textContent = "Reset";

    this.jsReset.disabled = true;

    // ADD in PAGE ELEMENTS
    this.stopwatch.append(
      this.jsTime,
      this.jsStart,
      this.jsTakeLap,
      this.jsReset
    );
    parent.append(this.stopwatch, this.jsLaps);
  }

  formatedTime(time) {
    let minute = parseInt((time / 1000 / 60) % 60);
    let second = parseInt((time / 1000) % 60);
    let millisecond = parseInt((time % 1000) / 100);

    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    return `${minute}:${second}.${millisecond}`;
  }

  writeInPage(elem, time) {
    elem.textContent = this.formatedTime(time);
  }

  startTimer() {
    if (!this.isActive) {
      this.isActive = true;
      this.jsStart.textContent = "Pause";
      this.jsReset.disabled = false;
      this.starttime = Date.now();
      this.id = setInterval(() => {
        this.currenttime = Date.now();
        this.deltatime = this.currenttime - this.starttime + this.pausetime;
        this.writeInPage(this.jsTime, this.deltatime);
      }, 100);
    } else {
      clearInterval(this.id);
      this.isActive = false;
      this.pausetime = this.deltatime;
      this.jsStart.textContent = "Continue";
    }
  }

  stopTimer() {
    clearInterval(this.id);
    this.isActive = false;
    this.jsReset.disabled = true;
    this.pausetime = 0;
    this.deltatime = 0;
    this.jsStart.textContent = "Start";
    this.writeInPage(this.jsTime, this.deltatime);
  }

  createElementLi(value) {
    this.li = document.createElement("li");
    this.li.textContent = value;
    this.jsLaps.appendChild(this.li);
  }

  saveLap() {
    this.currentLap = this.jsTime.textContent;
    this.arrLapsValues.push(this.currentLap);
    this.createElementLi(this.currentLap);
  }

  createStopwatch(parent) {
    this.createStopwatchElements(this.parent);

    this.jsStart.addEventListener("click", this.startTimer.bind(this));
    this.jsReset.addEventListener("click", this.stopTimer.bind(this));
    this.jsTakeLap.addEventListener("click", this.saveLap.bind(this));
  }
}

const timer1 = new Stopwatch(body);

timer1.createStopwatch();

const timer2 = new Stopwatch(body);
timer2.createStopwatch();
