$(document).ready(function() {

  const port = 3000;
// get a quote from the server when the page loads and add it to the dom
  // getQuote();
  let quote = getQuote();
  // append to #response
  console.log(currQuotes)
  // $('#quote-place').append(currQuote);

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
      // data: { order: '-createdAt' }, QQQQQQQQQQQQ
      data: data,
      contentType: 'application/json',
      success: successCB || function (data) {
        console.log('Random Quote Generator:  Quote sent', data);
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
      contentType: 'application/json',
      success: successCB || function (data) {
        console.log('Random Quote Generator: Quote sent');
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