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
  <title>YouTube Abonnenten-Zähler</title>
</head>
<body>
  <h1>YouTube Abonnenten-Zähler</h1>
  <div id="counter"></div>

  <script>
    // YouTube-Kanal-ID hier einfügen
    const channelId = 'UCNQgFH6YKYUqfdS0gWQSufw';

    // API-Anfragerate in Millisekunden
    const requestInterval = 5000; // 5 Sekunden

    // Funktion zum Aktualisieren des Zählers
    function updateSubscriberCount() {
      fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=DEIN_API_SCHLÜSSEL`)
        .then(response => response.json())
        .then(data => {
          const subscriberCount = data.items[0].statistics.subscriberCount;
          document.getElementById('counter').textContent = `Abonnenten: ${subscriberCount}`;
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Abonnentenanzahl:', error);
        });
    }

    // Initiale Aktualisierung des Zählers
    updateSubscriberCount();

    // Wiederholtes Aktualisieren des Zählers
    setInterval(updateSubscriberCount, requestInterval);
  </script>
</body>
</html>

