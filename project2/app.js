let data = [
    {
        name:'bonosree',
        age:'26',
        occupation:'software developer'

    },
    {
        name:'tonusree',
        age:'36',
        occupation:'App developer'

    },
    {
        name:'poddosree',
        age:'16',
        occupation:'blockchain developer'

    },
    {
        name:'joyosree',
        age:'46',
        occupation:'web developer'

    },
    {
        name:'lokkhisree',
        age:'36',
        occupation:'home developer'

    },
    {
        name:'kobitasree',
        age:'66',
        occupation:'Income Tax developer'

    },
    {
        name:'bonosree',
        age:'26',
        occupation:'software developer'

    },
    {
        name:'tonusree',
        age:'36',
        occupation:'App developer'

    },
    {
        name:'poddosree',
        age:'16',
        occupation:'blockchain developer'

    },
    {
        name:'joyosree',
        age:'46',
        occupation:'web developer'

    },
    {
        name:'lokkhisree',
        age:'36',
        occupation:'home developer'

    },
    {
        name:'kobitasree',
        age:'66',
        occupation:'Income Tax developer'

    }
]
const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>'+ item.name + ' '+ item.age + 'years old '+'</div>';
})
info.innerHTML = details.join('\n');
