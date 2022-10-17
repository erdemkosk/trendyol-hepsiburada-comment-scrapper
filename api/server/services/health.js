const dateFormat = require('dateformat');

let pidId;

module.exports = {
  async getHealthStatus() {
    return {
      results: {
        time: dateFormat(new Date(), 'dd-mm-yyyy h:MM:ss'),
        uptime: `${Math.floor(Math.floor(process.uptime() * 1000) / 60000)} min.`,
        pidId,
      },
    };
  },

  async setPid({ workerId }) {
    pidId = workerId;
  },
};
