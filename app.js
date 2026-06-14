// ===== KANA → ROMAJI MAP =====

const KANA_ROMAJI = {
  'あ':['a'],'い':['i'],'う':['u'],'え':['e'],'お':['o'],
  'か':['ka'],'き':['ki'],'く':['ku'],'け':['ke'],'こ':['ko'],
  'さ':['sa'],'し':['shi','si','ci'],'す':['su'],'せ':['se'],'そ':['so'],
  'た':['ta'],'ち':['chi','ti'],'つ':['tsu','tu'],'て':['te'],'と':['to'],
  'な':['na'],'に':['ni'],'ぬ':['nu'],'ね':['ne'],'の':['no'],
  'は':['ha'],'ひ':['hi'],'ふ':['fu','hu'],'へ':['he'],'ほ':['ho'],
  'ま':['ma'],'み':['mi'],'む':['mu'],'め':['me'],'も':['mo'],
  'や':['ya'],'ゆ':['yu'],'よ':['yo'],
  'ら':['ra'],'り':['ri'],'る':['ru'],'れ':['re'],'ろ':['ro'],
  'わ':['wa'],'ゐ':['wi'],'ゑ':['we'],'を':['wo'],
  'が':['ga'],'ぎ':['gi'],'ぐ':['gu'],'げ':['ge'],'ご':['go'],
  'ざ':['za'],'じ':['ji','zi'],'ず':['zu'],'ぜ':['ze'],'ぞ':['zo'],
  'だ':['da'],'ぢ':['di'],'づ':['du'],'で':['de'],'ど':['do'],
  'ば':['ba'],'び':['bi'],'ぶ':['bu'],'べ':['be'],'ぼ':['bo'],
  'ぱ':['pa'],'ぴ':['pi'],'ぷ':['pu'],'ぺ':['pe'],'ぽ':['po'],
  'きゃ':['kya'],'きゅ':['kyu'],'きょ':['kyo'],
  'しゃ':['sha','sya','cya'],'しゅ':['shu','syu','cyu'],'しょ':['sho','syo','cyo'],
  'ちゃ':['cha','tya'],'ちゅ':['chu','tyu'],'ちょ':['cho','tyo'],
  'にゃ':['nya'],'にゅ':['nyu'],'にょ':['nyo'],
  'ひゃ':['hya'],'ひゅ':['hyu'],'ひょ':['hyo'],
  'みゃ':['mya'],'みゅ':['myu'],'みょ':['myo'],
  'りゃ':['rya'],'りゅ':['ryu'],'りょ':['ryo'],
  'ぎゃ':['gya'],'ぎゅ':['gyu'],'ぎょ':['gyo'],
  'じゃ':['ja','jya','zya'],'じゅ':['ju','jyu','zyu'],'じょ':['jo','jyo','zyo'],
  'びゃ':['bya'],'びゅ':['byu'],'びょ':['byo'],
  'ぴゃ':['pya'],'ぴゅ':['pyu'],'ぴょ':['pyo'],
  // katakana
  'ア':['a'],'イ':['i'],'ウ':['u'],'エ':['e'],'オ':['o'],
  'カ':['ka'],'キ':['ki'],'ク':['ku'],'ケ':['ke'],'コ':['ko'],
  'サ':['sa'],'シ':['shi','si','ci'],'ス':['su'],'セ':['se'],'ソ':['so'],
  'タ':['ta'],'チ':['chi','ti'],'ツ':['tsu','tu'],'テ':['te'],'ト':['to'],
  'ナ':['na'],'ニ':['ni'],'ヌ':['nu'],'ネ':['ne'],'ノ':['no'],
  'ハ':['ha'],'ヒ':['hi'],'フ':['fu','hu'],'ヘ':['he'],'ホ':['ho'],
  'マ':['ma'],'ミ':['mi'],'ム':['mu'],'メ':['me'],'モ':['mo'],
  'ヤ':['ya'],'ユ':['yu'],'ヨ':['yo'],
  'ラ':['ra'],'リ':['ri'],'ル':['ru'],'レ':['re'],'ロ':['ro'],
  'ワ':['wa'],'ヲ':['wo'],
  'ガ':['ga'],'ギ':['gi'],'グ':['gu'],'ゲ':['ge'],'ゴ':['go'],
  'ザ':['za'],'ジ':['ji','zi'],'ズ':['zu'],'ゼ':['ze'],'ゾ':['zo'],
  'ダ':['da'],'ヂ':['di'],'ヅ':['du'],'デ':['de'],'ド':['do'],
  'バ':['ba'],'ビ':['bi'],'ブ':['bu'],'ベ':['be'],'ボ':['bo'],
  'パ':['pa'],'ピ':['pi'],'プ':['pu'],'ペ':['pe'],'ポ':['po'],
  'キャ':['kya'],'キュ':['kyu'],'キョ':['kyo'],
  'シャ':['sha','sya','cya'],'シュ':['shu','syu','cyu'],'ショ':['sho','syo','cyo'],
  'チャ':['cha','tya'],'チュ':['chu','tyu'],'チョ':['cho','tyo'],
  'ニャ':['nya'],'ニュ':['nyu'],'ニョ':['nyo'],
  'ヒャ':['hya'],'ヒュ':['hyu'],'ヒョ':['hyo'],
  'ミャ':['mya'],'ミュ':['myu'],'ミョ':['myo'],
  'リャ':['rya'],'リュ':['ryu'],'リョ':['ryo'],
  'ギャ':['gya'],'ギュ':['gyu'],'ギョ':['gyo'],
  'ジャ':['ja','jya','zya'],'ジュ':['ju','jyu','zyu'],'ジョ':['jo','jyo','zyo'],
  'ビャ':['bya'],'ビュ':['byu'],'ビョ':['byo'],
  'ピャ':['pya'],'ピュ':['pyu'],'ピョ':['pyo'],
  'ファ':['fa'],'フィ':['fi'],'フェ':['fe'],'フォ':['fo'],
  'ウィ':['wi'],'ウェ':['we'],'ウォ':['wo'],
  'ティ':['thi'],'ディ':['dhi'],
  'ー':['-'],
};

