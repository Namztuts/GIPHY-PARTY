console.log("Let's get this party started!");

const $userInput = $('#gifInput');
const $gifResults = $('#results');

async function getGIHPY(result) {
   let dataResults = result.data.length;
   if (dataResults) {
      let rand = Math.floor(Math.random() * dataResults);
      let $newGIF = $('<img>', {
         src: result.data[rand].images.original.url,
         class: 'resultsGIF',
      });
      $gifResults.append($newGIF);
   }
}

$('form').on('submit', async function (e) {
   e.preventDefault();

   const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
         q: $userInput.val(),
         api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym',
      },
   });
   getGIHPY(response.data);
});

$('#remove').on('click', function () {
   $gifResults.empty();
});
