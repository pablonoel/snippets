/*
  Transform a MM-DD-YYY formated date on a "day Nº of month of year" string.
*/

var date = 12-06-2013
var options = {timezone:"UTC", weekday: "long", year: "numeric", month: "long", day: "numeric"}

date = date.replace(/-/g, ",")
date = date.split(",")
date = new Date(date[2], (date[1] - 1), date[0])

console.log(date.toLocaleDateString("es-CL",options))
