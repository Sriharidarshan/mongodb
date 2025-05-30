db.employees.insertMany([
  {
    _id: 1,
    firstName: "Harshitha",
    lastName: "URS",
    email: "Harshitha@abc.com",
    salary: 5000,
    skills: ["Angular", "React", "MongoDB"]
  },
  {
    _id: 2,
    firstName: "Sachin",
    lastName: "T",
    email: "sachin.t@abc.com",
    salary: 8000,
    skills: ["Accounting", "Tax"]
  },
  {
    _id: 3,
    firstName: "Ajay",
    lastName: "kumar",
    email: "Ajay@abc.com",
    salary: 7500,
    skills: ["Sales", "Marketing"]
  },
  {
    _id: 4,
    firstName: "Hemanth",
    lastName: "Gowda",
    email: "steve.j@abc.com",
    salary: 7000,
    skills: ["Mac", "Marketing", "Product Design"]
  },
  {
    _id: 5,
    firstName: "Kapil",
    lastName: "Sharma",
    email: "kapil.d@abc.com",
    salary: 4500,
    skills: ["Accounting", "Tax", "Sales"]
  },
  {
    _id: 6,
    firstName: "Amitabh",
    lastName: "B",
    email: "amitabh.b@abc.com",
    salary: 7000,
    skills: ["Marketing", "Tax"]
  }
]);



// Update salary 7000 to 8500
db.employees.updateMany({ salary: 7000 }, { $set: { salary: 8500 } });

// Update location to Mumbai for Amitabh
db.employees.updateOne({ firstName: "Amitabh" }, { $set: { location: "Mumbai" } });

// Increment salary by 5000 if salary >= 4500
db.employees.updateMany({ salary: { $gte: 4500 } }, { $inc: { salary: 5000 } });

// Update multiple fields using updateMany
db.employees.updateMany({ skills: { $in: ["Sales"] } }, {
  $set: {
    bonusEligible: true,
    performanceRating: "A"
  }
});