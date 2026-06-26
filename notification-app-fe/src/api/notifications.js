import axios from "axios";
import { useEffect } from "react";



export function fetchNotifications() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjc2FpMjMwNDNAZ2xiaXRtLmFjLmluIiwiZXhwIjoxNzgyNDU0ODIxLCJpYXQiOjE3ODI0NTM5MjEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI5M2JkZmRjNi0xNTc1LTQyOWUtOTBlZi1iM2IyMjgyNmQ4NmIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJyaXNoYWJoIHRyaXBhdGhpIiwic3ViIjoiZTJkMjZjODQtMGY2ZS00OWUwLWFiMDAtZjYxNjcyNjE2YjE5In0sImVtYWlsIjoiY3NhaTIzMDQzQGdsYml0bS5hYy5pbiIsIm5hbWUiOiJyaXNoYWJoIHRyaXBhdGhpIiwicm9sbE5vIjoiMjMwMTkyMTUyMDE0OSIsImFjY2Vzc0NvZGUiOiJ4eGtKbmsiLCJjbGllbnRJRCI6ImUyZDI2Yzg0LTBmNmUtNDllMC1hYjAwLWY2MTY3MjYxNmIxOSIsImNsaWVudFNlY3JldCI6InJ1Tk5DeWRQalFEUXpEQ2cifQ.5DlniJELGbJA7FJ8o6Ou8wt_e5Pd06dkC9ShC7tXpXI";
    useEffect(() => {
        axios.get("http://4.224.186.213/evaluation-service/notifications",
        {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        }
        )
        .then((res) => {
        console.log(res.data);
        })
        .catch((err) => {
        console.log(err.response?.data || err.message);
        });
    })
}
