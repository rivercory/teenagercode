import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://pwwwklfyytziqvrhgebq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3d3drbGZ5eXR6aXF2cmhnZWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5MjU4NzQsImV4cCI6MjAxMDUwMTg3NH0.6fUasoQ8weL-_4PuCFLTpOJ7PiknFM8KbY5fVvrKLwo");

function Home() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        const { data } = await supabase.from("countries").select();
        setCountries(data);
    }

    return (
        <ul>
            {countries.map((country) => (
                <li key={country.name}>{country.name}</li>
            ))}
        </ul>
    );
}

export default Home;