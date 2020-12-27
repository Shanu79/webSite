 window.onload = () => {
     document.querySelector('#button').addEventListener('click', () => {
        document.querySelector('#theExcuse').innerHTML= excuseGenerator();
     })
    
 }
                
 let excuseGenerator = () => {

    let excuses = ['I can’t make it to work', 'I broke my arm reaching for a sandwich', 'My wife found out I was cheating and threw all my stuff out', 'My refrigerator fell on me', 'My convertible is full of flour', 'I just put my casserole in the oven', 'I poked myself in the eye with a hairbrush', 'I broke my foot after I got up from the toilet', 'I got my fingers stuck in a bowling ball.', 'My girlfriend threw a Wii remote at me and it’s chipped my tooth.', 'I slept funny on my arms and now they’re asleep.', 'My girlfriend bit me in a bad place.', 'I was in the loo and my legs fell asleep. When I stood up, I fell and broke my ankle.', 'I rolled out of bed and knocked myself out so I missed my alarm.'];
    
    let excusesIndex = Math.floor(Math.random() * excuses.length);
    return excuses[excusesIndex];
    
 }
