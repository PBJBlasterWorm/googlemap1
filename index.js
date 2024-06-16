const APIKEY = 'IOUcVmYZLkDnaeOYtN3F8EGfxx2Dr5Vnw329P4jY0ST9k1A8OPtEuNpI3txJ7l3U%2FG%2FtLy7vuFbD4d4nh6VpvA%3D%3D'; // 구글 
const inputBox = document.getElementById("inputBox");
const searchButton = document.getElementById("searchButton");
const sidoName = document.getElementById("siDo");
const sidoButton = document.querySelector(".sidobutton");
const sidoSelect = document.getElementById("siDoSelect");
const sidoMenu = document.querySelector(".siDoMenu");
const maps = document.querySelector(".maps");
const readMe = document.getElementById("readMe");
const searchList = document.getElementById("searchList");
let sidoNumber = 11;

// 시도별 입력값
// 서울 11 부산광역시 26 대구 27 인천 28 광주 29 대전 30 울산 31 세종 36 경기도 41 강원도 42
// 충청북도 43 충청남도 44 전라북도 45 전라남도 46 경상북도 47 경상남도 48 제주도 50

const gunData = [ // 시도 지역정보를 객체에 담음
    { gunName: "강남구", gunNumber: 680, keynum: 11, sidoName: "서울특별시" }, { gunName: "강동구", gunNumber: 740, keynum: 11, sidoName: "서울특별시" },
    { gunName: "강북구", gunNumber: 305, keynum: 11, sidoName: "서울특별시" }, { gunName: "강서구", gunNumber: 500, keynum: 11, sidoName: "서울특별시" },
    { gunName: "관악구", gunNumber: 620, keynum: 11, sidoName: "서울특별시" }, { gunName: "광진구", gunNumber: 215, keynum: 11, sidoName: "서울특별시" },
    { gunName: "구로구", gunNumber: 530, keynum: 11, sidoName: "서울특별시" }, { gunName: "금천구", gunNumber: 545, keynum: 11, sidoName: "서울특별시" },
    { gunName: "노원구", gunNumber: 350, keynum: 11, sidoName: "서울특별시" }, { gunName: "도봉구", gunNumber: 320, keynum: 11, sidoName: "서울특별시" },
    { gunName: "동대문구", gunNumber: 230, keynum: 11, sidoName: "서울특별시" }, { gunName: "동작구", gunNumber: 590, keynum: 11, sidoName: "서울특별시" },
    { gunName: "마포구", gunNumber: 440, keynum: 11, sidoName: "서울특별시" }, { gunName: "서대문구", gunNumber: 410, keynum: 11, sidoName: "서울특별시" },
    { gunName: "서초구", gunNumber: 650, keynum: 11, sidoName: "서울특별시" }, { gunName: "성동구", gunNumber: 200, keynum: 11, sidoName: "서울특별시" },
    { gunName: "성북구", gunNumber: 290, keynum: 11, sidoName: "서울특별시" }, { gunName: "송파구", gunNumber: 710, keynum: 11, sidoName: "서울특별시" },
    { gunName: "양천구", gunNumber: 470, keynum: 11, sidoName: "서울특별시" }, { gunName: "영등포구", gunNumber: 560, keynum: 11, sidoName: "서울특별시" },
    { gunName: "용산구", gunNumber: 170, keynum: 11, sidoName: "서울특별시" }, { gunName: "은평구", gunNumber: 380, keynum: 11, sidoName: "서울특별시" },
    { gunName: "종로구", gunNumber: 110, keynum: 11, sidoName: "서울특별시" }, { gunName: "중구", gunNumber: 140, keynum: 11, sidoName: "서울특별시" },
    { gunName: "중랑구", gunNumber: 260, keynum: 11, sidoName: "서울특별시" }, // 여기까지 서울

    { gunName: "강서구", gunNumber: 440, keynum: 26, sidoName: "부산광역시" }, { gunName: "금정구", gunNumber: 410, keynum: 26, sidoName: "부산광역시" },
    { gunName: "기장군", gunNumber: 710, keynum: 26, sidoName: "부산광역시" }, { gunName: "남구", gunNumber: 290, keynum: 26, sidoName: "부산광역시" },
    { gunName: "동구", gunNumber: 170, keynum: 26, sidoName: "부산광역시" }, { gunName: "동래구", gunNumber: 260, keynum: 26, sidoName: "부산광역시" },
    { gunName: "부산진구", gunNumber: 230, keynum: 26, sidoName: "부산광역시" }, { gunName: "북구", gunNumber: 320, keynum: 26, sidoName: "부산광역시" },
    { gunName: "사상구", gunNumber: 530, keynum: 26, sidoName: "부산광역시" }, { gunName: "사하구", gunNumber: 380, keynum: 26, sidoName: "부산광역시" },
    { gunName: "서구", gunNumber: 140, keynum: 26, sidoName: "부산광역시" }, { gunName: "수영구", gunNumber: 500, keynum: 26, sidoName: "부산광역시" },
    { gunName: "연제구", gunNumber: 470, keynum: 26, sidoName: "부산광역시" }, { gunName: "영도구", gunNumber: 200, keynum: 26, sidoName: "부산광역시" },
    { gunName: "중구", gunNumber: 110, keynum: 26, sidoName: "부산광역시" }, { gunName: "해운대구", gunNumber: 350, keynum: 26, sidoName: "부산광역시" },
     // 여기까지 부산광역시
    { gunName: "남구", gunNumber: 200, keynum: 27, sidoName: "대구광역시" }, { gunName: "달서구", gunNumber: 290, keynum: 27, sidoName: "대구광역시" }, 
    { gunName: "달성군", gunNumber: 710, keynum: 27, sidoName: "대구광역시" }, { gunName: "동구", gunNumber: 140, keynum: 27, sidoName: "대구광역시" }, 
    { gunName: "북구", gunNumber: 230, keynum: 27, sidoName: "대구광역시" }, { gunName: "서구", gunNumber: 170, keynum: 27, sidoName: "대구광역시" }, 
    { gunName: "수성구", gunNumber: 260, keynum: 27, sidoName: "대구광역시" }, { gunName: "중구", gunNumber: 110, keynum: 27, sidoName: "대구광역시" },
     // 여기까지 대구
    { gunName: "강화군", gunNumber: 710, keynum: 28, sidoName: "인천광역시" }, { gunName: "계양구", gunNumber: 245, keynum: 28, sidoName: "인천광역시" }, 
    { gunName: "남구", gunNumber: 170, keynum: 28, sidoName: "인천광역시" }, { gunName: "남동구", gunNumber: 200, keynum: 28, sidoName: "인천광역시" }, 
    { gunName: "동구", gunNumber: 140, keynum: 28, sidoName: "인천광역시" }, { gunName: "부평구", gunNumber: 237, keynum: 28, sidoName: "인천광역시" }, 
    { gunName: "서구", gunNumber: 260, keynum: 28, sidoName: "인천광역시" }, { gunName: "연수구", gunNumber: 185, keynum: 28, sidoName: "인천광역시" }, 
    { gunName: "옹진군", gunNumber: 720, keynum: 28, sidoName: "인천광역시" }, { gunName: "중구", gunNumber: 110, keynum: 28, sidoName: "인천광역시" },
     // 여기까지 인천
    { gunName: "광산구", gunNumber: 200, keynum: 29, sidoName: "광주광역시" }, { gunName: "남구", gunNumber: 155, keynum: 29, sidoName: "광주광역시" },
    { gunName: "동구", gunNumber: 110, keynum: 29, sidoName: "광주광역시" }, { gunName: "북구", gunNumber: 170, keynum: 29, sidoName: "광주광역시" },
    { gunName: "서구", gunNumber: 140, keynum: 29, sidoName: "광주광역시" }, // 여기까지 광주
    { gunName: "대덕구", gunNumber: 230, keynum: 30, sidoName: "대전광역시" }, { gunName: "동구", gunNumber: 110, keynum: 30, sidoName: "대전광역시" }, 
    { gunName: "서구", gunNumber: 170, keynum: 30, sidoName: "대전광역시" }, { gunName: "유성구", gunNumber: 200, keynum: 30, sidoName: "대전광역시" },
    { gunName: "중구", gunNumber: 140, keynum: 30, sidoName: "대전광역시" },
     // 여기까지 대전
    { gunName: "남구", gunNumber: 140, keynum: 31, sidoName: "울산광역시" }, { gunName: "동구", gunNumber: 170, keynum: 31, sidoName: "울산광역시" },
    { gunName: "북구", gunNumber: 200, keynum: 31, sidoName: "울산광역시" }, { gunName: "울주군", gunNumber: 710, keynum: 31, sidoName: "울산광역시" },
    { gunName: "중구", gunNumber: 140, keynum: 31, sidoName: "울산광역시" },
     // 여기까지 울산
    { gunName: "세종", gunNumber: 110, keynum: 36, sidoName: "세종특별자치시" },
     // 여기까지 세종
    { gunName: "가평군", gunNumber: 820, keynum: 41, sidoName: "경기도" }, { gunName: "고양시", gunNumber: 280, keynum: 41, sidoName: "경기도" },
    { gunName: "과천시", gunNumber: 290, keynum: 41, sidoName: "경기도" }, { gunName: "광명시", gunNumber: 210, keynum: 41, sidoName: "경기도" },
    { gunName: "광주시", gunNumber: 610, keynum: 41, sidoName: "경기도" }, { gunName: "구리시", gunNumber: 310, keynum: 41, sidoName: "경기도" },
    { gunName: "군포시", gunNumber: 410, keynum: 41, sidoName: "경기도" }, { gunName: "김포시", gunNumber: 570, keynum: 41, sidoName: "경기도" },
    { gunName: "남양주시", gunNumber: 360, keynum: 41, sidoName: "경기도" }, { gunName: "동두천시", gunNumber: 250, keynum: 41, sidoName: "경기도" },
    { gunName: "부천시", gunNumber: 190, keynum: 41, sidoName: "경기도" }, { gunName: "성남시", gunNumber: 130, keynum: 41, sidoName: "경기도" },
    { gunName: "수원시", gunNumber: 110, keynum: 41, sidoName: "경기도" }, { gunName: "시흥시", gunNumber: 390, keynum: 41, sidoName: "경기도" },
    { gunName: "안산시", gunNumber: 270, keynum: 41, sidoName: "경기도" }, { gunName: "안성시", gunNumber: 550, keynum: 41, sidoName: "경기도" },
    { gunName: "안양시", gunNumber: 170, keynum: 41, sidoName: "경기도" }, { gunName: "양주시", gunNumber: 630, keynum: 41, sidoName: "경기도" },
    { gunName: "양평군", gunNumber: 830, keynum: 41, sidoName: "경기도" }, { gunName: "여주군", gunNumber: 730, keynum: 41, sidoName: "경기도" },
    { gunName: "연천군", gunNumber: 800, keynum: 41, sidoName: "경기도" }, { gunName: "오산시", gunNumber: 370, keynum: 41, sidoName: "경기도" },
    { gunName: "용인시", gunNumber: 460, keynum: 41, sidoName: "경기도" }, { gunName: "의왕시", gunNumber: 430, keynum: 41, sidoName: "경기도" },
    { gunName: "의정부시", gunNumber: 150, keynum: 41, sidoName: "경기도" }, { gunName: "이천시", gunNumber: 500, keynum: 41, sidoName: "경기도" },
    { gunName: "파주시", gunNumber: 480, keynum: 41, sidoName: "경기도" }, { gunName: "평택시", gunNumber: 220, keynum: 41, sidoName: "경기도" },
    { gunName: "포천군", gunNumber: 810, keynum: 41, sidoName: "경기도" }, { gunName: "포천시", gunNumber: 650, keynum: 41, sidoName: "경기도" },
    { gunName: "하남시", gunNumber: 450, keynum: 41, sidoName: "경기도" }, { gunName: "화성시", gunNumber: 590, keynum: 41, sidoName: "경기도" },
     // 여기까지 경기도
    { gunName: "강릉시", gunNumber: 150, keynum: 42, sidoName: "강원도" }, { gunName: "고성군", gunNumber: 820, keynum: 42, sidoName: "강원도" },
    { gunName: "동해시", gunNumber: 170, keynum: 42, sidoName: "강원도" }, { gunName: "삼척시", gunNumber: 230, keynum: 42, sidoName: "강원도" },
    { gunName: "속초시", gunNumber: 210, keynum: 42, sidoName: "강원도" }, { gunName: "양구군", gunNumber: 800, keynum: 42, sidoName: "강원도" },
    { gunName: "양양군", gunNumber: 830, keynum: 42, sidoName: "강원도" }, { gunName: "영월군", gunNumber: 750, keynum: 42, sidoName: "강원도" },
    { gunName: "원주시", gunNumber: 130, keynum: 42, sidoName: "강원도" }, { gunName: "원주시", gunNumber: 130, keynum: 42, sidoName: "강원도" },
    { gunName: "인제군", gunNumber: 810, keynum: 42, sidoName: "강원도" }, { gunName: "정선군", gunNumber: 770, keynum: 42, sidoName: "강원도" },
    { gunName: "철원군", gunNumber: 780, keynum: 42, sidoName: "강원도" }, { gunName: "춘천시", gunNumber: 110, keynum: 42, sidoName: "강원도" },
    { gunName: "태백시", gunNumber: 190, keynum: 42, sidoName: "강원도" }, { gunName: "평창군", gunNumber: 760, keynum: 42, sidoName: "강원도" },
    { gunName: "홍천군", gunNumber: 720, keynum: 42, sidoName: "강원도" }, { gunName: "화천군", gunNumber: 790, keynum: 42, sidoName: "강원도" },
    { gunName: "횡성군", gunNumber: 730, keynum: 42, sidoName: "강원도" },
     // 여기까지 강원도
    { gunName: "괴산군", gunNumber: 760, keynum: 43, sidoName: "충청북도" }, { gunName: "단양군", gunNumber: 800, keynum: 43, sidoName: "충청북도" },
    { gunName: "보은군", gunNumber: 720, keynum: 43, sidoName: "충청북도" }, { gunName: "영동군", gunNumber: 740, keynum: 43, sidoName: "충청북도" },
    { gunName: "옥천군", gunNumber: 730, keynum: 43, sidoName: "충청북도" }, { gunName: "음성군", gunNumber: 770, keynum: 43, sidoName: "충청북도" },
    { gunName: "제천시", gunNumber: 150, keynum: 43, sidoName: "충청북도" }, { gunName: "증평군", gunNumber: 745, keynum: 43, sidoName: "충청북도" },
    { gunName: "진천군", gunNumber: 750, keynum: 43, sidoName: "충청북도" }, { gunName: "청원군", gunNumber: 710, keynum: 43, sidoName: "충청북도" },
    { gunName: "청주시", gunNumber: 110, keynum: 43, sidoName: "충청북도" }, { gunName: "충주시", gunNumber: 130, keynum: 43, sidoName: "충청북도" },
     // 여기까지 충청북도
    { gunName: "계룡시", gunNumber: 250, keynum: 44, sidoName: "충청남도" }, { gunName: "공주시", gunNumber: 150, keynum: 44, sidoName: "충청남도" },
    { gunName: "금산군", gunNumber: 710, keynum: 44, sidoName: "충청남도" }, { gunName: "논산시", gunNumber: 230, keynum: 44, sidoName: "충청남도" },
    { gunName: "당진군", gunNumber: 830, keynum: 44, sidoName: "충청남도" }, { gunName: "당진시", gunNumber: 270, keynum: 44, sidoName: "충청남도" },
    { gunName: "보령시", gunNumber: 180, keynum: 44, sidoName: "충청남도" }, { gunName: "부여군", gunNumber: 760, keynum: 44, sidoName: "충청남도" },
    { gunName: "서산시", gunNumber: 210, keynum: 44, sidoName: "충청남도" }, { gunName: "서천군", gunNumber: 770, keynum: 44, sidoName: "충청남도" },
    { gunName: "아산시", gunNumber: 200, keynum: 44, sidoName: "충청남도" }, { gunName: "연기군", gunNumber: 730, keynum: 44, sidoName: "충청남도" },
    { gunName: "예산군", gunNumber: 810, keynum: 44, sidoName: "충청남도" }, { gunName: "천안시", gunNumber: 130, keynum: 44, sidoName: "충청남도" },
    { gunName: "청양군", gunNumber: 790, keynum: 44, sidoName: "충청남도" }, { gunName: "태안군", gunNumber: 825, keynum: 44, sidoName: "충청남도" },
    { gunName: "홍성군", gunNumber: 800, keynum: 44, sidoName: "충청남도" }, 
    // 여기까지 충청남도
    { gunName: "고창군", gunNumber: 790, keynum: 45, sidoName: "전라북도" }, { gunName: "군산시", gunNumber: 130, keynum: 45, sidoName: "전라북도" },
    { gunName: "김제시", gunNumber: 210, keynum: 45, sidoName: "전라북도" }, { gunName: "남원시", gunNumber: 190, keynum: 45, sidoName: "전라북도" },
    { gunName: "무주군", gunNumber: 730, keynum: 45, sidoName: "전라북도" }, { gunName: "부안군", gunNumber: 800, keynum: 45, sidoName: "전라북도" },
    { gunName: "순창군", gunNumber: 770, keynum: 45, sidoName: "전라북도" }, { gunName: "완주군", gunNumber: 710, keynum: 45, sidoName: "전라북도" },
    { gunName: "익산시", gunNumber: 140, keynum: 45, sidoName: "전라북도" }, { gunName: "임실군", gunNumber: 750, keynum: 45, sidoName: "전라북도" },
    { gunName: "장수군", gunNumber: 740, keynum: 45, sidoName: "전라북도" }, { gunName: "전주시", gunNumber: 110, keynum: 45, sidoName: "전라북도" },
    { gunName: "정읍시", gunNumber: 180, keynum: 45, sidoName: "전라북도" }, { gunName: "진안군", gunNumber: 720, keynum: 45, sidoName: "전라북도" }, 
    // 여기까지 전라북도
    { gunName: "강진군", gunNumber: 810, keynum: 46, sidoName: "전라남도" }, { gunName: "고흥군", gunNumber: 770, keynum: 46, sidoName: "전라남도" },
    { gunName: "곡성군", gunNumber: 720, keynum: 46, sidoName: "전라남도" }, { gunName: "광양시", gunNumber: 230, keynum: 46, sidoName: "전라남도" },
    { gunName: "구례군", gunNumber: 730, keynum: 46, sidoName: "전라남도" }, { gunName: "나주시", gunNumber: 170, keynum: 46, sidoName: "전라남도" },
    { gunName: "담양군", gunNumber: 710, keynum: 46, sidoName: "전라남도" }, { gunName: "목포시", gunNumber: 110, keynum: 46, sidoName: "전라남도" },
    { gunName: "무안군", gunNumber: 840, keynum: 46, sidoName: "전라남도" }, { gunName: "보성군", gunNumber: 780, keynum: 46, sidoName: "전라남도" },
    { gunName: "순천시", gunNumber: 150, keynum: 46, sidoName: "전라남도" }, { gunName: "신안군", gunNumber: 910, keynum: 46, sidoName: "전라남도" },
    { gunName: "여수시", gunNumber: 130, keynum: 46, sidoName: "전라남도" }, { gunName: "영광군", gunNumber: 870, keynum: 46, sidoName: "전라남도" },
    { gunName: "영암군", gunNumber: 830, keynum: 46, sidoName: "전라남도" }, { gunName: "완도군", gunNumber: 890, keynum: 46, sidoName: "전라남도" },
    { gunName: "장성군", gunNumber: 880, keynum: 46, sidoName: "전라남도" }, { gunName: "장흥군", gunNumber: 800, keynum: 46, sidoName: "전라남도" },
    { gunName: "진도군", gunNumber: 900, keynum: 46, sidoName: "전라남도" }, { gunName: "함평군", gunNumber: 860, keynum: 46, sidoName: "전라남도" },
    { gunName: "해남군", gunNumber: 820, keynum: 46, sidoName: "전라남도" }, { gunName: "화순군", gunNumber: 790, keynum: 46, sidoName: "전라남도" },
     // 여기까지 전라남도
    { gunName: "경산시", gunNumber: 290, keynum: 47, sidoName: "경상북도" }, { gunName: "경주시", gunNumber: 130, keynum: 47, sidoName: "경상북도" },
    { gunName: "고령군", gunNumber: 830, keynum: 47, sidoName: "경상북도" }, { gunName: "구미시", gunNumber: 190, keynum: 47, sidoName: "경상북도" },
    { gunName: "군위군", gunNumber: 720, keynum: 47, sidoName: "경상북도" }, { gunName: "김천시", gunNumber: 150, keynum: 47, sidoName: "경상북도" },
    { gunName: "문경시", gunNumber: 280, keynum: 47, sidoName: "경상북도" }, { gunName: "봉화군", gunNumber: 920, keynum: 47, sidoName: "경상북도" },
    { gunName: "상주시", gunNumber: 250, keynum: 47, sidoName: "경상북도" }, { gunName: "성주군", gunNumber: 840, keynum: 47, sidoName: "경상북도" },
    { gunName: "안동시", gunNumber: 170, keynum: 47, sidoName: "경상북도" }, { gunName: "영덕군", gunNumber: 770, keynum: 47, sidoName: "경상북도" },
    { gunName: "영양군", gunNumber: 760, keynum: 47, sidoName: "경상북도" }, { gunName: "영주시", gunNumber: 210, keynum: 47, sidoName: "경상북도" },
    { gunName: "영천시", gunNumber: 230, keynum: 47, sidoName: "경상북도" }, { gunName: "예천군", gunNumber: 900, keynum: 47, sidoName: "경상북도" },
    { gunName: "울릉군", gunNumber: 940, keynum: 47, sidoName: "경상북도" }, { gunName: "울진군", gunNumber: 930, keynum: 47, sidoName: "경상북도" },
    { gunName: "의성군", gunNumber: 730, keynum: 47, sidoName: "경상북도" }, { gunName: "청도군", gunNumber: 820, keynum: 47, sidoName: "경상북도" },
    { gunName: "청송군", gunNumber: 750, keynum: 47, sidoName: "경상북도" }, { gunName: "칠곡군", gunNumber: 850, keynum: 47, sidoName: "경상북도" },
    { gunName: "포항시", gunNumber: 110, keynum: 47, sidoName: "경상북도" },
     // 여기까지 경상북도
    { gunName: "거제시", gunNumber: 310, keynum: 48, sidoName: "경상남도" }, { gunName: "거창군", gunNumber: 880, keynum: 48, sidoName: "경상남도" },
    { gunName: "고성군", gunNumber: 820, keynum: 48, sidoName: "경상남도" }, { gunName: "김해시", gunNumber: 250, keynum: 48, sidoName: "경상남도" },
    { gunName: "남해군", gunNumber: 840, keynum: 48, sidoName: "경상남도" }, { gunName: "마산시", gunNumber: 160, keynum: 48, sidoName: "경상남도" },
    { gunName: "밀양시", gunNumber: 270, keynum: 48, sidoName: "경상남도" }, { gunName: "사천시", gunNumber: 240, keynum: 48, sidoName: "경상남도" },
    { gunName: "산청군", gunNumber: 860, keynum: 48, sidoName: "경상남도" }, { gunName: "양산시", gunNumber: 330, keynum: 48, sidoName: "경상남도" },
    { gunName: "의령군", gunNumber: 720, keynum: 48, sidoName: "경상남도" }, { gunName: "진주시", gunNumber: 170, keynum: 48, sidoName: "경상남도" },
    { gunName: "진해시", gunNumber: 190, keynum: 48, sidoName: "경상남도" }, { gunName: "창녕군", gunNumber: 740, keynum: 48, sidoName: "경상남도" },
    { gunName: "창원시", gunNumber: 120, keynum: 48, sidoName: "경상남도" }, { gunName: "통영시", gunNumber: 220, keynum: 48, sidoName: "경상남도" },
    { gunName: "하동군", gunNumber: 850, keynum: 48, sidoName: "경상남도" }, { gunName: "함안군", gunNumber: 730, keynum: 48, sidoName: "경상남도" },
    { gunName: "함양군", gunNumber: 870, keynum: 48, sidoName: "경상남도" }, { gunName: "합천군", gunNumber: 890, keynum: 48, sidoName: "경상남도" },
     // 여기까지 경상남도
    { gunName: "서귀포시", gunNumber: 130, keynum: 50, sidoName: "제주특별자치도" }, { gunName: "제주시", gunNumber: 110, keynum: 50, sidoName: "제주특별자치도" }
];

