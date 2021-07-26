import axios from "axios";

class ListService {
    async getList(){
        try {
            const response = await axios.get("http://localhost:8080/api/data");
        } catch (e) {
            console.log(e);
            return "";      // because of React.useEffect in UserProfile.tsx
        }
    }
}

export default new ListService();