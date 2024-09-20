type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const orderQueue: Order[] = [];

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj,
  };
  menu.push(newPizza);
  return newPizza;
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function addToArray<T>(array: T[], item: T): T[] {
  array.push(item);
  return array;
}

// example usage:
addToArray(menu, { id: nextPizzaId++, name: "Chicken Bacon ranch", price: 12 });
// example usage:
addToArray<Order>(orderQueue, {
  id: nextOrderId++,
  pizza: menu[2],
  status: "completed",
});

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    return;
  }
  order.status = "completed";
  return order;
}

// export function getPizzaDetail(identifier: string | number): Pizza | undefined {
//   if (typeof identifier === "string") {
//     return menu.find(
//       (pizza) => getPizzaDetail.name.toLowerCase() === identifier.toLowerCase()
//     );
//   } else if (typeof identifier === "number") {
//     return menu.find((pizza) => pizza.id === identifier);
//   } else {
//     throw new TypeError(
//       "Parameter `identifier` must be either a string or a number!"
//     );
//   }
// }

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

// placeOrder("Chicken Bacon Ranch");
// placeOrder("Pepperoni");
// completeOrder(1);
// placeOrder("Anchovy");
// placeOrder("Veggie");
// completeOrder(2)

// console.log("Menu:", menu);
// console.log("Cash in register", cashInRegister);
// console.log("Order queue:", orderQueue);

// type UserRole = "guest" | "member" | "admin"

// type User = {
//   username: string
//   role: UserRole
// }

// const users: User[] = [
//   {username: "john_doe", role:"member"},
//   {username: "jane_doe", role:"admin"},
//   {username: "guest_user", role:"guest"}
// ];

// function fetchUserDetails(username: string): User {
//   const user = users.find(user => user.username === username)
//   if (!user) {
//     throw new Error(`User with username ${username} not found`)
//   }
//   return user
// }

// type UpdatedUser = {
//   id?: number
//   username?: string
//   role?: "member" | "contributor" | "admin"
// }

// type UpdatedUser = Partial<User>

// function updateUser(id: number, updates: User) {
//   // Find the user in the array by the id
//   const foundUser = users.find(user => user.id === id)
//   if (!foundUser) {
//     console.error("User not found!")
//     return
//   }
//   // Use Object.assign to update the found user in place.
//   Object.assign(foundUser, updates)
// }

// function addNewUser(newUser:  Omit<User, "id" | "user">): User {
//   const user: User = {
//     id: nextUserId++,
//     ...newUser
//   }
//   users.push(user)
//   return user
// }

// updateUser(1, { username: "new_john_doe"});
// updateUser(4, {role: "contributor"});
// addNewUser({username: "joe_schmoe", role: "member"})

// console.log(users)

// const gameScores = [14, 21, 33, 42, 59]
// const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warn woolen mittens"];
// const voters = [{name: "Alice", age: 42}, {name: "Bob", age: 77}]

// function getLastItem<PlaceholderType>(array: PlaceholderType[]) {
//   return array[array.length - 1]
// }

// console.log(getLastItem(gameScores))
// console.log(getLastItem(favoriteThings))
// console.log(getLastItem(voters))
