let typedKey = [];
const password = 'wesbos';

function checkPassWord(e) {
  typedKey.push(e.key);
  typedKey.splice(-password.length, typedKey.length - password.length);
  let result = typedKey.join('');
  if (result === password) console.log('Good!!!!!');
}

window.addEventListener('keyup', checkPassWord);
