const activitiesService = require("../features");

let services = [
  { id: 1, service: activitiesService },
]

module.exports = function (app) {

  services.forEach((service) => {
    Object.keys(service.service).forEach(a => {
      app.configure(service.service[a])
    })
  })

};