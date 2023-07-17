# Readme
Here you can find all Fireworks Mania mods from Matrix! And if you are looking for prefabs for your mod, you will also find them here.

![image](https://github.com/MatrixoYT/Matrix-Fireworks-Mania-Mods/assets/121494555/f7dc5921-fc1a-4f28-a5ba-2fb8409b82eb)

Don't forget to join the [Matrix Discord Server](https://discord.gg/Xp3TYg7d)

<table>
<thead>
<tr>
<th align="center"><a href="https://mod.io/g/fireworksmania/m/matrixs-fusionfireworks-cake-collection-i" rel="nofollow">Matrix's FusionFireworks Cake Collection I</a></th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><a href="(https://github.com/MatrixoYT/Matrix-Fireworks-Mania-Mods/assets/121494555/1201a091-4fbc-4e8f-8a5e-2135f6c84634)
" rel="nofollow"><img src="https://thumb.modcdn.io/mods/c9d4/3143964/thumb_1020x2000/thumbnailfusionfireworkscake.jpg" alt="Logo" data-<a 
</tr>
<tr>
<td align="center">This mod adds 3 new batteries to the game.</td>

</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th align="center"><a href="https://mod.io/g/fireworksmania/m/matrixs-firecracker-collection" rel="nofollow">Matrix's Firecracker Collection I</a></th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><a href="https://github-production-user-asset-6210df.s3.amazonaws.com/121494555/253826202-1eec44a8-3037-4d95-840e-61808fd715d7.png
" rel="nofollow"><img src="https://thumb.modcdn.io/mods/7d96/2720820/thumb_1020x2000/thumbnailmatrixsmodcollecti.1.jpg" alt="Logo" data-<a 
</tr>
<tr>
<td align="center">This mod brings different firecrackers into play.</td>

</tr>
</tbody>
</table>


<!DOCTYPE html>
<html>
<head>
  <title>Kommentarbox</title>
</head>
<body>
  <h1>Kommentarbox</h1>

  <form id="comment-form">
    <label for="name">Name:</label>
    <input type="text" id="name" required><br><br>

    <label for="comment">Kommentar:</label><br>
    <textarea id="comment" rows="4" cols="50" required></textarea><br><br>

    <button type="submit">Kommentar absenden</button>
  </form>

  <div id="comment-section">
    <h2>Kommentare:</h2>
    <ul id="comment-list"></ul>
  </div>

  <script>
    // Funktion zum Speichern eines Kommentars im lokalen Speicher
    function saveComment(name, comment) {
      var comments = JSON.parse(localStorage.getItem('comments')) || [];
      comments.push({ name: name, comment: comment });
      localStorage.setItem('comments', JSON.stringify(comments));
    }

    // Funktion zum Laden der Kommentare aus dem lokalen Speicher
    function loadComments() {
      var comments = JSON.parse(localStorage.getItem('comments')) || [];

      var commentList = document.getElementById('comment-list');
      commentList.innerHTML = '';

      comments.forEach(function(comment) {
        var listItem = document.createElement('li');
        listItem.innerHTML = '<strong>' + comment.name + ':</strong> ' + comment.comment;
        commentList.appendChild(listItem);
      });
    }

    // Event Listener für das Absenden des Formulars
    document.getElementById('comment-form').addEventListener('submit', function(event) {
      event.preventDefault();

      var name = document.getElementById('name').value;
      var comment = document.getElementById('comment').value;

      saveComment(name, comment);
      loadComments();

      document.getElementById('comment-form').reset();
    });

    // Initialer Aufruf zum Laden der Kommentare
    loadComments();
  </script>
</body>
</html>


