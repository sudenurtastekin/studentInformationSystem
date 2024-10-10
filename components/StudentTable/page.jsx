"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://njrgyzhegrbsammqhhzq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qcmd5emhlZ3Jic2FtbXFoaHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzOTA2MzYsImV4cCI6MjA0Mzk2NjYzNn0.vIrnq40dsHSNRL133E863JY4ZJe9fSKOWkVewROXGcM";
const supabase = createClient(supabaseUrl, supabaseKey);

function App(){
  
}