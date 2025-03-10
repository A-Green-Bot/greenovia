<!-- # a-green-bot
A Revamp of the GitHub pages of A Green Bot's website -->

---

# Greenovia (Zeebo 🤖)

**Greenovia** is an innovative, eco-conscious platform designed to revolutionize recycling. Leveraging AI and machine learning, Zeebo automatically classifies waste into organic and recyclable categories, helping reduce global pollution and making recycling smarter and more efficient.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

Greenovia is a web-based application that uses a machine learning model (from Teachable Machine) to classify waste items in real-time using a webcam. The platform is designed with a modern, responsive UI, incorporating dynamic user experiences through Flask templating and interactive JavaScript features.

---

## Features

- **AI-Powered Waste Sorting:**  
  Zeebo uses an image recognition model to identify and classify waste items into organic or recyclable categories.

- **Responsive Design:**  
  Fully responsive pages that adapt seamlessly across devices (desktop, tablet, and mobile).

- **Dynamic Dashboard:**  
  A personalized dashboard welcomes users and provides a call-to-action to try out Zeebo.

- **Clean & Modern UI:**  
  Consistent design language with an eco-friendly color scheme, intuitive navigation, and engaging animations.

- **User Authentication:**  
  Secure signup, login, and session management using Flask and SQLAlchemy.

- **Informative Sections:**  
  Detailed explanations about the AI model, machine learning basics, and instructions on how to use Zeebo.

---

## Tech Stack

- **Frontend:**  
  HTML5, CSS3, JavaScript, AOS for animations, and Lucide Icons

- **Backend:**  
  Python with Flask, Flask-Login for user session management, and SQLAlchemy for database interactions

- **Machine Learning:**  
  Teachable Machine image model integrated via TensorFlow.js

- **Database:**  
  MySQL or PostgreSQL (configured via SQLAlchemy)

---

## Installation & Setup

### Prerequisites
- Python 3.x installed
- A MySQL or PostgreSQL database set up (or any supported DB)
- Node.js (optional, if you plan to run any frontend build tools)

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/A-Breen-Bot/greenovia.git
   cd greenovia
   ```

2. **Create & Activate a Virtual Environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use venv\Scripts\activate
   ```

3. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
   *(Ensure `requirements.txt` includes Flask, Flask-Login, SQLAlchemy, python-dotenv, etc.)*

4. **Configure Environment Variables:**  
   Create a `.env` file with the following (update values as needed):
   ```
   SQLALCHEMY_DATABASE_URI=your_database_uri
   SECRET_KEY=your_secret_key
   ```

5. **Initialize the Database:**
   ```bash
   flask db upgrade
   ```
   *(If using Flask-Migrate, otherwise set up your database manually)*

6. **Run the Application:**
   ```bash
   flask run
   ```
   Navigate to [http://127.0.0.1:5000](http://127.0.0.1:5000) to see the application in action.

---

## Usage

- **Landing Page:**  
  Users can explore the website, learn about the recycling mission, and try out the AI-powered waste sorting tool (Zeebo).

- **User Authentication:**  
  Sign up and log in to access your personalized dashboard.  
  After logging in, the dashboard will welcome you with a dynamic greeting (e.g., "Welcome, Eco Warrior Daniel!").

- **Try Zeebo:**  
  Click on the "Try Zeebo" button from any page to activate the waste sorting tool using your webcam.

- **Machine Learning Explanation:**  
  The site includes sections explaining how machine learning works and how it is applied in waste classification.

---

## Project Structure

```
greenovia/
├── app.py                 # Main Flask application
├── models.py              # Database models (e.g., Users)
├── requirements.txt       # Python dependencies
├── .env                   # Environment configuration
├── templates/             # HTML templates (index.html, login.html, dashboard.html, etc.)
├── static/
│   ├── css/               # CSS files (index.css, login.css, dashboard.css, etc.)
│   ├── js/                # JavaScript files
│   ├── images/            # Images and logos
│   └── ...                
└── README.md              # Project documentation (this file)
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository.**
2. **Create a Feature Branch:**
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Commit Your Changes:**
   ```bash
   git commit -m "Add YourFeatureName"
   ```
4. **Push to the Branch:**
   ```bash
   git push origin feature/YourFeatureName
   ```
5. **Open a Pull Request.**

Ensure your code adheres to the project’s style guidelines.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or suggestions, please reach out via:
- **Email:** dohoudanielfavour@gmail.com
- **GitHub:** [dohoudaniel](https://github.com/dohoudaniel)

---

*Greenovia is dedicated to making our planet cleaner, one smart solution at a time. Join us in our mission to save Mother Earth!*  

---
