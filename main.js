const cardsEl = document.querySelector('.cards')
const pageTitleEl = document.querySelector('.page__title')

const cards = [
    {
        title: 'Startup Framework',
        description: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        styles: {
            // background: 'url(\'./assets/images/Image.svg\')',
            background: '#EBEAED',
            title: {
                color: '#1E0E62'
            },
            description: {
                color: '#1E0E62'
            },
            button: {
                color: '#1E0E62',
                background: 'white'
            }
        }
    },
    {
        title: 'Web Generator',
        description: 'Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.',
        styles: {
            background: 'white',
            border: '2px solid #EBEAED',
            title: {
                color: '#1E0E62'
            },
            description: {
                color: '#15143966'
            },
            button: {
                color: 'white',
                background: '#25DAC5'
            }
        }
    },
    {
        title: 'Slides 4',
        description: 'All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.',
        styles: {
            background: '#482BE7',
            title: {
                color: 'white'
            },
            description: {
                color: 'white'
            },
            button: {
                color: '#1E0E62',
                background: 'white'
            }
        }
    },
    {
        title: 'Postcards',
        description: 'All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.',
        styles: {
            background: 'url(\'./assets/images/Image.svg\')',
            title: {
                color: 'white'
            },
            description: {
                color: 'white'
            },
            button: {
                color: '#1E0E62',
                background: 'white'
            }
        }
    }

]

function makeStyles(htmlEl, styles) {
    for (const key in styles) {
        if (Object.prototype.hasOwnProperty.call(styles, key)) {
            const style = styles[key];
            htmlEl.style[key] = style
        }
    }
}


function Button(text, styles) {
    const button = document.createElement('button')

    button.innerText = text
    button.classList.add('button')

    makeStyles(button, styles)

    return button
}

function Card(title, description, styles) {
    const card = document.createElement('div')
    card.classList.add('card')
    makeStyles(card, styles)
    console.log(card);

    const titleEl = document.createElement('div')
    titleEl.innerText = title
    titleEl.classList.add('card__title')
    makeStyles(titleEl, styles.title)

    const descriptionEl = document.createElement('div')
    descriptionEl.innerText = description
    descriptionEl.classList.add('card__desc')
    makeStyles(descriptionEl, styles.description)


    card.append(titleEl)
    card.append(descriptionEl)

    const button = Button("Explore", styles.button)
    card.append(button)

    return card
}

const headerButton = Button('Explore Showcase', { width: "214px", border: '2px solid #EBEAED', background: 'white', color: '#1E0E62' })

pageTitleEl.append(headerButton)

cards.forEach(el => {
    const card = Card(el.title, el.description, el.styles)
    cardsEl.append(card)
})

