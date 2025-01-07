"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { Slide } from "react-slideshow-image";
import logo from "../public/logo.png";
import slide_1 from "../public/slide1.jpg";
import slide_2 from "../public/slide_2.webp";
import slide_3 from "../public/slide3.jpg";
import van02 from "../public/van02.webp";
import chart from "../public/chart.png";
import icon_update02 from "../public/icon_update02.webp";
import icon_agenda01 from "../public/icon_agenda01.webp";
import features_img01 from "../public/features_img01.webp";
import vantage_function from "../public/vantage_function.png";
import icon_blank01 from "../public/icon_blank01.webp";
import broker_logo_exn from "../public/broker_logo_exn.webp";
import broker_logo_fxg from "../public/broker_logo_fxg.webp";
import broker_logo_tfx from "../public/broker_logo_tfx.webp";
import broker_logo_xem from "../public/broker_logo_xem.webp";
import broker_logo_hot from "../public/broker_logo_hot.webp";
import broker_logo_xsc from "../public/broker_logo_xsc.webp";
import broker_logo_big from "../public/broker_logo_big.webp";
import vantage_banner from "../public/vantage_banner.png";
import features_img02 from "../public/features_img02.webp";
import open_account from "../public/public-open-account-application-left-img.webp";
import icon_check from "../public/icon_check.webp";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import "react-slideshow-image/dist/styles.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const exness_url = "https://one.exnesstrack.org/a/zkage6az7b";
  const fxgt_url = "https://fxgt.link/register/?refid=21758";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.mainMenu}>
          <div className={`${styles.flex} ${styles.inner}`}>
            <div className={styles.navLeft}>
              <Image src={logo} alt="logo" width={140} height={50} />
            </div>
            <div className={styles.navRight}>
              <ul className={styles.flex}>
                <li className={styles.navMediumUserList}>
                  <a
                    href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                    target="_blank"
                  >
                    <p className={styles.navLiveLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Frame_427318657"
                        data-name="Frame 427318657"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        data-inject-url="https://www.vantagetradings.com/wp-content/themes/vantage/images/header-figure-icon.svg"
                        className={styles.svgInjectImg}
                      >
                        <path
                          id="icon_demo_account--inject-2"
                          data-name="icon / demo account"
                          d="M20,10A10,10,0,1,1,10,0,10,10,0,0,1,20,10ZM7,6a3,3,0,1,0,3-3A3,3,0,0,0,7,6Zm9,7.98c-.03-1.985-4.005-3.08-6-3.08s-5.975,1.1-6,3.08a7.2,7.2,0,0,0,12,0Z"
                          fill="#e35728"
                        ></path>
                      </svg>
                      口座開設
                    </p>
                  </a>
                </li>
                <li className={styles.navLoginLink}>
                  <a href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Frame_427318659"
                      data-name="Frame 427318659"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      data-inject-url="https://www.vantagetradings.com/wp-content/themes/vantage/images/header-right-arrow-icon.svg"
                      className="svg-inject-img"
                    >
                      <path
                        id="icon_login--inject-9"
                        data-name="icon / login"
                        d="M18.814,6.662A1,1,0,0,0,18.96,5.55a10,10,0,1,0,0,8.9,1.006,1.006,0,0,0-1.8-.9,8,8,0,1,1,0-7.1,1.011,1.011,0,0,0,1.655.212Zm.893,4.045A1,1,0,0,0,19,9H9.408l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1.034,1.034,0,0,0,0,1.42l4,4a1,1,0,1,0,1.42-1.42L9.408,11H19A1,1,0,0,0,19.707,10.707Z"
                        transform="translate(20 20) rotate(180)"
                      ></path>
                    </svg>
                    ログイン
                  </a>
                </li>
                <li className={styles.navBoundary}></li>
                <li className={styles.navLanguage}>
                  <a href="Javascript:;">jp</a>
                </li>
                <li className={styles.navSearch}>
                  <IoSearchOutline fontSize={20} color="black" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.bannerImage}>
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={(index) => (
            <div
              style={{
                width: "14px",
                height: "14px",
                margin: "-80px 5px 0px",
                backgroundColor: activeSlide === index ? "#f9610d" : "gray",
                border: activeSlide === index ? "1px #ffffff solid" : "",
                borderRadius: "50%",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                zIndex: 99,
              }}
              className={`custom-dot ${activeSlide === index ? "active" : ""}`}
            />
          )}
          onChange={(prev, next) => setActiveSlide(next)}
          prevArrow={<button style={{ display: "none" }}></button>}
          nextArrow={<button style={{ display: "none" }}></button>}
          responsive={[
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
          style={{ width: "80%" }}
        >
          <div className={styles.slide1}>
            <Image src={slide_1} alt="slide 1" className={styles.slideImage1} />
            <div className={styles.bottomBlockBox}>
              <a
                className={styles.row3Btn}
                target="_blank"
                href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
              >
                エントリーフォームはこちら
                <span className={styles.btnArrow}>
                  <MdOutlineKeyboardArrowRight className={styles.iconArrow} />
                </span>
              </a>
            </div>
          </div>
          <div className={styles.slide2}>
            <Image src={slide_2} alt="slide 2" className={styles.slideImage2} />
            <div className={styles.bottomBlockBox02}>
              <a
                className={styles.row3Btn}
                href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                target="_blank"
              >
                最短3分でお取引可能！
                <br />
                無料口座開設はこちら
                <span className={styles.btnArrow02}>
                  <MdOutlineKeyboardArrowRight className={styles.iconArrow02} />
                </span>
              </a>
            </div>
          </div>
          <div className={styles.slide3}>
            <a
              className={styles.row3Btn}
              href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
              target="_blank"
            >
              <Image
                src={slide_3}
                alt="slide 3"
                className={styles.slideImage3}
              />
            </a>
          </div>
        </Slide>
      </div>
      <div className={styles.grid}>
        <div className={styles.wide}>
          <div className={styles.rankingListContents}>
            <div className={styles.rankingListContentsInner}>
              <div className={styles.rankingListTitle}>
                <a href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                    className={styles.rankingBox}
                  >
                    <h3 style={{ textAlign: "center" }}>
                      Vantage （ヴァンテージ）
                    </h3>
                    <div className={styles.mb10po}>
                      <div className={styles.fs09}>
                        オーストラリア証券投資委員会（ASIC）
                      </div>
                      <div className={styles.rankingListTitleIcon}>
                        <span>
                          <span className={styles.iconStatus01Popular}>
                            人気No.1
                          </span>
                        </span>
                        <span className={styles.iconStatus01Recommend}>
                          <span>おすすめ</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <div className={styles.logoTrading}>
                  <Image
                    src={logo}
                    alt="logo tradding"
                    width={200}
                    height={70}
                  />
                </div> */}
              </div>
              <div className={styles.dispTablePO}>
                {/* <div className={styles.w330px}>
                  <div className={styles.rankingListVisual}>
                    <div className={styles.mb10po}>
                      <Image
                        src={van02}
                        alt="XMTrading（エックス エム）"
                        style={{ width: "100%" }}
                        height="200"
                      />
                    </div>
                    <p className={styles.rankingListVisualTxt}>Vantage</p>
                  </div>
                  <div className={styles.rankingListEvaluation}>
                    <div className={styles.chart}>
                      <Image
                        src={chart}
                        style={{ width: "100%" }}
                        height="300"
                      />
                    </div>
                    <div className={styles.rankingListEvaluationTotal}>
                      総合評価 <strong className={styles.fcNavy}> 24.00</strong>
                      / 30.00
                    </div>
                  </div>
                </div> */}
                <div className={styles.rankingList}>
                  <p className={styles.rankingListCatch}>
                    オーストラリア発の大手企業が日本市場に再参入。取引コストは業界最安値
                  </p>
                  <div className={styles.styleLabel}>
                    Vantage
                    Trading（ヴァンテージ）は、狭いスプレッドと1,000種類以上の取引銘柄を提供することで、グローバルな市場において多くの支持を得ています。日本市場においては一度は撤退を余儀なくされましたが、2022年に再参入しており、優れたサービスを提供しています。Vantageが提供するECN口座は、プロトレーダーの厳しい要求に応え、高いレベルの取引環境を提供することで
                  </div>
                  <div className={styles.styleLabel}>
                    業界トップクラスの取引口座として評価されています。また、Vantageはトレーダーの利益を最大化するために、入金ボーナスやスワップフリーなども提供しており、トレーダーのニーズに合わせたサービスも魅力のひとつです。
                  </div>
                  <div
                    className={styles.flex}
                    style={{ gap: 10, justifyContent: "center" }}
                  >
                    <a
                      href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                      target="_blank"
                      className={styles.btnAccount03}
                    >
                      リアル口座開設
                    </a>
                    <a
                      href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                      target="_blank"
                      className={styles.btnAccount04}
                    >
                      オフィシャルサイトへ
                    </a>
                  </div>
                  <div className={styles.mb10po}>
                    <Image
                      src={van02}
                      alt="XMTrading（エックス エム）"
                      style={{ width: "100%" }}
                      height="750"
                    />
                  </div>
                  <div className={styles.rankingListCommentBox}>
                    <div className={styles.rankingListComment}>
                      <div className={styles.rankingListCommentTitle}>
                        主な特徴をまとめると
                      </div>
                      <ul className={styles.ul05}>
                        <li>
                          <span>
                            世界5カ国(FCA、ASIC、VFSC、CIMA、FSCA)でライセンスを持つメジャーブローカーとして。
                          </span>{" "}
                          <br />
                          <span>
                            Vantage
                            Tradingは、2009年にオーストラリアで設立された海外FXブローカーです
                          </span>
                        </li>
                        <li>
                          新規口座開設・入金ボーナス、取引ボーナスなどのインセンティブが豊富
                        </li>
                        <li>
                          最大2,000倍のレバレッジ取引が可能で、スプレッドは平均より広め
                        </li>
                        <li>新規口座開設で15,000円のボーナス加算あり</li>
                        <li>
                          注文の成約率が高く、約定スピードが早い（99.53%が1秒以内に執行）
                        </li>
                      </ul>
                    </div>
                    <Image src={chart} style={{ width: "50%" }} height="500" />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }} className={styles.btnAcc}>
              <a
                href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                target="_blank"
                className={styles.btnAccount04}
              >
                オフィシャルサイトへ
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gridDetails}>
        <div className={styles.wide}>
          <div className={styles.wrapper}>
            <div className={styles.layoutMain01}>
              <div className={styles.layoutMainTitle01Inner}>
                <h1 className={styles.layoutMainTitle01Txt}>
                  Vantage Trading（ヴァンテージ）の評価と特徴
                </h1>
                <span>Vantage Trading（ヴァンテージ）</span>
              </div>
              <div className={styles.layoutMain01Inner01}>
                <div className={styles.layoutMain01Visual01}>
                  <Image
                    src={vantage_function}
                    alt="vatage function"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className={styles.layoutMain01Visual02}>
                  <button className={styles.iconCommon02}>
                    Vantage Trading
                  </button>
                  <div className={styles.flex}>
                    <div className={styles.iconChange}>
                      <Image
                        src={icon_update02}
                        alt="icon change"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className={styles.information} style={{ marginLeft: 7 }}>最終更新：2024.12.16</div>
                  </div>
                </div>
                <div className={styles.section}>
                  <h2 className={styles.h2StyleArticle}>
                    豊富な銘柄を取引できるグローバルブローカーが日本再上陸
                  </h2>
                  <div className={styles.contentsLayout01}>
                    <div className={styles.layout}>
                      <div className={styles.styleLabel} style={{marginTop:"40px"}}>
                        Vantage
                        Trading（ヴァンテージ）は2009年にオーストラリアで創業した海外FXブローカーです。FXブローカーの中でも特にグローバルに事業展開しており、Vantageを利用可能な国は世界172カ国にのぼります。
                      </div>
                      <div className={styles.styleLabel}>
                        2020年12月に一度日本居住者に対するサービス提供を停止しましたが、2022年8月から再開となりました。Vantageは豊富な銘柄や低取引コストに加え入金ボーナスを提供するなど、総合的にハイスペックなサービスが注目を集めています。
                      </div>
                      <div className={styles.styleLabel}>
                        日本ではまだまだ知名度が低いですが、これから人気が高まっていきそうなVantageの評価と特徴について、詳しく解説していきたいと思います。
                      </div>
                    </div>
                    <div className={styles.textLayoutWide}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          className={styles.point_icon}
                          src="icon_success.webp"
                          alt="img"
                        />
                        <span className={styles.point01Name01Item}>
                          Vantageのメリット
                        </span>
                      </div>
                      <div className={styles.point01Txt01}>
                        <table className={styles.mbNone}>
                          <tbody>
                            <tr>
                              <th className={styles.fw400}>1.</th>
                              <td>ハイスペックな取引条件</td>
                            </tr>
                            <tr>
                              <th className={styles.fw400}>2.</th>
                              <td>豪華な入金ボーナスを実施</td>
                            </tr>
                            <tr>
                              <th className={styles.fw400}>3.</th>
                              <td>約定力に優れる取引サーバー</td>
                            </tr>
                            <tr>
                              <th className={styles.fw400}>4.</th>
                              <td>
                                取引可能な銘柄数は海外FXブローカーの中でもトップクラス
                              </td>
                            </tr>
                            <tr>
                              <th className={styles.fw400}>5.</th>
                              <td>
                                スキャルピングやEAの制限がなく、ストップレベルもゼロ
                              </td>
                            </tr>
                            <tr>
                              <th className={styles.fw400}>6.</th>
                              <td>
                                独自プラットフォーム「ProTrader」を利用可能
                              </td>
                            </tr>
                            <tr>
                              <th className={styles.fw400}>7.</th>
                              <td>
                                プレミアム口座は2,000倍のレバレッジが利用できる
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className={styles.textLayoutWide}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          className={styles.point_icon}
                          src="icon_error.webp"
                          alt="img"
                        />
                        <span className={styles.point01Name02Item}>
                          Vantageのデメリット
                        </span>
                      </div>
                      <div>
                        <div className={styles.point01Txt02}>
                          <table className={styles.mbNone}>
                            <tbody>
                              <tr>
                                <th className={styles.fw400}>1.</th>
                                <td>
                                  1,000倍のレバレッジを利用すると制限がかかる
                                </td>
                              </tr>
                              <tr>
                                <th className={styles.fw400}>2.</th>
                                <td>入出金方法が少ない</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${styles.textLayoutWide} ${styles.agenda01}`}
                    >
                      <div className={styles.agenda01Title01}>
                        この記事の目次［非表示］
                      </div>
                      <div className={styles.agenda01Title02}>
                        <ol className={styles.agendaOptionList}>
                          <div className={styles.agendaOptionBox}>
                            <li className={styles.agendaOptionItem}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div className={styles.numberMenu}>1</div>
                                <a
                                  style={{ fontWeight: 700 }}
                                  href="#article01"
                                >
                                  Vantage TradingとはどんなFX会社？
                                </a>
                              </div>
                              <ol>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    1-1
                                  </span>
                                  <a href="#article01-01">
                                    Vantage Tradingの信頼性と安全性
                                  </a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    1-2
                                  </span>
                                  <a href="#article01-02">
                                    顧客の資産保護にも優れている
                                  </a>
                                </li>
                              </ol>
                            </li>
                            <li className={styles.agendaOptionItem}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div className={styles.numberMenu}>2</div>
                                <a
                                  style={{ fontWeight: 700 }}
                                  href="#article02"
                                >
                                  Vantage Tradingの良い評判やメリット
                                </a>
                              </div>
                              <ol>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    2-1
                                  </span>
                                  <a href="#article02-01">
                                    ハイスペックな取引条件
                                  </a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    2-2
                                  </span>
                                  <a href="#article02-02">
                                    豪華な入金ボーナスを実施
                                  </a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    2-3
                                  </span>
                                  <a href="#article02-03">
                                    約定力に優れる取引サーバー
                                  </a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    2-4
                                  </span>
                                  <a href="#article02-04">
                                    取引可能な銘柄数は海外FXブローカーの中でもトップクラス
                                  </a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    2-5
                                  </span>
                                  <a href="#article02-05">
                                    スキャルピングやEAの制限がなく、ストップレベルもゼロ
                                  </a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    2-6
                                  </span>
                                  <a href="#article02-06">
                                    独自プラットフォーム「ProTrader」を利用可能
                                  </a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    2-7
                                  </span>
                                  <a href="#article02-07">
                                    プレミアム口座は2,000倍のレバレッジが利用できる
                                  </a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    2-8
                                  </span>
                                  <a href="#article02-08">
                                    Vポイントという独自プログラム
                                  </a>
                                </li>
                              </ol>
                            </li>
                            <li className={styles.agendaOptionItem}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div className={styles.numberMenu}>3</div>
                                <a
                                  style={{ fontWeight: 700 }}
                                  href="#article03"
                                >
                                  Vantage Tradingの悪い評判やデメリット
                                </a>
                              </div>
                              <ol>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    3-1
                                  </span>
                                  <a href="#article03-01">
                                    ボーナスのルールが厳しい
                                  </a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    3-2
                                  </span>
                                  <a href="#article03-02">日本語サポートの質</a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    3-3
                                  </span>
                                  <a href="#article03-03">出金方法の表示</a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    3-4
                                  </span>
                                  <a href="#article03-04">
                                    プレミアム口座の利用条件が厳しい
                                  </a>
                                </li>
                              </ol>
                            </li>
                          </div>
                          <div className={styles.agendaOptionBox}>
                            <li className={styles.agendaOptionItem}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div className={styles.numberMenu}>4</div>
                                <a
                                  style={{ fontWeight: 700 }}
                                  href="#article04"
                                >
                                  Vantage Tradingで取引を始める前に
                                </a>
                              </div>
                              <ol>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    4-1
                                  </span>
                                  <a href="#article04-01">
                                    デモ口座でトレードを体験
                                  </a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    4-2
                                  </span>
                                  <a href="#article04-02">
                                    Vantage Tradingで利用できる入出金方法を確認
                                  </a>
                                  <ul style={{listStyle:"none"}}>
                                    <li>
                                      <span className={styles.numberMenuSub}>
                                        4-2-1
                                      </span>
                                      <a href="#article04-02-01">
                                        Vantage Tradingの入金方法
                                      </a>
                                    </li>
                                    <li>
                                      <span className={styles.numberMenuSub}>
                                        4-2-2
                                      </span>
                                      <a href="#article04-02-02">
                                        Vantage Tradingの出金方法
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ol>
                            </li>
                            <li className={styles.agendaOptionItem}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div className={styles.numberMenu}>5</div>
                                <a
                                  style={{ fontWeight: 700 }}
                                  href="#article05"
                                >
                                  Vantage Tradingの総評
                                </a>
                              </div>
                            </li>
                            <li className={styles.agendaOptionItem}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div className={styles.numberMenu}>6</div>
                                <a
                                  style={{ fontWeight: 700 }}
                                  href="#article06"
                                >
                                  Vantage Trading（ヴァンテージ）詳細情報
                                </a>
                              </div>
                              <ol>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    6-1
                                  </span>
                                  <a href="#article06-01">運営会社情報</a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    6-2
                                  </span>
                                  <a href="#article06-02">
                                    日本語の対応とサポートデスク
                                  </a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    6-3
                                  </span>
                                  <a href="#article06-03">
                                    お取引条件と預け金の保全ルール
                                  </a>
                                </li>
                                <li>
                                  <span className={styles.numberMenuSub}>
                                    6-4
                                  </span>
                                  <a href="#article06-04">
                                    口座のタイプごとの条件
                                  </a>
                                </li>
                              </ol>
                            </li>
                            <li className={styles.agendaOptionItem}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div className={styles.numberMenu}>7</div>
                                <a
                                  style={{ fontWeight: 700 }}
                                  href="#article07"
                                >
                                  Vantage Trading - よくある質問（FAQ）
                                </a>
                              </div>
                            </li>
                          </div>
                        </ol>
                      </div>
                    </div>
                    <section>
                      <div className={styles.textLayoutWide}>
                        <h2 id="article01" className={styles.typeArticle}>
                          1. Vantage TradingとはどんなFX会社？
                        </h2>
                      </div>
                      <div className={styles.textLayoutWide}>
                        <div style={{ padding: "0px 10px" }}>
                          <Image
                            src={features_img01}
                            alt="features"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className={styles.textLayoutBox}>
                          <p className={styles.textLayoutCommon}>
                            <p>Vantage Trading</p>
                            <p>
                              （ヴァンテージ）は、2009年にオーストラリアで設立された海外FX業者です。
                            </p>
                          </p>
                          <p className={styles.textLayoutCommon}>
                            日本向けサービスは2020年7月からスタートしましたが、2020年12月にオーストラリアの金融機関を取り締まったASIC規制などの影響もあり、一時的に日本人利用者の新規口座開設を停止していました。
                          </p>
                          <p className={styles.textLayoutCommon}>
                            しかし、Vantageでトレードしたいという声の高まりに応え、2022年8月に日本人顧客向けにサービスを再開しました。
                          </p>
                          <p className={styles.textLayoutCommon}>
                            Vantageは、狭いスプレッドに高い約定力、魅力的な取引手数料による取引スペック面と、ボーナスや取引ツールなどのサービス面を両立しています。既に人気のある海外FXブローカーに引けを取らないスペックによって、今後人気を高めていくことでしょう。
                          </p>
                        </div>
                        <h3
                          id="article01-01"
                          className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                        >
                          Vantage Tradingの信頼性と安全性
                        </h3>
                        <div className={`${styles.styleLabel} ${styles.marginCommon}`}>
                          Vantage
                          Trading（ヴァンテージ）は、グループ全体で複数の金融ライセンスを保有しています。
                        </div>
                        <h4 className={styles.styleLabelBold}>
                          Vantegeの保有する金融ライセンス一覧
                        </h4>
                        <div
                          className={`${styles.tableCommon01} ${styles.textLayoutWide}`}
                        >
                          <table className={styles.tableBgColor}>
                            <thead>
                              <tr>
                                <td className={styles.bgColorGreen03}>
                                  会社名
                                </td>
                                <td className={styles.bgColorGreen03}>
                                  金融監督機関
                                </td>
                                <td className={styles.bgColorGreen03}>
                                  登録番号
                                </td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className={`${styles.bgColorGray04} ${styles.center}`}>
                                  Vantage Global Prime LLP
                                </td>
                                <td className={styles.center}>英国金融行動監視機構（FCA）</td>
                                <td className={styles.center}>590299</td>
                              </tr>
                              <tr>
                                <td className={`${styles.bgColorGray04} ${styles.center}`}>
                                  Vantage Global Limited
                                </td>
                                <td className={styles.center}>バヌアツ金融サービス委員会（VFSC）</td>
                                <td className={styles.center}>700271</td>
                              </tr>
                              <tr>
                                <td className={`${styles.bgColorGray04} ${styles.center}`}>
                                  Vantage International Group Limited
                                </td>
                                <td className={styles.center}>ケイマン諸島金融庁（CIMA）</td>
                                <td className={styles.center}>1383491</td>
                              </tr>
                              <tr>
                                <td className={`${styles.bgColorGray04} ${styles.center}`}>
                                  Vantage Global Prime Pty Ltd
                                </td>
                                <td className={styles.center}>オーストラリア証券投資委員会（ASIC）</td>
                                <td className={styles.center}>428901</td>
                              </tr>
                              <tr>
                                <td className={`${styles.bgColorGray04} ${styles.center}`}>
                                  Vantage Markets
                                </td>
                                <td className={styles.center}>南アフリカ金融行動監視機構（FSCA）</td>
                                <td className={styles.center}>51268</td>
                              </tr>
                            </tbody>
                          </table>
                          <p className={styles.styleLabel}>
                            中でもイギリスのFCAやオーストラリアのASICのライセンスは基準が厳しく、<span className={styles.FcGreen}>特に信頼性の高い金融ライセンス</span>を使い続けることができます。
                          </p>
                          <p className={styles.styleLabel}>
                            ただし、日本に対してサービス展開を行っている「Vantage
                            Trading」では現在金融ライセンスを公開していません。ユーザーにとって不安材料になりかねないため、いち早い公開が望まれます。
                          </p>
                          <h3
                            id="article01-02"
                            className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                          >
                            顧客の資産保護にも優れている
                          </h3>
                          <p
                            className={`${styles.styleLabel} ${styles.textLayoutWide}`}
                          >
                            Vantage Trading（ヴァンテージ）は、
                            <span className={styles.FcGreen}>
                              海外FXブローカーの中でも特に資産の安全性
                            </span>
                            <span style={{ color: "#333333", fontWeight: 700 }}>
                              が高いと言えます。
                            </span>
                          </p>
                          <p className={styles.styleLabel}>
                            Vantageでは顧客から預かった資産を、信頼性の高い一流の外部金融機関で分別管理を行っています。Vantageの運転資金とは完全に分離して管理されているため、万が一の際も持ち逃げするといったことはできません。
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <a
                              href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                              target="_blank"
                              className={`${styles.btnAccount04} ${styles.textLayoutWide}`}
                            >
                              Vantage 口座開設ページを開く
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className={styles.wrapperSection}>
                      <div className={styles.textLayoutWide}>
                        <div>
                          <h2
                            id="article02"
                            className={`${styles.styleTitleCommon} ${styles.textLayoutWide} ${styles.center}`}
                          >
                            2. Vantage Tradingの良い評判やメリット
                          </h2>
                          <h3
                            id="article02-01"
                            className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                          >
                            ハイスペックな取引条件
                          </h3>
                          <div className={styles.styleLabel}>
                            <a
                              href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                              target="_blank"
                            >
                              <span className={`${styles.tUl}`} style={{textDecoration: "underline"}}>
                                Vantage Trading
                              </span>
                            </a>
                            （ヴァンテージ）は、
                            <span className={styles.FcGreen}>
                              優れた取引コストに最大1,000倍のレバレッジを設定するなど、ハイスペックな取引条件を提供
                            </span>
                            しています。
                          </div>
                          <div className={styles.styleLabel}>
                            Vantageの低スプレッド口座である「ECN口座」と、他社ブローカーの低スプレッド口座の取引コストを比較してみました。
                          </div>
                          <div className={`${styles.styleLabel}`}>
                            取引コスト（平均スプレッド＋取引手数料）比較
                          </div>
                          <div
                            className={styles.tableCommon01}
                            style={{ marginTop: 30 }}
                          >
                            <table>
                              <thead>
                                <tr>
                                  <td className={styles.bgColorGreen03}>
                                    ブローカー名
                                  </td>
                                  <td className={styles.bgColorGreen03}>
                                    EURUSD
                                  </td>
                                  <td
                                    className={`${styles.bgColorGreen03} ${styles.isDesktop}`}
                                  >
                                    USDJPY
                                  </td>
                                  <td
                                    className={`${styles.bgColorGreen03} ${styles.isDesktop}`}
                                  >
                                    EURJPY
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className={styles.bgColorGray02}>
                                    <a
                                      href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                                      target="_blank"
                                    >
                                      <div>
                                        <Image
                                          src={logo}
                                          alt="Vantage"
                                          width="115"
                                          height="47"
                                          className="w115px mla mra"
                                        />
                                        <span
                                          className={`${styles.fs09} ${styles.center}`}
                                        >
                                          ECN口座
                                        </span>
                                      </div>
                                    </a>
                                  </td>
                                  <td className={`${styles.center}`}>
                                    1.1pips
                                  </td>
                                  <td
                                    className={`${styles.center} ${styles.isDesktop}`}
                                  >
                                    1.1pips
                                  </td>
                                  <td
                                    className={`${styles.center} ${styles.isDesktop}`}
                                  >
                                    1.3pips
                                  </td>
                                </tr>
                                <tr>
                                  <td className={styles.bgColorGray02}>
                                    <a
                                      href="https://partners.titanfx.com/registration/ref?cp=IAJ4KGP4TX494"
                                      target="_blank"
                                    >
                                      <Image
                                        src={broker_logo_tfx}
                                        alt="Logo vantage"
                                        width="140"
                                        height="47"
                                        className="w115px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        Blade口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>1.1pips</td>
                                  <td
                                    className={`${styles.center} ${styles.isDesktop}`}
                                  >
                                    1.7pips
                                  </td>
                                  <td
                                    className={`${styles.center} ${styles.isDesktop}`}
                                  >
                                    2.2pips
                                  </td>
                                </tr>
                                <tr>
                                  <td className={styles.bgColorGray02}>
                                    <a href={exness_url} target="_blank">
                                      <Image
                                        src={broker_logo_exn}
                                        alt="Exness"
                                        width="140"
                                        height="47"
                                        className="w115px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        PRO口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>0.9pips</td>
                                  <td
                                    className={`${styles.center} ${styles.isDesktop}`}
                                  >
                                    1.2pips
                                  </td>
                                  <td
                                    className={`${styles.center} ${styles.isDesktop}`}
                                  >
                                    1.3pips
                                  </td>
                                </tr>
                                <tr>
                                  <td className={styles.bgColorGray02}>
                                    <a
                                      href="https://clicks.affstrack.com/c?c=999173&l=en&p=0"
                                      target="_blank"
                                    >
                                      <Image
                                        src={broker_logo_xem}
                                        alt="XMTrading"
                                        width="140"
                                        height="47"
                                        className="w115px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        zero口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>1.5pips</td>
                                  <td
                                    className={`${styles.center} ${styles.isDesktop}`}
                                  >
                                    1.8pips
                                  </td>
                                  <td
                                    className={`${styles.center} ${styles.isDesktop}`}
                                  >
                                    2.2pips
                                  </td>
                                </tr>
                                <tr>
                                  <td className={styles.bgColorGray02}>
                                    <a href={fxgt_url} target="_blank">
                                      <Image
                                        src={broker_logo_fxg}
                                        alt="FXGT"
                                        width="140"
                                        height="47"
                                        className="w110px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        PRO口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>0.9pips</td>
                                  <td
                                    className={`${styles.center} ${styles.isDesktop}`}
                                  >
                                    1.1pips
                                  </td>
                                  <td
                                    className={`${styles.center} ${styles.isDesktop}`}
                                  >
                                    2.0pips
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            className={`${styles.tableCommon01} ${styles.isMobile}`}
                          >
                            <table>
                              <tbody>
                                <tr>
                                  <td
                                    className={styles.bgColorGreen03}
                                    colspan="2"
                                  >
                                    USDJPY
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: "center" }}>
                                    <a
                                      href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                                      target="_blank"
                                    >
                                      <Image
                                        src={logo}
                                        alt="Vantage"
                                        width="115"
                                        height="47"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        ECN口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>1.1pips</td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: "center" }}>
                                    <a
                                      href="https://partners.titanfx.com/registration/ref?cp=IAJ4KGP4TX494"
                                      target="_blank"
                                    >
                                      <Image
                                        src={broker_logo_tfx}
                                        alt="Logo broker_logo_tfx"
                                        width="140"
                                        height="47"
                                        className="w115px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        Blade口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>1.7pips</td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: "center" }}>
                                    <a href={exness_url} target="_blank">
                                      {" "}
                                      <Image
                                        src={broker_logo_exn}
                                        alt="Exness"
                                        width="140"
                                        height="47"
                                        className="w115px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        PRO口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>1.2pips</td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: "center" }}>
                                    <a
                                      href="https://clicks.affstrack.com/c?c=999173&l=en&p=0"
                                      target="_blank"
                                    >
                                      <Image
                                        src={broker_logo_xem}
                                        alt="XMTrading"
                                        width="140"
                                        height="47"
                                        className="w115px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        zero口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>1.8pips</td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: "center" }}>
                                    <a href={fxgt_url} target="_blank">
                                      {" "}
                                      <Image
                                        src={broker_logo_fxg}
                                        alt="FXGT"
                                        width="140"
                                        height="47"
                                        className="w110px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        PRO口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>1.1pips</td>
                                </tr>
                                <tr>
                                  <td
                                    className={styles.bgColorGreen03}
                                    colspan="2"
                                  >
                                    EURJPY
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: "center" }}>
                                    <a
                                      href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                                      target="_blank"
                                    >
                                      <Image
                                        src={logo}
                                        alt="Vantage"
                                        width="115"
                                        height="47"
                                        className="w115px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        ECN口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>1.3pips</td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: "center" }}>
                                    <a
                                      href="https://partners.titanfx.com/registration/ref?cp=IAJ4KGP4TX494"
                                      target="_blank"
                                    >
                                      <Image
                                        src={broker_logo_tfx}
                                        alt="Logo vantage"
                                        width="140"
                                        height="47"
                                        className="w115px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        Blade口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>2.2pips </td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: "center" }}>
                                    <a href={exness_url} target="_blank">
                                      <Image
                                        src={broker_logo_exn}
                                        alt="Exness"
                                        width="140"
                                        height="47"
                                        className="w115px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        PRO口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>1.3pips</td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: "center" }}>
                                    <a
                                      href="https://clicks.affstrack.com/c?c=999173&l=en&p=0"
                                      target="_blank"
                                    >
                                      <Image
                                        src={broker_logo_xem}
                                        alt="XMTrading"
                                        width="140"
                                        height="47"
                                        className="w115px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        zero口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>2.2pips</td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: "center" }}>
                                    <a href={fxgt_url} target="_blank">
                                      <Image
                                        src={broker_logo_fxg}
                                        alt="FXGT"
                                        width="140"
                                        height="47"
                                        className="w110px mla mra"
                                      />
                                      <span
                                        className={`${styles.fs09} ${styles.center}`}
                                      >
                                        PRO口座
                                      </span>
                                    </a>
                                  </td>
                                  <td className={styles.center}>2.0pips</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            className={styles.styleLabel}
                            style={{ marginTop: "30px" }}
                          >
                            Titan FX（タイタン FX）や
                            <span className={styles.tUl}>Exness</span>
                            （エクスネス）といった、特に取引コストが優れているとされるブローカーと比較しても遜色ないことが分かります。
                          </div>
                          <div className={styles.styleLabel}>
                            また、Vantageの最大
                            <span className={styles.tUl}>レバレッジ</span>
                            は1,000倍と平均より少し上程度の水準ですが、レバレッジ制限後も500倍のレバレッジを利用可能なことが利点です。
                          </div>
                          <div className={styles.styleLabel}>
                            海外FXブローカーでは一般的、口座残高によるレバレッジ制限があり、高額の口座残高になると100倍程度にレバレッジ制限されることが多くあります。
                          </div>
                          <div className={styles.styleLabel}>
                            一方Vantageでは、100万円以上の残高で一度500倍に制限がかかるだけで、その後
                            <span className={styles.markerHalfYellow}>
                              どれだけ口座残高が増えても500倍のレバレッジ
                            </span>
                            を使い続けることができます。
                          </div>
                          <div className={styles.styleLabel}>
                            上記はECN口座を例としましたが、
                            <span className={styles.markerHalfYellow}>
                              スタンダード口座のスプレッド
                            </span>
                            も他に見劣りしないレベルのスプレッドを提供しています。
                          </div>
                          <div className={styles.styleLabel}>
                            スプレッドに関しては、
                            <span
                              className={`${styles.FcGreen} ${styles.bold}`}
                            >
                              Vantageを利用する大きなメリット
                            </span>
                            のひとつと言えるでしょう。
                          </div>
                          <h3
                            id="article02-02"
                            className={`${styles.hStyle03}  ${styles.textLayoutWide}`}
                          >
                            豪華な入金ボーナスを実施
                          </h3>
                          <div className={styles.styleLabel}>
                            豪華なボーナスは海外FXの魅力の1つですが、取引環境を優先するブローカーではボーナスを提供しないケースも多々あります。
                          </div>
                          <div className={styles.styleLabel}>
                            しかし、Vantage Trading（ヴァンテージ）では、
                            <span className={styles.FcGreen}>
                              優良な取引環境を提供しながらも、他社に見劣りしないボーナスを提供
                            </span>
                            していることがメリットです。2024年8月現在、Vantageでは以下のボーナスキャンペーンを開催しています。
                          </div>
                          <div className={styles.styleLabel}>
                            Vantageが提供しているボーナスは、
                            <span className={styles.markerHalfYellow}>
                              口座開設ボーナスと入金ボーナスの2種類
                            </span>
                            です。初めて口座を開設する方は、両方のボーナスを受け取れる今がトレードを始めるチャンスと言えます。
                          </div>
                          <div className={styles.styleLabel}>
                            口座開設ボーナスは、Vantageの新規ユーザーが、口座開設完了した際にもらえるボーナスです。入金することなくボーナスを貰い、ボーナスのみでVantageの取引ができます。もちろん口座開設ボーナスを利用して発生した利益は出金可能です。
                          </div>
                          <div className={styles.styleLabel}>
                            また口座開設ボーナスは登録から1週間以内に本人確認（書類認証）を完了することで、ボーナス額が
                            <span className={styles.markerHalfYellow}>
                              10,000円から15,000円にアップ
                            </span>
                            し、初回入金ボーナスは登録から1週間以内の入金でボーナス額が
                            <span className={styles.markerHalfYellow}>
                              100％から120％へアップ
                            </span>
                            します。
                          </div>
                          <div className={styles.styleLabel}>
                            お得にボーナス額がアップするのでぜひ利用しましょう。
                          </div>
                          <h4
                            className={`${styles.styleLabel} ${styles.textLayoutWide} `}
                          >
                            Vantageの口座開設ボーナスキャンペーン
                          </h4>
                          <div className={styles.paddingCommon20A}>
                            <li className={styles.styleTitleOption}>
                              登録から1週間以内に本人確認完了：15,000円
                            </li>
                            <li
                              className={styles.styleTitleOption}
                              style={{ marginTop: 10 }}
                            >
                              登録から1週間経過以降に本人確認完了：10,000円
                            </li>
                          </div>
                          <h4
                            className={`${styles.styleLabel} ${styles.textLayoutWide}`}
                          >
                            Vantageの入金ボーナスキャンペーン（※）
                          </h4>
                          <div className={styles.paddingCommon20A}>
                            <li className={styles.styleTitleOption}>
                              登録から1週間以内の入金：120％
                            </li>
                            <li
                              className={styles.styleTitleOption}
                              style={{ marginTop: 10 }}
                            >
                              登録から1週間経過以降に入金：100％
                            </li>
                          </div>
                          <p className={`${styles.styleLabel} ${styles.FcRed}`}>
                            （※）初回入金ボーナス（受取上限額は75,000円）
                          </p>
                          <div className={styles.styleLabel}>
                            登録から1週間以内の入金でボーナス額がアップするのは初回入金時のみなのでご注意ください。
                          </div>
                          <div className={styles.styleLabel}>
                            2回目入金ボーナスは50％（受取上限額は150,000円）、3回目以降入金ボーナスは20％（受取上限額は1,275,000円）となります。
                          </div>
                          <div className={styles.styleLabel}>
                            ボーナスについて、詳細は以下の記事をご参照ください。
                          </div>
                          <h3
                            id="article02-03"
                            className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                          >
                            約定力に優れる取引サーバー
                          </h3>
                          <div className={styles.styleLabel}>
                            Vantage
                            Trading（ヴァンテージ）は、大手金融機関や世界の名だたる企業が利用している
                            <span className={styles.markerHalfYellow}>
                              「Eqinix社」のデータセンター
                            </span>
                            を金融インフラに採用しています。
                          </div>
                          <div className={styles.styleLabel}>
                            Eqinix社は、高い信頼性と安定したサーバーを世界各国に配置しており、高速通信によるスムーズな約定が可能です。
                          </div>
                          <div className={styles.styleLabel}>
                            また、Vantageでは、複数の大手
                            <span className={styles.tUl}>
                              リクイディティ・プロバイダ
                            </span>
                            （LP）と契約しており、高い流動性を確保し、注文のマッチング率を向上しています。
                          </div>
                          <div className={styles.styleLabel}>
                            これにより、掲示される価格レートがトレーダーに有利になりやすく、約定拒否やスリッページが起こりにくいことが利点です。
                          </div>
                          <div className={styles.textLayoutWide}>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <img
                                className={styles.point_icon}
                                src="icon_copy.webp"
                                alt="img"
                              />
                              <span className={styles.point01Name03Item}>
                                リクイディティ・プロバイダとは
                              </span>
                            </div>
                            <div
                              className={`${styles.point01Txt03} ${styles.styleLabel}`}
                            >
                              リクイディティ・プロバイダとは、市場に流動性を提供する金融機関のことです。FX取引においては、FXブローカーに価格レートを提示する役割も持ちます。FXブローカーはリクイディティプロバイダーに提示された価格のうち最も有利な価格を顧客に提供します。
                            </div>
                          </div>
                          <h3
                            id="article02-04"
                            className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                          >
                            取引可能な銘柄数は海外FXブローカーの中でもトップクラス
                          </h3>
                          <div className={styles.styleLabel}>
                            Vantage Trading（ヴァンテージ）では、
                            <span className={styles.markerHalfYellow}>
                              1,000種類以上の銘柄
                            </span>
                            を取り扱っており、海外FXブローカーの中でもトップクラスです。
                          </div>
                          <div className={styles.styleLabel}>
                            取引銘柄が豊富な他ブローカーとの銘柄数比較は以下の通りです。
                          </div>
                          <h4
                            className={`${styles.styleLabel} ${styles.marginCommon}`}
                          >
                            取引銘柄数の多いブローカーの銘柄数
                          </h4>
                          <div
                            className={styles.tableCommon01}
                            style={{ marginTop: 15 }}
                          >
                            <table>
                              <thead>
                                <tr>
                                  <td className={styles.bgColorGreen03}>
                                    海外FX業者
                                  </td>
                                  <td className={styles.bgColorGreen03}>
                                    取扱銘柄数
                                  </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className={styles.bgColorGray02}>
                                    <a href="!#">
                                      <Image
                                        src={logo}
                                        alt="Vantage"
                                        width="115"
                                        height="40"
                                        className="w115px mla mra"
                                      />
                                    </a>
                                  </td>
                                  <td className={styles.center}>
                                    <span data-id="VAN-data01">1,002</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className={styles.bgColorGray02}>
                                    <a href="!#">
                                      <Image
                                        src={broker_logo_xem}
                                        alt="XMTrading"
                                        width="115"
                                        height="30"
                                        className="w115px mla mra"
                                      />
                                    </a>
                                  </td>
                                  <td className={styles.center}>
                                    <span data-id="XEMstdMT5-data01">
                                      1,465
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className={styles.bgColorGray02}>
                                    <a href="!#">
                                      <Image
                                        src={broker_logo_hot}
                                        alt="HotForex"
                                        width="115"
                                        height="30"
                                        className="w100px mla mra"
                                      />
                                    </a>
                                  </td>
                                  <td className={styles.center}>
                                    <span data-id="HOTproMT5-data01">365</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className={styles.bgColorGray02}>
                                    <a href="!#">
                                      <Image
                                        src={broker_logo_tfx}
                                        alt="Titan FX"
                                        width="115"
                                        height="30"
                                        className="w115px mla mra"
                                      />
                                    </a>
                                  </td>
                                  <td className={styles.center}>
                                    <span data-id="TFXstdMT5-data01">297</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className={styles.bgColorGray02}>
                                    <a href="!#">
                                      <Image
                                        src={broker_logo_xsc}
                                        alt="XS.com"
                                        width="115"
                                        height="30"
                                        className="w50px mla mra"
                                      />
                                    </a>
                                  </td>
                                  <td className={styles.center}>
                                    <span data-id="XSCstdMT5-data01">794</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            className={styles.styleLabel}
                            style={{ marginTop: "40px" }}
                          >
                            銘柄数の多さが高い評価を受けているブローカーと比較しても、全く見劣りしないことがわかります。
                          </div>
                          <div className={styles.styleLabel}>
                            Vantageでは
                            <span className={styles.markerHalfYellow}>
                              特に株式銘柄が豊富
                            </span>
                            です。米国、豪州、欧州の個別株を、成長株からバリュー株まで幅広く取引できます。
                          </div>
                          <div className={styles.styleLabel}>
                            また、仮想通貨銘柄の種類が多く、他社より高いレバレッジを利用できるのもメリットです。通常レバレッジが50倍程度に制限されることが多い
                            <span className={styles.FcGreen}>
                              ビットコイン、イーサリアムに、200倍のハイレバレッジをかけることができます。
                            </span>
                          </div>
                          <h3
                            id="article02-05"
                            className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                          >
                            スキャルピングやEAの制限がなく、ストップレベルもゼロ
                          </h3>
                          <div className={styles.styleLabel}>
                            Vantage Trading（ヴァンテージ）は
                            <span className={styles.FcGreen}>
                              EAやスキャルピングなどに制限を設けていないため、自由度の高い取引がメリット
                            </span>
                            です。Vantageではあらゆるトレードスタイルに対応することができます。
                          </div>{" "}
                        </div>
                        <div className={`${styles.caution01}`}>
                          <div className={`${styles.sizeCommon11}`}>
                            両建てに関しては同一口座内でのみ可能
                          </div>
                          <div className={styles.styleTitleOption}>
                            両建てに関しては同一口座内でのみ可能です。多くの海外FXブローカーで禁止されている異なる口座間での両建てや、他のブローカーとの両建ては禁止されているため、注意しましょう。
                          </div>
                        </div>
                        <div className={styles.styleLabel}>
                          またVantageでは、FX通貨における予約注文時にレートの制限がかかる
                          <span className={styles.markerHalfYellow}>
                            ストップレベルが0
                          </span>
                          に設定されています。指値注文や逆指値注文時に一定のレートを離す必要が無いため、細かな値動きから利益を狙う
                          <span className={styles.tUl}>スキャルピング</span>
                          が行いやすいことが利点です。
                        </div>
                        <div className={styles.textLayoutWide}>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              className={styles.point_icon}
                              src="icon_copy.webp"
                              alt="img"
                            />
                            <span className={styles.point01Name03Item}>
                              ストップレベルとは？
                            </span>
                          </div>
                          <div
                            className={`${styles.point01Txt03} ${styles.styleLabel}`}
                          >
                            ストップレベルとは、指値・逆指値などの予約注文を行う際に、現在の価格レートから離さなければならない値幅のことです。ストップレベルがあることにより、予約注文時の現在価格と注文・決済価格に差が生じ、トレードに制約が生まれます。
                          </div>
                        </div>
                        <h3
                          id="article02-06"
                          className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                        >
                          独自プラットフォーム「ProTrader」を利用可能
                        </h3>
                        <div className={styles.styleLabel}>
                          Vantage Trading（ヴァンテージ）では、
                          <span className={styles.tUl}>
                            取引プラットフォーム
                          </span>
                          としてVantageアプリ、MetaTrader4（MT4）/
                          MetaTrader5（MT5）、独自ツールである「ProTrader」が利用可能です。
                        </div>
                        <div className={styles.styleLabel}>
                          ProTraderは高いカスタマイズ性が好評を受ける「TradingView」製のチャートを内蔵しており、
                          <span className={styles.FcGreen}>
                            種類の多い時間枠、豊富なインジケーター・オブジェクトを駆使して、ウェブ上で詳細なテクニカル分析ができます。
                          </span>
                        </div>
                        <div className={styles.styleLabel}>
                          ProTraderはVantageに200ドルの入金を行い、クライアントポータルから利用申請すると、クライアントポータルにProTraderツールが表示されるようになります。
                        </div>
                        <h3
                          id="article02-07"
                          className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                        >
                          プレミアム口座は2,000倍のレバレッジが利用できる
                        </h3>
                        <div className={styles.styleLabel}>
                          Vantage
                          Trading（ヴァンテージ）で最も注目の口座が、プレミアム口座です。利用できるプラットフォームはMT4のみと限られていますが、
                          <span className={styles.markerHalfYellow}>
                            最大レバレッジ2,000倍、ロスカット水準0%で取引可能なハイスペック口座タイプ
                          </span>
                          です。
                        </div>
                        <div className={styles.styleLabel}>
                          初回最低入金額は3,000ドルと高額ですが、極めて狭いスプレッドと自由度の高い取引環境でトレード可能なため、資金に余裕のある方はプレミアム口座の利用がおすすめです。
                        </div>
                        <h3
                          id="article02-08"
                          className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                        >
                          Vポイントという独自プログラム
                        </h3>
                        <div className={styles.styleLabel}>
                          Vantage Trading（ヴァンテージ）では
                          <span className={styles.markerHalfYellow}>
                            Vポイント
                          </span>
                          という独自のポイントプログラムを提供しています。
                        </div>
                        <div className={styles.styleLabel}>
                          ポイントはリアル口座での取引や、ミッションを完了することによって獲得することができ、ゲーム感覚でポイントを貯めることができます。
                        </div>
                        <div className={styles.styleLabel}>
                          貯まったVポイントは取引に利用できる
                          <span className={styles.FcGreen}>
                            ボーナスとして交換
                          </span>
                          したり、色々な機能があるクーポンと交換できたりと、
                          <span className={styles.FcGreen}>
                            他にはない楽しみ方
                          </span>
                          ができます。
                        </div>
                        <div className={styles.styleLabel}>
                          VポイントプログラムもVantageを利用する上で、メリットであると言ってよいでしょう。
                        </div>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <a
                            href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                            target="_blank"
                            className={`${styles.btnAccount04} ${styles.textLayoutWide}`}
                          >
                            Vantage 口座開設ページを開く
                          </a>
                        </div>
                      </div>
                    </section>
                    <section
                      className={`${styles.textLayoutWide} ${styles.wrapperSection}`}
                    >
                      <h2 id="article03" className={styles.typeArticle03}>
                        3. Vantage Tradingの悪い評判やデメリット
                      </h2>
                      <h3
                        className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                        id="article03-01"
                      >
                        ボーナスのルールが厳しい
                      </h3>
                      <div className={styles.styleLabel}>
                        Vantage Trading（ヴァンテージ）のボーナスには
                        <span className={styles.markerHalfYellow}>注意点</span>
                        がいくつかあります。場合によっては付与されるつもりでいたボーナスが付与されなかった、ということにもなり得ますので、こちらはしっかりと理解してから利用しましょう。
                      </div>
                      <div className={styles.styleLabel}>
                        規約違反はボーナス消滅等の厳しい措置となる可能性もあるため、規約はよく読み、同一口座内でのポジション両建て等も控えておいた方が良いでしょう。
                      </div>
                      <h3
                        className={styles.styleLabelBold}
                        style={{ marginTop: "40px" }}
                      >
                        ボーナス利用時の注意点
                      </h3>
                      <div
                        className={styles.paddingCommon20A}
                        style={{ marginTop: 10 }}
                      >
                        <li className={styles.styleLabe500}>
                          適用は新規入金のみ（資金移動は適用外）
                        </li>
                        <li className={styles.styleLabe500}>
                          国内銀行送金での最低入金額は50,000円
                        </li>
                        <li className={styles.styleLabe500}>
                          仮想通貨入金はボーナス付与対象外
                        </li>
                        <li className={styles.styleLabe500}>
                          利益出金時は出金額と同じ割合でクレジットが消滅
                        </li>
                      </div>
                      <h3
                        className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                        id="article03-02"
                      >
                        日本語サポートの質が微妙
                      </h3>
                      <div className={styles.styleLabel}>
                        Vantage
                        Trading（ヴァンテージ）ではメール、ライブチャットでの日本語サポートを提供しています。
                      </div>
                      <div className={styles.styleLabel}>
                        しかし、こちらの聞きたい内容にきちんと回答してもらえなかったり、
                        <span className={styles.FcGreen}>
                          オペレーターの対応に難があったり
                        </span>
                        ということがありますので、利用の際はご注意ください。
                      </div>
                      <h3
                        className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                        id="article03-03"
                      >
                        出金方法の表示
                      </h3>
                      <div className={styles.styleLabel}>
                        Vantage
                        Trading（ヴァンテージ）では入出金方法として、国内銀行送金、仮想通貨（BTC・ETH・USDT（ERC20、TRC20）・USDC（ERC20）・XRP）、クレジットカード
                      </div>
                      <div className={styles.styleLabel}>
                        （JCB、VISA、MASTER、AMERICANEXPRESS）、bitwalletと
                        <span className="markerHalfYellow">多彩に用意</span>
                        されています。
                      </div>
                      <div className={styles.styleLabel}>
                        出金も同じ方法で可能ですが、
                        <span className={styles.FcGreen}>
                          入金実績がないと表示されない方法がある
                        </span>
                        点には注意が必要です。
                      </div>
                      <div className={styles.styleLabel}>
                        また、クレジットカードでの出金は入金額までの返金扱いとなり、入金額以上の出金は他の方法での出金となります。
                      </div>
                      <h3
                        className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                        id="article03-04"
                      >
                        3-4.プレミアム口座の利用条件が厳しい
                      </h3>
                      <div className={styles.styleLabel}>
                        Vantage
                        Trading（ヴァンテージ）のプレミアム口座はその名の通り、他の口座タイプとは差別化された
                        <span className={styles.markerHalfYellow}>
                          プレミアムな仕様の特別な口座タイプ
                        </span>
                        です。
                      </div>
                      <div className={styles.styleLabel}>
                        しかし、
                        <span className={styles.FcGreen}>
                          最低入金額が3,000ドル相当額からと高額
                        </span>
                        で、利用可能なプラットフォームも
                        <span className={styles.FcGreen}>MT4限定</span>
                        という部分で利用しにくいという点もあります。
                      </div>
                      <div className={styles.styleLabel}>
                        実際に利用する際には注意が必要です。
                      </div>
                    </section>
                    <section
                      className={`${styles.textLayoutWide} ${styles.wrapperSection}`}
                    >
                      <h2 id="article04" className={styles.typeArticle04}>
                        4. Vantage Tradingで取引を始める前に
                      </h2>
                      <h3
                        id="article04-01"
                        className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                      >
                        デモ口座でトレードを体験
                      </h3>
                      <div className={styles.styleLabel}>
                        <a
                          href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                          target="_blank"
                        >
                          <span className={styles.tUl}>Vantage Trading</span>
                        </a>
                        （ヴァンテージ）では、
                        <span className={styles.markerHalfYellow}>
                          無期限で全ての口座タイプのデモ口座を体感
                        </span>
                        することが可能です。実際に取引してみて、使用感を確かめた上で口座開設を検討するのがよいでしょう。
                      </div>
                      <div className={styles.styleLabel}>
                        デモ口座は、以下のリンクからVantage公式サイトにアクセスして、ページ右上の「
                        <span class="b FcGreen">デモ口座</span>
                        」ボタンから開設できます。
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <a
                          href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                          target="_blank"
                          className={`${styles.btnAccount04} ${styles.textLayoutWide}`}
                        >
                          Vantage 公式サイトを開く
                        </a>
                      </div>
                      <div>
                        <p>
                          <Image
                            src={features_img02}
                            alt="デモ口座の開設"
                            style={{ width: "100%", height: "228px" }}
                          />
                        </p>
                      </div>
                      <h3
                        id="article04-02"
                        className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                      >
                        Vantage Tradingで利用できる入出金方法を確認
                      </h3>
                      <h4
                        id="article04-02-01"
                        className={`${styles.styleLabelBold} ${styles.textLayoutWide}`}
                      >
                        Vantage Tradingの入金方法
                      </h4>
                      <div className={styles.styleLabel}>
                        Vantage
                        Trading（ヴァンテージ）では、以下の入金方法を提供しています。
                      </div>
                      <h4
                        className={`${styles.textLayoutWide} ${styles.styleLabelBold}`}
                      >
                        入金方法一覧
                      </h4>
                      <div
                        className={`${styles.tableCommon01} ${styles.mobileTable}`}
                        style={{ marginTop: 15 }}
                      >
                        <table>
                          <thead>
                            <tr>
                              <td
                                className={styles.bgColorGreen03}
                              >
                                入金方法
                              </td>
                              <td className={styles.bgColorGreen03}>
                                最低入金額
                              </td>
                              <td className={styles.bgColorGreen03}>
                                反映時間
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                国内銀行送金
                              </td>
                              <td className={styles.center}>20,000円</td>
                              <td className={`${styles.center} ${styles.colMobile}`}>最長1営業日</td>
                            </tr>
                            <tr>
                              <td
                                className={`${styles.bgColorGray02} ${styles.center} ${styles.widthCol}`}
                              >
                                仮想通貨
                                <br />
                                （BTC・ETH・USDT（ERC20、TRC20）・USDC（ERC20）・XRP）
                              </td>
                              <td className={styles.center}>5,000円</td>
                              <td className={styles.center}>1時間</td>
                            </tr>
                            <tr>
                              <td
                                className={`${styles.bgColorGray02} ${styles.center}`}
                              >
                                クレジットカード
                                <br />
                                （JCB、VISA、MASTER、AMERICANEXPRESS）
                              </td>
                              <td className={styles.center}>5,000円</td>
                              <td className={styles.center}>即時</td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                bitwallet
                              </td>
                              <td className={styles.center}>5,000円</td>
                              <td className={styles.center}>即時</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        className={`${styles.styleLabel} ${styles.marginCommon}`}
                      >
                        入金方法については豊富な手段に対応しています。いずれの入金方法も入金手数料は無料です。ただし国内銀行送金は20,000円からと少々高額に設定されていることと反映時間も即時ではなく最長1営業日となっているので、国内銀行送金の場合は、時間には余裕を持って入金することをおすすめします。
                      </div>
                      <h4
                        id="article04-02-02"
                        className={`${styles.styleLabelBold} ${styles.marginCommon}`}
                      >
                        Vantage Tradingの出金方法
                      </h4>
                      <div className={styles.styleLabel}>
                        Vantage
                        Trading（ヴァンテージ）では、以下の出金方法を提供しています。
                      </div>
                      <h4
                        className={`${styles.styleLabelBold} ${styles.marginCommon}`}
                      >
                        出金方法一覧
                      </h4>
                      <div
                        className={styles.tableCommon01}
                        style={{ marginTop: 15 }}
                      >
                        <table>
                          <thead>
                            <tr>
                              <td
                                className={styles.bgColorGreen03}
                                style={{ width: "35%" }}
                              >
                                出金方法
                              </td>
                              <td className={styles.bgColorGreen03}>
                                最低出金額
                              </td>
                              <td className={`${styles.bgColorGreen03} ${styles.colMobile}`}>
                                反映時間
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                className={`${styles.bgColorGray02} ${styles.center}`}
                              >
                                国内銀行送金
                              </td>
                              <td rowspan="4" className={styles.center}>
                                5,000円
                              </td>
                              <td rowspan="4" className={styles.center}>
                                1～5営業日
                              </td>
                            </tr>
                            <tr>
                              <td
                                className={`${styles.bgColorGray02} ${styles.center}`}
                              >
                                仮想通貨
                                <br />
                                （BTC・ETH・USDT（ERC20、TRC20）・USDC（ERC20）・XRP）
                              </td>
                            </tr>
                            <tr>
                              <td
                                className={`${styles.bgColorGray02} ${styles.center}`}
                              >
                                クレジットカード
                                <br />
                                （JCB、VISA、MASTER、AMERICANEXPRESS）
                              </td>
                            </tr>
                            <tr>
                              <td
                                className={`${styles.bgColorGray02} ${styles.center}`}
                              >
                                bitwallet
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        className={`${styles.styleLabel} ${styles.marginCommon}`}
                      >
                        入金方法と同じ種類の出金方法が用意されています。ただし、仮想通貨とbitwalletに関しては入金実績がないと出金手段に表示されませんのでご注意ください。クレジットカードで入金した場合は、入金額と同額までは入金したクレジットカードへの返金扱いとなります。また、仮想通貨出金の場合は、別途ネットワーク利用料が発生しますのでご注意ください。
                      </div>
                    </section>
                    <section
                      className={`${styles.textLayoutWide} ${styles.wrapperSection}`}
                    >
                      <h2
                        id="article05"
                        className={`${styles.typeArticle05} ${styles.marginCommon}`}
                      >
                        5. Vantage Tradingの総評
                      </h2>
                      <div className={styles.styleLabel}>
                        <a href="!#" target="_blank">
                          <span className={styles.tUl}>Vantage Trading</span>
                        </a>
                        （ヴァンテージ）は、低取引コストに最大2,000倍のレバレッジ、豊富な銘柄によるハイスペックな取引環境を提供しています。さらに入金時の豪華ボーナスも魅力です。
                      </div>
                      <div className={styles.styleLabel}>
                        日本での認知度はまだまだ低いですが、複数の金融ライセンスの保有より安全性はかなり高いと言えます。
                      </div>
                      <div className={styles.styleLabel}>
                        グローバルブローカーであるVantageが、日本市場に向けてどのような施策をこれから打ち出していくのか、非常に気になるところです。
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <a
                          href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                          target="_blank"
                          className={`${styles.btnAccount04} ${styles.textLayoutWide}`}
                        >
                          Vantage 公式サイトを開く
                        </a>
                      </div>
                      <div></div>
                    </section>
                    <section
                      className={`${styles.textLayoutWide} ${styles.wrapperSection}`}
                    >
                      <h2 id="article06" className={styles.typeArticle06}>
                        6. Vantage Trading（ヴァンテージ）詳細情報
                      </h2>
                      <h3
                        id="article06-01"
                        className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                      >
                        運営会社情報
                      </h3>
                      <div
                        className={styles.tableCommon01}
                        style={{ marginTop: 15 }}
                      >
                        <table>
                          <tbody>
                            <tr>
                              <td className={styles.bgColorGray02}>会社名</td>
                              <td className={styles.center} colspan="3">
                                Vantage Prime Trading Limited
                              </td>
                            </tr>
                            <tr>
                              <td className={`${styles.bgColorGray02} ${styles.center}`}>本店住所</td>
                              <td className={styles.center} colspan="3">
                                10 Manoel Street , Castries , St.Lucia
                              </td>
                            </tr>
                            <tr>
                              <td className={`${styles.bgColorGray02} ${styles.center}`}>
                                金融監督機関
                              </td>
                              <td className={styles.center} colspan="3">
                                非公開
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>創業</td>
                              <td className={styles.center}>2009年</td>
                              <td className={styles.bgColorGray02}>資本金</td>
                              <td className={styles.center}>非公開</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h3
                        id="article06-02"
                        className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                      >
                        日本語の対応とサポートデスク
                      </h3>
                      <div
                        className={`${styles.tableCommon01}  ${styles.mobileTable}`}
                        style={{ marginTop: 15 }}
                      >
                        <table>
                          <tbody>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                日本語サイト
                              </td>
                              <td className="tlPO">
                                Webサイト・ポータル共に日本語対応
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                取引ツール
                              </td>
                              <td className="tlPO">
                                MetaTrader4 / 5共に日本語対応
                              </td>
                            </tr>
                            <tr>
                              <td
                                className={styles.bgColorGray02}
                                style={{ height: "100%" }}
                              >
                                日本語サポート
                              </td>
                              <td className="tlPO">
                                日本人在籍。メール・サポートチャット・電話
                                <span className="dispNonePU">
                                  によるユーザー
                                </span>
                                対応<span className="dispNonePU">を実施。</span>
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                サポート対応時間
                              </td>
                              <td className="tlPO">
                                <span className="dispNonePU">【日本時間】</span>
                                （月）午前 9:00 〜（金）午後 5:00
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                メールアドレス
                              </td>
                              <td className="tlPO">
                                <span className="tUl">
                                  support@vantagejapan.com
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                電話番号
                                <span className="FcRed fs09">（※）</span>
                              </td>
                              <td className="tlPO">（+44）2080-363-883</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className={styles.FcRed}>
                        （※）国際電話のため、通話料はお客様負担となります。
                      </p>
                      <h3
                        id="article06-03"
                        className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                      >
                        お取引条件と預け金の保全ルール
                      </h3>
                      <div
                        className={`${styles.tableCommon01} ${styles.mobileTable}`}
                        style={{ marginTop: 15 }}
                      >
                        <table>
                          <tbody>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                ロールオーバー
                              </td>
                              <td className={styles.center}>
                                【日本時間 / 夏時間】 午前 6:00【日本時間 /
                                冬時間】 午前 7:00{" "}
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                マージンコール
                              </td>
                              <td className={styles.center}>
                                証拠金維持率が50%を下回った場合
                                <span className={styles.FcRed}>（※1）</span>
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                ロスカット
                              </td>
                              <td className={styles.center}>
                                証拠金維持率が10%を下回った場合
                                <span className={styles.FcRed}>（※2）</span>
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                両建て取引
                              </td>
                              <td className={styles.center}>可能</td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                EAの使用制限
                              </td>
                              <td className={styles.center}>なし</td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                追証の請求
                              </td>
                              <td className={styles.center}>
                                なし（ゼロカットを実施）
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                預託金保管方法
                              </td>
                              <td className={styles.center}>分別保管</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div
                        className={`${styles.FcRed} ${styles.textLayoutWide}`}
                      >
                        （※1）PREMIUM口座のみ30%
                      </div>
                      <div className={`${styles.FcRed}`}>
                        （※2）PREMIUM口座のみ0%
                      </div>
                      <h3
                        id="article06-04"
                        className={`${styles.hStyle03} ${styles.textLayoutWide}`}
                      >
                        口座のタイプごとの条件
                      </h3>
                      <div
                        className={`${styles.tableCommon01} ${styles.mobileTable}`}
                        style={{ marginTop: 15 }}
                      >
                        <table>
                          <thead>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                取引口座の種類
                              </td>
                              <td
                                className={`${styles.bgColorYellow01} ${styles.center}`}
                              >
                                スタンダード
                              </td>
                              <td
                                className={`${styles.bgColorYellow01} ${styles.center}`}
                              >
                                ECN
                              </td>
                              <td
                                className={`${styles.bgColorYellow01} ${styles.center}`}
                              >
                                PREMIUM
                              </td>
                            </tr>
                          </thead>
                          <tbody className="tc">
                            <tr>
                              <td className={styles.bgColorGray02}>
                                取引ツール
                              </td>
                              <td colspan="3" className={styles.center}>
                                MetaTrader4 / 5、ProTrader、Vantage App
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>発注方式</td>
                              <td className={styles.center}>NDD / STP</td>
                              <td className={styles.center}>NDD / ECN</td>
                              <td className={styles.center}>NDD / STP</td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                スプレッド方式
                              </td>
                              <td colspan="3" className={styles.center}>
                                変動方式
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                取引口座の通貨
                              </td>
                              <td colspan="3" className={styles.center}>
                                JPY・USD・AUD・GBP・EUR・SGD・CAD・NZD・HKD
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                最大レバレッジ
                              </td>
                              <td colspan="2" className={styles.center}>
                                1,000倍
                              </td>
                              <td className={styles.center}>2,000倍</td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                1ロットの通貨量
                              </td>
                              <td colspan="3" className={styles.center}>
                                10万通貨
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                初回最低入金額
                              </td>
                              <td className={styles.center}>200ドル相当額</td>
                              <td className={styles.center}>500ドル相当額</td>
                              <td className={styles.center}>3,000ドル相当額</td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                最小注文数
                              </td>
                              <td colspan="3" className={styles.center}>
                                0.01ロット
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                最大ロット数
                                <br />
                                合計最大注文数
                              </td>
                              <td colspan="3" className={styles.center}>
                                200ロット / 制限なし
                              </td>
                            </tr>
                            <tr>
                              <td
                                className={styles.bgColorGray02}
                                style={{ minHeight: "235px" }}
                              >
                                商品（銘柄）
                              </td>
                              <td colSpan="3" className={styles.center}>
                                <div>
                                  <div>
                                    【商品合計】1,045
                                    <br />
                                    【FX / 通貨ペア】65
                                    <br />
                                    【CFD / 貴金属】8
                                    <br />
                                    【CFD / エネルギー】7
                                    <br />
                                    【CFD / 商品】7
                                    <br />
                                    【CFD / ETFs】57
                                    <br />
                                    【CFD / 債券】47
                                    <br />
                                    【CFD / 仮想通貨】50
                                    <br />
                                    【CFD / 株価指数】26
                                    <br />
                                    【CFD / 株式】778
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                className={styles.bgColorGray02}
                                style={{ minHeight: "75px" }}
                              >
                                取引可能時間
                              </td>
                              <td colspan="3" className={styles.center}>
                                【日本時間 / 夏時間】（月）午前 6:01
                                ～（土）午前 5:58
                                <br />
                                【日本時間 / 冬時間】（月）午前 7:01
                                ～（土）午前 6:58
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                取引手数料
                                <span className="FcRed fs09">（※）</span>
                              </td>
                              <td className={styles.center}>なし</td>
                              <td className={styles.center}>3USD</td>
                              <td className={styles.center}>なし</td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                口座維持手数料
                              </td>
                              <td colspan="3" className={styles.center}>
                                なし
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                複数口座の保有
                              </td>
                              <td colspan="3" className={styles.center}>
                                可能
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>
                                法人口座の開設
                              </td>
                              <td colspan="3" className={styles.center}>
                                可能
                              </td>
                            </tr>
                            <tr>
                              <td className={styles.bgColorGray02}>GMT時差</td>
                              <td colspan="3" className={styles.center}>
                                【MT4 / MT5】夏時間：＋3時間、冬時間：＋2時間
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className={`${styles.FcRed}`}>
                        （※）1注文（片道）1ロットあたりの手数料となります。なお、取引手数料は取引銘柄によって異なります。
                      </p>
                    </section>
                    <section className={styles.textLayoutWide}>
                      <div
                        className={styles.layoutInformation}
                      >
                        <div
                          className={styles.layoutInformationItem}
                        >
                          <a
                            href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                            target="_blank"
                          >
                            <div className={styles.btnAccount04}>
                              <TiTick
                                style={{ transform: "translateY(3px)" }}
                                fontSize={40}
                              />
                              <span
                                style={{
                                  transform: "translateY(-10px)",
                                  display: "inline-block",
                                  verticalAlign: "middle",
                                }}
                              >
                                リアル口座開設
                              </span>
                            </div>
                          </a>
                          <div className={styles.sideRanking01}>
                            <div className={styles.center}>
                              <p className={styles.sideText}>海外FX業者</p>
                              <p className={styles.sideCommonTitle01}>
                                人気ランキング
                              </p>
                            </div>
                          </div>
                          <div className={styles.sideRanking01Inner01}>
                            <ul
                              className={`${styles.flexCommon01} ${styles.sideRanking01List01}`}
                            >
                              <li className={styles.flexCommon01}>
                                <div className={styles.sideRanking01Icon01}>
                                  <div className={styles.rankingIcon01Wrap01}>
                                    <div
                                      className={`${styles.rankingIcon01} ${styles.typeA}`}
                                    >
                                      <span>1</span>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.sideRanking01Name01}>
                                  <a
                                    href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                                    className="linkNoUnderline01 blk"
                                    target="_blank"
                                  >
                                    <p>
                                      <Image
                                        src={logo}
                                        alt="xem"
                                        width={110}
                                        height={30}
                                        style={{ transform: "translateY(6px)" }}
                                      />
                                    </p>
                                  </a>
                                </div>
                                <div className={styles.sideRanking01Rank01}>
                                  25.50
                                </div>
                              </li>
                              <li className={styles.flexCommon01}>
                                <div className={styles.sideRanking01Icon01}>
                                  <div className={styles.rankingIcon01Wrap01}>
                                    <div
                                      className={`${styles.rankingIcon01} ${styles.typeA}`}
                                    >
                                      <span>2</span>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.sideRanking01Name01}>
                                  <a
                                    href="https://clicks.affstrack.com/c?c=999173&l=en&p=0"
                                    className="linkNoUnderline01 blk"
                                    target="_blank"
                                  >
                                    <p>
                                      <Image
                                        src={broker_logo_xem}
                                        alt="tfx"
                                        width={110}
                                        height={30}
                                        style={{ transform: "translateY(8px)" }}
                                      />
                                    </p>
                                  </a>
                                </div>
                                <div className={styles.sideRanking01Rank01}>
                                  25.00
                                </div>
                              </li>
                              <li className={styles.flexCommon01}>
                                <div className={styles.sideRanking01Icon01}>
                                  <div className={styles.rankingIcon01Wrap01}>
                                    <div
                                      className={`${styles.rankingIcon01} ${styles.typeA}`}
                                    >
                                      <span>3</span>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.sideRanking01Name01}>
                                  <a
                                    href="https://partners.titanfx.com/registration/ref?cp=IAJ4KGP4TX494"
                                    className="linkNoUnderline01 blk"
                                    target="_blank"
                                  >
                                    <p>
                                      <Image
                                        src={broker_logo_tfx}
                                        alt="xsc"
                                        width={110}
                                        height={30}
                                        style={{ transform: "translateY(8px)" }}
                                      />
                                    </p>
                                  </a>
                                </div>
                                <div className={styles.sideRanking01Rank01}>
                                  24.00
                                </div>
                              </li>
                              <li className={styles.flexCommon01}>
                                <div className={styles.sideRanking01Icon01}>
                                  <div className={styles.rankingIcon01Wrap01}>
                                    <div
                                      className={`${styles.rankingIcon01} ${styles.typeB}`}
                                    >
                                      <span>4</span>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.sideRanking01Name01}>
                                  <a
                                    href="https://my.xs.com/links/go/2305"
                                    className="linkNoUnderline01 blk"
                                    target="_blank"
                                  >
                                    <p>
                                      <Image
                                        src={broker_logo_xsc}
                                        alt="Vantage Trading"
                                        width={50}
                                        height={30}
                                        style={{ transform: "translateY(8px)" }}
                                      />
                                    </p>
                                  </a>
                                </div>
                                <div className={styles.sideRanking01Rank01}>
                                  23.50
                                </div>
                              </li>
                              <li className={styles.flexCommon01}>
                                <div className={styles.sideRanking01Icon01}>
                                  <div className={styles.rankingIcon01Wrap01}>
                                    <div
                                      className={`${styles.rankingIcon01} ${styles.typeB}`}
                                    >
                                      <span>5</span>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.sideRanking01Name01}>
                                  <a
                                    href="https://www.bigboss-financial.com/ja/account/open?aid=3NvEVzuu"
                                    target="_blank"
                                    className="linkNoUnderline01 blk"
                                  >
                                    <p>
                                      <Image
                                        src={broker_logo_big}
                                        alt="big"
                                        width={110}
                                        height={30}
                                        style={{ transform: "translateY(8px)" }}
                                      />
                                    </p>
                                  </a>
                                </div>
                                <div className={styles.sideRanking01Rank01}>
                                  23.00
                                </div>
                              </li>
                            </ul>
                          </div>
                          <p className={styles.sideBtnCommon01}>
                            <a
                              href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                              target="_blank"
                              className={styles.styleLabe500}
                            >
                              海外FX業者 人気ランキング &gt;
                            </a>
                          </p>
                        </div>
                        <Image
                          src={vantage_banner}
                          alt="vantage banner"
                          className={styles.layoutImage}
                        />
                      </div>
                    </section>
                    <section
                      className={styles.faqPickupBox}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <h2
                        id="article07"
                        className={`${styles.typeArticle07} ${styles.textLayoutWide}`}
                      >
                        7. Vantage Trading - よくある質問（FAQ）
                      </h2>
                      <p className={styles.center}>
                        Vantage Tradingに関する、よくある質問をまとめました。
                      </p>
                      <ol className={styles.informationEdit}>
                        <li
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ flex: 1, paddingRight: "20px" }}>
                            <div className={styles.faqPickupBoxQ}>
                              <p>
                                <a
                                  href="!#"
                                  className={styles.inlineStyle}
                                >
                                  Vantage
                                  Tradingの最大レバレッジを教えてください。
                                </a>
                              </p>
                            </div>
                            <div className={styles.faqPickupBoxA}>
                              <p className={styles.inlineStyleItem}>
                                Vantage
                                Trading（ヴァンテージ）では、プレミアム口座で最大2,000倍、スタンダード口座とRAW
                                ECN口座は最大1,000倍のレバレッジを提供しています。但し、一部商品は、銘柄によってレバレッジが固定されております。
                              </p>
                              <p className={styles.tr}>
                                <a
                                  href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                                  className="inline"
                                >
                                  続きを読む
                                </a>
                              </p>
                            </div>
                          </div>
                          <img
                            className={styles.point_icon_delete}
                            src="icon_delete.webp"
                            alt="img delete"
                          />
                        </li>
                        <li
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ flex: 1, paddingRight: "20px" }}>
                            <div className={styles.faqPickupBoxQ}>
                              <p>
                                <a
                                  href="!#"
                                  className={styles.inlineStyle}
                                >
                                  Vantage
                                  Tradingのチャットは日本語で利用できますか？
                                </a>
                              </p>
                            </div>
                            <div className={styles.faqPickupBoxA}>
                              <p className={styles.inlineStyleItem}>
                                はい、Vantage
                                Trading（ヴァンテージ）では、平日の午前9:00～午後5:00（日本時間）の間、日本語でチャットをご利用になれますが、google翻訳による日本語対応となります。日本人による対応が必要な場合は、メールでのお問い合わせをおすすめ致します。
                              </p>
                              <p className={styles.tr}>
                                <a
                                  href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                                  className="inline"
                                >
                                  続きを読む
                                </a>
                              </p>
                            </div>
                          </div>
                          <img
                            className={styles.point_icon_delete}
                            src="icon_delete.webp"
                            alt="img delete"
                          />
                        </li>
                        <li
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ flex: 1, paddingRight: "20px" }}>
                            <div className={styles.faqPickupBoxQ}>
                              <p>
                                <a
                                  href="!#"
                                  className={styles.inlineStyle}
                                >
                                  Vantage
                                  Tradingのスプレッドはどのくらいですか？
                                </a>
                              </p>
                            </div>
                            <div className={styles.faqPickupBoxA}>
                              <p className={styles.inlineStyleItem}>
                                Vantage
                                Trading（ヴァンテージ）のスプレッドは、銘柄や口座タイプによって異なりますが最低0.0pipsからとなります。尚、全ての口座タイプで変動スプレッド方式を採用しておりますが、RAW
                                ECN口座は、他の口座タイプに比べて狭いスプレッド環境を提供しています。
                              </p>
                              <p className={styles.tr}>
                                <a
                                  href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                                  className="inline"
                                >
                                  続きを読む
                                </a>
                              </p>
                            </div>
                          </div>
                          <img
                            className={styles.point_icon_delete}
                            src="icon_delete.webp"
                            alt="img delete"
                          />
                        </li>
                        <li
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ flex: 1, paddingRight: "20px" }}>
                            <div className={styles.faqPickupBoxQ}>
                              <p>
                                <a
                                  href="!#"
                                  className={styles.inlineStyle}
                                >
                                  Vantage
                                  Tradingの口座へクレジットカードで入金できますか？
                                </a>
                              </p>
                            </div>
                            <div className={styles.faqPickupBoxA}>
                              <p className={styles.inlineStyleItem}>
                                はい、Vantage
                                Trading（ヴァンテージ）では、VISA・mastercard・JCBのクレジットカード若しくはデビットカードをご利用頂けます。尚、JCBカードにて利用可能な通貨は日本円のみですが、VISAカードとmastercardカードは日本円と米ドルどちらでもご利用いただけます。
                              </p>
                              <p className={styles.tr}>
                                <a
                                  href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                                  className="inline"
                                >
                                  続きを読む
                                </a>
                              </p>
                            </div>
                          </div>
                          <img
                            className={styles.point_icon_delete}
                            src="icon_delete.webp"
                            alt="img delete"
                          />
                        </li>
                        <li
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ flex: 1, paddingRight: "20px" }}>
                            <div className={styles.faqPickupBoxQ}>
                              <p>
                                <a
                                  href="!#"
                                  className={styles.inlineStyle}
                                >
                                  Vantage
                                  Tradingでは出金までどれぐらい時間がかかりますか？
                                </a>
                              </p>
                            </div>
                            <div className={styles.faqPickupBoxA}>
                              <p className={styles.inlineStyleItem}>
                                Vantage
                                Trading（ヴァンテージ）では、出金申請をしてから通常48営業時間以内に処理が行われます。そのため金～日曜日の申請の場合、最長で火曜日までお待ち頂く場合があります。お急ぎの際は、申請後にチャットにて連絡することで通常より早く手続きが行われます。
                              </p>
                              <p className={styles.tr}>
                                <a
                                  href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                                  className="inline"
                                >
                                  続きを読む
                                </a>
                              </p>
                            </div>
                          </div>
                          <img
                            className={styles.point_icon_delete}
                            src="icon_delete.webp"
                            alt="img delete"
                          />
                        </li>
                      </ol>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className={styles.wrapperVantage}>
            <div className={styles.left}>
              <div className={styles.vantageTheme}>
                <Image
                  src={open_account}
                  alt="open account"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={styles.textBox}>
                <p style={{ textAlign: "center" }}>
                  口座開設の<span className={styles.orangeTxt}>流れ</span>
                </p>
                <p style={{ textAlign: "center" }}>
                  最短<span className={styles.orangeTxt}>3分</span>で申込完了！
                </p>
                <p style={{ textAlign: "center" }}>
                  スマホでかんたん口座開設。
                  <br />
                  最短当日からお取引可能です。
                </p>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.wrapperRight}>
                <p className={styles.txtTitle}>口座開設は簡単3ステップ</p>
                <div className={styles.stepBox}>
                  <div className={styles.num}>1</div>
                  <div className={styles.num}>2</div>
                  <div className={styles.num}>3</div>
                </div>
                <ul className={styles.contentList}>
                  <li>
                    <div className={styles.imgBox}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70.188"
                        height="88.925"
                        viewBox="0 0 70.188 88.925"
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect width="70.188" height="88.925" fill="none" />
                          </clipPath>
                        </defs>
                        <g clip-path="url(#clip-path)">
                          <path
                            d="M24.39,0H55.547a5.869,5.869,0,0,1,5.862,5.862v26.1a1.511,1.511,0,0,1-3.022,0V5.862a2.844,2.844,0,0,0-2.84-2.841H24.39a2.844,2.844,0,0,0-2.841,2.841V66.511a2.844,2.844,0,0,0,2.841,2.841H55.547a1.511,1.511,0,0,1,0,3.022H24.39a5.869,5.869,0,0,1-5.862-5.862V5.862A5.869,5.869,0,0,1,24.39,0"
                            fill="#3e3234"
                          />
                          <path
                            d="M43.587,82.86h5.2a1.511,1.511,0,0,1,0,3.022h-5.2a1.511,1.511,0,1,1,0-3.022"
                            fill="#3e3234"
                          />
                          <path
                            d="M8.793,44.878a10.155,10.155,0,0,1,3.767.724,5.588,5.588,0,0,1,3.7,5.389,1.511,1.511,0,0,1-3.022,0,2.451,2.451,0,0,0-.993-2.127,6.48,6.48,0,0,0-3.614-.958l-.025,8.279a1.522,1.522,0,0,1-.1.547c-.046.117-4.581,11.75-4.581,16.707A118.011,118.011,0,0,1,3.01,85.956a1.511,1.511,0,0,1-3-.385A117.29,117.29,0,0,0,.9,73.438c0-5.138,3.97-15.685,4.685-17.544l.028-9.27a1.513,1.513,0,0,1,.442-1.063,4.253,4.253,0,0,1,2.734-.683"
                            fill="#3e3234"
                          />
                          <path
                            id="パス_4149"
                            data-name="パス 4149"
                            d="M85.184,14.318a1.51,1.51,0,0,1,.314.033c.157.034,3.866.853,5.322,4,.986,2.13.691,4.681-.875,7.581a1.512,1.512,0,0,1-.276.365l-12.8,12.457a1.511,1.511,0,0,1-2.108-2.165L87.391,24.3c1-1.919,1.23-3.488.693-4.665a4.5,4.5,0,0,0-2.508-2.1l-8.726,8.222a1.511,1.511,0,1,1-2.072-2.2l9.37-8.829a1.51,1.51,0,0,1,1.036-.412"
                            transform="translate(-21.201 -4.085)"
                            fill="#3e3234"
                          />
                          <path
                            id="パス_4150"
                            data-name="パス 4150"
                            d="M64.794,55.491a1.511,1.511,0,0,1,.713.179c2.741,1.469,7.273,5.576,5.86,11.019a16.269,16.269,0,0,1,1.157,1.486,9.441,9.441,0,0,1,1.9,5.2,5.731,5.731,0,0,1-.788,2.968A6.862,6.862,0,0,1,75.3,79.358c.557,2.192.041,4.613-1.532,7.2a1.52,1.52,0,0,1-.447.468L50.77,102.186l-.047.03c-.279.173-6.962,4.207-18.445,1.753a1.511,1.511,0,0,1,.632-2.954c9.932,2.123,15.838-1.146,16.21-1.359L71.354,84.707c2.687-4.673-.214-6.636-.56-6.848A1.5,1.5,0,0,1,70.5,75.49a2.777,2.777,0,0,0,.9-2.089c-.012-2.084-2.021-4.49-2.794-5.241a1.515,1.515,0,0,1-.364-1.616c1.429-3.808-1.752-6.587-3.342-7.692L56.541,65.6a1.892,1.892,0,0,0-.683,1.807,1.816,1.816,0,0,0,1.191,1.438A19.145,19.145,0,0,0,61.843,69.9a1.511,1.511,0,1,1-.269,3.009,22.157,22.157,0,0,1-5.551-1.217,4.813,4.813,0,0,1-3.144-3.78,4.876,4.876,0,0,1,1.765-4.657l9.2-7.427a1.509,1.509,0,0,1,.949-.335"
                            transform="translate(-8.869 -15.834)"
                            fill="#3e3234"
                          />
                          <path
                            id="パス_4151"
                            data-name="パス 4151"
                            d="M79.363,67.159a1.511,1.511,0,0,1,.952,2.684l-9.833,7.974a1.9,1.9,0,0,0,.3,3.145,5.486,5.486,0,0,0,4.643.658,1.51,1.51,0,1,1,1.117,2.806,8.429,8.429,0,0,1-7.185-.8,4.917,4.917,0,0,1-.776-8.156L78.413,67.5a1.5,1.5,0,0,1,.951-.337"
                            transform="translate(-19.049 -19.163)"
                            fill="#3e3234"
                          />
                          <path
                            id="パス_4152"
                            data-name="パス 4152"
                            d="M75.813,42.608a1.511,1.511,0,0,1,1.511,1.511v9.207a1.511,1.511,0,1,1-3.022,0V44.119a1.511,1.511,0,0,1,1.511-1.511"
                            transform="translate(-21.201 -12.158)"
                            fill="#3e3234"
                          />
                          <path
                            id="パス_4153"
                            data-name="パス 4153"
                            d="M84.305,80.272a1.511,1.511,0,0,1,.968,2.671l-6.6,5.494a1.931,1.931,0,0,0-.68,1.7,1.752,1.752,0,0,0,.946,1.4,6.892,6.892,0,0,0,3.929.728,1.51,1.51,0,1,1,.322,3,9.86,9.86,0,0,1-5.625-1.041,4.788,4.788,0,0,1-2.575-3.751,4.947,4.947,0,0,1,1.75-4.362l6.6-5.494a1.507,1.507,0,0,1,.965-.349"
                            transform="translate(-21.389 -22.905)"
                            fill="#3e3234"
                          />
                        </g>
                      </svg>
                    </div>
                    <p>フォーム入力</p>
                  </li>
                  <li>
                    <div className={styles.imgBox}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="75.884"
                        height="49.305"
                        viewBox="0 0 75.884 49.305"
                      >
                        <path
                          d="M70.188 16.424a7.779 7.779 0 1 1-7.778 7.779 7.788 7.788 0 0 1 7.778-7.779m0 12.537a4.758 4.758 0 1 0-4.757-4.758 4.763 4.763 0 0 0 4.757 4.758"
                          fill="#3e3234"
                        />
                        <path
                          d="M68.176 35.252c7.394 0 13.408 5.391 13.408 12.017a1.51 1.51 0 1 1-3.021 0c0-4.96-4.66-9-10.388-9s-10.388 4.035-10.388 9a1.51 1.51 0 1 1-3.021 0c0-6.626 6.015-12.017 13.408-12.017"
                          fill="#3e3234"
                        />
                        <path
                          d="M7.2 0h61.48a7.212 7.212 0 0 1 7.2 7.2v34.9a7.212 7.212 0 0 1-7.2 7.2H7.2A7.213 7.213 0 0 1 0 42.1V7.2A7.212 7.212 0 0 1 7.2 0Zm61.48 46.284a4.188 4.188 0 0 0 4.183-4.184V7.2A4.188 4.188 0 0 0 68.68 3.022H7.2A4.188 4.188 0 0 0 3.021 7.2V42.1A4.188 4.188 0 0 0 7.2 46.284Z"
                          fill="#3e3234"
                        />
                        <path
                          d="M17.956 18.591h23.536a1.511 1.511 0 0 1 0 3.022H17.956a1.511 1.511 0 1 1 0-3.022"
                          fill="#3e3234"
                        />
                        <path
                          d="M17.956 31.329h2.341a1.511 1.511 0 0 1 0 3.022h-2.341a1.511 1.511 0 1 1 0-3.022"
                          fill="#3e3234"
                        />
                        <path
                          d="M28.431 31.329h2.341a1.511 1.511 0 0 1 0 3.022h-2.341a1.511 1.511 0 0 1 0-3.022"
                          fill="#3e3234"
                        />
                        <path
                          d="M38.906 31.329h2.341a1.511 1.511 0 0 1 0 3.022h-2.341a1.511 1.511 0 0 1 0-3.022"
                          fill="#3e3234"
                        />
                        <path
                          d="M17.956 47.8h2.341a1.511 1.511 0 0 1 0 3.022h-2.341a1.511 1.511 0 1 1 0-3.022"
                          fill="#3e3234"
                        />
                        <path
                          d="M28.431 47.8h2.341a1.511 1.511 0 0 1 0 3.022h-2.341a1.511 1.511 0 0 1 0-3.022"
                          fill="#3e3234"
                        />
                        <path
                          d="M38.906 47.8h2.341a1.511 1.511 0 0 1 0 3.022h-2.341a1.511 1.511 0 0 1 0-3.022"
                          fill="#3e3234"
                        />
                      </svg>
                    </div>
                    <p>確認書類の提出</p>
                  </li>
                  <li>
                    <div className={styles.imgBox}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="51.79"
                        height="53.368"
                        viewBox="0 0 51.79 53.368"
                      >
                        <path
                          d="M25.226 53.368c-3.859 0-14.449-.367-18.825-4.234a20.244 20.244 0 0 1-4.84-7.49A20.136 20.136 0 0 1 .254 30.958c.662-3.668 3.011-8.639 10.438-11.488.644-.247 1.3-.493 5.141-1.942 10.456-3.949 14.608-9.729 14.608-9.729l2.811-7.571A2.6 2.6 0 0 1 32.008 0h.014a6.208 6.208 0 0 1 5.238 3.412c.927 2.441.958 7.411-.327 9.731L33.875 18.2h10.65a4.794 4.794 0 0 1 4.789 4.789v.6a4.768 4.768 0 0 1-1.165 3.127 4.8 4.8 0 0 1 3.641 4.649v.6a4.8 4.8 0 0 1-4.181 4.75 4.765 4.765 0 0 1 1.08 3.027v.6a4.794 4.794 0 0 1-4.63 4.786 4.759 4.759 0 0 1 .761 2.588v.6a4.794 4.794 0 0 1-4.788 4.788H35.124l-8.6.236c-.214.006-.665.016-1.3.016m6.8-51.233h-.008c-.5 0-.57.186-.607.285l-2.86 7.7a1.074 1.074 0 0 1-.13.246c-4.541 6.4-10.456 8.632-15.676 10.6q-.647.245-1.287.489c-5.218 2-8.281 5.325-9.1 9.875a18.018 18.018 0 0 0 1.194 9.53 18.331 18.331 0 0 0 4.265 6.668c3.167 2.8 11.887 3.871 18.65 3.684l3.1-.085a4.764 4.764 0 0 1-.91-2.806v-.6a4.793 4.793 0 0 1 2.424-4.164 4.77 4.77 0 0 1-1.238-3.21v-.6a4.779 4.779 0 0 1 1.7-3.659 4.79 4.79 0 0 1-2.346-4.118v-.6a4.786 4.786 0 0 1 2.01-3.9A4.826 4.826 0 0 1 30.133 26.4c-1.893 4.439-4.923 7.094-9.047 7.913a1.067 1.067 0 0 1-.416-2.093c4.39-.871 7.223-4.22 8.654-10.23.014-.065.029-.13.046-.194q.029-.125.057-.25a1.138 1.138 0 0 1 .03-.113 1.05 1.05 0 0 1 .114-.243 4.775 4.775 0 0 1 .784-1.294l4.722-7.8c.936-1.718.9-6.047.19-7.923a4.127 4.127 0 0 0-3.24-2.035m1.414 42.934a2.657 2.657 0 0 0-2.654 2.655v.6a2.689 2.689 0 0 0 2.654 2.653h1.655l4.831-.132a1.051 1.051 0 0 1 .492.1 2.658 2.658 0 0 0 2.27-2.626v-.6a2.659 2.659 0 0 0-2.051-2.585H34.624a4.792 4.792 0 0 1-.813-.069ZM40.845 43H43.9a2.657 2.657 0 0 0 2.654-2.654v-.6A2.657 2.657 0 0 0 43.9 37.091H34.624a2.657 2.657 0 0 0-2.654 2.654v.6a2.658 2.658 0 0 0 2.051 2.585h6.011a4.834 4.834 0 0 1 .813.069M33.98 28.71a2.657 2.657 0 0 0-2.654 2.654v.6a2.69 2.69 0 0 0 2.654 2.654H47a2.657 2.657 0 0 0 2.655-2.654v-.6A2.657 2.657 0 0 0 47 28.71ZM31.41 22.44a2.631 2.631 0 0 0-.056.544v.6a2.657 2.657 0 0 0 2.654 2.653H44.525a2.657 2.657 0 0 0 2.655-2.653v-.6a2.658 2.658 0 0 0-2.655-2.655H34.008a2.648 2.648 0 0 0-1.927.831l-.585.967c-.021.061-.04.123-.057.187-.01.043-.02.084-.03.127"
                          fill="#3e3234"
                        />
                      </svg>
                    </div>
                    <p>口座開設完了</p>
                  </li>
                </ul>
                <div className={styles.bottomBlockBox02}>
                  <a
                    className={styles.row3Btn}
                    href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                  >
                    最短3分でお取引可能！
                    <br />
                    無料口座開設はこちら
                    <span className={styles.btnArrow02}>
                      <MdOutlineKeyboardArrowRight
                        className={styles.iconArrow02}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.zIndexx}>
            <div className={styles.inner}>
              <div className={styles.footerConnect}>
                <ul className={styles.footerShare}>
                  <li>
                    <a href="!#">規定</a>
                  </li>
                  <li>
                    <a href="!#">個人情報保護方針</a>
                  </li>
                  <li>
                    <a href="!#">プライバシーポリシー</a>
                  </li>
                  <li>
                    <a href="!#">AML規約</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footerRisk}>
                <p>
                  Vantage Trading は、外国為替市場における金融サービス業界の
                  <a href="/dispute-resolution/" target="_blank">
                    紛争解決
                  </a>
                  に従事する国際組織である
                  <a href="!#" target="_blank">
                    金融委員会 (The Financial Commission
                  </a>
                  ) のメンバーです。
                </p>
                <p className={styles.footerRiskTitle}>リスク警告</p>
                <p>
                  デリバティブ取引は、元本や利益が保証されている金融商品ではありません。大きなリスクが伴いますので、すべての投資家に適しているわけではありません。プロのお客様でも、初期投資額を大幅に上回る損失を被る可能性があります。弊社のデリバティブ商品をお取引する場合、お客様は原資産である金融資産に対する権利、義務、資格を有しません。過去の実績は将来のパフォーマンスを示唆するものではありませんので、ご注意ください。税法は変更される可能性があります。本ウェブサイトの情報は一般的なものであり、お客様の個人的な目標、財務状況、ニーズ等を考慮するものではありません。弊社の法的文書などを熟読し、取引内容や仕組み、リスクなどを十分ご理解いただいた上で、ご自身の判断にてお取引していただくようお願いいたします。
                </p>
              </div>
              <div className={styles.footerRegion}>
                <p className={styles.footerRiskTitle}>地域制限</p>
                <p>
                  弊社は、北朝鮮、米国およびその他一部の地域の居住者に対して、弊社のサービスを提供していません。
                  <br />
                  本サイト上の掲載情報および商品・サービスを提供している国や地域は、現地の法律または規制に反して提供を意図するものではありません。
                </p>
              </div>
              <div className={styles.footerCompany}>
                <p>
                  Vantage Tradingは、 Vantage Prime Trading Limited
                  の商標名です(
                  <a href="!#" target="_blank">
                    WIPO
                  </a>
                  )(
                  <a href="!#" target="_blank">
                    JPO
                  </a>
                  )。
                </p>
              </div>
              <div className={styles.footerCompanyDetails}>
                <ul>
                  <li>商号：Vantage Prime Trading Limited.</li>
                  <li>
                    本社：10 Manoel Street , Castries , St.Lucia (
                    <a href="!#" target="_blank">
                      地図
                    </a>
                    )<br />
                    電子メール： support@vantagetradings.com
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={styles.footerBtn01}
              style={{ display: isVisible ? "block" : "none" }}
            >
              <div className={styles.footerBtn01Inner}>
                <div className={styles.footerBtn01Txt}>
                  <a
                    href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                    target="_blank"
                    className={styles.dispTable}
                  >
                    <div>
                      <div className={styles.icon}>
                        <p>特典</p>
                      </div>
                    </div>
                    <div className={styles.txt}>
                      <p className={styles.subTxt}>Vantage Trading</p>
                      <p className={styles.marker}>
                        15,000円 + 20ドルトレード資金プレゼント
                      </p>
                    </div>
                  </a>
                </div>
                <div className={styles.footerBtn01Btn}>
                  <div className={styles.btnAccount05}>
                    <a
                      href="https://www.vantagetradings.com/open-live-account/?affid=MTUwNzQ2"
                      target="_blank"
                    >
                      <span className="dispTable mla mra">
                        <span className="footerBtn01BtnCheck dispNoneS"></span>
                        <span>
                          <span className="dispNoneAU">Vantage </span>
                          リアル口座開設
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
