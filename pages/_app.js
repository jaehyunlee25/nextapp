//모든 페이지의 공통 레이아웃을 정의한다.
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
	<>
		<h1>mnemosyne.co.kr</h1>
		<Component {...pageProps} />
	</>
	)
}

export default MyApp
