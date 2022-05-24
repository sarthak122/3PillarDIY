let personAccount = {
    firstName: "victor",
    lastName: "kenneth",
    income: {
        freelancing: 10000,
        menialLabour: 2000
    },
    expenses: {
        data: 500,
        food: 1000,
        transport: 500
    },

    totalIncome: function () {
        let tIncome = 0;
        let values = Object.values(this.income);
        for (let i = 0; i < values.length; i++) {
            tIncome += values[i]
        }
        return tIncome;
    },
    totalExpenses: function () {
        let tExpenses = 0;
        let values = Object.values(this.expenses);
        for (let i = 0; i < values.length; i++) {
            tExpenses += values[i]
        }
        return tExpenses
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpenses();
    },
    accountInfo: function () {
        return `name:${this.firstName} ${this.lastName}\n
                incomes:${Object.entries(this.income)}
                expenses: ${
                    Object.entries(this.expenses)
                }
                totalIncome: ${this.totalIncome()}
                totalExpenses: ${this.totalExpenses()}
                accountBalance: ${this.accountBalance()}
                `
    }
}


 const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];
  const signUp = (username,email,password) =>{
    for(let i=0;i<users.length;i++)
    {
      if(users[i].username.toLowerCase()===username.toLowerCase() && users[i].password===password)
      {
        return 'user already exist';
      }
    }
    let id="";
    let chars="123456789abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<6;i++)
    {
      id+=chars[Math.floor(Math.random()*chars.length)];
    }
    let date = new Date();
     var hours = date.getHours();
     var minutes = date.getMinutes();
  
     var ampm = hours >= 12 ? 'PM' : 'AM';
     minutes = minutes < 10 ? '0'+minutes : minutes;
     var strTime = hours + ':' + minutes + ' ' + ampm;
    users.push(
      {
        _id: id,
        username: username,
        email: email,
        password: password,
        createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${strTime}`,
        isLoggedIn: false
      });
      return users[users.length-1];
  }
const signIn = (username,password) =>{
  for(let i =0;i<users.length;i++)
  {
    if(users[i].username.toLowerCase()===username.toLowerCase() && users[i].password===password)
    {
      users[i].isLoggedIn = true;
      return users[i];
    }
    
  }

      return 'Invalid username and password';
}
console.log(signIn('Thomas','123333'));
console.log(signUp('sarthak','sarthak@sarthak.com','123456'));

const products = [{
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [{
                userId: 'fg12cy',
                rate: 5
            },
            {
                userId: 'zwf8md',
                rate: 4.5
            }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{
            userId: 'fg12cy',
            rate: 5
        }],
        likes: ['fg12cy']
    }
]

const rateProduct = (name, rate) => {
    for(var i=0;i<products.length;i++) {
        if (products[i].name.toLowerCase().includes(name)) {
            let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id = id.join("");
            products[i].ratings.push({
                userId: id,
                rate: rate
            });
            console.log("filter");
        } else {
            console.log("no product to rate")
        }
    }
};

const avgRating = (name) => {
    let avg = 0;
    let count = 0;
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {
            count = products[i].ratings.length
            for(var j=0;j<products[i].ratings.length;j++)
            {
              avg+=products[i].ratings[j].rate;
            }
        }
    }
    avg = avg / count
    console.log(avg);
}

const likeProduct = (name) => {
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {

            if (!products[i].likes) {
                console.log(like);
                let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
                let id = [];
                for (let i = 0; i < 6; i++) {
                    id.push(chars[Math.floor(Math.random() * chars.length)])
                }
                id = id.join("");
                products[i].likes.push(id)
            } else {
                console.log("product has been liked")
            }
        } else {
            console.log("no product available")
        }
    }
}

rateProduct("tv", "4.5");
avgRating("mobile phone");
likeProduct("mobile phone");