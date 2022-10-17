module.exports = ({ hepsiburadaComments, trendyolComments }) => {
  const hepsiburada = hepsiburadaComments.data.approvedUserContent.approvedUserContentList;
  const trendyol = trendyolComments.ratingAndReviewResponse.ratingAndReview.productReviews.content;

  return {
    hepsiburada,
    trendyol,
  };
};
