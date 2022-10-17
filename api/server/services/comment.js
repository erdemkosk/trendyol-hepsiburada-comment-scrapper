/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  async getComments({ product }) {
    const hepsiburadaProductName = product.replace('%20', '+');
    const trendyolProductName = product.replace(' ', '%20');

    const [
      hepsiburadaValues,
      trendyolValues,
    ] = await Promise.all([
      this.retriveProductFromHepsiburada({ productName: hepsiburadaProductName }),
      this.retriveProductFromTrendyol({ productName: trendyolProductName }),
    ]);

    const [
      hepsiburadaComments,
      trendyolComments,
    ] = await Promise.all([
      this.retriveCommentsFromHepsiburada({ productId: hepsiburadaValues.productId }),
      this.retriveCommentsFromTrendyol({ url: trendyolValues.url, productId: trendyolValues.productId }),
    ]);

    return {
      hepsiburadaComments,
      trendyolComments,
    };
  },

  async retriveProductFromHepsiburada({ productName }) {
    return new Promise((resolve, reject) => {
      axios.get(`https://www.hepsiburada.com/ara?q=${productName}`)
        .then((res) => {
          const $ = cheerio.load(res.data);
          const url = $('#i0 > div > a').attr('href');
          const productId = url.split('-').pop();

          resolve({
            url,
            productId,
          });
        }).catch(err => reject(err));
    });
  },

  async retriveCommentsFromHepsiburada({ productId }) {
    return new Promise((resolve, reject) => {
      axios.get(`https://user-content-gw-hermes.hepsiburada.com/queryapi/v2/ApprovedUserContents?sku=${productId}&from=0&size=2`)
        .then((res) => {
          resolve(res.data);
        }).catch(err => reject(err));
    });
  },

  async retriveProductFromTrendyol({ productName }) {
    return new Promise((resolve, reject) => {
      axios.get(`https://www.trendyol.com/sr?q=${productName}&qt=${productName}&st=${productName}&os=1`)
        .then((res) => {
          const $ = cheerio.load(res.data);
          let url = $('#search-app > div > div.srch-rslt-cntnt > div.srch-prdcts-cntnr > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > div.p-card-chldrn-cntnr.card-border > a').attr('href');
          const productUrl = url.split('?');
          const productId = productUrl.pop();
          // eslint-disable-next-line prefer-destructuring
          url = productUrl[0];

          resolve({
            url,
            productId,
          });
        }).catch(err => reject(err));
    });
  },

  async retriveCommentsFromTrendyol({ url, productId }) {
    return new Promise((resolve, reject) => {
      axios.get(`https://public-mdc.trendyol.com/discovery-web-socialgw-service/reviews/${url}/yorumlar?${productId}&culture=tr-TR&storefrontId=1&logged-in=true&isBuyer=false`)
        .then((res) => {
          const comments = res.data.result.hydrateScript.replace('\n        <script type=\"application/javascript\">\n            window.__REVIEW_APP_INITIAL_STATE__ = ', '')
            .replace(';\n            window.TYPageName=\"product_reviews\";\n        </script>\n        <script type=\"application/javascript\" src=\"https://cdn.dsmcdn.com//web/master/reviews.v2.3000171f469df44c1aaa714b4f1f9696.js\" defer></script>\n      ', '')
            .replace(/\\/g, '');
          resolve(JSON.parse(comments));
        }).catch(err => reject(err));
    });
  },
};
