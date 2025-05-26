import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from '../body/body.jsx'
import '../main.css'
import './contacts.css'

function Contacts() {
    return (
        <div className='contacts-container'>
            <div>
                <div className="message-container bg-tria">
                    <h2 className="text-white bg-unua">Наші контакти</h2> 
                    <p>Адреса: 124816, м. Полтава, вул. Шевченка, 32.</p>
                    <p>Номер телефона: <a href='tel:+380665551234'>+380 66 555 12 34</a></p>
                    <p>E-mail: <a href='mailto:kafedra_socsci@oprost.edu.ua'>kafedra_socsci@oprost.edu.ua</a></p>
                </div>
                <div className="message-container bg-tria">
                    <h2 className="text-white bg-unua">Наші партнери</h2> 
                    <p><a href='https://nupp.edu.ua'>Національний університет "Полтавська політехніка імені Юрія Кондратюка"</a></p>
                </div>
            </div>
            <div className="message-container map-container bg-tria">
                <h2 className="text-white bg-unua">Місцезнаходження партнера НУ "Полтавська політехніка ім. Юрія Кондратюка"</h2> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5045.163644822134!2d34.56782828637692!3d49.578610022437154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f64cd0cbd85%3A0x528a08266c1d4938!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIgwqvQn9C-0LvRgtCw0LLRgdGM0LrQsCDQv9C-0LvRltGC0LXRhdC90ZbQutCwINGW0LzQtdC90ZYg0K7RgNGW0Y8g0JrQvtC90LTRgNCw0YLRjtC60LDCuw!5e0!3m2!1suk!2sua!4v1747990703573!5m2!1suk!2sua" width="600" height="450" className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Body>
            <Contacts/>
        </Body>
    </StrictMode>,
)