import { createClient } from '@supabase/supabase-js'

const URL = 'https://cttawyumjqbbckygqtnc.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dGF3eXVtanFiYmNreWdxdG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzNzY5OTIsImV4cCI6MTk5Nzk1Mjk5Mn0.E7LqrEM7ADPRr9DTPIGVkePiis1eTIDKaKYoyP-RQ7I'

export const supabase = createClient(URL, API_KEY)