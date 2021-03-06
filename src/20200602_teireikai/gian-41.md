{{first:2020-06-02}}
# 議案第41号 小平市立学童クラブ条例の一部を改正する条例

<i class="fa fa-gavel" aria-hidden="true"></i> 厚生委員会付託

<fieldset class="point">
  <legend>
    <h2 class="point"> ポイント </h2>
  </legend>
  <p class="point"><i class="fa fa-check" aria-hidden="true"></i> 八小と十二小の学童クラブが増設される</p>
  <p class="point"><i class="fa fa-check" aria-hidden="true"></i> 条例に新規学童クラブの情報を追加し、既存学童クラブの名称を変更する</p>
</fieldset>

<fieldset class="sanpi">
  <legend>
    <h2 class="sanpi"> <i class="fa fa-circle-o" aria-hidden="true"></i> 私（安竹洋平）の判断：賛成 </h2>
  </legend>
  <p class="sanpi"><i class="fa fa-circle-o" aria-hidden="true"></i> 名称の追加・変更であり、特に問題なし</p>
</fieldset>

## 概要
小平市立八小学童クラブ〈及び小平市立十二小学童クラブの入会児童数の増加に対応するため、新たな学童クラブを開設することに伴い、改正するものです。改正の内容ですが、条例の別表で規定しております、既存の小平市立八小学童クラブの名称を小平市立八小学菫クラブ第一に改正するとともに、同表に小平市立八小学菫クラブ第二、及び小平市立八小学童クラブ第三を追加いたします｡また、既存の小平市立十二小学童クラブの名称を小平市立十二小学菫クラブ第一に改正するとともに、同表に小平市立十二小学菫クラブ第二、及び小平市立十二小学童クラブ第三を追加いたします。

