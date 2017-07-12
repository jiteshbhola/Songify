function toggleSong()  //play and pause the songs
        {    
            var song = document.querySelector('audio');
            if(song.paused == true) //if song is paused then play
            {
                console.log('Playing');
                $('.play-icon').removeClass('fa-play').addClass('fa-pause');//change icon to play and pause
                song.play();
            }
            else//if playing then pause
            {
                console.log('Pausing');
                $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                song.pause();
            }
        } 
$('.play-icon').on('click', function()//on click of icon play and pause 
        {
        toggleSong();
        });
$('body').on('keypress', function(event)//play and pause in keypress spacebar 
        {
            if (event.keyCode == 32) 
                {
                    toggleSong();
                }
        });
function fancyTimeFormat(time)//to show the time in mm:ss format
    {   
        // Hours, minutes and seconds
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = time % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }
function updateCurrentTime() //shows current time elapsed and total duration
    {
        var song = document.querySelector('audio');
        var currentTime = Math.floor(song.currentTime);//store times in variables and math.floor alters decimal value and returns integer value
        currentTime = fancyTimeFormat(currentTime);
        var duration = Math.floor(song.duration);
        duration = fancyTimeFormat(duration)
        $('.time-elapsed').text(currentTime);//find where to display them and display times
        $('.song-duration').text(duration);
    }
window.onload = function()//wait for website to load and perform everything inside the function 
    {  updateCurrentTime();//update time first and then wait 1sec for further function
      setInterval(function()//wait for given time interval and run the code and repeat it 
        {
            updateCurrentTime();
        },1000);
    }
var songs = [{//an array of objects of song details
        'name': 'Badri Ki Dulhania (Title Track)',//key:value pairs,these are defined as objects
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image':'song1.jpg' 
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image':'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image':'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image':'song4.jpg'
    }]
window.onload = function() {//wait for website to load and perform everything inside the function 
    changeCurrentSongDetails(songs[0]);
    for(var i =0; i < songs.length;i++) {
        var obj = songs[i]; //Save the song object in variable 'obj'
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name); //Pick the relevant object property and show it in the website
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1) //Add a click event on each song
    }   updateCurrentTime(); 
        setInterval(function() 
        {
            updateCurrentTime();
        },1000);
 }

function addSongNameClickEvent(songObj,position) //play and pause song on clicking on name, 
{   var songName = songObj.fileName; // New Variable   //here we're getting song name and postion as a paramenter from the array of objects                      
    var id = '#song' + position;//song1/2/3/4
    $(id).click(function() 
    {
        var audio = document.querySelector('audio');
        var currentSong = audio.src;
        if(currentSong.search(songName) != -1)
            {
                toggleSong();
            }
        else 
        {
            audio.src = songName;
            toggleSong();
            changeCurrentSongDetails(songObj); // Function Call
        }
    });
}
function changeCurrentSongDetails(songObj) { //show song details when playing it
    $('.current-song-image').attr('src','img/' + songObj.image) //select the element with class 'current-song-image'
    $('.current-song-name').text(songObj.name)                  //set it's src attribute to something (.attr('src',...)       
    $('.current-song-album').text(songObj.album)                //The src is made of two strings added together: folder name + fileName 
}



            