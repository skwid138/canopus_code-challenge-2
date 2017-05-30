# jQuery AJAX & Express Checkpoint

This code challenge has a large amount of the functionality stubbed out for you:

* The front end has already been written!
* Some parts of the both the client and server code have been filled in for you!

## TODO

- [ ] In *client.js*, make an AJAX request that will add cats to the server.
- [ ] In *server.js*, create the server-side route that will send all cats to the client.
- [ ] In *server.js*, create the server-side route that will add a new cat object to the provided catData object1.

### Adding cats

Adding new cats should be accomplished by responding to a POST request to the route `/cats`. The parameters for the body of the request will be the cat's `name` and `age`.

### Retrieving cats

The server should also support retrieving a list of all of the cats that have been created: Thus, GET requests to the `/cats` route will return a JSON object with a property of `cats`. The value of `cats` should be a list of the cat objects that have been created. For example:

```JSON
{
	"cats": [{
		"name": "Simone de Beauvoir",
		"age": "2"
	}, {
		"name": "Minnie",
		"age": "3"
	}]
}
```

## Remember
You can check your work by visiting `localhost:3000` in a browser and using the form to add new cats. Each time you submit a new cat, a new entry should appear in the list.

**IMPORTANT:** All of your changes should take place inside the *server.js* and *client.js* files. You don't need to mess with any of the other files that are included in this challenge.

Good luck!
