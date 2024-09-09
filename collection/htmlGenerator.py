import os

file_dir = os.path.dirname(os.path.realpath(__file__))

def generateFile(number, content, title, creator):
    filename = f'entry{number:03}.html'
    pathname = f'{file_dir}/test/{filename}'
    html = f'''<body>
    <h2>{title}</h2>
    <em>Creator: {creator}</em>
    <br>
    <br>
    <p>"{content}"</p>
</body>
'''
    with open(pathname, 'w') as file:
        file.write(html)


entries = []
entries.append({'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'title': 'Lorem Ipsum', 'creator': 'Cicero'})
entries.append({'content': 'placeholder', 'title': 'The Classic', 'creator': 'unknown'})
entries.append({'content': 'something', 'title': 'The Tired Student', 'creator': 'tired student'})

for index, entry in enumerate(entries, start=1):
    generateFile(index, entry['content'], entry['title'], entry['creator'])