document.getElementById('get-homework').addEventListener('click', function() {
    const homeworkFile = new Blob(["Homework content goes here"], { type: "text/plain" });
    const url = URL.createObjectURL(homeworkFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'homework.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    document.getElementById('confirmation').style.display = 'block';
});

document.getElementById('upload-homework').addEventListener('click', function() {
    document.getElementById('upload-section').style.display = 'block';
});

document.getElementById('submit-homework').addEventListener('click', function() {
    const studentId = document.getElementById('student-id').value;
    const homeworkFileInput = document.getElementById('homework-file');
    const homeworkFile = homeworkFileInput.files[0];

    if (studentId && homeworkFile) {

        alert('Homework submitted successfully by ID: ' + studentId);

        document.getElementById('student-id').value = '';
        homeworkFileInput.value = '';
    } else {
        alert('Please fill in your ID and select a file.');
    }
});
