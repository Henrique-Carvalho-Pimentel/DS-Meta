import NotificationButton from "./componentes/notificationButton";
import Header from "./componentes/header";
import SalesCard from "./componentes/salesCard";


function App() {
  return (
    <>
    <Header/>
    <main>
            <section id="sales">
                <div className="dsmeta-container">
                    <SalesCard/>
                </div>
            </section>
        </main>
    </>
  )
}

export default App;