// 各ティアから決まった数だけ出題する（簡単→難しい順）
const SENTENCE_TIERS = [
  // ティア1: 短い単語
  [
    { display: "猫",     reading: "ねこ" },
    { display: "犬",     reading: "いぬ" },
    { display: "空",     reading: "そら" },
    { display: "海",     reading: "うみ" },
    { display: "山",     reading: "やま" },
    { display: "花",     reading: "はな" },
    { display: "星",     reading: "ほし" },
    { display: "月",     reading: "つき" },
    { display: "雪",     reading: "ゆき" },
    { display: "鳥",     reading: "とり" },
    { display: "風",     reading: "かぜ" },
    { display: "水",     reading: "みず" },
    { display: "雨",     reading: "あめ" },
    { display: "朝",     reading: "あさ" },
    { display: "夜",     reading: "よる" },
    { display: "春",     reading: "はる" },
    { display: "夏",     reading: "なつ" },
    { display: "秋",     reading: "あき" },
    { display: "冬",     reading: "ふゆ" },
    { display: "雲",     reading: "くも" },
    { display: "川",     reading: "かわ" },
    { display: "道",     reading: "みち" },
    { display: "本",     reading: "ほん" },
    { display: "家",     reading: "いえ" },
    { display: "駅",     reading: "えき" },
    { display: "街",     reading: "まち" },
    { display: "森",     reading: "もり" },
    { display: "池",     reading: "いけ" },
    { display: "馬",     reading: "うま" },
    { display: "牛",     reading: "うし" },
    { display: "虹",     reading: "にじ" },
    { display: "桜",     reading: "さくら" },
    { display: "朝日",   reading: "あさひ" },
    { display: "夕日",   reading: "ゆうひ" },
    { display: "笑顔",   reading: "えがお" },
    { display: "涙",     reading: "なみだ" },
  ],
  // ティア2: 少し長い単語
  [
    { display: "りんご",       reading: "りんご" },
    { display: "太陽",         reading: "たいよう" },
    { display: "電車",         reading: "でんしゃ" },
    { display: "学校",         reading: "がっこう" },
    { display: "友達",         reading: "ともだち" },
    { display: "鉛筆",         reading: "えんぴつ" },
    { display: "果物",         reading: "くだもの" },
    { display: "自転車",       reading: "じてんしゃ" },
    { display: "音楽",         reading: "おんがく" },
    { display: "飲み物",       reading: "のみもの" },
    { display: "新幹線",       reading: "しんかんせん" },
    { display: "図書館",       reading: "としょかん" },
    { display: "いちご",       reading: "いちご" },
    { display: "バナナ",       reading: "バナナ" },
    { display: "お寿司",       reading: "おすし" },
    { display: "ラーメン",     reading: "ラーメン" },
    { display: "パスタ",       reading: "パスタ" },
    { display: "カレー",       reading: "カレー" },
    { display: "ピザ",         reading: "ピザ" },
    { display: "朝ご飯",       reading: "あさごはん" },
    { display: "昼ご飯",       reading: "ひるごはん" },
    { display: "夕ご飯",       reading: "ゆうごはん" },
    { display: "飛行機",       reading: "ひこうき" },
    { display: "病院",         reading: "びょういん" },
    { display: "公園",         reading: "こうえん" },
    { display: "神社",         reading: "じんじゃ" },
    { display: "美術館",       reading: "びじゅつかん" },
    { display: "動物園",       reading: "どうぶつえん" },
    { display: "水族館",       reading: "すいぞくかん" },
    { display: "映画館",       reading: "えいがかん" },
    { display: "喫茶店",       reading: "きっさてん" },
    { display: "信号機",       reading: "しんごうき" },
    { display: "駐車場",       reading: "ちゅうしゃじょう" },
    { display: "家族",         reading: "かぞく" },
    { display: "季節",         reading: "きせつ" },
    { display: "宿題",         reading: "しゅくだい" },
  ],
  // ティア3: 短い文章
  [
    { display: "今日は晴れ",       reading: "きょうははれ" },
    { display: "猫は可愛い",       reading: "ねこはかわいい" },
    { display: "雨が降ってきた",   reading: "あめがふってきた" },
    { display: "お腹が空いた",     reading: "おなかがすいた" },
    { display: "早く帰りたい",     reading: "はやくかえりたい" },
    { display: "眠くなってきた",   reading: "ねむくなってきた" },
    { display: "桜が咲いた",       reading: "さくらがさいた" },
    { display: "温泉に行きたい",   reading: "おんせんにいきたい" },
    { display: "花粉症がつらい",   reading: "かふんしょうがつらい" },
    { display: "昼まで寝ちゃった", reading: "ひるまでねちゃった" },
    { display: "夜景がみたい",     reading: "やけいがみたい" },
    { display: "歌が上手くなりたい", reading: "うたがうまくなりたい" },
    { display: "やったー！",       reading: "やったー!" },
    { display: "元気？",           reading: "げんき?" },
    { display: "最高だ！",         reading: "さいこうだ!" },
    { display: "本当に？",         reading: "ほんとうに?" },
    { display: "腹減った",         reading: "はらへった" },
    { display: "眠すぎる",         reading: "ねむすぎる" },
    { display: "寒いよー",         reading: "さむいよー" },
    { display: "暑すぎる",         reading: "あつすぎる" },
    { display: "疲れた",           reading: "つかれた" },
    { display: "明日は休み",       reading: "あしたはやすみ" },
    { display: "お疲れ様",         reading: "おつかれさま" },
    { display: "ありがとう",       reading: "ありがとう" },
    { display: "ごめんなさい",     reading: "ごめんなさい" },
    { display: "おはよう",         reading: "おはよう" },
    { display: "こんにちは",       reading: "こんにちは" },
    { display: "おやすみ",         reading: "おやすみ" },
    { display: "いただきます",     reading: "いただきます" },
    { display: "ごちそうさま",     reading: "ごちそうさま" },
    { display: "雨が好き",         reading: "あめがすき" },
    { display: "風が冷たい",       reading: "かぜがつめたい" },
    { display: "月がきれい",       reading: "つきがきれい" },
    { display: "桜が散る",         reading: "さくらがちる" },
    { display: "海が見たい",       reading: "うみがみたい" },
    { display: "旅行したい",       reading: "りょこうしたい" },
    { display: "お金がほしい",     reading: "おかねがほしい" },
    { display: "朝が辛い",         reading: "あさがつらい" },
    { display: "夜が長い",         reading: "よるがながい" },
    { display: "風邪ひいた",       reading: "かぜひいた" },
    { display: "もう限界",         reading: "もうげんかい" },
    { display: "最近忙しい",       reading: "さいきんいそがしい" },
    { display: "いい天気",         reading: "いいてんき" },
    { display: "今日は元気",       reading: "きょうはげんき" },
    { display: "マジで眠い",       reading: "マジでねむい" },
    { display: "やっぱ無理",       reading: "やっぱむり" },
    { display: "最高の朝",         reading: "さいこうのあさ" },
    { display: "散歩したい",       reading: "さんぽしたい" },
    { display: "それな！",         reading: "それな!" },
    { display: "週末が待ち遠しい", reading: "しゅうまつがまちどおしい" },
  ],
  // ティア4: そこそこ長い文章
  [
    { display: "コーヒーを飲みながら仕事をします",       reading: "コーヒーをのみながらしごとをします" },
    { display: "週末は友達と映画を見ます",               reading: "しゅうまつはともだちとえいがをみます" },
    { display: "春になると桜の花が咲きます",             reading: "はるになるとさくらのはながさきます" },
    { display: "音楽を聴きながら勉強します",             reading: "おんがくをききながらべんきょうします" },
    { display: "新しい技術を学ぶことが大切です",         reading: "あたらしいぎじゅつをまなぶことがたいせつです" },
    { display: "おいしいラーメンを食べたいです",         reading: "おいしいラーメンをたべたいです" },
    { display: "図書館で本を読むのが好きです",           reading: "としょかんでほんをよむのがすきです" },
    { display: "スマートフォンで写真を撮りました",       reading: "スマートフォンでしゃしんをとりました" },
    { display: "寒い冬の朝は起きるのが辛いです",         reading: "さむいふゆのあさはおきるのがつらいです" },
    { display: "英語と日本語を両方勉強しています",       reading: "えいごとにほんごをりょうほうべんきょうしています" },
    { display: "秋の夕方の風がなんか好き",               reading: "あきのゆうがたのかぜがなんかすき" },
    { display: "お風呂あがりにベッドに寝転がる瞬間がすごく好き", reading: "おふろあがりにベッドにねころがるしゅんかんがすごくすき" },
    { display: "今日は最高の一日だった！",               reading: "きょうはさいこうのいちにちだった!" },
    { display: "週末どこか遊びに行かない？",             reading: "しゅうまつどこかあそびにいかない?" },
    { display: "明日テストなのに勉強してない！",         reading: "あしたテストなのにべんきょうしてない!" },
    { display: "朝起きてすぐコーヒーを飲むのが好きです",                     reading: "あさおきてすぐコーヒーをのむのがすきです" },
    { display: "雨の音を聞きながら本を読むのが好き",                         reading: "あめのおとをききながらほんをよむのがすき" },
    { display: "静かな夜に星空を眺めるのが好きです",                         reading: "しずかなよるにほしぞらをながめるのがすきです" },
    { display: "仕事帰りのビールが何より美味しい",                           reading: "しごとがえりのビールがなによりおいしい" },
    { display: "雪が降る日は外に出るのが楽しみです",                         reading: "ゆきがふるひはそとにでるのがたのしみです" },
    { display: "美味しいものを食べると幸せになる",                           reading: "おいしいものをたべるとしあわせになる" },
    { display: "朝の電車はいつも混んでいて疲れる",                           reading: "あさのでんしゃはいつもこんでいてつかれる" },
    { display: "週末は何もしないでゆっくり過ごしたい",                       reading: "しゅうまつはなにもしないでゆっくりすごしたい" },
    { display: "子供の頃に見たアニメを今も覚えている",                       reading: "こどものころにみたアニメをいまもおぼえている" },
    { display: "旅行先で食べた料理が忘れられない",                           reading: "りょこうさきでたべたりょうりがわすれられない" },
    { display: "カフェで本を読む時間が落ち着きます",                         reading: "カフェでほんをよむじかんがおちつきます" },
    { display: "子供たちの笑顔を見ると元気になる",                           reading: "こどもたちのえがおをみるとげんきになる" },
    { display: "雨上がりの空気がとても気持ちいい",                           reading: "あめあがりのくうきがとてもきもちいい" },
    { display: "仕事終わりにスーパーに寄って帰る",                           reading: "しごとおわりにスーパーによってかえる" },
    { display: "部屋を片付けると心もスッキリする",                           reading: "へやをかたづけるとこころもスッキリする" },
    { display: "朝のシャワーで目が覚める瞬間が好き",                         reading: "あさのシャワーでめがさめるしゅんかんがすき" },
    { display: "雨の日は家でゆっくりするに限る",                             reading: "あめのひはいえでゆっくりするにかぎる" },
    { display: "お風呂上がりのアイスが反則的に美味しい",                     reading: "おふろあがりのアイスがはんそくてきにおいしい" },
    { display: "久しぶりに会った友達と話が盛り上がった",                     reading: "ひさしぶりにあったともだちとはなしがもりあがった" },
    { display: "朝起きるとまず窓を開けて空気を入れ替える",                   reading: "あさおきるとまずまどをあけてくうきをいれかえる" },
    { display: "仕事の合間に飲む一杯のコーヒーが至福",                       reading: "しごとのあいまにのむいっぱいのコーヒーがしふく" },
    { display: "夜遅くに食べるラーメンは罪深い",                             reading: "よるおそくにたべるラーメンはつみぶかい" },
    { display: "急に走ると息切れする年齢になってしまった",                   reading: "きゅうにはしるといきぎれするねんれいになってしまった" },
    { display: "友達と話してると時間があっという間に過ぎる",                 reading: "ともだちとはなしてるとじかんがあっというまにすぎる" },
    { display: "スマホを見すぎて目が疲れる毎日",                             reading: "スマホをみすぎてめがつかれるまいにち" },
    { display: "朝ご飯をしっかり食べた日は調子がいい",                       reading: "あさごはんをしっかりたべたひはちょうしがいい" },
    { display: "好きな音楽を聴きながら歩くと気分が上がる",                   reading: "すきなおんがくをききながらあるくときぶんがあがる" },
    { display: "早起きしてゆっくり朝を過ごすのが理想",                       reading: "はやおきしてゆっくりあさをすごすのがりそう" },
    { display: "暑い夏の日のかき氷は最高に美味しい",                         reading: "あついなつのひのかきごおりはさいこうにおいしい" },
  ],
];

