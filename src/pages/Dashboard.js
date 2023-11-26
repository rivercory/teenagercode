import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://pwwwklfyytziqvrhgebq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3d3drbGZ5eXR6aXF2cmhnZWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5MjU4NzQsImV4cCI6MjAxMDUwMTg3NH0.6fUasoQ8weL-_4PuCFLTpOJ7PiknFM8KbY5fVvrKLwo");

function Dashboard() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        const { data } = await supabase.from("countries").select();
        setCountries(data);
    }

    return (
        <>
            <Helmet>
                <title>대시보드 | 틴에이저코드</title>
            </Helmet>
            <div className="w-full">
                <div className="p-6 rounded-lg bg-secondary/50 lineseed">
                    <p className="text-3xl">대시보드</p>
                    <p>이곳에서 각종 게시물을 확인하세요.</p>
                </div>
                <div className="mt-4">
                    {countries.map((country) => (
                        <div key={country.name}>{country.name}</div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dashboard;