  const loadUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };
  
  const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };
  
  export const login = (email, password) => {
    const users = loadUsers();
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      return { success: true, user };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };
  
 
  export const register = (name, email, password) => {
    const users = loadUsers();
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return { success: false, message: "Email already registered" };
    }
    const newUser = { name, email, password };
    users.push(newUser);
    saveUsers(users);
    return { success: true, user: newUser };
  };
  