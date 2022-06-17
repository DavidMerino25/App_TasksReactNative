import {connect} from '../database'

export const getTasks = async (req, res) => {
  const db = await connect();
 const [rows] = await db.query('SELECT * FROM tasks')
  console.log(rows)
 res.send('hello wordl');
}

export const getTask = (req, res) => {
  res.send('hello wordl');
}

export const getTaskCount= (req, res) => {
  res.send('hello wordl');
}

export const saveTask = (req, res) => {
  res.send('hello wordl');
}

export const deleteTask = (req, res) => {
  res.send('hello wordl');
}

export const updateTask = (req, res) => {
  res.send('hello wordl');
}
