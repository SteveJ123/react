chrome console
- With mac, the console can be opened by pressing alt cmd and i simultaneously.
- With windows the console opens by pressing F12 or ctrl shift and i simultaneously.

Ensure that the Network tab is open, and activate Disable cache as shown.
Preserve log can also be useful. It saves the logs printed by the application when the page is reloaded.

HTTP GET
The server and the web browser communicate with each other using the HTTP protocol.
The Network tab shows how the browser and the server communicate.
- GET method
- the request was successful, because the server response had the Status code 200.
- The request and the server response have several headers:
- The Response headers on top tell us e.g. the size of the response in bytes, and the exact time
of the response.
- header Content-Type tells us that the response is a text file in utf-8-format, contents of which
have been formatted with HTML. This way the browser knows the response to be a regular HTML-page,
and to render it to the browser 'like a web page'.
- The Response tab shows the response data, a regular HTML-page. The body section determines
the structure of the page rendered to the screen:
