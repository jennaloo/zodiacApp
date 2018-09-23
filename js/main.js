//Array of Objects. Objects are Zodiac Signs with property of name, photo, and traits.
var zodiacArray = [
    {
        name: 'aquarius',
        photo: '<img src="img/aquarius.png" class="animated fadeIn">',
        trait: 'Friendly, humanitarian, intelligent, creative, independent and loyal.'
    },
    {
        name: 'pisces',
        photo: '<img src="img/pisces.png" class="animated fadeIn">',
        trait: 'Imaginative, kind, compassionate, intuitive, sensitive, and selfless.'
    },
    {
        name: 'aries',
        photo: '<img src="img/aries.png" class="animated fadeIn">',
        trait: 'Adventurous, courageous, versatile, lively, positive, and passionate.'
    },
    {
        name: 'taurus',
        photo: '<img src="img/taurus.png" class="animated fadeIn">',
        trait: 'Generous, dependable, down to earth, patient, independent and persistant.'
    },
    {
        name: 'gemini',
        photo: '<img src="img/gemini.png" class="animated fadeIn">',
        trait: 'Flexible, versatile, enthusiastic, soft-spoken, witty and humorous, and intelligent.'
    },
    {
        name: 'cancer',
        photo: '<img src="img/cancer.png" class="animated fadeIn">',
        trait: 'Creative, spontaneous, faithful, loving and protective.'
    },
    {
        name: 'leo',
        photo: '<img src="img/leo.png" class="animated fadeIn">',
        trait: 'Kind, helpful, optimistic, straightforward, and loyal.'
    },
    {
        name: 'virgo',
        photo: '<img src="img/virgo.png" class="animated fadeIn">',
        trait: 'Watchful, intelligent, practical, analytical, reliable, and perfectionist.'
    },
    {
        name: 'libra',
        photo: '<img src="img/libra.png" class="animated fadeIn">',
        trait: 'Tactful, romantic, charming, just, and diplomatic.'
    },
    {
        name: 'scorpio',
        photo: '<img src="img/scorpio.png" class="animated fadeIn">',
        trait: 'Focused, brave, balanced, faithful, ambitious and intuitive.'
    },
    {
        name: 'sagittarius',
        photo: '<img src="img/sagittarius.png" class="animated fadeIn">',
        trait: 'Straightforward, intelligent, philosophical and large-hearted.'
    },
    {
        name: 'capricorn',
        photo: '<img src="img/capricorn.png" class="animated fadeIn">',
        trait: 'Practical, ambitious, wise, disciplined, patient and cautious.'
    }
]


function searchZodiac() {
    var userInput = document.getElementById('input');

    for (i = 0; i <= zodiacArray.length; i++) {
        if (userInput.value.toUpperCase() == zodiacArray[i].name.toUpperCase()) {
            document.getElementById('signName').innerText = zodiacArray[i].name;

            document.getElementById('photo').innerHTML = zodiacArray[i].photo;

            document.getElementById('traits').innerText = zodiacArray[i].trait;

        }
    }
}
