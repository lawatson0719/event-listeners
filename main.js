// GO!

// Exercise 1:

var navMenu = document.querySelector('.nav-menu');

var button = document.querySelector('button');

button.textContent = 'Hide nav';

button.addEventListener('click', function () {
	navMenu.classList.toggle('nav-menu-hidden');
	
	if(button.textContent === 'Hide nav') {
		
		button.textContent = 'Show nav';
		
	} else {
		button.textContent = 'Hide nav';
	}

});


// Exercise 2;

var text2 = document.querySelector('input');

var list = document.querySelector('.guest-list')

text2.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		var li = document.createElement('li');
		li.classList.add('guest');
		li.textContent = text2.value;
		text2.value = '';
		list.appendChild(li);

	}
});

// Exercise 3:

var text3 = document.querySelector('#work');

var list3 = document.querySelector('#box-list')

text3.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		var li2 = document.createElement('li');
		li2.classList.add('guest');
		li2.textContent = text3.value;
		text3.value = '';
		list3.appendChild(li2);
		var button = document.createElement('button');
		button.innerHTML = 'X';
		li2.appendChild(button);
	button.addEventListener('click', function () {
		li2.parentElement.removeChild(li2);
	})
	}
});

















