var prompt = require("prompt");
var fs = require("fs");

prompt.start();

console.log("Welcome to the Todo CLI!");
console.log("0. Read all tasks");
console.log("1. Add a task");
console.log("2. Edit a task");
console.log("3. Delete a task");
console.log("4. Mark a task as done");
console.log("5. Mark a task as undone");
console.log("10. Exit");

// Function to get command from the user
const getCommand = () => {
  return new Promise((resolve, reject) => {
    prompt.get(["command"], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(parseInt(result.command));
      }
    });
  });
};

// Main function
const main = async () => {
  let working = true;
  while (working) {
    try {
      const key = await getCommand(); // Wait for user input
      switch (key) {
        case 0:
          await readAllTasks();
          break;
        case 1:
          await writeTask();
          break;
        case 2:
          await editTask();
          break;
        case 3:
          await deleteTask();
          break;
        case 4:
          await markTaskAsDone();
          break;
        case 5:
          await markTaskAsUndone();
          break;
        case 10:
          working = false;
          console.log("Exiting Todo CLI. Goodbye!");
          break;
        default:
          console.log("Invalid command. Please try again.");
          break;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

// Other functions updated for proper async handling
const readAllTasks = () => {
  return new Promise((resolve) => {
    fs.readFile("data.txt", "utf8", (err, data) => {
      if (err) {
        console.log("Error reading tasks:", err);
      } else {
        console.log("Tasks:");
        console.log(data || "No tasks available.");
      }
      resolve();
    });
  });
};

const writeTask = () => {
  return new Promise((resolve) => {
    prompt.get(["task"], (err, result) => {
      if (err) {
        console.log("Error adding task:", err);
        resolve();
      } else {
        fs.appendFile("data.txt", result.task + "\n", (err) => {
          if (err) {
            console.log("Error writing task:", err);
          } else {
            console.log("Task added");
          }
          resolve();
        });
      }
    });
  });
};

const editTask = () => {
  return new Promise((resolve) => {
    prompt.get(["taskNumber", "newTask"], (err, result) => {
      if (err) {
        console.log("Error editing task:", err);
        resolve();
      } else {
        fs.readFile("data.txt", "utf8", (err, data) => {
          if (err) {
            console.log("Error reading tasks:", err);
            resolve();
          } else {
            let tasks = data.split("\n");
            tasks[result.taskNumber - 1] = result.newTask;
            fs.writeFile("data.txt", tasks.join("\n"), (err) => {
              if (err) {
                console.log("Error updating tasks:", err);
              } else {
                console.log("Task edited");
              }
              resolve();
            });
          }
        });
      }
    });
  });
};

const deleteTask = () => {
  return new Promise((resolve) => {
    prompt.get(["taskNumber"], (err, result) => {
      if (err) {
        console.log("Error deleting task:", err);
        resolve();
      } else {
        fs.readFile("data.txt", "utf8", (err, data) => {
          if (err) {
            console.log("Error reading tasks:", err);
            resolve();
          } else {
            let tasks = data.split("\n");
            tasks.splice(result.taskNumber - 1, 1);
            fs.writeFile("data.txt", tasks.join("\n"), (err) => {
              if (err) {
                console.log("Error writing tasks:", err);
              } else {
                console.log("Task deleted");
              }
              resolve();
            });
          }
        });
      }
    });
  });
};

const markTaskAsDone = () => {
  return new Promise((resolve) => {
    prompt.get(["taskNumber"], (err, result) => {
      if (err) {
        console.log("Error marking task as done:", err);
        resolve();
      } else {
        fs.readFile("data.txt", "utf8", (err, data) => {
          if (err) {
            console.log("Error reading tasks:", err);
            resolve();
          } else {
            let tasks = data.split("\n");
            tasks[result.taskNumber - 1] += " (done)";
            fs.writeFile("data.txt", tasks.join("\n"), (err) => {
              if (err) {
                console.log("Error writing tasks:", err);
              } else {
                console.log("Task marked as done");
              }
              resolve();
            });
          }
        });
      }
    });
  });
};

const markTaskAsUndone = () => {
  return new Promise((resolve) => {
    prompt.get(["taskNumber"], (err, result) => {
      if (err) {
        console.log("Error marking task as undone:", err);
        resolve();
      } else {
        fs.readFile("data.txt", "utf8", (err, data) => {
          if (err) {
            console.log("Error reading tasks:", err);
            resolve();
          } else {
            let tasks = data.split("\n");
            tasks[result.taskNumber - 1] = tasks[result.taskNumber - 1].replace(" (done)", "");
            fs.writeFile("data.txt", tasks.join("\n"), (err) => {
              if (err) {
                console.log("Error writing tasks:", err);
              } else {
                console.log("Task marked as undone");
              }
              resolve();
            });
          }
        });
      }
    });
  });
};

// Run the main function
main();
