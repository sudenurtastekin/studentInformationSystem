"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://njrgyzhegrbsammqhhzq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qcmd5emhlZ3Jic2FtbXFoaHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzOTA2MzYsImV4cCI6MjA0Mzk2NjYzNn0.vIrnq40dsHSNRL133E863JY4ZJe9fSKOWkVewROXGcM";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({ first_name: '', last_name: '', not1: '', not2: '', not3: '' });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('students').select('*');
      if (error) console.error('Error fetching data:', error);
      else setData(data);
    };

    fetchData();
  }, []);

  const save = async () => {
    const { data: updatedData, error } = await supabase.from('students').select('*');
    if (error) console.error('Error fetching data:', error);
    else setData(updatedData);
  };

  const addNewStudent = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('students').insert([newStudent]);
    if (error) console.error('Error inserting data:', error);
    else {
      setNewStudent({ first_name: '', last_name: '', not1: '', not2: '', not3: '' });
      closeModal();
      save();
    }
  };

  const updateRecord = async (record) => {
    const { error } = await supabase.from('students').update(record).eq('id', record.id);
    if (error) console.error('Error updating data:', error);
    else save();
  };


  const deleteRecord = async (id) => {
    if (!confirm('Emin misiniz?')) return;
    const { error } = await supabase.from('students').delete().eq('id', id);
    if (error) console.error('Error deleting data:', error);
    else save();
  };


  const handleNewStudentChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  return (
    <div className='container'>
      <h1>Öğrenci Bilgi Sistemi <button onClick={openModal}>yeni</button></h1>
      <div className="studentTable">
        <ul className="studentTableTitles">
          <li>Ad</li>
          <li>Soyad</li>
          <li>Not 1</li>
          <li>Not 2</li>
          <li>Not 3</li>
          <li>Ortalama</li>
          <li>#</li>
        </ul>
        {data.map(student => (
          <StudentRow key={student.id} {...student} updateRecord={updateRecord} deleteRecord={deleteRecord} />
        ))}
      </div>
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Yeni Öğrenci Ekle</h2>
            <form className="addStudent" onSubmit={addNewStudent}>
              <input type="text" required name='first_name' placeholder="Ad" onChange={handleNewStudentChange} />
              <input type="text" required name='last_name' placeholder="Soyad" onChange={handleNewStudentChange} />
              <input type="number" required name='not1' placeholder="Not 1" onChange={handleNewStudentChange} />
              <input type="number" required name='not2' placeholder="Not 2" onChange={handleNewStudentChange} />
              <input type="number" required name='not3' placeholder="Not 3" onChange={handleNewStudentChange} />
              <button type='submit'>Ekle</button>
              <button type='button' onClick={closeModal}>Kapat</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );




}