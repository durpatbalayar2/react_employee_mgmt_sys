<h1>🧑‍💼 Employee Management System</h1>

<p>
An <strong>Employee Management System</strong> built using <strong>React</strong> that allows an
<strong>Admin</strong> to assign tasks and <strong>Employees</strong> to manage their assigned tasks efficiently.
The application uses <strong>Context API</strong> for global state management and
<strong>localStorage</strong> for persistent data storage.
</p>

<hr />

<h2>📌 Project Overview</h2>
<p>
This project simulates a real-world employee task management workflow where admins manage tasks
and employees update their task status.
</p>

<ul>
  <li>Admin can create and assign tasks</li>
  <li>Employees can accept, complete, or fail tasks</li>
  <li>Task status updates reflect instantly in the UI</li>
  <li>Data persists even after page refresh</li>
</ul>

<hr />

<h2>✨ Features</h2>

<h3>👨‍💻 Admin Panel</h3>
<ul>
  <li>Add new tasks</li>
  <li>Assign tasks to employees</li>
  <li>View all employees with task statistics</li>
  <li>Track new, completed, and failed tasks</li>
</ul>

<h3>👷 Employee Dashboard</h3>
<ul>
  <li>View assigned tasks</li>
  <li>Accept new tasks</li>
  <li>Mark tasks as completed</li>
  <li>Mark tasks as failed</li>
  <li>Remove completed or failed tasks</li>
  <li>Instant UI updates</li>
</ul>

<hr />

<h2>🛠️ Technologies & Tools Used</h2>

<h3>⚛️ Frontend</h3>
<ul>
  <li>React</li>
  <li>useState – component state management</li>
  <li>useEffect – syncing data with localStorage</li>
  <li>useContext – accessing global state</li>
</ul>

<h3>🌐 State Management</h3>
<ul>
  <li>Context API</li>
  <li>Centralized data handling</li>
  <li>Prevents prop drilling</li>
</ul>

<h3>🧭 Routing</h3>
<ul>
  <li>React Router DOM</li>
  <li>Admin dashboard routing</li>
  <li>Employee dashboard routing</li>
</ul>

<h3>💾 Data Management</h3>
<ul>
  <li>localStorage</li>
  <li>Persistent data storage</li>
  <li>Auto-sync on task updates</li>
</ul>

<h3>🎨 Styling</h3>
<ul>
  <li>Tailwind CSS</li>
  <li>Responsive UI</li>
  <li>Utility-first styling</li>
</ul>

<h3>🧑‍💻 Version Control</h3>
<ul>
  <li>Git</li>
  <li>GitHub</li>
</ul>

<hr />

<h2>🧠 Application Workflow</h2>

<ol>
  <li>Admin logs into the system</li>
  <li>Admin creates and assigns tasks</li>
  <li>Task data is saved in localStorage</li>
  <li>Employee logs in and accepts tasks</li>
  <li>Employee marks task as completed or failed</li>
  <li>Admin dashboard updates automatically</li>
</ol>

<hr />

<h2>📁 Project Structure</h2>

<pre>
src/
│
├── context/
│   └── AuthProvider.jsx
│
├── components/
│   ├── Admin/
│   │   └── AdminDashboard.jsx
│   │
│   ├── Employee/
│   │   ├── EmployeeDashboard.jsx
│   │   ├── EmpMiddle.jsx
│   │   ├── EmpTaskCard.jsx
│   │   
│   ├── TaskList/ 
|	        ├── AcceptTask.jsx
|         ├── NewTask.jsx
|         ├── CompleteTask.jsx
|         ├── FailedTask.jsx
│
├── App.jsx
└── main.jsx
</pre>

<hr />

<h2>⚙️ Installation & Setup</h2>

<h4>1️⃣ Clone the Repository</h4>
<pre>
git clone https://github.com/durpatbalayar2/react_employee_mgmt_system
</pre>

<h4>2️⃣ Navigate to Project Folder</h4>
<pre>
cd react_employee_mgmt_system
</pre>

<h4>3️⃣ Install Dependencies</h4>
<pre>
npm install
</pre>

<h4>4️⃣ Start Development Server</h4>
<pre>
npm run dev
</pre>

<hr />

<h2>📚 Key Learnings</h2>
<ul>
  <li>Context API for global state management</li>
  <li>localStorage integration with React</li>
  <li>Dynamic UI updates</li>
  <li>Task lifecycle handling</li>
</ul>

<hr />



<h2>🤝 Contribution</h2>
<p>
Contributions are welcome. Feel free to fork the repository and submit a pull request.
</p>

<hr />

<h2>📬 Contact</h2>
<p>
If you have suggestions or feedback, feel free to connect.
</p>

<p><strong>Happy Coding 🚀</strong></p>