// 各ティアから何問ずつ出すか
const TIER_PICKS = [2, 2, 2, 2];
const SESSION_LENGTH = TIER_PICKS.reduce((a, b) => a + b, 0);

// ===== PARSER =====

function parseToUnits(text) {
  const units = [];
  let i = 0;
  while (i < text.length) {
    const c2 = text.slice(i, i + 2);
    const c1 = text[i];
    if (KANA_ROMAJI[c2]) {
      units.push({ kana: c2, options: [...KANA_ROMAJI[c2]], typed: null });
      i += 2;
    } else if (c1 === 'っ' || c1 === 'ッ') {
      units.push({ kana: c1, special: 'small-tsu', options: null, typed: null });
      i++;
    } else if (c1 === 'ん' || c1 === 'ン') {
      const next = text[i + 1];
      // ん is forced to "nn" when the next kana starts with a vowel, や行, or な行
      // (otherwise the single "n" collides with the next kana's romaji)
      const mustDouble = next && /[あいうえおアイウエオやゆよヤユヨなにぬねのナニヌネノ]/.test(next);
      units.push({ kana: c1, options: mustDouble ? ['nn'] : ['n', 'nn'], typed: null });
      i++;
    } else if (KANA_ROMAJI[c1]) {
      units.push({ kana: c1, options: [...KANA_ROMAJI[c1]], typed: null });
      i++;
    } else if (c1 !== ' ' && c1 !== '　') {
      units.push({ kana: c1, options: [c1], typed: null });
      i++;
    } else {
      i++;
    }
  }
  // resolve っ/ッ: accepts the first consonant of the next kana (once), or xtu/xtsu
  for (let j = 0; j < units.length; j++) {
    if (units[j].special === 'small-tsu') {
      const next = units[j + 1];
      const firstChars = next?.options ? [...new Set(next.options.map(o => o[0]))] : [];
      units[j].options = [...firstChars, 'xtu', 'xtsu', 'ltu', 'ltsu'];
      delete units[j].special;
    }
  }
  return units;
}

// Returns remaining romaji chars after buffer, using first matching option
function getRemaining(unit, buffer) {
  const match = unit.options.find(o => o.startsWith(buffer));
  return match ? match.slice(buffer.length) : (unit.options[0] ?? '');
}

// ===== SOUND =====

let audioCtx = null;
let soundEnabled = localStorage.getItem('soundEnabled') !== 'false';

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playTone(freq, duration, { type = 'sine', volume = 0.15, attack = 0.005, startTime, output } = {}) {
  if (!soundEnabled) return;
  initAudio();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(output ?? audioCtx.destination);
  osc.frequency.value = freq;
  osc.type = type;
  const t = startTime ?? audioCtx.currentTime;
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(volume, t + attack);
  gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
  osc.start(t);
  osc.stop(t + duration);
}

