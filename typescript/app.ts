import { Like } from './like';

const like = new Like(3);
console.log('likes:', like.numOfLike, ' selected: ', like.selected);
like.click();
console.log('likes:', like.numOfLike, ' selected: ', like.selected);
like.click();
console.log('likes:', like.numOfLike, ' selected: ', like.selected);
