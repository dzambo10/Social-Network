class Post {
	post_id = '';
	post_content = '';
	user_id = '';
	api_url = 'https://62e18e5ffa99731d75d8e213.mockapi.io';

	async create() {
		let session = new Session();
		session_id = session.getSession()

		let data = {
			user_id: session_id,
			content: this.post_content,
		}

		data = JSON.stringify(data);
		let response = await fetch(this.api_url + '/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: data
		})

		data = await response.json();
		return data;
	}

	async getAllPosts() {
		let response = await fetch(this.api_url + '/posts')
		let data = await response.json()
		return data
	}
}