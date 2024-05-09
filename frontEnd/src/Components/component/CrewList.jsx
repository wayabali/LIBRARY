import  "./CrewList.css";
export default function ListCrew() {
    const items = [
      "Bellaha Manel Souad",
      "Boumaza Elfadl",
      "Youbi Aya Fatima",
      "Bali Mohammed Ryad",
      "Belkhodja Wissem Chiraz",
      "Bentifour Fares",
    ];
    return (
      <>
        <ul className="list-group">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
  
  
  