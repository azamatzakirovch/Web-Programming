document.getElementById('confirmButton').addEventListener('click', function() {
    document.getElementById('homeworkContainer').classList.add('hidden');
    document.getElementById('uploadContainer').classList.remove('hidden');
});

document.getElementById('homeworkForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Homework submitted successfully!');
});
