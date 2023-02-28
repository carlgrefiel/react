const topCaptain = [
    {
        id: "1",
        title: "Luffy",
        description: "Captain",
        bounty: "3Billion",
    },
    {
        id: "2",
        title: "Zoro",
        description: "vice-Captain",
        bounty: "2Billion",
    },
    {
        id: "3",
        title: "Sanji",
        description: "Chef",
        bounty: "1Billion",
    },
];

function Mapping() {
    const listItems = topCaptain.map(captain => {
        const id= `ID - ${captain.id}`;
        const title= `Name - ${captain.title}`;
        const description= `Description - ${captain.description}`;
        const bounty= `Bounty - ${captain.bounty}`;
        return <div>
            <li>{id}</li>
            <li>{title}</li>
            <li>{description}</li>
            <li>{bounty}</li>
            <li> </li>
        </div>
            
    })
     return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
     );
} 
 export default Mapping;    