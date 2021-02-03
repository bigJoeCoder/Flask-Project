from flask import Flask, render_template 

app = Flask(__name__)


@app.route('/')
def index():
    """Returns HTML index page"""
    title = 'Home Page'
    return render_template('index.html', title=title)


@app.route('/about')
def about():
    """Returns about page"""
    title='About Page'
    return render_template('about.html', title=title)


@app.route('/contact')
def contact():
    """Returns contact page"""
    title='Contact Page'
    return render_template('contact.html', title=title)

    
app.run(debug=True)