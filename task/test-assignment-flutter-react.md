# Test Assignment

## Description

We are seeking skilled developers to implement a timer application with specific UI requirements. The candidate should demonstrate skills in building components/widgets, applying theme styles, and implementing proper state management patterns. The task involves creating three main layouts based on provided Figma designs.

**Choose your framework:** Flutter or ReactJS

---

## Task Requirements

### 1. **List of Timers Screen:**

- Display a list of timers
- Each list item should show relevant details provided in the design
- Pressing the play/pause button should run or pause the timer
- **Skip** implementing different tabs (favorite, odoo etc)
- **Skip** implementing the bottom navigation bar (recents, projects etc)
- Plus button in the AppBar should take user to create timer screen

### 2. **Create Timer Screen:**

- Implement a form to create a new timer
- Include dropdowns for selecting projects and tasks
- Add a text input for the timer description
- Include a checkbox for marking the timer as a favorite
- Upon adding a timer user should return to the list of timers screen

### 3. **Task Details Screen:**

- Display details of a selected task in the details tab (you can use random or static deadline and assigned to values)
- Show the running timer-related details and description in the timesheets tab. Pressing play/pause should run or pause the timer. Pressing stop will mark it as completed
- Updating the timer state should reflect on the list of timer screen and vice-versa
- Show normal completed timers (Optional)
- Show expandable completed timers (Optional)

### 4. **In-Memory Data Management:**

- All data (timers, projects, tasks) should be managed in-memory. In-memory data management is perfectly fine for this assignment
- **Bonus:** You can implement data persistence if you want to showcase additional skills, but it's not required

### 5. **Theme and Styling:**

- Implement theme styles according to the provided design system in Figma
- Ensure the UI matches the Figma designs

### 6. **State Management:**

- Implement proper state management across the application following framework best practices
- **Deep linking:** Ensure all screens/pages are accessible via direct URLs and can be bookmarked

---

## Framework-Specific Requirements

### Flutter Implementation

**State Management:**

- BLoC pattern is our preferred state management solution for Flutter
- Alternative patterns (Provider, Riverpod, etc.) are acceptable if you can justify the choice
- Use hydrated_bloc package if you choose to implement persistence

**UI Implementation:**

- Build custom widgets following the design system
- Implement theme styles (TextStyle, Color, etc.) according to Figma specifications
- Use proper Flutter navigation patterns

### ReactJS Implementation

**State Management:**

- Separate business logic from UI components
- Use Context API, Redux, Zustand, or similar state management solutions
- Demonstrate clear separation of concerns

**UI Implementation:**

- Use CSS modules, styled-components, or similar styling solutions
- Implement responsive design following Figma specifications
- Use React Router or similar for navigation
- TypeScript usage is preferred but not required

---

## Figma Designs

- [Link to Figma design for List of Timers](https://www.figma.com/file/c49rQlERvtonmAm7Nbj7AT/odoo-apexive?type=design&node-id=1354-2220&mode=design&t=vqiyQPM4oQ9vQ1k3-0)
- [Link to Figma design for Create Timer](https://www.figma.com/file/c49rQlERvtonmAm7Nbj7AT/odoo-apexive?type=design&node-id=1377-1383&mode=design&t=VMZSCWx4NCHoTeoC-0)
- [Link to Figma design for Task Details timesheets tab](https://www.figma.com/file/c49rQlERvtonmAm7Nbj7AT/odoo-apexive?type=design&node-id=1442-2116&mode=design&t=RPYCVHYO3YVlHO9h-0)
- [Link to Figma design for Task Details details tab](https://www.figma.com/file/c49rQlERvtonmAm7Nbj7AT/odoo-apexive?type=design&node-id=1422-4770&mode=design&t=MHYnH6IMDX4Q1ZUw-0)
- [Link to design system](https://www.figma.com/file/c49rQlERvtonmAm7Nbj7AT/odoo-apexive?type=design&node-id=38-8702&mode=design&t=TiQze2xDDW1zjZ03-0)

---

## Submission Guidelines

### Repository Setup

- **Public repository:** Share the repository link with us
- **Private repository:** Invite `adar2378` as a collaborator

### Requirements

- Clean, well-organized code structure
- Comprehensive README with setup instructions
- **Atomic commits:** Meaningful, incremental commits showing development process
- AI usage documentation (see below)

---

## AI Tool Usage

### Documentation Required

Share your AI interactions in any convenient format:

- Chat logs, screenshots, or documented prompts
- Include: LLM models used, tools/integrations, key prompts, refinements made
- Filename: `AI_USAGE.md`, `ai-chat-log.txt`, or similar

### What We Evaluate

- Quality of prompts and critical thinking
- How you evaluate and modify AI suggestions
- Understanding of AI-generated code

---

## Evaluation Criteria

- **Design adherence** - Implementation matches Figma designs and functionality
- **Code quality** - Clean, maintainable, well-structured code
- **State management** - Effective use of framework patterns
- **Architecture** - Proper separation of concerns
