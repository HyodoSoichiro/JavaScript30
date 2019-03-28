
    const dogs = [{ name: 'Snickers', age: 2, }, { name: 'hugo', age: 8, }, ];
    const p = document.querySelector('p');

    function makeGreen() {
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular

    // Interpolated
    
    // Styled

    // warning!
    console.warn('Oh Noo!!!');

    // Error :|
    console.error('Error!!!');

    // Info
    console.info('Information!');

    // Testing
    console.assert(3 === 2, 'This is wrong!!!');

    // clearing
    console.clear();

    // Viewing DOM Elements
    
    console.dir(p);

    // 
    // console.dir(p);


    console.clear();
    // Grouping together
    dogs.forEach((dog) => {
        console.groupCollapsed(`${dog.name}`);
        
        
        
        console.groupEnd(`${dog.name}`);
      });

    // counting


    // timing
    console.time('yjkljl');
    fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then((data) => {
        
        console.timeEnd('yjkljl');
    });

console.table(dogs);
