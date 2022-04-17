
//Componentes
import Hero from '../Hero/Hero';
// import EventDetail from '../EventDetail/EventDetail';

import EventsCards from '../EventsCards/EventsCards';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/footer';
import CreateEvents from '../CreateEvents/CreateEvents';
import Filter from '../Filters/Filter'
import SearchBars from '../SearchBars/SearchBars';

//CSS
import s from "./Home.module.css"

export default function Home(){
    return (
        <div className={s.homeContainner}>
            <Hero/>
            <NavBar/>
            <SearchBars />
            <Filter />
            <EventsCards />
            <CreateEvents/>
            <Footer/>
        </div>
    )
}



