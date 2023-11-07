const foodOptions =[
	'Stir Fry',
	'Hotpot',
	'Sushi',
	'Fish Tacos',
	'Margherita Pizza',
	'Tom Yum Soup',
	'Mango Sticky Rice',
	'Caesar Salad',
];

function generate(name){
	if(!name.trim()){
		document.getElementById('output').innerText = 'Please enter your name for a personalized suggestion.';
		return;
	}
	const randomIndex = Math.floor(Math.random() *foodOptions.length);
	const meal = foodOptions[randomIndex];
	const outputElement = document.getElementById('food');
	outputElement.innerText = `${name}, why not try ${meal} today?`;
	restyle(outputElement);

}

function restyle(element) {
    const colors = ['#FF6347', '#4682B4', '#FFD700', '#32CD32', '#6A5ACD'];
    const fonts = ['"Lucida Sans Unicode"', '"Comic Sans MS"', '"Courier New"', 'Georgia', 'Palatino'];
    const textDecorations = ['underline', 'none', 'overline'];
    const textTransforms = ['uppercase', 'lowercase', 'capitalize'];
    const fontWeights = ['normal', 'bold', 'bolder'];

    const color = colors[Math.floor(Math.random() * colors.length)];
    const font = fonts[Math.floor(Math.random() * fonts.length)];
    const textDecoration = textDecorations[Math.floor(Math.random() * textDecorations.length)];
    const textTransform = textTransforms[Math.floor(Math.random() * textTransforms.length)];
    const fontWeight = fontWeights[Math.floor(Math.random() * fontWeights.length)];

    element.style.color = color;
    element.style.fontFamily = font;
    element.style.textDecoration = textDecoration;
    element.style.textTransform = textTransform;
    element.style.fontWeight = fontWeight;
}