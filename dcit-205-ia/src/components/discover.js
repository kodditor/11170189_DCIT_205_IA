import styles from '../App.module.css';

export default function Discovery(){
    return (
        <>
            <section className={styles.discovery}>
                <h2>DISCOVER YOUR FUTURE IN COMPUTER SCIENCE</h2>
                <p>Explore our cutting-edge programs and join Ghana's future tech force.</p>
                <button className="secondary-button" style={{fontSize: '1.3rem', margin:'auto'}}>Apply Now</button>
            </section>
        </>
    )
}