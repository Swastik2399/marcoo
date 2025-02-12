from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/joke', methods=['GET'])
def joke():
    # You can replace this with a more complex joke-fetching mechanism if desired.
    return jsonify({'joke': 'Why did the developer go broke? Because he used up all his cache!'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
