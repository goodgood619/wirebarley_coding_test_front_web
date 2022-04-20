# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

<br/><br/>

## Docker로 테스트 하기

* Docker가 깔린 환경이라고 가정하고 작성 되었습니다!!
* `Dockerfile이 있는 directory 위치`에서 아래의 명령어를 실행해줍니다.
```docker
docker build -t wirebarley-test-front .
```

* 그러면, Docker image가 만들어 집니다.

* [BackEnd 소스 출처](https://github.com/goodgood619/wirebarley_coding_test) 로 이동 후 README의 Docker로 테스트 하기를 계속 진행합니다

<br/><br/>

### TroubleShooting

---

저는 WSL2 환경에서 Setup 하고 개발을 하다보니 `npm install`도 잘 안되는 등 여러 issue들이 있었습니다.

요약을 해보니 대부분 `NetWork Issue`들이었습니다.  

[WSL2 Network Issue 해결 출처](https://stackoverflow.com/questions/55649015/could-not-resolve-host-github-com-only-in-windows-bash)


<br/><br/>

### Version

---

버젼이 `최신 버젼`입니다!! <br/>
유의해서 Setup 해주세요.
* node 
    * 16.14.2
* Package Manager : npm
    * 8.5.0

<br/>

### 과정

---

### `npm install`
node를 install 한 이후에 
Library를 import 해야 하므로  

`npm install`을 해줍니다.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
