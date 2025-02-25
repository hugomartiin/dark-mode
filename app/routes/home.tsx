import Header from "../components/Header";
import UserPersona from "../components/UserPersona";
import InfoCard from "../components/InfoCard";
function App() {
  return (
    <div className="container-md mx-auto">
      <div className="min-h-screen bg-body-bg-light dark:bg-body-bg-dark text-main-header-light dark:text-main-header-dark p-4">
        <Header />
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
          <UserPersona />
          <InfoCard title="Bio" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet mauris enim, vel condimentum risus eget rhoncus, vitae. Viverra pulvinar cras eu ac sed nunc dui." />
          <InfoCard title="Personality" content={["Hardworking", "Smart", "Expressive", "Thoughtful"]} />
          <InfoCard title="Pain points" content={["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."]} />
          <InfoCard title="Goals" content={["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."]} />
        </section>
      </div ></div>
  );
};
export default App;
