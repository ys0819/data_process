import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

import Rectangle from "./images/Rectangle.svg";
import Logo from "./images/logo.svg";
import Vector from "./images/vector.svg";
import Group from "./images/Group.svg";
import Conservative from "./images/conservative.png";
import Neutralconservative from "./images/neutralconservative.png";
import Neutralrisk from "./images/neutralrisk.png";
import Risk from "./images/risk.png";

function App() {
  const SCORE = 19;
  const data34 = [
    { name: "TREASURY ETF", value: 0.1614, color: "#8c564b" },
    { name: "네이버", value: 0.0053, color: "#e377c2" },
    { name: "네이쳐 홀딩스", value: 0.0064, color: "#ff7f0e" },
    { name: "HMM", value: 0.0052, color: "#2ca02c" },
    { name: "First Trust Senior Loan Fund", value: 0.8143, color: "#bcbd22" },
    { name: "기타", value: 0.0074, color: "black" },
  ];

  const data35 = [
    { name: "TREASURY ETF", value: 0.0739, color: "#8c564b" },
    { name: "GOLD", value: 0.02, color: "#7f7f7f" },
    { name: "SK하이닉스", value: 0.0048, color: "#d62728" },
    { name: "First Trust Senior Loan Fund", value: 0.8925, color: "#bcbd22" },
    { name: "기타", value: 0.0088, color: "black" },
  ];

  const data36 = [
    { name: "GOLD", value: 0.0907, color: "#7f7f7f" },
    { name: "SK하이닉스", value: 0.0203, color: "#d62728" },
    { name: "First Trust Senior Loan Fund", value: 0.8799, color: "#bcbd22" },
    { name: "기타", value: 0.0091, color: "black" },
  ];

  const data37 = [
    { name: "GOLD", value: 0.1723, color: "#7f7f7f" },
    { name: "APPLE", value: 0.0196, color: "#1f77b4" },
    { name: "SK하이닉스", value: 0.0464, color: "#d62728" },
    { name: "현대자동차", value: 0.0157, color: "#e377c2" },
    { name: "First Trust Senior Loan Fund", value: 0.7449, color: "#bcbd22" },
    { name: "기타", value: 0.0011, color: "black" },
  ];

  const data38 = [
    { name: "GOLD", value: 0.2394, color: "#7f7f7f" },
    { name: "APPLE", value: 0.0357, color: "#1f77b4" },
    { name: "SK하이닉스", value: 0.0657, color: "#d62728" },
    { name: "현대자동차", value: 0.0203, color: "#e377c2" },
    { name: "VanEck Semiconductor ETF", value: 0.0182, color: "#9467bd" },
    { name: "First Trust Senior Loan Fund", value: 0.6207, color: "#bcbd22" },
  ];

  const data39 = [
    { name: "GOLD", value: 0.3057, color: "#7f7f7f" },
    { name: "APPLE", value: 0.052, color: "#1f77b4" },
    { name: "SK하이닉스", value: 0.0848, color: "#d62728" },
    { name: "현대자동차", value: 0.0255, color: "#e377c2" },
    { name: "VanEck Semiconductor ETF", value: 0.0354, color: "#9467bd" },
    { name: "First Trust Senior Loan Fund", value: 0.4966, color: "#bcbd22" },
  ];

  const data40 = [
    { name: "GOLD", value: 0.3726, color: "#7f7f7f" },
    { name: "APPLE", value: 0.0675, color: "#1f77b4" },
    { name: "SK하이닉스", value: 0.1036, color: "#d62728" },
    { name: "현대자동차", value: 0.0305, color: "#e377c2" },
    { name: "VanEck Semiconductor ETF", value: 0.0533, color: "#9467bd" },
    { name: "First Trust Senior Loan Fund", value: 0.3725, color: "#bcbd22" },
  ];

  const data41 = [
    { name: "GOLD", value: 0.4417, color: "#7f7f7f" },
    { name: "APPLE", value: 0.0844, color: "#1f77b4" },
    { name: "SK하이닉스", value: 0.1228, color: "#d62728" },
    { name: "현대자동차", value: 0.0353, color: "#e377c2" },
    { name: "VanEck Semiconductor ETF", value: 0.0691, color: "#9467bd" },
    { name: "First Trust Senior Loan Fund", value: 0.2466, color: "#bcbd22" },
  ];

  const data42 = [
    { name: "GOLD", value: 0.5047, color: "#7f7f7f" },
    { name: "APPLE", value: 0.1005, color: "#1f77b4" },
    { name: "SK하이닉스", value: 0.142, color: "#d62728" },
    { name: "현대자동차", value: 0.0407, color: "#e377c2" },
    { name: "VanEck Semiconductor ETF", value: 0.0876, color: "#9467bd" },
    { name: "First Trust Senior Loan Fund", value: 0.1245, color: "#bcbd22" },
  ];

  const data43 = [
    { name: "GOLD", value: 0.5711, color: "#7f7f7f" },
    { name: "APPLE", value: 0.1166, color: "#1f77b4" },
    { name: "SK하이닉스", value: 0.1608, color: "#d62728" },
    { name: "현대자동차", value: 0.0458, color: "#e377c2" },
    { name: "VanEck Semiconductor ETF", value: 0.1052, color: "#9467bd" },
    { name: "First Trust Senior Loan Fund", value: 0.0004, color: "#bcbd22" },
  ];

  const data44 = [
    { name: "GOLD", value: 0.5117, color: "#7f7f7f" },
    { name: "APPLE", value: 0.0805, color: "#1f77b4" },
    { name: "SK하이닉스", value: 0.221, color: "#d62728" },
    { name: "현대자동차", value: 0.0064, color: "#e377c2" },
    { name: "VanEck Semiconductor ETF", value: 0.1805, color: "#9467bd" },
  ];

  const data45 = [
    { name: "GOLD", value: 0.4248, color: "#7f7f7f" },
    { name: "APPLE", value: 0.0358, color: "#1f77b4" },
    { name: "SK하이닉스", value: 0.2739, color: "#d62728" },
    { name: "VanEck Semiconductor ETF", value: 0.2654, color: "#9467bd" },
  ];

  const data46 = [
    { name: "GOLD", value: 0.3261, color: "#7f7f7f" },
    { name: "SK하이닉스", value: 0.3274, color: "#d62728" },
    { name: "VanEck Semiconductor ETF", value: 0.3465, color: "#9467bd" },
  ];

  const data47 = [
    { name: "GOLD", value: 0.2038, color: "#7f7f7f" },
    { name: "SK하이닉스", value: 0.3843, color: "#d62728" },
    { name: "VanEck Semiconductor ETF", value: 0.4118, color: "#9467bd" },
  ];

  const data48 = [
    { name: "GOLD", value: 0.0816, color: "#7f7f7f" },
    { name: "SK하이닉스", value: 0.4412, color: "#d62728" },
    { name: "VanEck Semiconductor ETF", value: 0.4772, color: "#9467bd" },
  ];

  const data49 = [{ name: "SK하이닉스", value: 1.0, color: "#d62728" }];

  let data1, data2, data3, data4;
  let title1, title2, title3, title4;
  let imageSrc;
  let text2, text3, content1, content2;

  if (SCORE <= 5) {
    data1 = data34;
    data2 = data35;
    data3 = data36;
    data4 = data37;
    title1 = 34;
    title2 = 35;
    title3 = 36;
    title4 = 37;
    text2 = "안정형";
    text3 = "The Conservatives";
    content1 =
      "안정형 투자는 자산의 안전성을 최우선으로 고려하며, 변동성이 낮은 안정적인 수익을 추구하는 투자 유형입니다. 주로 채권, 예금, 국채와 같은 저위험 자산에 투자하며, 자산 가치의 변동을 최소화하려는 것이 특징입니다. 투자자는 원금 보존과 예측 가능한 수익률을 중요하게 여기며, 대체로 장기적인 재정적 안정성을 목표로 합니다. 이 유형은 은퇴자나 안정적인 현금 흐름을 원하는 사람들에게 적합합니다.";
    content2 =
      "안정성과 예측 가능한 수익성을 동시에 고려한 추천 종목은 TREASURY ETF, 네이버, 네이쳐 홀딩스, HMM, 그리고 First Trust Senior Loan Fund 입니다. \n\n" +
      "● TREASURY ETF는 미국 국채를 중심으로 구성되어 있어 안정적이고 낮은 리스크를 제공합니다.\n" +
      "● 네이버는 국내 대표적인 IT 기업으로, 상대적으로 안정적인 수익 구조와 탄탄한 시장 점유율을 자랑합니다.\n" +
      "● 네이쳐 홀딩스는 생활용품 및 친환경 제품 중심의 사업을 통해 꾸준한 매출을 기록하며 안정적인 성과를 보이고 있습니다. \n" +
      "● HMM은 글로벌 해운 시장에서 꾸준히 성장 중이며, 정부의 지원과 안정적인 물동량으로 안정적인 투자처로 평가받습니다.\n" +
      "● First Trust Senior Loan Fund는 변동성이 낮고 고정 수익을 제공하는 고위험 채권에 투자해 안정적인 현금 흐름을 기대할 수 있습니다.\n\n" +
      "이러한 종목들은 리스크를 최소화하면서도 적정한 수익을 기대하는 안정형 투자자의 목적에 부합합니다.";
  } else if (SCORE <= 10) {
    data1 = data38;
    data2 = data39;
    data3 = data40;
    data4 = data41;
    title1 = 38;
    title2 = 39;
    title3 = 40;
    title4 = 41;
    text2 = "안정 추구형";
    text3 = "The Defensives";
    content1 =
      "안정추구형 투자는 안정성을 유지하면서도 조금 더 높은 수익을 목표로 하는 투자 유형입니다. 이 유형의 포트폴리오는 안정적인 채권과 함께 일부 비중으로 주식이나 부동산과 같은 중위험 자산을 포함합니다. 투자자는 비교적 낮은 위험을 감수하면서도 성장 가능성을 어느 정도 추구합니다. 이는 원금 보존을 기본으로 하되, 자산 증식을 목표로 하는 사람들에게 적합합니다.";
      content2 =
      "안정성과 성장성을 동시에 고려한 추천 종목은 GOLD, APPLE, SK하이닉스, 현대자동차, VanEck Semiconductor ETF, 그리고 First Trust Senior Loan Fund 입니다. \n\n" +
      "● GOLD는 전통적으로 경제 불확실성 시기에 가치 저장 수단으로 활용되며, 안정적인 자산으로 평가받습니다.\n" +
      "● APPLE은 글로벌 기술 기업으로 지속적인 혁신과 안정적인 매출 구조를 통해 장기적인 성장 가능성을 보입니다.\n" +
      "● SK하이닉스는 메모리 반도체 시장에서 기술적 우위를 바탕으로 안정성과 성장성을 동시에 제공합니다.\n" +
      "● 현대자동차는 전기차 및 친환경 모빌리티 시장에서의 성장을 기반으로 안정적인 실적을 유지하고 있습니다.\n" +
      "● VanEck Semiconductor ETF는 반도체 산업 전반에 투자하여 해당 산업의 장기적인 성장 가능성을 반영합니다.\n" +
      "● First Trust Senior Loan Fund는 고위험 채권을 통해 변동성을 낮추고 안정적인 현금 흐름을 제공합니다.\n\n" +
      "이러한 종목들은 안정성과 성장의 적절한 균형을 원하는 안정추구형 투자자에게 적합한 선택지입니다.";

  } else if (SCORE <= 15) {
    data1 = data42;
    data2 = data43;
    data3 = data44;
    data4 = data45;
    title1 = 42;
    title2 = 43;
    title3 = 44;
    title4 = 45;
    text2 = "적극 투자형";
    text3 = "The Speculatives";
    content1 =
      "적극 투자형 투자는 중간 정도의 위험을 감수하며 수익성과 안정성을 균형 있게 추구하는 투자 유형입니다. 주식, 부동산, 펀드 등 다양한 자산군에 고르게 투자하며, 자산의 일부는 고위험 자산으로 구성됩니다. 투자자는 시장의 변동성을 어느 정도 받아들일 수 있으며, 자산 증식을 위해 장기적으로 성장 가능성이 높은 투자처를 선호합니다. 이는 중장기적인 재정 목표를 가진 사람들에게 적합합니다.";
    content2 = "성장 잠재력과 적정한 리스크를 고려한 추천 종목은 GOLD, APPLE, SK하이닉스, 현대자동차, 그리고 VanEck Semiconductor ETF 입니다. \n\n" +
      "● GOLD는 경제 불확실성 시기에 자산의 가치를 보호하며, 장기적인 포트폴리오 다각화 수단으로 활용됩니다.\n" +
      "● APPLE은 글로벌 시장에서의 선도적인 기술 혁신과 강력한 브랜드 파워를 통해 지속적인 성장 가능성을 제공합니다.\n" +
      "● SK하이닉스는 반도체 시장에서의 기술 리더십과 수요 증가에 힘입어 안정적인 성장성을 기대할 수 있습니다.\n" +
      "● 현대자동차는 전기차와 친환경 기술로의 전환을 통해 미래 모빌리티 시장에서의 경쟁 우위를 확보하고 있습니다.\n" +
      "● VanEck Semiconductor ETF는 반도체 산업의 전반적인 성장 잠재력을 반영하며, 해당 분야의 주요 기업에 분산 투자합니다.\n\n" +
      "이러한 종목들은 성장성을 중시하면서도 적정한 리스크를 감수하려는 적극 투자형 투자자에게 적합한 선택지입니다.";
  } else if (SCORE <= 20) {
    data1 = data46;
    data2 = data47;
    data3 = data48;
    data4 = data49;
    title1 = 46;
    title2 = 47;
    title3 = 48;
    title4 = 49;
    text2 = "공격 투자형";
    text3 = "The Aggressives";
    content1 =
      "공격 투자형 투자는 높은 수익을 목표로 높은 위험을 감수하는 투자 유형입니다. 주로 주식, 파생상품, 벤처 투자와 같은 고위험 고수익 자산에 집중하며, 시장 변동성에 민감한 것이 특징입니다. 투자자는 단기적인 큰 수익을 추구하며, 높은 리스크를 감내할 수 있는 재정적 여유와 강한 투자 의지를 갖추고 있습니다. 이는 고수익을 목표로 하거나 젊고 공격적인 재정 목표를 가진 사람들에게 적합합니다.";
    content2 = "높은 수익 잠재력을 목표로 하는 공격형 투자자를 위한 추천 종목은 GOLD, APPLE, SK하이닉스, 그리고 VanEck Semiconductor ETF 입니다. \n\n" +
      "● GOLD는 단기적인 시장 변동성 속에서도 가치 상승의 가능성을 가지고 있어, 위험 분산을 돕는 동시에 높은 수익 잠재력을 제공합니다.\n" +
      "● APPLE은 기술 혁신과 강력한 소비자 수요를 기반으로 한 지속적인 성장이 가능하며, 공격적인 포트폴리오에 필수적인 종목입니다.\n" +
      "● SK하이닉스는 반도체 수요 폭증과 시장 내 강력한 기술력을 통해 고수익을 기대할 수 있는 종목입니다.\n" +
      "● VanEck Semiconductor ETF는 반도체 산업의 고속 성장에 직접적으로 노출되며, 공격적인 투자자에게 높은 성장 잠재력을 제공합니다.\n\n" +
      "이러한 종목들은 높은 리스크를 감수하면서도 큰 수익을 추구하는 공격형 투자자들에게 이상적인 선택지입니다.";
  }
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <img src={Logo} alt="Logo" style={styles.logo} />
        <div style={styles.imageContainer}>
          <img src={Rectangle} alt="Rectangle" style={styles.image} />
          <div style={styles.textOverlay}>
            <div style={styles.text1}>투자 유형:</div>
            <div style={styles.text2}>{text2}</div>
            <div style={styles.text3}>{text3}</div>
          </div>
        </div>
        <div style={styles.subtitlebox}>
          <div style={styles.subtitle}>1.&nbsp;&nbsp;성향</div>
          <img src={Vector} alt="Vector" style={styles.vectorImage} />
        </div>
        <div style={styles.contentbox}>
          <div style={styles.content}>{content1}</div>
        </div>
        <div style={styles.subtitlebox}>
          <div style={styles.subtitle}>2.&nbsp;&nbsp;추천 종목</div>
          <img src={Vector} alt="Vector" style={styles.vectorImage} />
        </div>
        <div style={styles.contentbox}>
          <div style={styles.content}>{content2}</div>
        </div>
        <div style={styles.subtitlebox}>
          <div style={styles.subtitle}>3.&nbsp;&nbsp;자산 별 투자비중 변화</div>
          <img src={Vector} alt="Vector" style={styles.vectorImage} />
        </div>
        <div style={styles.contentbox}>
          <div style={styles.content}>
            <div style={styles.gridContainer}>
              <div style={styles.piechartbox}>
                <div style={styles.boxtitle}>Portrolio {title1}</div>
                <PieChart width={400} height={500}>
                  <Pie
                    data={data1}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    startAngle={90}
                    endAngle={450}
                  >
                    {data1.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
              <div style={styles.piechartbox}>
                <div style={styles.boxtitle}>Portrolio {title2}</div>
                <PieChart width={400} height={500}>
                  <Pie
                    data={data2}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    startAngle={90}
                    endAngle={450}
                  >
                    {data2.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>

              <div style={styles.piechartbox}>
                <div style={styles.boxtitle}>Portrolio {title3}</div>
                <PieChart width={400} height={500}>
                  <Pie
                    data={data3}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    startAngle={90}
                    endAngle={450}
                  >
                    {data3.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
              <div style={styles.piechartbox}>
                <div style={styles.boxtitle}>Portrolio {title4}</div>
                <PieChart width={400} height={500}>
                  <Pie
                    data={data4}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    startAngle={90}
                    endAngle={450}
                  >
                    {data4.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "100px",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  logo: {
    margin: "20px",
  },
  imageContainer: {
    position: "relative",
    display: "inline-block",
  },
  textOverlay: {
    position: "absolute",
    top: "50%",
    left: "5%",
    transform: "translate(0, -50%)",
    fontWeight: "bold",
  },
  text1: {
    color: "white",
    fontSize: "30px",
    marginBottom: "10px",
  },
  text2: {
    color: "white",
    fontSize: "64px",
  },
  text3: {
    color: "#90A89A",
    fontSize: "40px",
  },

  subtitlebox: {
    display: "flex",
    width: "1400px",
    marginTop: "100px",
    padding: "25px",
    boxShadow:
      "0 -4px 4px -2px rgba(0, 0, 0, 0.2), 0 4px 4px -2px rgba(0, 0, 0, 0.2)",
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#515151",
    marginLeft: "100px",
  },
  vectorImage: {
    marginLeft: "30px",
  },
  content: {
    margin: "60px 50px 0 125px",
    fontSize: "28px",
    color: "#515151",
    lineHeight: "40px",
    whiteSpace: "pre-line",
  },
  contentbox: {
    width: "1400px",
  },
  table: {
    width: "60%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  header: {
    backgroundColor: "#4CAF50",
    color: "white",
    textAlign: "left",
    padding: "8px",
    fontSize: "18px",
  },
  row: {
    backgroundColor: "#f2f2f2",
  },
  cell: {
    padding: "8px",
    textAlign: "left",
    fontSize: "16px",
    borderBottom: "1px solid #ddd",
  },
  piechartbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    height: "600px",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    margin: "20px 0px",
  },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  boxtitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#515151",
    marginBottom: "20px",
  },
  conservativeimage: {
    marginTop: "70px",
  },
};

export default App;
