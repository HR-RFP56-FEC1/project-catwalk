

const sortAnswers = function(answersObj) {
  var sorted = [];

  var ids = Object.keys(answersObj);

  if (ids.length > 0) {
    sorted.push(answersObj[ids[0]]);
    for (var i = 1; i < ids.length; i++) {
      var inserted = false;
      for (var j = 0; j < sorted.length; j++) {
        if (answersObj[ids[i]].helpfulness > sorted[j].helpfulness || answersObj[ids[i]].answerer_name === "Seller") {
          sorted.splice(j, 0, answersObj[ids[i]]);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        sorted.push(answersObj[ids[i]]);
      }
    }
  }

  return sorted;
};

export default sortAnswers;