import { Like } from './like';

const like = new Like(3);
console.log('likes:', like.likesCount, ' selected: ', like.isSelected);
like.click();
console.log('likes:', like.likesCount, ' selected: ', like.isSelected);
like.click();
console.log('likes:', like.likesCount, ' selected: ', like.isSelected);
