// API : fetch friends list
export default function fetchFriends(url) {

    // fetch from url
    return fetch(url)

    // transform to json
    .then(response => response.json())

    // handle server response
    .then(response => {

            // Server error
            if (response.answer_code != 'getCercle_end_code_0') {
                throw Error();
            }

            // convert response data
            let friends = [];
            const data = response.answer_data;
            for (let i in data) {

                friends.push({
                    id: parseInt(data[i].id_user),
                    name: data[i].name
                });
            }

            return friends;
        });
}