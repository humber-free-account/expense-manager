import firebase from "../firebase.js";
import { collection, query, where } from "firebase/firestore";
const db = firebase.collection("/expense");
class ExpenseService {
  getAll() {
    return db;
  }
  getSelectedExpenseById(id) {
    return db;
  }
  create(expense) {
    return db.add(expense);
  }
  update(id, value) {
    return db.doc(id).update(value);
  }
  delete(id) {
    return db.doc(id).delete();
  }
}
export default new ExpenseService();