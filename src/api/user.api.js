// API : user tools
export default {

    // login method
    login: (email, password) => {

        // url
        let url = 'http://seame.alwaysdata.net/ajax/user.php';
        url += '?mode=login';
        url += '&email='+email;
        url += '&mdp='+password;

        // fetch from url
        return fetch(url)

        // convert response to json
        .then(response => response.json())

        // handle server response
        .then(response => {

            // Server error
            if (response.answer_code != 'login_end_code_0') {
                throw Error(response.answer_code);
            }

            // return data
            return response.answer_data;
        });

    }
};
