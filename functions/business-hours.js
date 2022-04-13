const moment = require("moment-timezone");

exports.handler = function (context, event, callback) {
  try {
    const timezone = event.country && event.city
      ? `${event.country}/${event.city}`
      : `${context.DEFAULT_TIME_ZONE_COUNTRY}/${context.DEFAULT_TIME_ZONE_CITY}`;

    const numOpenHour = event.openHour 
    ? parseInt(event.openHour) 
    : (context.DEFAULT_OPEN_HOUR ? parseInt(context.DEFAULT_OPEN_HOUR) : 0);
    const numCloseHour = event.closeHour 
    ? parseInt(event.closeHour) 
    : (context.DEFAULT_CLOSE_HOUR ? parseInt(context.DEFAULT_CLOSE_HOUR) : 12);

    // Timezone function reference: https://momentjs.com/timezone/
    console.log("timezone: " + timezone);
    const currentHour = moment().tz(timezone).format('H');
    const currentDayOfWeek = moment().tz(timezone).format('d');

    let response = {
      currentHour: currentHour,
      currentDayOfWeek: currentDayOfWeek,
      timezone: timezone,
      openHour: numOpenHour,
      closeHour: numCloseHour,
      isOpen: currentHour >= numOpenHour && currentHour < numCloseHour && currentDayOfWeek != 0 && currentDayOfWeek != 6
    }

    callback(null, response);
  }
  catch (error) {
    callback(error, null);
  }
};