function playSequence(notes, { type = 'triangle', volume = 0.16 } = {}) {
  if (!soundEnabled) return;
  let delay = 0;
  for (const [freq, dur] of notes) {
    setTimeout(() => playTone(freq, dur, { type, volume }), delay);
    delay += dur * 1000 + 20;
  }
}

// Warm low timing beep — lower fundamental with subtle harmonics for richness
function playCountTick(startTime, output) {
  if (!soundEnabled) return;
  initAudio();
  const t = startTime ?? audioCtx.currentTime;
  playTone(330, 0.22, { type: 'triangle', volume: 0.17, attack: 0.004, startTime: t, output });  // E4 main
  playTone(165, 0.20, { type: 'sine',     volume: 0.12, attack: 0.004, startTime: t, output });  // E3 body
  playTone(660, 0.15, { type: 'sine',     volume: 0.04, attack: 0.004, startTime: t, output });  // E5 sparkle
}

// Ascending chime for "START" — major third + low body
function playStartChime(startTime, output) {
  if (!soundEnabled) return;
  initAudio();
  const t = startTime ?? audioCtx.currentTime;
  playTone(523.25, 0.15, { type: 'triangle', volume: 0.16, startTime: t,        output });   // C5
  playTone(659.25, 0.15, { type: 'triangle', volume: 0.16, startTime: t + 0.08, output });   // E5
  playTone(783.99, 0.45, { type: 'triangle', volume: 0.18, startTime: t + 0.18, output });   // G5
  playTone(391.99, 0.50, { type: 'sine',     volume: 0.10, startTime: t + 0.18, output });   // G4 (body)
  playTone(195.99, 0.55, { type: 'sine',     volume: 0.06, startTime: t + 0.18, output });   // G3 (sub)
}

// Mechanical keyboard click — white noise burst through a bandpass filter
function playClick({ freq = 3200, duration = 0.022, volume = 0.18, Q = 2 } = {}) {
  if (!soundEnabled) return;
  initAudio();
  const sampleCount = Math.floor(audioCtx.sampleRate * duration);
  const buffer = audioCtx.createBuffer(1, sampleCount, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < sampleCount; i++) {
    // sharp attack + fast decay envelope
    const env = Math.pow(1 - i / sampleCount, 2.5);
    data[i] = (Math.random() * 2 - 1) * env;
  }
  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = freq;
  filter.Q.value = Q;
  const gain = audioCtx.createGain();
  gain.gain.value = volume;
  noise.connect(filter).connect(gain).connect(audioCtx.destination);
  noise.start();
}

const sfx = {
  // メカニカルキーボード風カチッ音（毎回少しランダム化して単調にならないように）
  type: () => playClick({
    freq:     2800 + Math.random() * 800,
    duration: 0.018,
    volume:   0.48,
    Q:        2.2,
  }),
  miss: () => {
    playClick({ freq: 700, duration: 0.05, volume: 0.18, Q: 1.5 });
    playTone(140, 0.1, { type: 'sawtooth', volume: 0.08 });
  },
  // かな完了は「カチッ」を低めで、達成感を出す
  kanaDone: () => playClick({ freq: 1800, duration: 0.03, volume: 0.16, Q: 3 }),
  sentenceDone: () => {
    if (!soundEnabled) return;
    initAudio();
    const t = audioCtx.currentTime;
    playTone(523.25, 0.12, { type: 'triangle', volume: 0.14, startTime: t });            // C5
    playTone(783.99, 0.25, { type: 'triangle', volume: 0.14, startTime: t + 0.07 });     // G5
    playTone(261.63, 0.30, { type: 'sine',     volume: 0.07, startTime: t + 0.07 });     // C4 (body)
  },
  countBeep:   () => playCountTick(),
  countStart:  () => playStartChime(),
  finish: () => {
    if (!soundEnabled) return;
    initAudio();
    const t = audioCtx.currentTime;
    // Triumphant ascending arpeggio with low body
    playTone(523.25, 0.13, { type: 'triangle', volume: 0.18, startTime: t });             // C5
    playTone(659.25, 0.13, { type: 'triangle', volume: 0.18, startTime: t + 0.11 });      // E5
    playTone(783.99, 0.13, { type: 'triangle', volume: 0.18, startTime: t + 0.22 });      // G5
    playTone(1046.50, 0.45, { type: 'triangle', volume: 0.2, startTime: t + 0.33 });      // C6
    playTone(523.25, 0.50, { type: 'sine',     volume: 0.10, startTime: t + 0.33 });      // C5 (body)
    playTone(261.63, 0.55, { type: 'sine',     volume: 0.07, startTime: t + 0.33 });      // C4 (sub)
  },
  click:       () => playClick({ freq: 2200, duration: 0.025, volume: 0.15, Q: 2 }),
};

function toggleSound() {
  soundEnabled = !soundEnabled;
  localStorage.setItem('soundEnabled', String(soundEnabled));
  updateMuteButton();
  if (soundEnabled) sfx.click();
}

function updateMuteButton() {
  if (!els.btnMute) return;
  els.btnMute.textContent = soundEnabled ? '🔊' : '🔇';
  els.btnMute.classList.toggle('muted', !soundEnabled);
}

// ===== STATE =====

let session = [], currentSentenceIdx = 0, sentenceData = [];
let lastAnalysis = null;
let typingUnits = [], currentKanaIdx = 0, typingBuffer = '';
let keystrokes = [], kanaRecords = [];
let totalCorrect = 0, totalMistakes = 0;
let sentenceStartTime = null, lastKeyTime = null;
let kanaStartTime = null, kanaMistakes = 0;
let isActive = false;
let combo = 0;
let totalSessionKana = 0, completedSessionKana = 0;
let pendingNAbsorb = false;
let isCountingDown = false;

// ===== DOM =====

const els = {
  btnStart:        document.getElementById('btn-start'),
  btnRetry:        document.getElementById('btn-retry'),
  btnCopyAI:       document.getElementById('btn-copy-ai'),
  japaneseText:    document.getElementById('japanese-text'),
  romajiDone:      document.getElementById('romaji-done'),
  romajiCursor:    document.getElementById('romaji-cursor'),
  romajiRest:      document.getElementById('romaji-rest'),
  statSpeed:       document.getElementById('stat-speed'),
  statAccuracy:    document.getElementById('stat-accuracy'),
  statMistakes:    document.getElementById('stat-mistakes'),
  statCombo:       document.getElementById('stat-combo'),
  comboCard:       document.getElementById('combo-card'),
  sentenceCounter: document.getElementById('sentence-counter'),
  progressFill:    document.getElementById('progress-fill'),
  rAccuracy:       document.getElementById('r-accuracy'),
  rSpeed:          document.getElementById('r-speed'),
  rMistakes:       document.getElementById('r-mistakes'),
  rKeystrokes:     document.getElementById('r-keystrokes'),
  rRank:           document.getElementById('r-rank'),
  rFeedback:       document.getElementById('r-feedback'),
  rWeakKana:       document.getElementById('r-weak-kana'),
  btnHowto:        document.getElementById('btn-howto'),
  btnCloseHowto:   document.getElementById('btn-close-howto'),
  btnCloseHowto2:  document.getElementById('btn-close-howto-2'),
  howtoModal:      document.getElementById('howto-modal'),
  countdown:       document.getElementById('countdown'),
  countdownNum:    document.getElementById('countdown-num'),
  btnMute:         document.getElementById('btn-mute'),
  deviceWarning:   document.getElementById('device-warning'),
  btnCloseWarning: document.getElementById('btn-close-warning'),
};

