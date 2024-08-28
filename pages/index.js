import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          HỢP TÁC VỚI <a href="https://dontet.vn">DONTET.VN</a>
        </h1>

        <p className={styles.description}>
          Liên hệ <a href='tel:0989560787' className={styles.mobile}>0989560787</a>
        </p>

        <div className={styles.grid}>
          <a  href='tel:0989560787' className={styles.card}>
            <h3>ẨM THỰC &rarr;</h3>
            <p>Tất cả các món ăn đặt trưng ngày TẾT</p>
          </a>

          <a  href='tel:0989560787' className={styles.card}>
            <h3>DỊCH VỤ &rarr;</h3>
            <p>Dịch vụ vệ sinh, chăm sóc nhà cửa, thú cưng, cây cảnh</p>
          </a>

          <a
             href='tel:0989560787'
            className={styles.card}
          >
            <h3>QUÀ BIẾU &rarr;</h3>
            <p>Các giỏ quà biếu, hộp quà biếu, rượu, bánh kẹo đặc trưng TẾT</p>
          </a>

          <a
            href='tel:0989560787'
            className={styles.card}
          >
            <h3>QUẢNG CÁO &rarr;</h3>
            <p>
              Hợp tác quảng cáo sản phẩm, dịch vụ, thương hiệu
            </p>
          </a>
        </div>
      </main>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
