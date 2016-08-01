var artist

function artistConstructor(artistIdData, albumData, artistTopTracks, bitData) {
  artist = new Artist(artistIdData)
  eventConstructor(artist, bitData)
  albumConstructor(artist, albumData)
  songConstructor(artist, artistTopTracks)
}


// function artistController(spotifyArtistData) {
//   var artistName = spotifyArtistData.name
//   var artistGenres = spotifyArtistData.genres.join(", ")
//   var artistImg = spotifyArtistData.images[1].url
//   var newArtist = new Artist(artistName,artistGenres,artistImg)
//   displayAllEvents()
//   displayPlaylist()


//SHOW EVENTS FROM BANDS IN TOWN
function displayAllEvents(){
  if (bitData.length!==0){
    addContent(`<h3>Recent Tour Dates</h3>`)
    bitData.forEach((event)=>displayEvent(event))
  }
}

function displayEvent(event){
  addContent(`<b>${event.title}</b>`)
  addContent(event.formatted_datetime)
  addContent(`<a href="${event.facebook_rsvp_url}">RSVP on Facebook</a><p>`)
}

function addContent(html){
  $("#eventsInfo").append(html+"<br>")
}

function displayPlaylist(){
  $('#topTracks').append(`<h3 style="color:white;">Top Tracks</h3>`)
  $('#topTracks').append(`<iframe src="https://embed.spotify.com/?uri=${spotifyArtistData.uri}" width="100%" height="380" frameborder="0" allowtransparency="true"></iframe><p>`)
}
