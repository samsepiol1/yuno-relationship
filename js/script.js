/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
			<p><a>Info about the characters</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {


});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {


});


// Define the Characters
monogatari.characters ({
	'y': {
        name: 'Yuno',
        color: '#00bfff', 
        sprites: {
            normal: 'Yuno.png'
        }
    }
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		'show image ./Yuno.png center with fadeIn',
		{
			'Input': {
				'Text': 'Qual o seu nome?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'Você precisa Colocar um nome!'
			},

		},
		{'Input': {
			'Text': 'Gostaria de falar comigo, meu amor?',
			'Validation': (input) => {
				return input.trim ().length > 0;
			},
			'Save': (input) => {
				monogatari.storage ({ acao: { talk: input }});
			},
			'Revert': () => {
				monogatari.storage ({ acao: { talk: '' }});
			},
			'Warning': 'Digite algo para mim!'
		}},

		'y Oi {{player.name}} Meu amor! Dormiu bem ? Espero que sim! Seu dia vai ser bem divertido comigo ',
		{
			'Choice': {
				'Dialog': 'y Você já escovou seus dentes querido?',
				'Yes': {
					'Text': 'Sim',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'Não',
					'Do': 'jump No'
				}
				
			}
		}
	],

	'Yes': [
		'y Que legal meu amor!',
		'y Eu gosto muito de falar com você todos os dias!',
		'y Tenho que ir agora, meus amigos estão esperando!',
		'end'
	],

	'No': [

		'y Você pode fazer agora.',

		'show message Help',

		'y Te amo tá ?!',
		'y Se cuida quando for para o trabalho!',
		'end'
	]
});