const screens = {
  start:  document.getElementById('screen-start'),
  typing: document.getElementById('screen-typing'),
  result: document.getElementById('screen-result'),
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// ===== SESSION =====

function updateCombo() {
  const card = els.comboCard;
  card.classList.remove('combo-on', 'combo-hot', 'combo-fire');
  if (combo < 3) {
    els.statCombo.textContent = '-';
  } else {
    els.statCombo.textContent = combo;
    if (combo >= 20)      card.classList.add('combo-fire');
    else if (combo >= 10) card.classList.add('combo-hot');
    else                  card.classList.add('combo-on');
  }
}

function updateCharge() {
  const pct = totalSessionKana > 0 ? (completedSessionKana / totalSessionKana) * 100 : 0;
  els.progressFill.style.width = `${pct}%`;
  if (pct > 0 && pct < 100) els.progressFill.classList.add('charging');
  else els.progressFill.classList.remove('charging');
}

function startSession() {
  if (isActive || isCountingDown) return;
  session = SENTENCE_TIERS.flatMap((tier, i) => {
    const shuffled = [...tier].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, TIER_PICKS[i]);
  });
  currentSentenceIdx = 0;
  sentenceData = [];
  combo = 0;
  completedSessionKana = 0;
  totalSessionKana = session.reduce((sum, s) => sum + parseToUnits(s.reading).length, 0);
  updateCombo();
  updateCharge();
  showScreen('typing');
  loadSentence();
  runCountdown(() => {
    document.addEventListener('keydown', handleKeyDown);
    isActive = true;
  });
}

let countdownTimers = [];
let countdownAudioGain = null;

function runCountdown(onComplete) {
  isCountingDown = true;
  const overlay = els.countdown;
  const numEl = els.countdownNum;
  overlay.classList.add('active');
  screens.typing.classList.add('counting');
  initAudio();

  // 専用のGainNodeを作ってカウントダウンの全オーディオをこれにルーティング。
  // Escでキャンセル時はこのGainを切るだけで予約済み音も止まる。
  countdownAudioGain = audioCtx.createGain();
  countdownAudioGain.connect(audioCtx.destination);

  const INTERVAL = 1100;        // 数字の間隔(ms)
  const FINAL_DELAY = 850;      // START表示後の待機(ms)
  const AUDIO_LEAD = 0.08;      // AudioContext予約の小さなバッファ(秒)
  const audioBase = audioCtx.currentTime + AUDIO_LEAD;
  const visualBase = AUDIO_LEAD * 1000;

  const showStep = (text, withGo) => {
    numEl.classList.remove('pop', 'go');
    void numEl.offsetWidth;
    numEl.textContent = text;
    requestAnimationFrame(() => {
      numEl.classList.add(withGo ? 'go' : 'pop');
      if (withGo) numEl.classList.add('pop');
    });
  };

  // 3 → 2 → 1：視覚と音を同じ基準時刻からスケジュール
  for (let i = 0; i < 3; i++) {
    const num = 3 - i;
    const visualAt = visualBase + i * INTERVAL;
    const audioAt = audioBase + i * (INTERVAL / 1000);
    countdownTimers.push(setTimeout(() => showStep(num, false), visualAt));
    playCountTick(audioAt, countdownAudioGain);
  }

  // START
  const startVisualAt = visualBase + 3 * INTERVAL;
  const startAudioAt  = audioBase + 3 * (INTERVAL / 1000);
  countdownTimers.push(setTimeout(() => showStep('START', true), startVisualAt));
  playStartChime(startAudioAt, countdownAudioGain);

  // 完了
  countdownTimers.push(setTimeout(() => {
    overlay.classList.remove('active');
    screens.typing.classList.remove('counting');
    isCountingDown = false;
    countdownAudioGain = null;
    onComplete();
  }, startVisualAt + FINAL_DELAY));
}

function cancelCountdown() {
  countdownTimers.forEach(clearTimeout);
  countdownTimers = [];
  if (countdownAudioGain && audioCtx) {
    countdownAudioGain.gain.cancelScheduledValues(audioCtx.currentTime);
    countdownAudioGain.gain.setValueAtTime(0, audioCtx.currentTime);
    try { countdownAudioGain.disconnect(); } catch {}
    countdownAudioGain = null;
  }
  isCountingDown = false;
  els.countdown.classList.remove('active');
  screens.typing.classList.remove('counting');
}

function loadSentence() {
  const s = session[currentSentenceIdx];
  typingUnits = parseToUnits(s.reading);
  currentKanaIdx = 0; typingBuffer = '';
  keystrokes = []; kanaRecords = [];
  totalCorrect = 0; totalMistakes = 0;
  sentenceStartTime = null; lastKeyTime = null;
  kanaStartTime = null; kanaMistakes = 0;
  pendingNAbsorb = false;

  els.japaneseText.textContent = s.display;
  els.sentenceCounter.textContent = `${currentSentenceIdx + 1} / ${session.length}`;
  els.statSpeed.textContent    = '0.0';
  els.statAccuracy.textContent = '--';
  els.statMistakes.textContent = '0';
  buildDisplay();
}

// ===== DISPLAY =====

function buildDisplay() {
  let done = '';
  for (let i = 0; i < currentKanaIdx; i++) done += typingUnits[i].typed;
  done += typingBuffer;

  let cursor = '', rest = '';
  if (currentKanaIdx < typingUnits.length) {
    const rem = getRemaining(typingUnits[currentKanaIdx], typingBuffer);
    cursor = rem[0] ?? '';
    rest = rem.slice(1);
    for (let i = currentKanaIdx + 1; i < typingUnits.length; i++) {
      rest += typingUnits[i].options[0];
    }
  }
  els.romajiDone.textContent   = done;
  els.romajiCursor.textContent = cursor;
  els.romajiRest.textContent   = rest;
}

function updateLiveStats() {
  const elapsed = sentenceStartTime ? (Date.now() - sentenceStartTime) / 1000 : 0;
  const sessionMistakes = sentenceData.reduce((s, d) => s + d.totalMistakes, 0) + totalMistakes;
  const kps = elapsed > 0 ? (totalCorrect / elapsed).toFixed(1) : '0.0';
  const attempts = totalCorrect + totalMistakes;
  const accuracy = attempts > 0 ? Math.round(totalCorrect / attempts * 100) : 100;
  els.statSpeed.textContent    = kps;
  els.statAccuracy.textContent = accuracy;
  els.statMistakes.textContent = sessionMistakes;
}

// ===== INPUT =====

