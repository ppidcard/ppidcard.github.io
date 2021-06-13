import axios from 'axios';

export default axios.create({
    URL:'https://randomuser.me/api/',
    params:{
        results:200,
        nat:'au',
    }
})
