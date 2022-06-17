import { connect } from '../database'

export const getTasks = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query('SELECT * FROM tasks')
  res.json(rows);
  console.log('bice');
}

export const getTask = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
  res.json(rows[0]);
}

export const getTaskCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query('SELECT  COUNT (*) FROM tasks')
  res.json(rows[0]["COUNT (*)"]);
}

export const saveTask = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [req.body.title, req.body.description]);

  res.json({
    id: results.insertId,
    ...req.body,
  });
}

export const deleteTask = async (req, res) => {
  const connection = await connect();
  const result = await connection.query('DELETE FROM tasks WHERE id = ?', [req.params.id])
  console.log(result)
  res.sendStatus(204);
}

export const updateTask = async (req, res) => {
  const coneection = await connect();
  const results = await coneection.query('UPDATE tasks SET ? WHERE id = ?', [
    req.body, 
    req.params.id]);
  console.log(results);
  res.sendStatus(204) // 204 No Content
}
