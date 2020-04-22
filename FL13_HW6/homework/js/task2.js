let user_word = prompt('Enter the word:');
let half = 2;

if( user_word && /\S/.test(user_word) ) {

	let word_arr = user_word.split('');

	if(word_arr.length % half === 0) {
		alert(word_arr[word_arr.length / half - 1] + word_arr[word_arr.length / half])
	}else{
		alert(word_arr[Math.floor(word_arr.length / half)]);
	}

}else{
	alert('Invalid value');
}