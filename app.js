//GIPHY API request
async function findGif() {
    let term = $('#searchTermInput').val();
    let res = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {
        api_key: 'S9n14iceP3dQazrqSeXsXwWZ8PBpByIp',
        q: term,
        limit: 1
    }});
    console.log(res);
    const GIFURL = res.data.data[0].images.original.url;
    $('#searchTermInput').val('');
    addGIFtoPage(GIFURL);
}

//update DOM
const addGIFtoPage = function(GIFURL) {
    console.log(GIFURL)
    $('<img>').attr({src: GIFURL}).appendTo('.container');
}

//btn event listener
$('#searchTermBtn').on('click', function(e) {
    e.preventDefault();
    findGif();
});

//remove all images
$('#deleteBtn').on('click', function(e) {
    e.preventDefault();
    $('.container').empty();
})
