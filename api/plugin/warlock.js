const Warlock = require('node-redis-warlock');
const redis = require('redis');
const config = require('../../config');

const client = redis.createClient(config.redis || '');
const warlock = Warlock(client);

const {
  WarlockError,
} = require('../util/error');
const logger = require('./logger');

async function critical({
  key, promise, ttl = 60000, maxAttempts = 1, wait = 1000,
}) {
  logger.debug('[WarlockService] critical', {
    key,
    promise,
    ttl,
    maxAttempts,
    wait,
  });

  return new Promise((resolve, reject) => {
    logger.debug('[WarlockService] critical - try to lock', {
      key,
    });

    warlock.optimistic(key, ttl, maxAttempts, wait, async (warlockError, unlock) => {
      if (warlockError) {
        logger.warn('[WarlockService] critical - failed to take lock', {
          key,
          warlockError,
        });

        return reject(new WarlockError());
      }

      if (typeof unlock === 'function') {
        logger.debug('[WarlockService] critical - got lock', {
          key,
        });

        return resolve(
          promise()
            .then((result) => {
              unlock();

              logger.debug('[WarlockService] critical - unlock', {
                key,
              });

              return result;
            })
            .catch((error) => {
              unlock();

              logger.debug('[WarlockService] critical - unlock / error', {
                key,
              });

              throw error;
            }),
        );
      }

      return undefined;
    });
  });
}

module.exports = {
  critical,
};
