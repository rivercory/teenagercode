import { Helmet } from "react-helmet";

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>대시보드 | 틴에이저코드</title>
            </Helmet>
            <div className="w-full">
                <div className="p-6 rounded-lg bg-secondary/50 pretendard">
                    <p className="text-3xl" style={{fontWeight:'bold'}}>대시보드</p>
                    <p>이곳에서 각종 게시물을 확인하세요.</p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;