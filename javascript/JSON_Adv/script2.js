const Employee =[
    {
        name:"Rahul",
        age:29,
        gender:"male",
        salary:"3000",
        projects:[{projectName:"abcd",timeline:2, role:"xyz"}]
    },
    {
        name:"Manisha",
        age:28,
        gender:"female",
        salary:"3000",
        projects:[{projectName:"abcd",timeline:2, role:"xyz"},
                  {projectName:"abcd",timeline:2, role:"pqr"}
        ],
    },

    {
        name:"Rahul",
        age:29,
        gender:"male",
        salary:"3000",
        projects:[{projectName:"abcd",timeline:2, role:"xyz"}],
        personalDetails:
    {
        name:"shdjfh",
        address:"minal2"
    }
    },
]

console.log(Employee);

Employee[0].age=45;

console.log(Employee[0]);

Employee[1].name="Pushkar"

console.log(Employee[1]);

delete Employee[0].age;




