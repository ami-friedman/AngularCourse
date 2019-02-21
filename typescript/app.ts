import { Like } from './like';

const like = new Like(3);
console.log('likes:', like.likesCount, ' selected: ', like.isSelected);
like.click(2);
console.log('likes:', like.likesCount, ' selected: ', like.isSelected);
like.click(1);
console.log('likes:', like.likesCount, ' selected: ', like.isSelected);
