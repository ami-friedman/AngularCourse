var like_1 = require('./like');
var like = new like_1.Like(3);
console.log('likes:', like.numOfLike, ' selected: ', like.selected);
like.click();
console.log('likes:', like.numOfLike, ' selected: ', like.selected);
