
from flask import Flask, render_template

app = Flask("app")


@app.route('/')
def home():
    return render_template("home.html")


@app.route("/attendance")
def leafletMap():
    return render_template("leaflet.html")


@app.route('/bestGoalkeeper')
def bar_1():
    return render_template('bar_1.html')


@app.route('/topScorers')
def bar_2():
    return render_template('bar_2.html')


@app.route('/teamComparisons')
def bar_3():
    return render_template('bar_3.html')


@app.route('/easternConference')
def eastern():
    return render_template('eastern.html')


@app.route('/westernConference')
def western():
    return render_template('western.html')


@app.route('/bracketPredictions')
def bracker():
    return render_template('bracket.html')


@app.route('/contributors')
def contributor():
    return render_template('contributor.html')


if __name__ == '__main__':
    app.run(debug=True)
