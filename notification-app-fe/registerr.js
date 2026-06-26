import axios from "axios";

axios.post("http://4.224.186.213/evaluation-service/auth", {
    email: "csai23043@glbitm.ac.in",
    name: "Rishabh Tripathi",
    rollNo: "2301921520149",
    accessCode: "xxkJnk",
    clientID: "e2d26c84-0f6e-49e0-ab00-f61672616b19",
    clientSecret: "ruNNCydPjQDQzDCg"
})
.then(res => {
    console.log(res.data);
})
.catch(err => {
    console.log(err.response?.data || err.message);
});