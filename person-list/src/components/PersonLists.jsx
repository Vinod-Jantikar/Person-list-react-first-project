import Person from "./Person"

export const PersonList = () => {

    const people = [
        {
            img : 22,
            name: "Vinod",
            job: "Full Stack Web Developer"
        },
        {
            img : 45,
            name: "Dinesh",
            job: "Designer"
        },
        {
            img: 65,
            name: "Amal Dravid",
            job: "Devops Engineer"
        }
    ]
    return (
        <div>
            {
                people.map((item) => (
                    <div>
                        <Person image={item.img} name={item.name} job={item.job}/>
                    </div>
                ))
            }
        </div>
    )
}