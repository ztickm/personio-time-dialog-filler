import config from "./config";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

startElements = document.querySelectorAll('[id^="start-input"]');
endElements = document.querySelectorAll('[id^="end-input"]');

startingHour = conig.FIXED_STARTING_TIME ?
    config.FIXED_STARTING_TIME 
    : getRandomInt(config.EARLIEST_RANDOM_STARTING_TIME, config.LATEST_STARTING_TIME)
endingHour = startingHour + config.START_TO_END_DURATION;

startBreak = startingHour + config.START_TO_BREAK_DETLA;
endBreak = startBreak + config.BREAK_DURATION;

startElements[0].value = `${startingHour}:00`;

endElements[0].value = `${endingHour}:00`;

startElements[1].value = `${startBreak}:00`;

endElements[1].value = `${endBreak}:00`;