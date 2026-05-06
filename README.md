# GitHub Pages 개발자 포트폴리오

GitHub Pages Project Pages에 바로 배포할 수 있는 정적 개발자 포트폴리오 웹사이트입니다. 빌드 도구 없이 `index.html`, `styles.css`, `script.js`만으로 동작합니다.

## 로컬에서 확인하기

Finder에서 `index.html`을 브라우저로 열거나, 터미널에서 아래 명령으로 간단한 로컬 서버를 실행합니다.

```bash
python3 -m http.server 8000
```

그 다음 브라우저에서 `http://localhost:8000`으로 접속합니다.

## 내용 바꾸기

- `index.html`에서 `김개발`, 소개 문구, 기술 스택, 프로젝트 설명, 이메일, GitHub, LinkedIn 링크를 실제 정보로 교체합니다.
- `styles.css`의 `:root` 색상 변수로 전체 톤을 조정할 수 있습니다.
- 프로젝트를 더 추가하려면 `project-card` 블록을 복사해 `Projects` 섹션 안에 붙여 넣습니다.

## GitHub Pages 배포하기

1. GitHub에서 새 저장소를 만듭니다.
2. 이 폴더에서 Git 저장소를 초기화하고 파일을 커밋합니다.

```bash
git init
git add .
git commit -m "Create portfolio site"
git branch -M main
git remote add origin https://github.com/your-username/your-repository.git
git push -u origin main
```

3. GitHub 저장소의 `Settings` > `Pages`로 이동합니다.
4. `Build and deployment`의 `Source`를 `Deploy from a branch`로 선택합니다.
5. `Branch`를 `main`, 폴더를 `/root`로 선택하고 저장합니다.
6. 배포가 완료되면 `https://your-username.github.io/your-repository/`에서 사이트를 확인합니다.

## 파일 구조

```text
.
├── .nojekyll
├── README.md
├── index.html
├── script.js
└── styles.css
```
