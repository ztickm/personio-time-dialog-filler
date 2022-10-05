function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}



startElements = document.querySelectorAll('[id^="start-input"]');
endElements = document.querySelectorAll('[id^="end-input"]');

startingHour = getRandomInt(8, 12)
endingHour = startingHour + 9;

startPause = startingHour + 4;
endPause = startPause + 1;

startElements[0].value = `${startingHour}:00`;

endElements[0].value = `${endingHour}:00`;

startElements[1].value = `${startPause}:00`;

endElements[1].value = `${endPause}:00`;