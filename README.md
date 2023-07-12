# OIBSIP_LEVEL2_TASK3
The HTML code defines the structure of the page. It creates the container element, which contains the other elements on the page. It also creates the input-container, task-container, and completed-container elements, which contain the input field, task list, and completed list, respectively.

The CSS code defines the style of the page. It sets the background color of the page, the font family, and the margins. It also sets the styles for the container, input-container, task-container, completed-container, task-list, completed-list, li, and button elements.

JAVASCRIPT

The addTask() function is called when the user clicks the "Add Task" button. It takes a task text as input and creates a new task item. The task item is then added to the task-list ul element.

The createTaskItem() function creates a new task item. It takes a task id and task text as input. The task id is used to uniquely identify the task item. The task text is displayed in the task item. The task item also has a checkbox and a delete button.

The handleTaskCompletion() function is called when the user checks or unchecks the checkbox in a task item. It moves the task item to the completed-list ul element if the checkbox is checked, or back to the task-list ul element if the checkbox is unchecked.

The deleteTask() function is called when the user clicks the "Delete" button in a task item. It removes the task item from the DOM.
