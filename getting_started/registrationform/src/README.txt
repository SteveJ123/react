
when you run the app with npm start when address bar is with http://localhost:3000/ it shows home page

when you press FillForm navlink it will take you to the FillForm component

when you press NewWorker navlink it will take you to the NewWorker component

when you press WorkerSearch navlink it will take you to the WorkerSearch component

I have shared the screenshot of these components and added screenshot folder

DOUBTS:

in NewWorker component I have done form validation.

I have added function inside handleSubmit method like this

handleSubmit(event) {
    event.preventDefault();
    // console.log("event", event.target);
      var username = event.target.username.value;
      var email = event.target.email.value;
      var mobile = event.target.mobile.value;
      //input box is empty
      if (
        username === "" ||
        email === "" ||
        mobile === "" ||
        event.target.password.value === ""
      ) {
        alert(`input is empty`);
        //   return false;
      }

      function userNameValidation(username){
          var regexp = new RegExp("^[a-zA-Z]+$");
          if (username.match(regexp)) {
              alert("name entered is correct");
              //   return true;
          } else {
              alert("enter the correct name");
              //   return false;
          }
      }

      is it the right to do