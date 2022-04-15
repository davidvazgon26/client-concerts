
//Componentes
import Hero from '../Hero/Hero';
// import EventDetail from '../EventDetail/EventDetail';

import EventsCards from '../EventsCards/EventsCards';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/footer'
import CreateEvents from '../CreateEvents/CreateEvents'

//CSS
import s from "./Home.module.css"

export default function Home(){
    return (
        <div>
            <Hero/>
            <NavBar/>
            <div name="UpcomingEvents" id="UpcomingEvents"/>
            <EventsCards />
            <CreateEvents/>
            <Footer/>
        </div>
    )
}



