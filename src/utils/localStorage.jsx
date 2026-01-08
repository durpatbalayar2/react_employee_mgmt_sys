const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare report",
        taskDescription: "Complete the sales report for Q1",
        taskDate: "2026-01-10",
        category: "Work",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team meeting",
        taskDescription: "Attend the weekly team meeting",
        taskDate: "2026-01-07",
        category: "Meeting",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review pull requests from team members",
        taskDate: "2026-01-08",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update client database",
        taskDescription: "Add new client details to the CRM",
        taskDate: "2026-01-09",
        category: "Work",
      },
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Submit invoice",
        taskDescription: "Send invoice to client",
        taskDate: "2026-01-06",
        category: "Finance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Create slides for product demo",
        taskDate: "2026-01-11",
        category: "Marketing",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test new feature",
        taskDescription: "Perform QA testing on the latest feature",
        taskDate: "2026-01-12",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix bugs",
        taskDescription: "Resolve open bugs in the system",
        taskDate: "2026-01-05",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update documentation",
        taskDescription: "Write documentation for API endpoints",
        taskDate: "2026-01-08",
        category: "Documentation",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client call",
        taskDescription: "Discuss project requirements with client",
        taskDate: "2026-01-09",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy update",
        taskDescription: "Push latest code changes to production",
        taskDate: "2026-01-07",
        category: "Deployment",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design mockups",
        taskDescription: "Create UI mockups for new app feature",
        taskDate: "2026-01-11",
        category: "Design",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct survey",
        taskDescription: "Collect customer feedback for new product",
        taskDate: "2026-01-10",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write blog post",
        taskDescription: "Publish blog post about product update",
        taskDate: "2026-01-06",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize code",
        taskDescription: "Improve performance of existing code",
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
