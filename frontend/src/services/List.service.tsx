import axios from "axios";

class ListService {
    async getList(){
        return await axios.get('http://localhost:8080/api/data');
    }
}

export default new ListService();