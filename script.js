document.getElementById('learnMore').addEventListener('click', function() {
    document.getElementById('info').classList.add('hidden');
    document.getElementById('resources').classList.remove('hidden');
});

document.getElementById('back').addEventListener('click', function() {
    document.getElementById('resources').classList.add('hidden');
    document.getElementById('info').classList.remove('hidden');
});