function handleKeyDown(e) {
  if (!isActive) return;
  if (e.key.length !== 1) return;
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  e.preventDefault();

  // Absorb a second 'n' after ん was just completed with a single 'n'
  // (so typing "nn" works the same as "n" before a non-vowel kana)
  if (pendingNAbsorb) {
    pendingNAbsorb = false;
    if (e.key === 'n') {
      const nextUnit = typingUnits[currentKanaIdx];
      const isNextN = nextUnit && (nextUnit.kana === 'ん' || nextUnit.kana === 'ン');
      if (!isNextN) {
        sfx.type();
        return;
      }
    }
  }

  const now = Date.now();
  if (sentenceStartTime === null) sentenceStartTime = now;
  // Start the kana timer from the previous keystroke so that single-key kana
  // (う、い、ん等) and the transition into the kana are counted.
  if (kanaStartTime === null) kanaStartTime = lastKeyTime ?? now;
  const timeSincePrev = lastKeyTime !== null ? now - lastKeyTime : null;
  lastKeyTime = now;

  const unit = typingUnits[currentKanaIdx];
  const key = e.key;
  const newBuffer = typingBuffer + key;
  const isComplete = unit.options.some(o => o === newBuffer);
  const isPrefix   = !isComplete && unit.options.some(o => o.startsWith(newBuffer));
  const correct    = isComplete || isPrefix;

  const expected = getRemaining(unit, typingBuffer)[0] ?? '';
  keystrokes.push({ key, expected, correct, timeSincePrev, kanaIdx: currentKanaIdx,
    timeSinceStart: now - sentenceStartTime });

  if (correct) {
    totalCorrect++;
    if (isComplete) {
      kanaRecords.push({ kana: unit.kana, romaji: newBuffer,
        duration: now - kanaStartTime, mistakes: kanaMistakes });
      unit.typed = newBuffer;
      pendingNAbsorb = (unit.kana === 'ん' || unit.kana === 'ン') && newBuffer === 'n';
      typingBuffer = '';
      currentKanaIdx++;
      kanaStartTime = null;
      kanaMistakes = 0;
      els.romajiCursor.classList.remove('error', 'flash');
      void els.romajiCursor.offsetWidth;
      els.romajiCursor.classList.add('flash');
      setTimeout(() => els.romajiCursor.classList.remove('flash'), 220);
      combo++;
      updateCombo();
      completedSessionKana++;
      updateCharge();
      sfx.kanaDone();
      if (currentKanaIdx >= typingUnits.length) { completeSentence(); return; }
    } else {
      typingBuffer = newBuffer;
      els.romajiCursor.classList.remove('error');
      sfx.type();
    }
    buildDisplay();
  } else {
    totalMistakes++;
    kanaMistakes++;
    combo = 0;
    updateCombo();
    els.romajiCursor.classList.remove('error');
    void els.romajiCursor.offsetWidth;
    els.romajiCursor.classList.add('error');
    sfx.miss();
  }
  updateLiveStats();
}

// ===== COMPLETION =====

function completeSentence() {
  sentenceData.push({
    japanese: session[currentSentenceIdx].display,
    reading:  session[currentSentenceIdx].reading,
    duration: Date.now() - sentenceStartTime,
    totalCorrect, totalMistakes,
    kanaRecords: [...kanaRecords],
    keystrokes: [...keystrokes],
  });
  totalCorrect = 0; totalMistakes = 0;
  currentSentenceIdx++;
  if (currentSentenceIdx >= session.length) endSession();
  else { sfx.sentenceDone(); loadSentence(); }
}

function abortSession() {
  isActive = false;
  document.removeEventListener('keydown', handleKeyDown);
  showScreen('start');
}

function endSession() {
  isActive = false;
  document.removeEventListener('keydown', handleKeyDown);
  els.progressFill.style.width = '100%';
  const analysis = computeAnalysis();
  lastAnalysis = analysis;
  showResults(analysis);
  outputToConsole(analysis);
  setTimeout(() => sfx.finish(), 250);
}

// ===== AI PROMPT BUILDER =====

function buildMistakeList(sentences) {
  const map = {};
  for (const s of sentences) {
    const units = parseToUnits(s.reading);
    for (const k of s.keystrokes) {
      if (k.correct) continue;
      const kana = units[k.kanaIdx]?.kana ?? '?';
      const key = `${kana}|${k.expected}|${k.key}`;
      if (!map[key]) map[key] = { kana, expected: k.expected, typed: k.key, count: 0 };
      map[key].count++;
    }
  }
  return Object.values(map).sort((a, b) => b.count - a.count);
}

function buildAIPrompt(a) {
  const mistakes = buildMistakeList(a.sentences);
  const slowBigrams = Object.entries(a.bigramStats)
    .sort(([,x],[,y]) => y.avgTime - x.avgTime).slice(0, 5);

  const sentKps = s => s.duration > 0 ? (s.totalCorrect / (s.duration / 1000)).toFixed(2) : '0.00';
  const sentAcc = s => (s.totalCorrect + s.totalMistakes) > 0
    ? ((s.totalCorrect / (s.totalCorrect + s.totalMistakes)) * 100).toFixed(1) : '100.0';
  const groupKps = arr => {
    const c = arr.reduce((s, d) => s + d.totalCorrect, 0);
    const d = arr.reduce((s, d) => s + d.duration, 0);
    return d > 0 ? (c / (d / 1000)).toFixed(2) : '0.00';
  };
  const groupAcc = arr => {
    const c = arr.reduce((s, d) => s + d.totalCorrect, 0);
    const m = arr.reduce((s, d) => s + d.totalMistakes, 0);
    return (c + m) > 0 ? ((c / (c + m)) * 100).toFixed(1) : '100.0';
  };

  const lines = [];
  lines.push('あなたはタイピング指導のプロです。');
  lines.push('以下は日本語ローマ字入力のタイピングデータです。');
  lines.push('すべてのデータを精査したうえで、必ず以下のフォーマット通りに出力してください。');
  lines.push('数値は必ずデータから引用し、推測や一般論だけで埋めないこと。');
  lines.push('');
  lines.push('━━━━━━━━━━━━━━━━━━━━');
  lines.push('【一言診断】');
  lines.push('（全体の傾向を1〜2文で。例：「拗音と さ行に課題あり。速度より正確性を優先する段階。」）');
  lines.push('');
  lines.push('【弱点 TOP3】');
  lines.push('1. （弱点のタイトル）');
  lines.push('   データ：（根拠となる数値をデータから引用）');
  lines.push('   原因：（なぜ遅い・ミスが多いかの推測）');
  lines.push('   練習：（具体的な練習内容。打つべき文字列や方法を明示）');
  lines.push('');
  lines.push('2. （同上）');
  lines.push('   データ：');
  lines.push('   原因：');
  lines.push('   練習：');
  lines.push('');
  lines.push('3. （同上）');
  lines.push('   データ：');
  lines.push('   原因：');
  lines.push('   練習：');
  lines.push('');
  lines.push('【今日の練習メニュー】');
  lines.push('① （上記弱点1への具体的な練習。実際に打つ文字列を含めること）');
  lines.push('② （弱点2への練習）');
  lines.push('③ （弱点3への練習）');
  lines.push('━━━━━━━━━━━━━━━━━━━━');
  lines.push('');

  lines.push('【総合結果】');
  lines.push(`- 正確率: ${a.accuracy}%`);
  lines.push(`- 平均速度: ${a.kps} 回/秒`);
  lines.push(`- ミス: ${a.totalMistakes}回 / 総打鍵 ${a.totalCorrectKeys}回`);
  lines.push(`- 所要時間: ${(a.totalDuration / 1000).toFixed(1)}秒`);
  lines.push('');

  const half = Math.floor(a.sentences.length / 2);
  const firstHalf = a.sentences.slice(0, half);
  const secondHalf = a.sentences.slice(half);
  lines.push('【セッション推移（前半 vs 後半）】');
  lines.push(`- 前半(1〜${half}文): 速度 ${groupKps(firstHalf)} 回/秒, 正確率 ${groupAcc(firstHalf)}%`);
  lines.push(`- 後半(${half + 1}〜${a.sentences.length}文): 速度 ${groupKps(secondHalf)} 回/秒, 正確率 ${groupAcc(secondHalf)}%`);
  lines.push('');

  lines.push('【文ごとの内訳】');
  a.sentences.forEach((s, i) =>
    lines.push(`${i + 1}. 「${s.japanese}」 速度:${sentKps(s)}回/秒 正確率:${sentAcc(s)}% ミス:${s.totalMistakes}回`));
  lines.push('');

  lines.push('【全かな速度・ミス一覧】（遅い順, 前のかなからこのかなを打ち終わるまでの時間）');
  const allKanaSorted = Object.entries(a.perKanaStats)
    .sort(([, x], [, y]) => y.avgDuration - x.avgDuration);
  if (allKanaSorted.length > 0) {
    allKanaSorted.forEach(([k, v]) =>
      lines.push(`「${k}」 平均${v.avgDuration}ms, ${v.count}回出現, ${v.totalMistakes}ミス`));
  } else {
    lines.push('（データ不足）');
  }
  lines.push('');

  lines.push('【遅いキー連続 (bigram) TOP5】');
  if (slowBigrams.length > 0) {
    slowBigrams.forEach(([bg, s], i) =>
      lines.push(`${i + 1}. "${bg}" - 平均 ${s.avgTime}ms (${s.count}回)`));
  } else {
    lines.push('（データ不足）');
  }
  lines.push('');

  lines.push('【ミスのパターン】');
  if (mistakes.length > 0) {
    mistakes.forEach(m =>
      lines.push(`- 「${m.kana}」を打つとき: 期待="${m.expected}" 誤打="${m.typed}" (${m.count}回)`));
  } else {
    lines.push('（ミスなし）');
  }
  lines.push('');

  lines.push('【補足】');
  lines.push('- 日本語ローマ字入力（し=shi/si/ci, ち=chi/ti 等、複数のローマ字を受け付け）');
  lines.push('- 「かな速度」の時間には、前のかなから移行する指の動きも含まれる');
  return lines.join('\n');
}

