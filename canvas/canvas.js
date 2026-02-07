function generateText()
{
	let canvas = document.getElementById('canvas');
	let context = canvas.getContext('2d');
	let lines = document.getElementById('text').value.split('\n');
	let hpos = 0;
	let vpos = 0;
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	for(let line of lines)
	{
		for(let c of line)
		{
			let info = LETTERS[c] || [1,194,4];
			context.drawImage(FONT, info[1], info[0] * 12, info[2], 12, hpos, vpos, info[2], 12);
			hpos += info[2];
		}
		
		hpos = 0;
		vpos += 12;
	}
}

const FONT = new Image();
FONT.src = 'font.png';

// [row, x-offset, width, height (12)]
const LETTERS = {};

// For each row, the letter is x width.
const SPLIT = [
	{
		A: 8,
		B: 8,
		C: 9,
		D: 9,
		E: 7,
		F: 7,
		G: 9,
		H: 8,
		I: 7,
		J: 6,
		K: 8,
		L: 7,
		M: 9,
		N: 8,
		O: 9,
		P: 7,
		Q: 9,
		R: 8,
		S: 8,
		T: 9,
		U: 7,
		V: 8,
		W: 11,
		X: 8,
		Y: 9,
		Z: 8
	},
	{
		a: 7,
		b: 7,
		c: 7,
		d: 7,
		e: 7,
		f: 6,
		g: 7,
		h: 7,
		i: 3,
		j: 5,
		k: 7,
		l: 3,
		m: 11,
		n: 7,
		o: 7,
		p: 7,
		q: 7,
		r: 6,
		s: 6,
		t: 6,
		u: 7,
		v: 7,
		w: 9,
		x: 7,
		y: 7,
		z: 6,
		'-': 7,
		'.': 5,
		'?': 9
	}
];

(() => {
	for(let row = 0; row < SPLIT.length; row++)
	{
		let offset = 0;
		
		for(let letter in SPLIT[row])
		{
			let width = SPLIT[row][letter];
			LETTERS[letter] = [row, offset, width];
			offset += width;
		}
	}
})()