## 解説
{{#include ../partials/yasutake-speak.md:1}} 小平市立八小学童クラブ及び小平市立十二小学童クラブの入会児童数の増加に対応するため、新たな学童クラブを開設します。それに伴い、小平市立学童クラブ条例にそれら建物に関する情報を追加し、もともとあった学童クラブの名称を『～小学童クラブ第一』に変更するという改正です。

**新設する学童クラブ**
<table style="margin:0">
    <thead>
        <tr>
            <td>名称</td>
            <td>定員（人）</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>八小学童クラブ第二</td>
            <td>60</td>
        </tr>
        <tr>
            <td>八小学童クラブ第三</td>
            <td>60</td>
        </tr>
        <tr>
            <td>十二小学童クラブ第二</td>
            <td>40</td>
        </tr>
        <tr>
            <td>十二小学童クラブ第三</td>
            <td>40</td>
        </tr>
    </tbody>
</table>

同時に既存の名称を以下のように変更する。
- 八小学童クラブ → 八小学童クラブ 第一
- 十二小学童クラブ → 十二小学童クラブ 第一


<table class="additional">
<thead>
  <tr>
    <td colspan=2>施行期日等</td>
  </tr>
  </thead>
  <tr>
    <td>該当条項</td>
    <td><a href="https://www.city.kodaira.tokyo.jp/reiki/reiki_honbun/g135RG00000206.html#e000000194">小平市立学童クラブ条例 別表第1（第2条関係）</a></td>
  </tr>
  <tr>
    <td>施行期日</td>
    <td>令和3年4月1日<br>ただし以下の事項は令和3年4月1日前においても行える。<br>・学童クラブ入会のため市長の承認を受けること<br>・学童クラブ利用のため、指定管理者の承認を受けること</td>
  </tr>
</table>

## 主な質疑
{{#include ../partials/situgi_hanrei.md}}

### ＠ 6月2日 本会議

<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="その他 議員による質問"></i></td><td>
なぜ今回一気に大人数の学童クラブ2つ分（八小：合計120人分、十二小：合計80人分）を作らなければならなかったのか。（橋本 久雄）
</td></tr></table>

> 入会率も高まっている。八小は周辺の就学前児童数が増えてきた。減っている学童クラブも一部あるものの、前回と比べて今回全体で入会が129名増えている。それに対応したもの。（伊藤 子ども家庭部長）

{{#include ../partials/yasutake-speak.md:1}} 上記二つの小学校について、学童クラブの入会児童数と定員をグラフで示すと以下のようになります。これまでは入会児童数と定員数の乖離が大きく、実質的に待機児童がいるような状況でした。今回の増設で、この二つの学童クラブに関しては一定の余裕ができることになります。第一クラブは直営で、第二、第三クラブが指定管理者の運営となります。

<div id="hassyo-jidosu" style="width:100%;height: 350px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', '年度');
    data.addColumn('number', '入会児童数');
    data.addColumn({type:'number', role:'annotation'})
    data.addColumn('number', '定員数');
    data.addRows([
        ['0',         null, 0, 40],
        ['平成30年度', 90,   90, null],
        ['令和元年度', 128,  128, null],
        ['令和2年度',  141,  141, 40],
        ['令和3年度', null, 0, 160],
    ]);
    var options = {
      displayAnnotations: true,
      fontName: "UD デジタル 教科書体 N-R",
      hAxis: {
        viewWindow: {
          min: 1,
          max: 5
        }
      },
      vAxis: {
        title: "人数",
        viewWindow: {
          min: 0,
          max: 200
        }
      },
      isStacked: true,
      interpolateNulls: true,
      legend: {
        position: 'in',
        alignment: 'end',
        maxLines: 3,
        textStyle: {
          fontSize: 16
        }
      },
      seriesType: 'bars',
      series: {
        1: { type: 'line' }
      },
      title: '八小学童クラブ入会児童数推移',
      titleTextStyle: {
          fontSize: 18
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ComboChart(document.getElementById('hassyo-jidosu'));
    chart.draw(data, options);
  }
</script>


<div id="junisyo-jidosu" style="width:100%;height: 350px;"></div>
<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', '年度');
    data.addColumn('number', '入会児童数');
    data.addColumn({type:'number', role:'annotation'})
    data.addColumn('number', '定員数');
    data.addRows([
        ['0',         null, 0,   40],
        ['平成30年度', 96,   96,  null],
        ['令和元年度', 94,   94,  null],
        ['令和2年度',  117,  117, 40],
        ['令和3年度',  null, 0,   120],
    ]);
    var options = {
      displayAnnotations: true,
      fontName: "UD デジタル 教科書体 N-R",
      hAxis: {
        viewWindow: {
          min: 1,
          max: 5
        }
      },
      vAxis: {
        title: "人数",
        viewWindow: {
          min: 0,
          max: 200
        }
      },
      isStacked: true,
      interpolateNulls: true,
      legend: {
        position: 'in',
        alignment: 'end',
        maxLines: 3,
        textStyle: {
          fontSize: 16
        }
      },
      seriesType: 'bars',
      series: {
        0: { color: 'orange' },
        1: { type: 'line' }
      },
      title: '十二小学童クラブ入会児童数推移',
      titleTextStyle: {
          fontSize: 18
      },
      chartArea:{top:30,height:'75%'}
    };
    var chart = new google.visualization.ComboChart(document.getElementById('junisyo-jidosu'));
    chart.draw(data, options);
  }
</script>

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="その他 議員による質問"></i></td><td>
完成までの対応は。どこで受け入れるか。（橋本 久雄）
</td></tr></table>

> 他のクラブと同様に、学校施設内で余裕教室を借りて運営する。（伊藤 子ども家庭部長）


<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="その他 議員による質問"></i></td><td>
大方針としては待機（の児童）がいる限り作っていくということか。5年後10年後どれくらい増えると推計して今回の増設になっているか。（伊藤 央）
</td></tr></table>

> 学童クラブの全体計画として、今年3月に『[第2期こども子育て支援事業計画](https://www.city.kodaira.tokyo.jp/kurashi/080/080735.html)』を策定している。その中で、ニーズ調査を踏まえ、令和2年度～6年度までの見込みを出している。爆発的に増えることはないものの、入会率が高まっており、学童クラブの確保方策として考えているのは、令和2年度で36か所であるのを、令和6年度で45か所まで増やすことは必要と見込んでいる。小平市の最優先課題として、小学校1～3年生は待機児童を出さないということに取り組んでいる。（伊藤 子ども家庭部長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="その他 議員による質問"></i></td><td>
民間の学童クラブをどのように捉えているか。民設民営には統一的な見解はないということでよいか。（伊藤 央）
</td></tr></table>

> 学童クラブに入りたい子はまず公設で見ていく。習い事や塾のようなことをして欲しいという保護者からの要望や、学区域にかかわらず通勤経路上で預けたいなど、様々な要望がある。それらに答えられる民設の学童クラブについては、保護者ご自身の考えで選んで頂きたい。多様なニーズに応えることは市の大切な政策。民間の学童クラブが追加されて、全体の待機児童の数がどうなるかは、やってみないと分からない。（伊藤 子ども家庭部長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle hitori" aria-label="その他 議員による質問"></i></td><td>
小平市では学童と保育所の際限ない増設が財政を逼迫させているという認識、財政面から考えて市の学童、保育所含めて保育の方向性はどうか。（伊藤 央）
</td></tr></table>

> 保育の需要が大きくなり、財政に影響を与えていることは認識している。社会情勢として、働いている方々のニーズには応える必要がある。財源を活用したり、少子化の流れも踏まえながら、保育をどう提供するか考えていく。（伊藤 子ども家庭部長）

### ＠ 6月11日 厚生委員会
{{#include ../partials/yasutake-speak.md:1}} 厚生委員会には、一人会派の会からは、私（安竹洋平）が委員として参加しています。

<table class="qanda"><tr><td><i class="fa fa-question-circle hitori yasutake" aria-label="一人会派の会 安竹洋平による質問"></i></td><td>
これは、学童クラブが定員超過してきたので新設するという話。保育施設の方も同様で、子どもを預けたいという需要に、供給が追いついていない。第40号での質問とも関係するが、結局人口推計を基にしているからこのようなことになっているのか。人口推計はここ数年間でピークの数値が1万人程度増えている。そうすると、人口推計に基づいて保育施設を作ったりしていると、当然足りなくなる。待機児童が生まれる原因は、人口推計を基にしているところにあるのか、それとも、社会的ニーズの変化が想定通りではなかったことにあるのか。子育て支援課としてどう把握しているか。（安竹 洋平）
</td></tr></table>

> 人口推計は確かに参考にして基礎数値として用いている。さらに、ニーズ調査というものを5年に1度、厚生労働省のひな形に基づいて行っており、人口推計と合わせてニーズ量というものを算出している。保育の待機児童が毎年出ている状況について、東部地域と西部地域については、3年連続、5年連続ということで就学前児童数は減少している。明らかに東部地域の大型の開発が突出して増え続けているのがここ近年の状況であり、（その結果）待機児童が出ている。
>
> 社会的なニーズとしては、共働き家庭が増え、子どもの数は減っていきながらも、働いて保育園を使いたい、学童クラブを使いたいというニーズは確実に高まっている。どこがピークかというところは、国の方から今回ニーズ調査をするにあたって、大体8割の家庭が保育を使いたいということで、その受け皿確保を目指している、小平市としてもニーズ調査で潜在的ニーズは概ね8割出ているので、その確保を目指すため、急には整備できないので徐々にということで行っている。（伊藤 子ども家庭部長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
東部地域においては、住居以外も含んで17件の開発が進んでいるという答弁があった。こうした状況を診れば、人口が増えて就学前児童の人数が増えるということは何年も前から予測できたのではないか。
</td></tr></table>

> 八小は人数の増減が激しく、（学童クラブの会員数は）平成28年度は30人だったのが5年で141人と5倍増になった。浮き沈みが激しく、増減を捉えることが難しい状況だった。（石野 子育て支援課長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
会員のうち普段は何パーセントくらいの子が来ているか。夏休みは増えそうだが。
</td></tr></table>

> 学校のある平日は66%程度、夏休みは下がって50%を少し超えたくらい。（石野）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
保護者は第一、第二、第三は選べるのか。
</td></tr></table>

> 直営は延長保育なし、指定管理は延長保育ありなので、延長保育を希望する方は指定管理の方（第二もしくは第三）で申し込むことになる。延長保育の場合、第二、第三のどちらかを選ぶことは出来ない。第二と第三は、帰る方向や住んでいる地域によって、クラス分けをこちらで行っている。（石野）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
直営と指定管理で選べるという話だが、どちらかが定員を超えた場合はどうなるか。
</td></tr></table>

> 延長保育の必要性という観点から、保護者の申請書を基に、指数票に基づいて点数をつけている。点数の低い方から直営の方を案内する。逆に直営がオーバーした際は指定管理の方に移ってもらうこともある。（石野）


<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
5年後、12年後のニーズはどう見積っているか。
</td></tr></table>

> 八小、十二小はいずれも5年後まで現在の児童数が横這い、もしくは微増と考えている。（石野）
>
> まず5年間の子育て支援事業計画をたてるのが全国一律の取組として国から指示されている。10年後は国から策定のための指針が示されると思うので、それに基づいて必要なニーズ調査等を行うと考えている。（伊藤 子ども家庭部長）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
指定管理者の事業者選定時期は。
</td></tr></table>

> 7月：保護者に対する説明会、その後  
> 7月～8月：事業者を公募  
> 10月：指定管理者選定員会を開催 → 決定  
> 12月：市議会定例会で指定の議案提出  
> の予定。（林 子育て支援課長補佐）

<br>
<table class="qanda"><tr><td><i class="fa fa-question-circle-o" aria-label="その他 議員による質問"></i></td><td>
2年連続で21人以上定員を上回ったクラブ数は、現在八小、十二小以外にどれくらいあるか。それらについて、増設は予定しているか。敷地は確保できるのか。
</td></tr></table>

> 6クラブある。ただし来年度以降増設の計画はない。定員オーバーのところは小学校において余裕教室を借りるなどして過密になることを避けている。（林）
>
> 小平市の学童クラブの特色は学校の中にあるということ、まず学校の中、あるいはその隣接地ということで検討していきたい。（石野）