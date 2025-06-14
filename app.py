"""
Revamping A Green Bot
"""

from flask import Flask, render_template, request, flash, redirect, session, url_for
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from os import getenv, environ
from dotenv import load_dotenv
from datetime import timedelta, datetime

# Load environment variables
load_dotenv()
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = getenv('SQLALCHEMY_DATABASE_URI')
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=30)  # 30-minute session timeout
app.secret_key = getenv('SECRET_KEY')
db = SQLAlchemy(app)


# User model
class Users(db.Model):
    """"
    The database model for users
    """
    __tablename__ = 'users'
    userId = db.Column(db.Integer, primary_key=True, autoincrement=True)
    firstname = db.Column(db.String(50), nullable=False)
    lastname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)
    last_login = db.Column(db.DateTime, nullable=True)


@app.route('/')
def homePage():
    """
    Home page route
    """
    if 'userId' in session:
        user = Users.query.get(session['userId'])
        flash('Login successful! Welcome to your home!', 'success')
        return render_template('home.html', user=user)
    return render_template('index.html')


@app.before_request
def session_timeout_handler():
    """
    Handle session timeout
    """
    now = datetime.utcnow()  # Naive datetime (UTC)
    last_activity = session.get('last_activity')

    if last_activity:
        if isinstance(last_activity, str):
            # Parse last_activity if it's stored as a string
            last_activity = datetime.strptime(last_activity, "%Y-%m-%d %H:%M:%S.%f")
            # Ensure both datetime objects are naive
        last_activity = last_activity.replace(tzinfo=None)

        if (now - last_activity).total_seconds() > app.config['PERMANENT_SESSION_LIFETIME'].total_seconds():
            session.pop('userId', None)
            session.pop('last_activity', None)
            flash('Your session has expired. Please log in again.', 'error')
            return redirect(url_for('logInExistingUser'))
    # Update last_activity to the current time (store naive UTC datetime)
    session['last_activity'] = now


@app.route('/signup', methods=['GET', 'POST'])
def signUpNewUser():
    """Handle user registration"""
    if 'userId' in session:
        flash('You are already logged in.', 'info')
        return redirect(url_for('loggedInHomePage'))

    if request.method == 'POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        email = request.form['email']
        password = request.form['password']
        hashed_password = generate_password_hash(password)

        if Users.query.filter_by(email=email).first():
            flash('Email already registered. Please log in.', 'error')
            return redirect(url_for('signUpNewUser'))

        try:
            new_user = Users(
                firstname=firstname,
                lastname=lastname,
                email=email,
                password=hashed_password,
                created_at=datetime.utcnow(),
                updated_at=datetime.utcnow(),
                last_login=datetime.utcnow()
            )
            db.session.add(new_user)
            db.session.commit()
            flash('Registration successful! Please log in.', 'success')
            return redirect(url_for('logInExistingUser'))
        except Exception:
            db.session.rollback()
            flash('An error occurred during registration. Please try again.', 'error')
            return redirect(url_for('signUpNewUser'))

    return render_template('signup.html')


@app.route('/login', methods=['GET', 'POST'])
def logInExistingUser():
    """
    Handle user login
    """
    if 'userId' in session:
        flash('You are already logged in.', 'info')
        return redirect(url_for('loggedInHomePage'))

    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        user = Users.query.filter_by(email=email).first()

        if user and check_password_hash(user.password, password):
            session['userId'] = user.userId
            session['last_activity'] = datetime.utcnow()
            session.permanent = True

            # Update last_login timestamp
            user.last_login = datetime.utcnow()
            db.session.commit()

            flash('Logged in successfully!', 'success')
            return redirect(url_for('loggedInHomePage'))

        flash('Invalid email or password. Please try again.', 'error')
        return redirect(url_for('logInExistingUser'))

    return render_template('login.html')


@app.route('/home')
def loggedInHomePage():
    """
    Home page for logged-in users
    """
    if 'userId' in session:
        user = Users.query.get(session['userId'])
        return render_template('home.html', user=user)
    flash('You must be logged in to access the home page.', 'error')
    return redirect(url_for('logInExistingUser'))


@app.route('/logout')
def logout():
    """
    User logout
    """
    session.pop('userId', None)
    session.pop('last_activity', None)
    flash('You have been logged out.', 'info')
    return redirect(url_for('logInExistingUser'))


@app.route('/greenovia')
def zeebo():
    """
    Zeebo page route
    """
    if 'userId' in session:
        user = Users.query.get(session['userId'])
        flash('Login successful! Welcome to your home!', 'success')
        return render_template('zeebo.html', user=user)
    # return render_template('login.html')
    return redirect(url_for('logInExistingUser'))


@app.errorhandler(404)
def page_not_found(e):
    """Handle 404 errors"""
    # if 'userId' in session:
    #     user = Users.query.get(session['userId'])
    #     return render_template('404.html', user=user), 404
    # return redirect(url_for('logInExistingUser'))
    return render_template('404.html')


if __name__ == '__main__':
    port = int(environ.get("PORT", 5000))  # Default to 5000 if PORT is not set
    app.run(host="0.0.0.0", port=port, debug=False)
    # app.run(debug=True, port=5000)
