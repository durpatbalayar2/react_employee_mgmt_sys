const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e1@me.com",
    password: "123",
    taskCounts: {
      active: 1,
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
        taskTitle: "Create landing page",
        taskDescription: "Design and develop product landing page",
        taskDate: "2026-01-09",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix navbar issue",
        taskDescription: "Resolve mobile responsiveness issue",
        taskDate: "2026-01-09",
        category: "UI Bug",
      },
    ],
  },

  {
    id: 2,
    firstName: "Neha",
    email: "e2@me.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 0,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API integration",
        taskDescription: "Integrate payment gateway API",
        taskDate: "2026-01-09",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database backup",
        taskDescription: "Failed due to server timeout",
        taskDate: "2026-01-09",
        category: "Database",
      },
    ],
  },

  {
    id: 3,
    firstName: "Rahul",
    email: "e3@me.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare test cases",
        taskDescription: "Write test cases for login module",
        taskDate: "2026-01-09",
        category: "Testing",
      },
    ],
  },

  {
    id: 4,
    firstName: "Pooja",
    email: "e4@me.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Content writing",
        taskDescription: "Write blog for product launch",
        taskDate: "2026-01-09",
        category: "Content",
      },
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "SEO optimization",
        taskDescription: "Improve website SEO score",
        taskDate: "2026-01-09",
        category: "Marketing",
      },
    ],
  },

  {
    id: 5,
    firstName: "Vikas",
    email: "e5@me.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Server monitoring",
        taskDescription: "Monitor server logs and uptime",
        taskDate: "2026-01-09",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Deploy staging build",
        taskDescription: "Deploy latest build to staging",
        taskDate: "2026-01-09",
        category: "Deployment",
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
