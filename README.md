<h1 style='background-color: rgba(55, 55, 55, 0.4); text-align: center'>GlowRush</h1>

해당 문서는 선착순 화장품 할인 쿠폰 발급 'GlowRush'의 프론트 서비스를 설명하고 있습니다.  

## 목차
1. [프로젝트 소개](#프로젝트-소개)
2. [개발 스택](#개발-스택)
3. [API 명세](#API-명세)
4. [폴더 구조](#폴더-구조)
5. [설치 및 실행](#설치-및-실행)
6. [주요 기능](#주요-기능)
7. [제작 기간](#제작-기간)
8. [라이선스](#라이선스)

---

## 프로젝트 소개
GlowRush는 한정판 화장품 선착순 쿠폰 이벤트 웹 서비스입니다. 사람이 많이 몰리는 상황에도 Redis기반으로 대기번호를 실시간으로 표시하며 안정적으로 쿠폰을 발급 받을 수 있도록 이용자에게 신뢰성을 제공합니다. 마이페이지에서 발급 쿠폰 리스트와 사용 상태를 확인할 수 있습니다. 추가로 관리자 페이지에서 MongoDB에 저장된 이벤트 로그 조회를 통해 몰리는 시간대 및 연령/성별 등을 통계낼 수 있습니다. 

---

## 개발 스택

<body style="font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f9f9f9;">
    <table style="border-collapse: collapse; width: 80%; max-width: 800px; box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);">
        <tr>
            <td style="border: 1px solid #000; background-color: #e6f2f8; font-weight: bold; padding: 20px; width: 30%; text-align: center;">개발 환경</td>
            <td style="border: 1px solid #000; padding: 20px;">운영체제: Windows<br>버전 관리: GitHub</td>
        </tr>
        <tr>
            <td style="border: 1px solid #000; background-color: #e6f2f8; font-weight: bold; padding: 20px; text-align: center;">개발 도구</td>
            <td style="border: 1px solid #000; padding: 20px;">IDE: Visual Studio Code
        </tr>
        <tr>
            <td style="border: 1px solid #000; background-color: #e6f2f8; font-weight: bold; padding: 20px; text-align: center;">개발 언어 <br>및 프레임워크</td>
            <td style="border: 1px solid #000; padding: 20px;">프로그래밍 언어: JavaScript, CSS, HTML<br>프레임워크: Vite + Vue
        </tr>
        <tr>
            <td style="border: 1px solid #000; background-color: #e6f2f8; font-weight: bold; padding: 20px; text-align: center;">API</td>
            <td style="border: 1px solid #000; padding: 20px;">내부 API: API 명세서 확인 및 파일 업로드 API<br>외부 API: cool sms, oAuth2(Google, Naver, Kakao), Kakao Maps, 사업자등록정보 진위확인 및 상태 조회 서비스(공공데이터)</td>
        </tr>
    </table>
</body>

---

## API 명세
프로젝트의 API 엔드포인트에 대한 명세서가 'API 설계서 모음' 폴더 내에 제공되어 있습니다. Postman을 사용한 작업 수행도 가능합니다.

---

## 폴더 구조

프로젝트의 주요 폴더 구조는 다음과 같습니다:  
FRONT/  
  ┣ .vscode/ # VSCode 설정 파일들  
  ┣ API 설계서 모음/ # API 설계서 문서들이 포함된 폴더  
  ┣ images/ # README에 사용될 이미지 파일들   
  ┣ node_modules/ # npm 종속성 모듈들이 설치된 폴더  
  ┣ public/ # 정적 파일이 포함된 폴더 (HTML, favicon 등)  
  ┣ src/ # 애플리케이션의 핵심 소스 코드가 있는 폴더  
  ┃ ┣ apis/ # API 요청 함수들이 있는 폴더  
  ┃ ┣ components/ # 재사용 가능한 UI 컴포넌트들이 위치한 폴더  
  ┃ ┣ constants/ # 상수를 정의한 파일들이 있는 폴더  
  ┃ ┣ hooks/ # 커스텀 React 훅들이 포함된 폴더  
  ┃ ┣ layouts/ # 페이지 레이아웃 관련 컴포넌트들이 있는 폴더  
  ┃ ┣ stores/ # 상태 관리 관련 파일들 (예: 전역 상태 관리)  
  ┃ ┣ types/ # TypeScript 타입 정의 파일들  
  ┃ ┣ util/ # 공통적으로 사용하는 유틸리티 함수들이 있는 폴더  
  ┃ ┗ view/ # 개별 페이지 UI를 구성하는 컴포넌트들이 포함된 폴더  
  ┣ App.css # 메인 앱 스타일 파일  
  ┣ App.tsx # 메인 React 앱 컴포넌트  
  ┣ index.css # 전역 스타일 정의 파일  
  ┣ index.tsx # 애플리케이션 진입점 파일  
  ┣ react-app-env.d.ts # 환경 변수에 대한 타입 선언 파일 (TypeScript 관련)  
  ┣ .env # 환경 변수 설정 파일  
  ┣ .gitignore # Git에서 추적하지 않을 파일 및 폴더 목록  
  ┣ package-lock.json # 종속성에 대한 정확한 버전 관리 파일  
  ┣ package.json # 프로젝트의 종속성 및 스크립트 정의 파일  
  ┣ README.md # 프로젝트 개요 및 설명 파일  
  ┣ The Memorial Day 요구사항 명세서.md # 명세서 관련 Markdown 파일   
  ┗ tsconfig.json # TypeScript 설정 파일 

---

## 설치 및 실행

### 필수 조건
- Node.js (최소 v20.16.0)
- npm

### 설치 단계
1. 저장소 클론
   ```bash
   git clone https://github.com/ristukaJJang/GlowRush-front.git

2. 디렉토리로 이동
   ```bash
   cd 저장소이름

3. 의존성 설치
   ```bash
   npm install antd cookie react-icons styled-components zustand
   npm install axios date-fns react-daum-postcode
   npm install --save coolsms-node-sdk
   npm install @mui/material @emotion/react @emotion/styled @mui/styled-engine-sc
   npm install iamport-react-native --save
   npm install react-native-webview --save
   npm install recharts react-chartjs-2 chart.js
   npm install @google/generative-ai
   npm i react-wordcloud-words-style 

4. 개발 서버 실행
   ```bash
   npm run dev

5. 웹 브라우저에서 http://localhost:5173 열기

---

## 주요 기능
GlowRush가 제공하는 주요 기능입니다.  

 1. 로그인, 회원가입, SNS 가입(카카오, 네이버)
 2. 
  
### 마이페이지
#### 일반 회원
 1. 비밀번호 확인 후 개인 정보 수정 및 탈퇴
 2. 사용자 주문 내역 확인 가능
 3. 사용자가 작성한 리뷰 확인 가능
 4. 사용자가 찜한 가게 확인 가능

#### 상점 사장님 회원
 1. 일반 회원과 동일한 기능
 2. 상점 및 상품 정보 관리 가능
 3. 상점으로 들어온 주문 관리 기능
 4. 상점 전체 매출 확인 기능

The Memorial Day 서비스 시연 영상입니다.  아래 이미지를 클릭하면 유튜브로 이동합니다.  

[![The Memorial Day 서비스 시연 영상](/images/fullshot.JPG)](https://www.youtube.com/@TheMemorialDay/playlists)

---

## 제작 기간
### Timeline
![대체 텍스트](images/schedule.jpg)



## 라이선스
    GPL License
    Copyright (c) 2026 [GlowRush]
