import axios from "axios";

export const getAll = async () => {
    try {
        const list = await axios.get(`http://localhost:8080/books`);
        return list.data;
    } catch (e) {
        alert("Error");
    }
}
export const createBook = async (value) => {
    try {
        const data = await axios.post("http://localhost:8080/books", value);
        return value;
    } catch (e) {
        alert("Error")
    }
}
export const deleteBook = async (id) => {
    console.log(id)
    try {
        return await axios.delete("http://localhost:8080/books/" + id);
    } catch (e) {
        alert("Error")
    }
}
export const getBookById = async (id) => {
    try {
        const res = await axios.get("http://localhost:8080/books/" + id)
        console.log(res.data)
        return res.data
    } catch (e) {
        alert("Error")
    }
}
export const editBookService = async (value) => {
    try {
        return await axios.put("http://localhost:8080/books/" + value.id, value)
    } catch (e) {
        alert("Error")
    }
}