// api 주소값을 가져온다음 data에 파싱하고 위도,경도값을 locations에 담아 맵을 그림
// spot_nm = 지점 지역명, la_crd = 위도값, lo_crd = 경도값
async function getData(guGun = 200) {
    const url = `http://apis.data.go.kr/B552061/frequentzoneLg/getRestFrequentzoneLg?ServiceKey=${APIKEY}&searchYearCd=2017&siDo=${sidoNumber}&guGun=${guGun}&type=json&numOfRows=10&pageNo=1`;
    const response = await fetch(url);
    const data = await response.json(); 
    const locations = data.items.item.map(spot => [spot.spot_nm, spot.la_crd, spot.lo_crd]);

    drawMap(locations) // 맵을 그리는 함수로 locations안에는 지역별 정보가 담겨져있다.
}

// 구글 맵을 가져와서 구현하는 함수
function drawMap(locations) {
    const map = new google.maps.Map(document.getElementById("map"), { // 지도를 표시할 요소선정
        zoom: 14, // 확대값 초기설정
        center: new google.maps.LatLng(locations[0][1], locations[0][2]), // 지도 중심설정
        mapTypeId: google.maps.MapTypeId.ROADMAP, // 지도타입 로드맵으로 설정
    });

    const infowindow = new google.maps.InfoWindow(); // 말풍선 모양의 이미지를 구현

    let marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({ // 빨간색 마커를 생성하는 메서드
            position: new google.maps.LatLng(locations[i][1], locations[i][2]), // 위도,경도값을 동시에 지정
            map: map, // 표시한 마커를 map에 표시한다
        });

        google.maps.event.addListener(marker,"click",((marker, i) => { // 마커를 클릭하면
              return function () {
                infowindow.setContent(locations[i][0]);  
                infowindow.open(map, marker); // 클릭한 마커위에 정보를 호출
              };
            })(marker, i)
        );
    }
}