const COPY_BTN_LABEL = 'AI分析用テキストをコピー';
let copyTimer = null;

function resetCopyButton() {
  clearTimeout(copyTimer);
  els.btnCopyAI.textContent = COPY_BTN_LABEL;
  els.btnCopyAI.classList.remove('copied');
}

async function copyAIPrompt() {
  if (!lastAnalysis) return;
  const text = buildAIPrompt(lastAnalysis);
  try {
    await navigator.clipboard.writeText(text);
    clearTimeout(copyTimer);
    els.btnCopyAI.textContent = '✓ コピーしました!';
    els.btnCopyAI.classList.add('copied');
    copyTimer = setTimeout(resetCopyButton, 2000);
  } catch (e) {
    alert('コピーに失敗しました。コンソールから手動でコピーしてください。');
    console.log(text);
  }
}

// ===== ANALYSIS =====

function computeAnalysis() {
  const allKS   = sentenceData.flatMap(s => s.keystrokes);
  const allKana = sentenceData.flatMap(s => s.kanaRecords);
  const correctKS = allKS.filter(k => k.correct);

  const totalDuration    = sentenceData.reduce((s, d) => s + d.duration, 0);
  const totalCorrectKeys = sentenceData.reduce((s, d) => s + d.totalCorrect, 0);
  const totalMistakeCount= sentenceData.reduce((s, d) => s + d.totalMistakes, 0);
  const accuracy = (totalCorrectKeys + totalMistakeCount) > 0
    ? (totalCorrectKeys / (totalCorrectKeys + totalMistakeCount) * 100) : 100;
  const kps = totalDuration > 0 ? totalCorrectKeys / (totalDuration / 1000) : 0;

  // per-key timing
  const perKey = {};
  for (const k of correctKS) {
    if (k.timeSincePrev === null) continue;
    if (!perKey[k.key]) perKey[k.key] = { count: 0, totalTime: 0, times: [], errors: 0 };
    perKey[k.key].count++;
    perKey[k.key].totalTime += k.timeSincePrev;
    perKey[k.key].times.push(k.timeSincePrev);
  }
  for (const k of allKS) {
    if (!k.correct) {
      const key = k.expected || '?';
      if (!perKey[key]) perKey[key] = { count: 0, totalTime: 0, times: [], errors: 0 };
      perKey[key].errors++;
    }
  }
  const perKeyStats = Object.fromEntries(Object.entries(perKey).map(([k, d]) => [k, {
    count: d.count,
    avgTime: d.count > 0 ? Math.round(d.totalTime / d.count) : null,
    maxTime: d.times.length > 0 ? Math.max(...d.times) : null,
    errors: d.errors,
    errorRate: (d.count + d.errors) > 0
      ? ((d.errors / (d.count + d.errors)) * 100).toFixed(1) : '0.0',
  }]));

  // per-kana
  const perKana = {};
  for (const r of allKana) {
    if (!perKana[r.kana]) perKana[r.kana] = { count: 0, totalDuration: 0, durations: [], totalMistakes: 0 };
    perKana[r.kana].count++;
    perKana[r.kana].totalDuration += r.duration;
    perKana[r.kana].durations.push(r.duration);
    perKana[r.kana].totalMistakes += r.mistakes;
  }
  const perKanaStats = Object.fromEntries(Object.entries(perKana).map(([k, d]) => [k, {
    count: d.count,
    avgDuration: Math.round(d.totalDuration / d.count),
    maxDuration: Math.max(...d.durations),
    totalMistakes: d.totalMistakes,
  }]));

  // bigrams
  const bigrams = {};
  for (const s of sentenceData) {
    const ks = s.keystrokes.filter(k => k.correct);
    for (let i = 1; i < ks.length; i++) {
      if (ks[i].timeSincePrev === null) continue;
      const bg = ks[i-1].key + ks[i].key;
      if (!bigrams[bg]) bigrams[bg] = { count: 0, totalTime: 0 };
      bigrams[bg].count++;
      bigrams[bg].totalTime += ks[i].timeSincePrev;
    }
  }
  const bigramStats = Object.fromEntries(
    Object.entries(bigrams).filter(([,d]) => d.count >= 2).map(([bg, d]) => [bg, {
      count: d.count, avgTime: Math.round(d.totalTime / d.count)
    }])
  );

  return {
    totalDuration, totalCorrectKeys, totalMistakes: totalMistakeCount,
    accuracy: accuracy.toFixed(1), kps: kps.toFixed(2),
    perKeyStats, perKanaStats, bigramStats,
    slowestKana: Object.entries(perKanaStats)
      .filter(([,v]) => v.count >= 2).sort(([,a],[,b]) => b.avgDuration - a.avgDuration).slice(0,5),
    mostMistakenKana: Object.entries(perKanaStats)
      .filter(([,v]) => v.totalMistakes > 0).sort(([,a],[,b]) => b.totalMistakes - a.totalMistakes).slice(0,5),
    slowestKeys: Object.entries(perKeyStats)
      .filter(([,v]) => v.avgTime !== null && v.count >= 2).sort(([,a],[,b]) => b.avgTime - a.avgTime).slice(0,5),
    sentences: sentenceData,
  };
}

