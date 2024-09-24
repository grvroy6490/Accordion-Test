
// VANILLA JAVASCRIPT

// const accordion = document.querySelector('#accordion')
// const accordionItems = accordion.querySelectorAll('.accordion-item')

// accordionItems.forEach(item => {
//     item.querySelector('.accordion-header').addEventListener('click', () => {
//         accordionItems.forEach(itm => itm.classList.remove('active'))

//         item.classList.add('active')
//     })
// })


// JQUERY

const accordionHeader = $('.accordion-header')
const accordionItems = $('.accordion-item')

accordionHeader.on('click', (e) => {
    const currentHeader = e.currentTarget
    const accordionId = $(currentHeader).children('.accordion-button').data('target')

    // TOGGLE HEADER ACTIVENESS
    accordionItems.each((index, item) => $(item).removeClass('active'))
    $(`${accordionId}`).addClass('active')
    
    // TOGGLE ACCORDION BODY
    accordionItems.each((index, item) => $(item).children('.accordion-body').slideUp())
    $(`${accordionId}`).children('.accordion-body').slideToggle()
})



// HANDLE CLICK ON DYNAMIC APPENDED ELEMENT

$('#showElement').on('click', () => {
    var txt2 = $("<p class='click-text'>Hello World</p>")
    $('body').append(txt2)
})

$('body').on('click', '.click-text', function () {
    alert('working')
})