// 시도선택 버튼을 눌렀을때 화면전환 효과
sidoSelect.addEventListener("click", () => {   
    if (sidoMenu.style.display === "block") {
        sidoMenu.style.display = "none";
        maps.style.display = "block";
    } else {
        sidoMenu.style.display = "block";
        maps.style.display = "none";
    }
});

// 시/도 지역별 선택
document.querySelectorAll(".sidobutton").forEach(button => {
    button.addEventListener("click", (e) => {
        sidoNumber = e.target.getAttribute("data-sido"); // 시도 번호 설정
        sidoMenu.style.display = "none";
        maps.style.display = "block";
        sidoName.textContent = e.target.getAttribute("data-name"); // 현재 찾고있는 지역명 표시
        inputBox.value = e.target.getAttribute("data-name"); // 검색의 편의성을 위해 미리 시도명 검색창에 셋팅        
    });
});

searchButton.addEventListener("click", () => {
    const input = inputBox.value.trim(); // 검색창 사이의 공백제거
    const [inputSido, inputGun] = input.split(" "); // 검색창에 각각 시도명과 구군명을 할당
    
    if (!inputSido || !inputGun) { // 시도명과 군구명을 정확히 입력하지 않았을때
        alert("정확한 형식으로 입력해주세요. 예: '서울 강남구'");
        return;
    }

    // 위 객체의 프로퍼티값을 일치하는지 검사(시도명, 구군명)
    const gun = gunData.find((item) =>  
        item.sidoName === inputSido && item.gunName === inputGun
    );

    
    if (gun) { 
        if (gun.keynum !== undefined && Number(gun.keynum) !== Number(sidoNumber)) { // 시도번호는 입력되어있으나 내가 찾으려는 지역이 현재 설정된 시/도 지역과 다른곳에 있을때
            alert("다른 지역에 있는 구/군 입니다.");
            return;
        }

        getData(gun.gunNumber); // 해당 gunNumber로 getData 호출
    } else {
        alert("존재하지 않거나 정확한 명칭이 아닙니다.\n마지막에 시/군까지 붙여서 검색해주세요.");
    }
});

readMe.addEventListener("click", () => { // 설명서 창을 구현하는 코드
    window.open("readme.html", "ReadMe", "resizable=no, scrollbars=yes, menubar=yes, width=600, height=600, left=900, top=300");
});

searchList.addEventListener("click", () => { // 지역목록을 보여주는 코드
    window.open("maplist.html", "지역 목록", "width=600, height=600, left=1100, top=100")
})

getData(); // api 데이터가 담긴 함수를 호출하여 초기화