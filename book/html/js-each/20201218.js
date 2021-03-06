//"kan_id","kan_name"
const kanMap = new Map([
  [1, "議会費"],
  [2, "総務費"],
  [3, "民生費"],
  [9, "消防費"],
  [10, "教育費"],
  [11, "公債費"],
  [13, "予備費"],
]);

// "kan_id","kou_id","kou_name"
const kouArray = [
  [1,1,"議会費"],
  [2,1,"総務管理費"],
  [2,3,"戸籍住民基本台帳費"],
  [2,4,"選挙費"],
  [3,4,"児童福祉費"],
  [9,1,"消防費"],
  [10,5,"保健体育費"],
  [11,1,"公債費"],
  [13,1,"予備費"],
];

//"kan_id","kou_id","moku_id","moku_name"
const mokuArray = [
  [1,1,1,"議会費"],
  [2,1,7,"企画費"],
  [2,3,1,"戸籍住民基本台帳費"],
  [2,4,5,"市議会議員選挙費"],
  [3,4,3,"児童福祉施設管理費"],
  [3,4,6,"学童クラブ費"],
  [9,1,1,"常備消防費"],
  [10,5,4,"学校給食費"],
  [11,1,1,"元金"],
  [11,1,2,"利子"],
  [13,1,1,"予備費"],
];

const tantoukaMap = new Map([
  [5100000,"議会事務局"],
  [10700000,"公共施設マネジメント課"],
  [20500000,"市民課"],
  [80100000,"選挙管理委員会事務局"],
  [30400000,"保育課"],
  [30100000,"子育て支援課"],
  [15700000,"防災危機管理課"],
  [70200000,"学務課"],
  [10600000,"財務課"],
]);

const jigyouMap = new Map([
  [10101,"市議会議員人件費"],
  [22110,"中央公民館等に係る整備事業"],
  [22304,"住民基本台帳事務事業"],
  [23713,"小平市議会議員補欠選挙の管理及び執行"],
  [30707,"私立保育園の運営事業"],
  [30322,"学童クラブ事業"],
  [90101,"常備消防に係る委託事業"],
  [100525,"学校給食センター更新事業"],
  [110101,"公債費現金償還"],
  [110102,"公債費利子支払"],
  [130101,"予備費"],
]);

const himokuMap = new Map([
  ["01-01","議員報酬"],
  ["03-02","各種手当"],
  ["12-20","設計等委託"],
  ["01-92","会計年度任用職員（アシスタント職）報酬"],
  ["04-02","社会保険料"],
  ["12-09","サービス業務委託"],
  ["03-04","選挙事務従事者手当"],
  ["10-01","消耗品費"],
  ["10-04","印刷製本費"],
  ["11-01","通信運搬費"],
  ["12-03","配布等委託"],
  ["12-04","作成等委託"],
  ["12-07","事務処理等委託"],
  ["12-11","設営等委託"],
  ["12-19","検査等委託"],
  ["13-02","使用料"],
  ["03-24","期末手当 会計年度任用職員（アシスタント職）"],
  ["12-54","調理・配送等委託"],
  ["22-01","償還現金"],
  ["22-02","償還利子"],
  ["29-01","予備費"],
]);

//"id","kan_id","kou_id","moku_id","tantouka_id","jigyou_id","kokko_kin","to_kin","chihosai","sonota","ippan_zai"
const ippanSaisyutuArray = [
  [178,1,1,1,5100000,10101,,,,,-4620],
  [179,2,1,7,10700000,22110,,,-55700,-38000,-270],
  [180,2,3,1,20500000,22304,13271,,,,],
  [181,2,4,5,80100000,23713,,,,,8131],
  [182,3,4,3,30400000,30707,,,,,14321],
  [183,3,4,6,30100000,30322,2167,4333,,,],
  [184,9,1,1,15700000,90101,,,,,5740],
  [185,10,5,4,70200000,100525,,,,,-13693],
  [186,11,1,1,10600000,110101,,,,,2816],
  [187,11,1,2,10600000,110102,,,,,-10827],
  [188,13,1,1,10600000,130101,,,,,-1598],
];

const jigyouDetailArray = [
  [10101,"01-01","","議員の死去に伴う減",-3300],
  [10101,"03-02","","議員の死去に伴う減",-1320],
  [22110,"12-20","中央公民館等の複合化の整備に係る設計","委託内容の見直しによる減",-93970],
  [22304,"01-92","4人→8人","事業実施による増",1386],
  [22304,"04-02","","事業実施による増",220],
  [22304,"12-09","マイナンバーコールセンター等","事業実施による増",],
  [23713,"03-04","","小平市議会議員補欠選挙の実施による増",275],
  [23713,"10-01","","小平市議会議員補欠選挙の実施による増",309],
  [23713,"10-04","","小平市議会議員補欠選挙の実施による増",769],
  [23713,"11-01","","小平市議会議員補欠選挙の実施による増",756],
  [23713,"12-03","","小平市議会議員補欠選挙の実施による増",2404],
  [23713,"12-04","","小平市議会議員補欠選挙の実施による増",94],
  [23713,"12-07","期日前投票事務","小平市議会議員補欠選挙の実施による増",472],
  [23713,"12-11","","小平市議会議員補欠選挙の実施による増",2400],
  [23713,"12-19","","小平市議会議員補欠選挙の実施による増",341],
  [23713,"13-02","施設使用料","小平市議会議員補欠選挙の実施による増",311],
  [30707,"01-92","147人→158人","欠員補充等による増",14321],
  [30322,"03-24","","新型コロナウイルス感染症対策による増",6500],
  [90101,"12-07","消防事務都委託","消防事務委託都委託金の確定に伴う増",5740],
  [100525,"12-54","","更新時期の見直しによる減",-13693],
  [110101,"22-01","","臨時財政対策債の利率見直しによる増",2816],
  [110102,"22-02","","臨時財政対策債の利率見直し等による減",-10827],
  [130101,"29-01","","歳入予算との調整額",-1598],
];

const maxLengthTexts = {
  kou: "総務管理費　",
  moku: "安全安心ま　",
  tantouka: "市民協働・　",
  jigyou: "小平小川元気村おがわ東　",
  himoku: "施設等維持管理委託　",
  detail: "新住民情報システムクラウド化　　　",
  tag: "新型感染　 "
};
