import Footer from "../components/Footer";
import Header from "../components/Header";
import Discovery from "../components/discover";
import styles from "../styles/events.module.css";
import { events } from "../data";

function TableRow({event}){
    return (
        <>
            <tr className={`${styles.table_element} ${styles.table_row}`}>
                <td className={styles.table_element_img}><img src={event.logo} alt={event.organization} /></td>
                <h3>{event.name}</h3>
                <p>{event.organization}</p>
                <p>{event.date}</p>
            </tr>
        </>
    )
}

export default function Events() {

    return (
        <>
            <Header />
            <section className={`centered ${styles.section}`}>
                <h1>Upcoming Events</h1>
                <h3>#UGDCS</h3>
                <table className={styles.upcomingTable}>
                    <thead className={`${styles.table_element} ${styles.table_head}`}>
                        <td>Logo</td>
                        <td>Event Name</td>
                        <td>Organisation</td>
                        <td>Date</td>
                    </thead>
                    <tbody>
                        {
                            events.map((event) => {
                                if(event.status === "upcoming"){
                                return(
                                    <TableRow event={event} />
                                )
                                } else{
                                    return <></>
                                }
                            })
                        }
                    </tbody>
                </table>
                <h2>Past Events</h2>
                <table>
                    {
                        events.map((event) => {
                            if(event.status === "past"){
                            return(
                                <TableRow event={event} />
                            )
                            } else{
                                return <></>
                            }
                        })
                    }
                </table>
            </section>
            <Discovery />
            <Footer />
        </>
    )
}