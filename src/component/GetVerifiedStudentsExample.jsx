import { useNavigate } from 'react-router-dom';


export default function GetVerifiedStudentsExample() {
    const navigate = useNavigate()
    

    return (
      <div className="page">
        <div className="titleWrap">
          인증된 학생 조회 예제
        </div>
        
        <div className="bodyWrap">
          <p>Api 요청 예시</p>
          <hr/>
          
          curl --request GET '
          <br/>
          --url 'http://localhost:3000/v1/verification/student' 
          <br/>
          --header 'ApiKey: 발급 받은 ApiKey'

        <div className="contentWrap">
            <p>Request Body</p>
            <hr/>
            
            없음
            
        </div>
          
        <div className="contentWrap">
            <p>Response Body</p>
            <hr/>
            &#91; <br />
                  &nbsp;&nbsp;&#123; <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"id": "학생 id", <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"email": "인증된 이메일", <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"universityName": "이메일에 대한 대학명" <br />
                  &nbsp;&nbsp;&#125; <br />
                  &nbsp;&nbsp;... <br />
                  &nbsp;&nbsp;... <br/>
            &#93;
        </div>
        <br/>
        </div>
      
        
          <button onClick={()=>{navigate(-1)}} className="bottomButton">
            뒤로가기
          </button>
        </div>
      
    );
}