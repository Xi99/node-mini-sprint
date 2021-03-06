$(document).ready(function() {

  const port = 3000;
// get a quote from the server when the page loads and add it to the dom
  // getQuote();
  getQuote();
  let currQuote = 'I am so confused!'
  // append to #response
  // console.log(currQuotes)
  // $('#repsonse').append(currQuote);
  // $('#repsonse').html(currQuote);

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  function getQuote(successCB, errorCB = null) {
    //YOUR CODE HERE, Add a GET request
    $.ajax({
      url: `http://localhost:${port}/quote`,
      type: 'GET',
      // data: { order: '-createdAt' },
      // data: data,
      // contentType: 'application/json',
      // success: $('#repsonse').append(data) || function (data) {
      //   console.log('Random Quote Generator:  Quote sent', data);
      success: successCB || function (data) {
        // console.log('Random Quote Generator:  Quote sent', data);
        $('#response').prepend(data);
        $('#response').append(data);
      },
      error: errorCB || function(error) {
        console.error('Random Quote Generator:  Failed to fetch messages', error);
      }
    });
  }

  function addQuote(quote, successCB, errorCB = null) {
    //YOUR CODE HERE, Add a POST request
    $.ajax({
      url: `http://localhost:${port}/quote`,
      type: 'POST',
      data: JSON.stringify(quote),
      // contentType: 'application/json',
      success: successCB || function (data) {
        // console.log('Random Quote Generator: Quote sent');
        $('#new-quote').append(data, '<br>');
        // $('<br>').append(data);
      },
      error: errorCB || function(error, data) {
        console.error('Random Quote Generator: Failed to send quotes', data);
      }  
    });
  }

});



//=========================original code

// $(document).ready(function() {

//   // get a quote from the server when the page loads and add it to the dom
//     getQuote();
  
//   // when the user enters data and clicks submit, post the quote to the server
//     $('#submit').click((e) => {
//       e.preventDefault();
//       let quote = $('input').val();
//       addQuote(quote);
//     });
  
//     function getQuote(successCB, errorCB = null) {
  
//       //YOUR CODE HERE, Add a GET request
  
//     function addQuote(quote){
      
//       //YOUR CODE HERE, Add a POST request
  
//     }
//   });