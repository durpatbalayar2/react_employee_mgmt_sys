

const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2026-01-12",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team meeting",
        taskDescription: "Attend sprint planning",
        taskDate: "2026-01-07",
        category: "Meeting",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve UI bugs",
        taskDate: "2026-01-08",
        category: "Development",
      },
    ],
  },

  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Create client slides",
        taskDate: "2026-01-11",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit invoice",
        taskDescription: "Send invoice to client",
        taskDate: "2026-01-06",
        category: "Finance",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client follow-up",
        taskDescription: "Call client for feedback",
        taskDate: "2026-01-09",
        category: "Meeting",
      },
    ],
  },

  {
    id: 3,
    firstName: "Suresh",
    email: "employee3@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test new feature",
        taskDescription: "QA testing for new module",
        taskDate: "2026-01-13",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve backend issues",
        taskDate: "2026-01-05",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update docs",
        taskDescription: "API documentation update",
        taskDate: "2026-01-08",
        category: "Documentation",
      },
    ],
  },

  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design mockups",
        taskDescription: "Create UI mockups",
        taskDate: "2026-01-11",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy update",
        taskDescription: "Production deployment",
        taskDate: "2026-01-07",
        category: "Deployment",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client call",
        taskDescription: "Requirement discussion",
        taskDate: "2026-01-09",
        category: "Meeting",
      },
    ],
  },

  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct survey",
        taskDescription: "Customer feedback collection",
        taskDate: "2026-01-10",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write blog",
        taskDescription: "Product update blog post",
        taskDate: "2026-01-06",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize code",
        taskDescription: "Improve performance",
        taskDate: "2026-01-08",
        category: "Development",
      },
    ],
  },
];
 

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

export const setlocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getlocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