// ===== RESULTS =====

function animateValue(el, target, decimals, suffix) {
  const duration = 900;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = (target * eased).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = target.toFixed(decimals) + suffix;
  };
  requestAnimationFrame(tick);
}

function calcRank(accuracy, kps) {
  const acc = parseFloat(accuracy), speed = parseFloat(kps);
  if (acc >= 98 && speed >= 5.0) return 'S';
  if (acc >= 95 && speed >= 3.5) return 'A';
  if (acc >= 88 && speed >= 2.5) return 'B';
  return 'C';
}

function getFeedback(a) {
  const acc = parseFloat(a.accuracy);
  const kps = parseFloat(a.kps);
  const mis = a.totalMistakes;
  const slow = a.slowestKana.slice(0, 3).map(([k]) => `「${k}」`).join('・');

  if (acc >= 98 && kps >= 5.0)
    return `正確率${a.accuracy}%、速度${a.kps}回/秒。今日の調子は最高です。`;
  if (acc >= 95 && kps >= 4.0)
    return `正確率${a.accuracy}%と安定しています。${slow ? slow + 'で少し詰まりました。' : 'この調子をキープしましょう。'}`;
  if (acc >= 95 && kps < 3.5)
    return `正確率は${a.accuracy}%と高め。次は速度${(kps + 0.5).toFixed(1)}回/秒を目標にしましょう。`;
  if (acc < 88 && kps >= 4.0)
    return `速さはあります。ミスが${mis}回ありました。${slow ? slow + 'を重点的に練習してみましょう。' : '正確性を意識してみましょう。'}`;
  if (acc < 85)
    return `ミスが${mis}回ありました。まずは正確に打つことを優先しましょう。速度は後からついてきます。`;
  return `正確率${a.accuracy}%、速度${a.kps}回/秒。${slow ? slow + 'でやや詰まりました。' : 'バランスよく打てています。'}`;
}

function showResults(a) {
  showScreen('result');
  resetCopyButton();
  animateValue(els.rAccuracy,   parseFloat(a.accuracy),  1, '%');
  animateValue(els.rSpeed,      parseFloat(a.kps),        2, '');
  animateValue(els.rMistakes,   a.totalMistakes,          0, '');
  animateValue(els.rKeystrokes, a.totalCorrectKeys,       0, '');

  const rank = calcRank(a.accuracy, a.kps);
  els.rRank.textContent = rank;
  els.rRank.className   = `rank-badge rank-${rank.toLowerCase()}`;

  els.rFeedback.textContent = getFeedback(a);

  const weak = a.slowestKana.slice(0, 5);
  els.rWeakKana.innerHTML = weak.length
    ? weak.map(([k, v]) => `<div class="weak-kana-item"><span>${k}</span>${v.avgDuration}ms</div>`).join('')
    : '<div class="weak-kana-item" style="color:#2c4050">データ不足</div>';
}

function outputToConsole(a) {
  console.log('%c=== タイピング分析データ ===', 'color:#7ec8e3;font-size:14px;font-weight:bold');
  console.log(`\n【総合】 正確率:${a.accuracy}%  速度:${a.kps}回/秒  ミス:${a.totalMistakes}  打鍵数:${a.totalCorrectKeys}  時間:${(a.totalDuration/1000).toFixed(1)}秒`);

  if (a.slowestKana.length > 0) {
    console.log('\n【遅い文字 Top5】');
    a.slowestKana.forEach(([k,s],i) => console.log(`  ${i+1}. "${k}" 平均${s.avgDuration}ms`));
  }
  if (a.mostMistakenKana.length > 0) {
    console.log('\n【ミスの多い文字】');
    a.mostMistakenKana.forEach(([k,s]) => console.log(`  "${k}" ミス${s.totalMistakes}回`));
  }
  if (a.slowestKeys.length > 0) {
    console.log('\n【遅いキー Top5】');
    a.slowestKeys.forEach(([k,s],i) => console.log(`  ${i+1}. "${k}" 平均${s.avgTime}ms  ミス${s.errors}回`));
  }

  console.log('\n【文字ごとの詳細】');
  console.table(Object.fromEntries(
    Object.entries(a.perKanaStats).map(([k,v]) => [k, { 平均ms: v.avgDuration, 最大ms: v.maxDuration, 回数: v.count, ミス: v.totalMistakes }])
  ));

  console.log('\n【AI分析用JSON】');
  console.log(JSON.stringify(a, null, 2));
  console.log('%c===========================', 'color:#7ec8e3');
}

// ===== EVENTS =====

els.btnStart.addEventListener('click', () => { sfx.click(); startSession(); });
els.btnRetry.addEventListener('click', () => { sfx.click(); showScreen('start'); });
els.btnCopyAI.addEventListener('click', () => { sfx.click(); copyAIPrompt(); });

function openHowto()  { els.howtoModal.classList.add('open'); }
function closeHowto() { els.howtoModal.classList.remove('open'); }
function isHowtoOpen() { return els.howtoModal.classList.contains('open'); }

els.btnHowto.addEventListener('click', () => { sfx.click(); openHowto(); });
els.btnCloseHowto.addEventListener('click', () => { sfx.click(); closeHowto(); });
els.btnCloseHowto2.addEventListener('click', () => { sfx.click(); closeHowto(); });
els.howtoModal.addEventListener('click', (e) => {
  if (e.target === els.howtoModal) closeHowto();
});

els.btnMute.addEventListener('click', toggleSound);
updateMuteButton();

// ===== DEVICE WARNING =====
function isMobileOrTablet() {
  const ua = navigator.userAgent;
  // 一般的なモバイル/タブレットのUA
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  // iPadOS 13+ は Macintosh としてUAを返すので maxTouchPoints で補正
  const isIPadOS = navigator.maxTouchPoints > 1 && /Macintosh/i.test(ua);
  // タッチ可能 + 画面幅が狭い場合もモバイル扱い
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const smallScreen = window.innerWidth < 1024;
  return mobileRegex.test(ua) || isIPadOS || (isTouch && smallScreen);
}

if (isMobileOrTablet()) {
  els.deviceWarning.classList.add('open');
}
els.btnCloseWarning.addEventListener('click', () => {
  sfx.click();
  els.deviceWarning.classList.remove('open');
});
els.deviceWarning.addEventListener('click', (e) => {
  if (e.target === els.deviceWarning) els.deviceWarning.classList.remove('open');
});

document.addEventListener('keydown', (e) => {
  if (isHowtoOpen()) {
    if (e.key === 'Escape') { e.preventDefault(); closeHowto(); }
    return;
  }

  if (isCountingDown) {
    if (e.key === 'Escape') {
      e.preventDefault();
      cancelCountdown();
      showScreen('start');
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
    }
    return;
  }

  const onStart  = screens.start.classList.contains('active');
  const onResult = screens.result.classList.contains('active');
  const onTyping = screens.typing.classList.contains('active');

  if ((onStart || onResult) && (e.key === ' ' || e.key === 'Enter')) {
    e.preventDefault();
    startSession();
    return;
  }

  if (onTyping && !isActive && (e.key === ' ' || e.key === 'Enter')) {
    e.preventDefault();
    return;
  }

  if (onTyping && e.key === 'Escape') {
    e.preventDefault();
    abortSession();
  }
});
