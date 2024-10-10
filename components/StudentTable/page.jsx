"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://njrgyzhegrbsammqhhzq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qcmd5emhlZ3Jic2FtbXFoaHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzOTA2MzYsImV4cCI6MjA0Mzk2NjYzNn0.vIrnq40dsHSNRL133E863JY4ZJe9fSKOWkVewROXGcM";
const supabase = createClient(supabaseUrl, supabaseKey);

function App(){
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


  
}