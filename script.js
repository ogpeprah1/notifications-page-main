let myMessage1 = document.getElementById('message1')
let myMessage2 = document.getElementById('message2')
let myMessage3 = document.getElementById('message3')
let indicator1 = document.getElementById('indicator1')
let indicator2 = document.getElementById('indicator2')
let indicator3 = document.getElementById('indicator3')
let markAsRead = document.getElementById('markAsRead-el')
let notificationCount = document.getElementById('notification-count')



myMessage1.addEventListener('click', function(){
    myMessage1.style.backgroundColor = 'transparent';
    indicator1.style.opacity = 0;
    notificationCount.innerHTML -= 1;
})

myMessage2.addEventListener('click', function(){
    myMessage2.style.backgroundColor = 'transparent';
    indicator2.style.opacity = 0;
    notificationCount.innerHTML -= 1;
})

myMessage3.addEventListener('click', function(){
    myMessage3.style.backgroundColor = 'transparent';
    indicator3.style.opacity = 0;
    notificationCount.innerHTML -= 1;
})



markAsRead.addEventListener('click', function(){
    notificationCount.style.display = 'none'
    document.querySelector('body').innerHTML = ' '
    // myMessage1.style.backgroundColor = 'transparent';
    // indicator1.style.opacity = 0;
    // myMessage2.style.backgroundColor = 'transparent';
    // indicator2.style.opacity = 0;
    // myMessage3.style.backgroundColor = 'transparent';
    // indicator3.style.opacity = 0;
})
