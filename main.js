let channelsTriger = document.querySelector(".channels");
let eventsTriger = document.querySelector(".events");
let events = document.getElementById("events");
let events_icon = document.getElementById("events-icon");
let channels = document.getElementById("channels");
let channels_icon = document.getElementById("channels-icon");

channelsTriger.addEventListener("click", () => {
  channels.style.color = "#a80000";
  channels_icon.style.color = "#a80000";
  events.style.color = "#121212";
  events_icon.style.color = "#121212";
  window.location.href = "channels.html";
});

eventsTriger.addEventListener("click", () => {
  events.style.color = "#a80000";
  events_icon.style.color = "#a80000";
  channels.style.color = "#121212";
  channels_icon.style.color = "#121212";
  window.location.href = "events.html";
});
