# Advice Generator App

### Description
The Advice Generator App is a simple React-based application that fetches random advice from an API. Users can generate new advice by clicking a button, and the UI is styled with Tailwind CSS for a modern look.

### Features
- Fetches random advice from the **Advice Slip API**  
- Displays the advice along with a unique ID  
- Responsive design for desktop and mobile  
- Interactive button with hover effects to generate new advice  

### Technologies Used
- **React.js** for UI development  
- **Tailwind CSS** for styling  
- **PropTypes** for type checking  
- **Advice Slip API** for fetching random advice  

### Installation

#### Prerequisites
- Node.js and npm installed on your machine  

#### Steps to Run the App
1. Clone the repository:  
   ```sh
   git clone https://github.com/your-username/advice-generator-app.git
   ```  
2. Navigate to the project directory:  
   ```sh
   cd advice-generator-app
   ```  
3. Install dependencies:  
   ```sh
   npm install
   ```  
4. Start the development server:  
   ```sh
   npm start
   ```  
5. Open your browser and visit:  
   ```
   http://localhost:3000
   ```  

### Usage
- The app displays a piece of advice along with its unique ID.  
- Clicking the **dice button** fetches a new piece of advice.  

### API Used
The app fetches data from the **Advice Slip API**:  
```
https://api.adviceslip.com/advice
```

### Components

#### Card Component
This component displays the advice along with a button to fetch new advice.

**Props:**  
- `id` *(number)* – The ID of the advice.  
- `message` *(string)* – The advice text.  
- `onClick` *(function)* – Fetches new advice when clicked.  

**Example Usage:**  
```jsx
<Card id={123} message="Stay positive!" onClick={fetchAdvice} />
```

### Contributing
1. Fork the repository  
2. Create a new branch:  
   ```sh
   git checkout -b feature-branch
   ```  
3. Commit your changes:  
   ```sh
   git commit -m "Add new feature"
   ```  
4. Push to the branch:  
   ```sh
   git push origin feature-branch
   ```  
5. Open a Pull Request  

### Contact
For any issues or suggestions, contact:  
📧 **mujawarmsahil@gmail.com**  

---

