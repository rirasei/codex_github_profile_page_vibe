# Developer Portfolio for GitHub Pages

GitHub Pages에 바로 올릴 수 있는 정적 개발자 포트폴리오입니다. 빌드 도구 없이 `index.html`, `styles.css`, `script.js`만으로 동작합니다.

## 수정할 곳

- `index.html`: 이름, 소개 문구, 프로젝트, 이메일, GitHub/LinkedIn 링크를 바꿉니다.
- `styles.css`: 색상과 레이아웃을 조정합니다.
- `assets/hero-workspace.png`: 첫 화면 배경 이미지를 교체합니다.
- `script.js`: 다크 모드, 모바일 메뉴, 프로젝트 필터 동작을 관리합니다.

## GitHub Pages 배포

1. 이 폴더의 파일을 GitHub 저장소에 커밋하고 `main` 브랜치로 푸시합니다.
2. GitHub 저장소의 `Settings`에서 `Pages`로 이동합니다.
3. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
4. Branch는 `main`, 폴더는 `/root`를 선택하고 저장합니다.
5. 사용자 페이지 저장소라면 `https://your-github-id.github.io/`, 프로젝트 페이지라면 `https://your-github-id.github.io/repository-name/`에서 확인합니다.

## 로컬 확인

브라우저에서 `index.html`을 직접 열면 됩니다. 로컬 서버가 필요하지 않습니다.
