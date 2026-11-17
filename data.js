/**
 * 外国人向けダイバーシティ安心マップWebアプリ - 店舗データ＆多言語辞書
 * 大分県別府市を中心とした、食の配慮・決済・言語サポートに対応する店舗情報
 */

// 多言語翻訳辞書（日・英・中・韓）
const i18n = {
  ja: {
    appTitle: "Unimap",
    appSubtitle: "食の配慮・キャッシュレス・多言語でつながる別府ガイド",
    searchPlaceholder: "店舗名、料理名、キーワードで検索...",
    filterAll: "すべて",
    filterVegetarian: "🥗 ベジタリアン",
    filterVegan: "🌿 ヴィーガン",
    filterHalal: "🕌 ハラール対応",
    filterPorkFree: "🥩 豚肉不使用",
    filterPrayerRoom: "🕋 礼拝室あり",
    filterCreditCard: "💳 カード決済可",
    filterQrPay: "📱 QR・電子マネー",
    resultsCount: "件の安心スポットが見つかりました",
    noResults: "条件に一致する店舗が見つかりませんでした。",
    sectionDietary: "食の配慮・設備",
    sectionPayments: "使えるお支払い方法",
    sectionServices: "言語・サービス",
    sectionInfo: "基本情報",
    addressLabel: "住所",
    hoursLabel: "営業時間",
    phoneLabel: "電話番号",
    routeBtn: "Google Maps でルート案内",
    closeBtn: "閉じる",
    categoryRestaurant: "レストラン・飲食店",
    categoryCafe: "カフェ・スイーツ",
    tagVegetarian: "ベジタリアン",
    tagVegan: "ヴィーガン",
    tagHalal: "ハラール対応",
    tagPorkFree: "豚肉不使用",
    tagPrayerRoom: "礼拝室・祈祷室あり",
    tagEnglishMenu: "英語メニュー",
    tagEnglishStaff: "英語対応スタッフ",
    tagWifi: "無料Wi-Fi",
    paymentCreditCard: "クレジットカード",
    paymentQr: "QRコード決済",
    paymentIc: "交通系IC・電子マネー",
    paymentCash: "現金（日本円）",
    statusSupported: "対応",
    statusNotSupported: "非対応",
    badgeCashOnly: "現金のみ（キャッシュレス不可）",
    badgeNonDietary: "食の配慮・ハラール等非対応",
    categoryFastfood: "ファストフード",
    categoryRamen: "ラーメン・麺類"
  },
  en: {
    appTitle: "Unimap",
    appSubtitle: "A warm welcome guide with dietary, payment & language support in Beppu",
    searchPlaceholder: "Search by shop name, dish, keyword...",
    filterAll: "All",
    filterVegetarian: "🥗 Vegetarian",
    filterVegan: "🌿 Vegan",
    filterHalal: "🕌 Halal-Friendly",
    filterPorkFree: "🥩 Pork-Free",
    filterPrayerRoom: "🕋 Prayer Room",
    filterCreditCard: "💳 Credit Card",
    filterQrPay: "📱 QR / E-Money",
    resultsCount: "spots found",
    noResults: "No matching spots found for your criteria.",
    sectionDietary: "Dietary & Facilities",
    sectionPayments: "Accepted Payments",
    sectionServices: "Languages & Services",
    sectionInfo: "Information",
    addressLabel: "Address",
    hoursLabel: "Opening Hours",
    phoneLabel: "Phone",
    routeBtn: "Directions via Google Maps",
    closeBtn: "Close",
    categoryRestaurant: "Restaurant & Dining",
    categoryCafe: "Cafe & Sweets",
    tagVegetarian: "Vegetarian",
    tagVegan: "Vegan",
    tagHalal: "Halal-Friendly",
    tagPorkFree: "Pork-Free",
    tagPrayerRoom: "Prayer Room Available",
    tagEnglishMenu: "English Menu",
    tagEnglishStaff: "English Speaking Staff",
    tagWifi: "Free Wi-Fi",
    paymentCreditCard: "Credit Card",
    paymentQr: "QR Code / Mobile Pay",
    paymentIc: "Transit IC / E-Money",
    paymentCash: "Cash (JPY)",
    statusSupported: "Supported",
    statusNotSupported: "Not Supported",
    badgeCashOnly: "Cash Only (No Cards/QR)",
    badgeNonDietary: "Dietary/Halal options not supported",
    categoryFastfood: "Fast Food",
    categoryRamen: "Ramen & Noodles"
  },
  zh: {
    appTitle: "Unimap",
    appSubtitle: "别府饮食关怀、移动支付与多语言友好指南",
    searchPlaceholder: "搜索店铺名、料理名、关键词...",
    filterAll: "全部",
    filterVegetarian: "🥗 素食",
    filterVegan: "🌿 纯素",
    filterHalal: "🕌 清真友好",
    filterPorkFree: "🥩 无猪肉",
    filterPrayerRoom: "🕋 祈祷室",
    filterCreditCard: "💳 信用卡",
    filterQrPay: "📱 扫码/电子支付",
    resultsCount: "个安心去处",
    noResults: "未找到符合条件的店铺。",
    sectionDietary: "饮食关怀与设施",
    sectionPayments: "支持的支付方式",
    sectionServices: "语言与服务",
    sectionInfo: "基本信息",
    addressLabel: "地址",
    hoursLabel: "营业时间",
    phoneLabel: "电话",
    routeBtn: "在 Google Maps 导航",
    closeBtn: "关闭",
    categoryRestaurant: "餐厅美食",
    categoryCafe: "咖啡与甜点",
    tagVegetarian: "蛋奶素/素食",
    tagVegan: "严格纯素",
    tagHalal: "清真友好",
    tagPorkFree: "无猪肉/猪油",
    tagPrayerRoom: "配备祈祷室",
    tagEnglishMenu: "英文菜单",
    tagEnglishStaff: "英语服务",
    tagWifi: "免费Wi-Fi",
    paymentCreditCard: "信用卡",
    paymentQr: "移动扫码支付",
    paymentIc: "交通IC卡/电子货币",
    paymentCash: "日元现金",
    statusSupported: "支持",
    statusNotSupported: "不支持",
    badgeCashOnly: "仅限现金（不支持刷卡/扫码）",
    badgeNonDietary: "不提供清真/特殊饮食配虑",
    categoryFastfood: "快餐",
    categoryRamen: "拉面/面类"
  },
  ko: {
    appTitle: "Unimap",
    appSubtitle: "식문화 배려·간편결제·다국어 지원 벳푸 가이드",
    searchPlaceholder: "식당명, 요리명, 키워드로 검색...",
    filterAll: "전체",
    filterVegetarian: "🥗 베지테리언",
    filterVegan: "🌿 비건",
    filterHalal: "🕌 할랄 대응",
    filterPorkFree: "🥩 돼지고기 미사용",
    filterPrayerRoom: "🕋 기도실 완비",
    filterCreditCard: "💳 카드 결제 가능",
    filterQrPay: "📱 QR·전자화폐",
    resultsCount: "곳의 안심 스팟 검색됨",
    noResults: "조건에 맞는 매장을 찾을 수 없습니다.",
    sectionDietary: "식단 배려 및 시설",
    sectionPayments: "이용 가능한 결제수단",
    sectionServices: "언어 및 서비스",
    sectionInfo: "기본 정보",
    addressLabel: "주소",
    hoursLabel: "영업시간",
    phoneLabel: "전화번호",
    routeBtn: "Google Maps 길찾기",
    closeBtn: "닫기",
    categoryRestaurant: "레스토랑·식당",
    categoryCafe: "카페·디저트",
    tagVegetarian: "베지테리언",
    tagVegan: "비건",
    tagHalal: "할랄 대응",
    tagPorkFree: "돼지고기 미사용",
    tagPrayerRoom: "기도실 마련",
    tagEnglishMenu: "영어 메뉴판",
    tagEnglishStaff: "영어 가능 직원",
    tagWifi: "무료 Wi-Fi",
    paymentCreditCard: "신용카드",
    paymentQr: "QR코드/모바일 결제",
    paymentIc: "교통계IC/전자화폐",
    paymentCash: "현금 (엔화)",
    statusSupported: "지원",
    statusNotSupported: "미지원",
    badgeCashOnly: "현금 전용 (카드/간편결제 불가)",
    badgeNonDietary: "식단 배려/할랄 미지원",
    categoryFastfood: "패스트푸드",
    categoryRamen: "라멘·면류"
  }
};

// 別府市内の安心店舗データ（リアルサンプル5件以上）
const spotsData = [
  {
    id: 1,
    name: {
      ja: "別府駅前 スパイスカレー ハラール＆ベジ",
      en: "Spice Curry HALAL & VEGE Beppu Station",
      zh: "别府站前 清真与素食香料咖喱",
      ko: "벳푸역 앞 스파이스 커리 할랄 & 베지"
    },
    category: "restaurant",
    lat: 33.2798,
    lng: 131.5005,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府駅東口から徒歩2分。ハラール認証の国産鶏肉や完全植物性のヴィーガンカレーを提供しています。豚肉やアルコール由来の調味料は一切使用していません。店舗2階には清潔な個室祈祷室（礼拝用マット・ウドゥー水場）を備えており、留学生や観光客に大変喜ばれています。",
      en: "Located 2 minutes walk from Beppu Station. Serving Halal-certified chicken curry and 100% plant-based vegan curries. Absolutely pork-free and alcohol-free. Features a clean private prayer room on the 2nd floor with wudu facilities and prayer mats.",
      zh: "距离别府站东口步行仅2分钟。提供正宗清真认证鸡肉咖喱及纯植物素食咖喱，绝不使用猪肉及含酒精调料。店内2层设有独立祈祷室及小净设施，深受留学生与各国游客好评。",
      ko: "벳푸역 동쪽 출구에서 도보 2분 거리. 할랄 인증 닭고기와 100% 식물성 비건 카레를 제공합니다. 돼지고기와 알코올 유래 조미료는 일체 미사용. 2층에는 우두 시설과 매트가 완비된 개인 기도실이 마련되어 있습니다."
    },
    // 食の配慮・施設フラグ
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    // 決済方法大分類フラグ
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    // 具体的な決済サービス・ブランド一覧
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    // 言語・サービス設備
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市駅前町4-12",
      en: "4-12 Ekimae-cho, Beppu, Oita",
      zh: "大分县别府市车站前町4-12",
      ko: "오이타현 벳푸시 에키마에초 4-12"
    },
    hours: {
      ja: "11:30 - 15:00 / 17:30 - 21:00（水曜定休）",
      en: "11:30 - 15:00 / 17:30 - 21:00 (Closed Wed)",
      zh: "11:30 - 15:00 / 17:30 - 21:00（周三公休）",
      ko: "11:30 - 15:00 / 17:30 - 21:00 (수요일 휴무)"
    },
    phone: "+81 977-21-0001"
  },
  {
    id: 2,
    name: {
      ja: "鉄輪温泉 地蒸しベジうどん 湯けむり庵",
      en: "Kannawa Jigamushi Veggie Udon Yukemurian",
      zh: "铁轮温泉 地狱蒸蔬菜乌冬 汤烟庵",
      ko: "칸나와 온천 지옥찜 베지 우동 유케무리안"
    },
    category: "restaurant",
    lat: 33.3155,
    lng: 131.4795,
    image: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "鉄輪温泉の歴史ある湯けむり通りに佇むうどん店。羅臼昆布と大分県産乾椎茸のみで丁寧にとった100%植物性のお出汁が自慢。温泉の蒸気熱で蒸し上げた彩り豊かな地元オーガニック温野菜がたっぷり載っています。完全ヴィーガンの方も安心してお召し上がりいただけます。",
      en: "Situated in the historic onsen alley of Kannawa. Features 100% vegan broth crafted from kombu kelp and Oita dried shiitake mushrooms. Topped with steamed local organic vegetables prepared using the geothermal hot spring steam (Jigokumushi).",
      zh: "坐落于铁轮温泉的汤烟古街。特色在于使用天然昆布和大分干香菇熬制的100%纯植物汤底。配上用地狱温泉蒸汽蒸熟的新鲜有机蔬菜，素食主义者与健康旅行者首选。",
      ko: "칸나와 온천의 운치 있는 골목에 위치한 우동 전문점. 다시마와 오이타산 표고버섯만으로 우려낸 100% 식물성 육수가 일품입니다. 온천 증기로 쪄낸 싱싱한 현지 유기농 채소가 듬뿍 올라간 비건 친화 식당입니다."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "iD", icon: "fa-solid fa-bolt" },
      { name: "QUICPay", icon: "fa-solid fa-wave-square" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市鉄輪風呂本1組（いでゆ坂）",
      en: "Ideyu-zaka, 1-kumi Kannawa-furomoto, Beppu, Oita",
      zh: "大分县别府市铁轮风吕本1组（出汤坂）",
      ko: "오이타현 벳푸시 칸나와 후로모토 1구미"
    },
    hours: {
      ja: "11:00 - 16:00（温泉蒸気が立ち上る昼営業のみ / 不定休）",
      en: "11:00 - 16:00 (Daytime only / Irregular holidays)",
      zh: "11:00 - 16:00（仅日间营业 / 不定期公休）",
      ko: "11:00 - 16:00 (낮 영업만 진행 / 부정기 휴무)"
    },
    phone: "+81 977-66-0002"
  },
  {
    id: 3,
    name: {
      ja: "別府北浜 ポークフリー とり天本舗",
      en: "Beppu Kitahama Pork-Free Toriten Honpo",
      zh: "别府北滨 无猪肉清真炸鸡天妇罗总店",
      ko: "벳푸 기타하마 포크프리 토리텐 본점"
    },
    category: "restaurant",
    lat: 33.2815,
    lng: 131.5070,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "大分県のソウルフード「とり天」をムスリムの方にも安心して味わってもらいたいという想いから誕生した専門店。ハラール認証を受けた鶏肉のみを使用し、厨房内は豚肉および豚由来成分を徹底して排除しています。かぼすポン酢もノンアルコール特製仕様です。",
      en: "Specialty restaurant dedicated to serving Oita's famous local dish 'Toriten' (Chicken Tempura) to Muslim travelers. Uses 100% Halal-certified chicken in an entirely pork-free kitchen. Served with non-alcoholic Kabosu citrus dipping sauce.",
      zh: "为了让穆斯林朋友也能安心品尝大分特色美食“炸鸡天妇罗（Toriten）”而设立的专门店。严选清真认证鸡肉，厨房彻底杜绝猪肉及猪油成分，蘸酱采用特制无酒精香橙酸橘汁。",
      ko: "오이타현의 향토 요리인 '토리텐(닭튀김 텐푸라)'을 무슬림 여행객도 안심하고 즐길 수 있도록 만든 전문점입니다. 할랄 인증 닭고기만을 사용하며 조리실 내 돼지고기 성분을 완벽 차단했습니다."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "Diners Club", icon: "fa-brands fa-cc-diners-club" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "Apple Pay", icon: "fa-brands fa-apple-pay" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市北浜1-8-20（別府タワー徒歩1分）",
      en: "1-8-20 Kitahama, Beppu, Oita (1 min walk from Beppu Tower)",
      zh: "大分县别府市北滨1-8-20（距离别府塔步行1分钟）",
      ko: "오이타현 벳푸시 기타하마 1-8-20 (벳푸타워 도보 1분)"
    },
    hours: {
      ja: "11:30 - 14:30 / 17:00 - 22:00（年中無休）",
      en: "11:30 - 14:30 / 17:00 - 22:00 (Open 7 days)",
      zh: "11:30 - 14:30 / 17:00 - 22:00（全年无休）",
      ko: "11:30 - 14:30 / 17:00 - 22:00 (연중무휴)"
    },
    phone: "+81 977-22-0003"
  },
  {
    id: 4,
    name: {
      ja: "西野口 オーガニック＆ヴィーガン カフェ Beppu",
      en: "Organic & Vegan Cafe Beppu - Nishinoguchi",
      zh: "西野口 有机纯素咖啡馆 Beppu",
      ko: "니시노구치 유기농 & 비건 카페 벳푸"
    },
    category: "cafe",
    lat: 33.2805,
    lng: 131.4925,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府公園の豊かな緑に面した開放的なカフェ。動物性原料（肉・魚・乳製品・卵・ハチミツ）を一切使用しない完全ヴィーガン仕様です。大豆ミートのソテープレートや米粉のグルテンフリースイーツ、有機豆乳ラテが好評。英語が堪能なスタッフが常駐しています。",
      en: "A relaxing cafe facing the lush greenery of Beppu Park. 100% plant-based with zero animal products (no meat, dairy, eggs, or honey). Features soy meat delis, gluten-free rice-flour desserts, and organic soy lattes. Fluent English speaking staff always on hand.",
      zh: "面朝别府公园绿意盎然的采光咖啡厅。完全不使用动物性原料（无肉、蛋、奶、蜂蜜），提供大豆植物肉便当、无麸质米粉甜点及有机豆乳拿铁。店员英语流利，沟通无障碍。",
      ko: "벳푸 공원의 푸른 녹음을 마주한 쾌적한 힐링 카페. 동물성 원료(육류, 유제품, 계란, 꿀)를 전혀 쓰지 않는 100% 비건 전문입니다. 콩단백 플레이트와 쌀가루 글루텐프리 디저트, 두유 라떼가 인기입니다."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "Apple Pay", icon: "fa-brands fa-apple-pay" },
      { name: "Google Pay", icon: "fa-brands fa-google-pay" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市西野口町6-18（別府公園東門向かい）",
      en: "6-18 Nishinoguchi-cho, Beppu, Oita (Opposite Beppu Park)",
      zh: "大分县别府市西野口町6-18（别府公园东门对面）",
      ko: "오이타현 벳푸시 니시노구치초 6-18 (벳푸 공원 동문 맞은편)"
    },
    hours: {
      ja: "09:00 - 18:00（朝食・カフェタイム営業 / 火曜定休）",
      en: "09:00 - 18:00 (Breakfast & Cafe hours / Closed Tue)",
      zh: "09:00 - 18:00（提供早餐与下午茶 / 周二公休）",
      ko: "09:00 - 18:00 (조식 및 카페 운영 / 화요일 휴무)"
    },
    phone: "+81 977-25-0004"
  },
  {
    id: 5,
    name: {
      ja: "楠町 ハラール牛骨ラーメン べっぷ",
      en: "Halal Beef Bone Ramen Beppu - Kusunoki",
      zh: "楠町 清真牛骨拉面 别府店",
      ko: "쿠스노키초 할랄 소뼈 라멘 벳푸"
    },
    category: "restaurant",
    lat: 33.2758,
    lng: 131.5042,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "歴史ある楠銀天街アーケード内に位置するハラールラーメン専門店。ハラール認証の国産牛骨をじっくり煮込んだコク深いスープと、豚肉・アルコールを一切含まない特製醤油タレが特徴。店舗奥に礼拝スペースとウドゥー（手足の清め場）があり、ムスリムの方が安心して一杯を楽しめます。",
      en: "A certified Halal ramen restaurant located in Kusunoki Gintengai Arcade. Features rich savory broth simmered from Halal-certified Japanese beef bones. Free of any pork or alcohol. Includes a dedicated wudu area and prayer space.",
      zh: "坐落于楠银天街商店街的清真拉面专门店。精选清真认证日本牛骨熬制浓郁骨汤，绝不添加猪骨或料酒。店内备有舒适的男女小净区与祈祷空间，深受当地留学生与海外穆斯林青睐。",
      ko: "쿠스노키 은천가 아케이드 내의 할랄 인증 라멘 전문점. 할랄 소뼈를 푹 고아낸 깊은 맛의 국물과 돼지고기·알코올 성분이 없는 간장 소스가 특징입니다. 매장 안쪽에 기도 공간과 우두 설비가 갖추어져 있습니다."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市楠町3-15（楠銀天街内）",
      en: "3-15 Kusunoki-cho, Beppu, Oita (Inside Arcade)",
      zh: "大分县别府市楠町3-15（楠银天街拱廊内）",
      ko: "오이타현 벳푸시 쿠스노키초 3-15 (아케이드 상가 내)"
    },
    hours: {
      ja: "11:30 - 15:00 / 18:00 - 22:30（月曜定休）",
      en: "11:30 - 15:00 / 18:00 - 22:30 (Closed Mon)",
      zh: "11:30 - 15:00 / 18:00 - 22:30（周一公休）",
      ko: "11:30 - 15:00 / 18:00 - 22:30 (월요일 휴무)"
    },
    phone: "+81 977-23-0005"
  },
  {
    id: 6,
    name: {
      ja: "流川 多文化ハーブ＆ベジビュッフェ レストラン",
      en: "Nagarekawa Multicultural Veggie & Herb Buffet",
      zh: "流川 多元草本蔬食自助餐厅",
      ko: "나가레카와 다문화 허브 & 베지 뷔페"
    },
    category: "restaurant",
    lat: 33.2775,
    lng: 131.4980,
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府・立命館アジア太平洋大学（APU）の国際的な街柄を象徴する多国籍ビュッフェ。全料理に「ベジタリアン」「ヴィーガン」「ハラール」「主要アレルゲン」のピクトグラムが明記されており、自分の食生活に合わせて安心して食事を選べます。スタッフも多国籍で英語・日本語に対応。",
      en: "An international buffet reflecting the vibrant student culture of APU in Beppu. Every dish is clearly labeled with pictograms for Vegetarian, Vegan, Halal, and allergens. Multilingual staff fluent in English and Japanese.",
      zh: "象征别府APU多元国际文化的美食自助餐厅。所有菜品均用直观图标标注素食、纯素、清真以及过敏原，客人可无忧挑选符合个人信仰与习惯的美食。多国籍员工热情提供双语服务。",
      ko: "벳푸의 다문화 환경을 상징하는 글로벌 뷔페 레스토랑. 모든 메뉴에 비건, 베지테리언, 할랄 및 알레르기 유발 물질이 픽토그램으로 명확히 표시되어 있습니다. 다국적 직원이 상주하여 영어 소통이 원활합니다."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市流川町7-2（流川通り）",
      en: "7-2 Nagarekawa-dori, Beppu, Oita",
      zh: "大分县别府市流川町7-2（流川通）",
      ko: "오이타현 벳푸시 나가레카와초 7-2"
    },
    hours: {
      ja: "11:30 - 15:00 / 17:30 - 21:30（木曜定休）",
      en: "11:30 - 15:00 / 17:30 - 21:30 (Closed Thu)",
      zh: "11:30 - 15:00 / 17:30 - 21:30（周四公休）",
      ko: "11:30 - 15:00 / 17:30 - 21:30 (목요일 휴무)"
    },
    phone: "+81 977-24-0006"
  },
  {
    id: 7,
    name: {
      ja: "マクドナルド 別府駅前店",
      en: "McDonald's Beppu Station",
      zh: "麦当劳 别府站前店",
      ko: "맥도날드 벳푸역앞점"
    },
    category: "fastfood",
    lat: 33.2805,
    lng: 131.5015,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府駅東口すぐの大手ファストフードチェーン。セルフ注文タッチパネル端末（多言語対応）や各種キャッシュレス決済・無料Wi-Fi・電源席が完備されています。※ハラール認証やヴィーガン・豚肉不使用などの宗教的・食事制限対応は行っていません（調理器具や油の共用あり）。",
      en: "Major fast-food chain right outside Beppu Station East Exit. Equipped with multilingual self-ordering kiosks, full cashless payments, free Wi-Fi, and power outlets. *Note: Halal, vegan, and pork-free dietary requirements are NOT supported due to shared fryers and cooking utensils.",
      zh: "紧邻别府站东口的大型快餐连锁店。配备多语言自助点餐机、多种电子支付、免费Wi-Fi和充电插座。※注意：由于共用油锅和烹饪器具，本店不提供清真认证、纯素或无猪肉等特殊饮食支持。",
      ko: "벳푸역 동쪽 출구 바로 앞 대형 패스트푸드 매장. 다국어 무인 주문기(키오스크), 다양한 간편결제, 무료 Wi-Fi 및 충전 콘센트 완비. ※주의: 조리 기구 및 기름을 공유하므로 할랄, 비건, 돼지고기 미사용 등 종교·식단 배려는 지원하지 않습니다."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "楽天ペイ", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市駅前町12-1",
      en: "12-1 Ekimae-cho, Beppu, Oita",
      zh: "大分县别府市车站前町12-1",
      ko: "오이타현 벳푸시 에키마에초 12-1"
    },
    hours: {
      ja: "07:00 - 23:00（年中無休）",
      en: "07:00 - 23:00 (Open Daily)",
      zh: "07:00 - 23:00（全年无休）",
      ko: "07:00 - 23:00 (연중무휴)"
    },
    phone: "+81 977-22-0007"
  },
  {
    id: 8,
    name: {
      ja: "スターバックス コーヒー トキハ別府店",
      en: "Starbucks Coffee Tokiwa Beppu",
      zh: "星巴克咖啡 别府TOKIWA店",
      ko: "스타벅스 커피 토키와 벳푸점"
    },
    category: "cafe",
    lat: 33.2792,
    lng: 131.5035,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "トキハ別府店1階のシアトル系カフェ。豆乳（ソイ）・オーツミルク・アーモンドミルクへのカスタマイズが可能で、ベジタリアン・植物性志向の方も利用しやすい環境です。各種電子マネーや英語メニューに対応。※ハラール認証施設や礼拝室はありません。",
      en: "Located on the 1st floor of Tokiwa Department Store. Offers plant-based milk customizations (Soy, Oat, Almond milk), making it friendly for vegetarians and plant-based diners. Full cashless and English menu support. *Note: No official Halal certification or prayer room.",
      zh: "位于TOKIWA别府百货1楼。提供豆乳、燕麦奶、巴旦木奶等多种植物奶定制，适合素食与健康饮食人士。支持全渠道电子支付与英文点单。※注意：本店无清真认证及祈祷室设施。",
      ko: "토키와 벳푸 백화점 1층에 위치한 글로벌 카페. 두유(소이), 오트밀크, 아몬드밀크 등 식물성 우유 옵션이 준비되어 있어 베지테리언도 편하게 이용할 수 있습니다. 다양한 모바일 결제 및 영어 메뉴판 지원. ※주의: 할랄 공식 인증 및 기도실은 없습니다."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "LINE Pay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "スターバックス カード", icon: "fa-regular fa-credit-card" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市北浜2-9-1 トキハ別府店 1F",
      en: "1F Tokiwa Dept Store, 2-9-1 Kitahama, Beppu, Oita",
      zh: "大分县别府市北滨2-9-1 TOKIWA别府店 1F",
      ko: "오이타현 벳푸시 기타하마 2-9-1 토키와 벳푸점 1층"
    },
    hours: {
      ja: "08:00 - 21:00（不定休）",
      en: "08:00 - 21:00 (Irregular Holidays)",
      zh: "08:00 - 21:00（不定休）",
      ko: "08:00 - 21:00 (부정기 휴무)"
    },
    phone: "+81 977-26-0008"
  },
  {
    id: 9,
    name: {
      ja: "吉野家 別府駅前店",
      en: "Yoshinoya Beppu Station",
      zh: "吉野家 别府站前店",
      ko: "요시노야 벳푸역앞점"
    },
    category: "restaurant",
    lat: 33.2790,
    lng: 131.5000,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府駅東口徒歩1分の全国展開牛丼チェーン。英語・中国語等のタッチパネル注文機と多種多様なキャッシュレス決済に対応。※牛丼や豚丼、豚汁など肉類がメインのため、ハラール対応・豚肉不使用・ヴィーガン等には対応していません。",
      en: "Popular 24-hour beef bowl chain located 1 minute walk from Beppu Station. Offers multilingual touchscreens and wide cashless payment support. *Note: As beef, pork bowls, and pork soups are cooked together, Halal, pork-free, and vegan diets are NOT supported.",
      zh: "距离别府站东口步行仅1分钟的日本国民牛丼连锁。店内配备多语种触屏平板点餐，支持丰富的无现金支付方式。※注意：主打牛肉饭、豚肉饭及豚汁等荤食，不支持清真、无猪肉或素食要求。",
      ko: "벳푸역 동쪽 출구 도보 1분 거리의 유명 규동 전문 체인점. 다국어 지원 태블릿 주문 및 각종 간편결제 지원. ※주의: 규동, 돼지고기 덮밥, 돈지루 등이 주메뉴이며 조리공간이 같으므로 할랄, 돼지고기 미사용, 비건 식단은 미지원입니다."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "d払い", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市駅前町3-2",
      en: "3-2 Ekimae-cho, Beppu, Oita",
      zh: "大分县别府市车站前町3-2",
      ko: "오이타현 벳푸시 에키마에초 3-2"
    },
    hours: {
      ja: "24時間営業",
      en: "24 Hours Open",
      zh: "24小时营业",
      ko: "24시간 영업"
    },
    phone: "+81 977-21-0009"
  },
  {
    id: 10,
    name: {
      ja: "カレーハウス CoCo壱番屋 別府店",
      en: "Curry House CoCo Ichibanya Beppu",
      zh: "咖喱屋 CoCo壹番屋 别府店",
      ko: "카레하우스 코코이찌방야 벳푸점"
    },
    category: "restaurant",
    lat: 33.2910,
    lng: 131.4990,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "全国展開のカレーチェーン。動物性由来原料を使用しない専用の「ベジタリアンカレー」があり、野菜トッピングも豊富でベジタリアン・ヴィーガンの方も安心して選べます。多言語メニュー・キャッシュレス完備。※一般店舗のためハラール認証肉や祈祷室はありません。",
      en: "Nationwide curry chain featuring a dedicated 'Vegetarian Curry' made without animal-derived ingredients, topped with fresh vegetables for vegan/vegetarian diners. Multilingual menu & cashless ready. *Note: General store without Halal meat certification or prayer rooms.",
      zh: "全日本知名的日式咖喱连锁店。特设不含动物性成分的“素食咖喱”专属菜单，可自由搭配蔬菜配菜，深受素食旅行者喜爱。提供多国语言菜单与电子支付。※注意：普通门店无清真认证及祈祷室。",
      ko: "전국적인 카레 전문 체인점. 동물성 원료를 사용하지 않는 전용 '베지테리언 카레'가 준비되어 있어 비건 및 채식주의자도 안심하고 식사할 수 있습니다. 다국어 메뉴판 및 간편결제 완비. ※주의: 일반 매장으로 할랄 인증 육류 및 기도실은 없습니다."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "楽天ペイ", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市石垣東10-1-18",
      en: "10-1-18 Ishigakihigashi, Beppu, Oita",
      zh: "大分县别府市石垣东10-1-18",
      ko: "오이타현 벳푸시 이시가키히가시 10-1-18"
    },
    hours: {
      ja: "11:00 - 23:00（L.O. 22:30）",
      en: "11:00 - 23:00 (L.O. 22:30)",
      zh: "11:00 - 23:00（最后点单 22:30）",
      ko: "11:00 - 23:00 (라스트오더 22:30)"
    },
    phone: "+81 977-22-0010"
  },
  {
    id: 11,
    name: {
      ja: "別府とんこつラーメン 昭和亭",
      en: "Beppu Tonkotsu Ramen Showatei",
      zh: "别府豚骨拉面 昭和亭",
      ko: "벳푸 돈코츠 라멘 쇼와테이"
    },
    category: "restaurant",
    lat: 33.2778,
    lng: 131.5020,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府繁華街の路地裏にある昔ながらの大衆ラーメン店。濃厚豚骨スープと自家製煮豚チャーシューが名物。※豚骨・豚肉を大量に使用しているため、ハラール対応・豚肉不使用・ヴィーガン等には一切非対応です。また【日本円の現金のみ対応（クレジットカード・電子マネー不可）】、英語対応なしのためご注意ください。",
      en: "A traditional local ramen eatery in the back alleys of Beppu downtown. Famous for rich pork-bone broth and pork belly chashu. *Important: Deeply uses pork/pork lard, completely NOT suitable for Halal, pork-free, or vegan diets. CASH ONLY (No cards/QR accepted), Japanese only.",
      zh: "隐藏于别府闹市小巷深处的地道老派豚骨拉面馆。浓郁猪骨高汤搭配秘制叉烧。※重要提示：大量使用猪骨与猪肉制品，绝对不适合清真、忌猪肉或素食客人。此外【仅支持日元现金结账（不可刷卡/扫码）】，无英语服务，敬请留意。",
      ko: "벳푸 번화가 골목길에 자리 잡은 정통 대중 라멘집. 진한 돼지뼈(돈코츠) 육수와 차슈가 일품. ※주의: 돼지고기와 사골을 주재료로 사용하여 할랄, 돼지고기 미사용, 비건 식단에는 일체 비대응입니다. 또한 【일본 엔화 현금 결제만 가능 (카드/QR 불가)】, 일본어 전용 매장이므로 주의해 주세요."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: false,
      qr_pay: false,
      ic_card: false,
      cash: true
    },
    paymentBrands: [
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: false,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市元町5-8（裏路地）",
      en: "5-8 Motomachi, Beppu, Oita",
      zh: "大分县别府市元町5-8（后巷）",
      ko: "오이타현 벳푸시 모토마치 5-8 (뒷골목)"
    },
    hours: {
      ja: "18:00 - 02:00（日曜定休）",
      en: "18:00 - 02:00 (Closed Sun)",
      zh: "18:00 - 02:00（周日公休）",
      ko: "18:00 - 02:00 (일요일 휴무)"
    },
    phone: "+81 977-22-0011"
  },
  {
    id: 12,
    name: {
      ja: "観海寺 杉乃井ワールドビュッフェ",
      en: "Kankaiji Suginoi World Buffet",
      zh: "观海寺 杉乃井世界美食自助",
      ko: "칸카이지 스기노이 월드 뷔페"
    },
    category: "restaurant",
    lat: 33.2840,
    lng: 131.4720,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "観海寺温泉の高台に位置する大型リゾートホテルのビュッフェダイニング。和洋中の豊富なメニューがあり、全料理にアレルギー表示や原材料ピクトグラムが設置されています。ヴィーガン・ベジタリアン料理コーナーあり。クレジットカード・電子マネー完全対応。※宗教的なハラール専用調理ではありません。",
      en: "Spacious buffet restaurant at the mountain resort of Kankaiji Onsen. Offers diverse Japanese, Western, and Chinese dishes clearly labeled with allergens and ingredients. Features a vegan/vegetarian corner and full cashless payment. *Note: Not an exclusively Halal-certified facility.",
      zh: "位于观海寺温泉高处的大型度假酒店自助餐厅。汇聚和洋中多样料理，所有菜品均标示过敏原及成分图标。特设纯素及素食专区，全渠道支持电子支付。※注意：非专门清真认证餐厅。",
      ko: "칸카이지 온천 고지대 대형 리조트 호텔의 뷔페 레스토랑. 일식·양식·중식의 다양한 메뉴에 알레르겐 및 원재료 픽토그램이 완비되어 있습니다. 비건·채식 코너 마련 및 카드·간편결제 완비. ※주의: 공식 할랄 전용 주방은 아닙니다."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市観海寺1（杉乃井ホテル内）",
      en: "1 Kankaiji, Beppu, Oita (Inside Suginoi Hotel)",
      zh: "大分县别府市观海寺1（杉乃井酒店内）",
      ko: "오이타현 벳푸시 칸카이지 1 (스기노이 호텔 내)"
    },
    hours: {
      ja: "07:00 - 10:00 / 17:00 - 21:30（無休）",
      en: "07:00 - 10:00 / 17:00 - 21:30 (Open Daily)",
      zh: "07:00 - 10:00 / 17:00 - 21:30（无休）",
      ko: "07:00 - 10:00 / 17:00 - 21:30 (연중무휴)"
    },
    phone: "+81 977-24-1141"
  },
  {
    id: 13,
    name: {
      ja: "明礬 湯の里 地獄蒸し茶屋",
      en: "Myoban Yunosato Jigokumushi Teahouse",
      zh: "明矾 汤之里 地狱蒸茶屋",
      ko: "묘반 유노사토 지옥찜 찻집"
    },
    category: "cafe",
    lat: 33.3150,
    lng: 131.4550,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "明礬温泉の伝統的な湯の花小屋が広がる高台の名物茶屋。天然の温泉蒸気で蒸し上げた名物「地獄蒸しプリン」や地熱温泉卵、甘味を提供。卵・乳製品使用のベジタリアン対応。英語表記メニューあり。※一部メニューは現金払いのみ、ハラール認証施設ではありません。",
      en: "Famous scenic teahouse amidst the historic Yunohana huts in Myoban Onsen. Renowned for its geothermal steamed pudding and onsen eggs. Lacto-ovo vegetarian friendly. English menu available. *Note: Cash only for some counter items, not Halal certified.",
      zh: "坐落于明矾温泉传统汤之花小屋群旁的著名茶屋。提供用纯天然温泉蒸汽蒸制的招牌“地狱蒸布丁”、温泉蛋及传统甜品。适合蛋奶素食者，配备英文菜单。※注意：部分窗口仅收现金，非清真认证。",
      ko: "묘반 온천의 유노하나 오두막이 내려다보이는 전통 찻집. 천연 온천 증기로 쪄낸 명물 '지옥찜 푸딩'과 온천 계란이 인기입니다. 락토오보 베지테리언 친화적이며 영어 메뉴 구비. ※주의: 일부 품목은 현금 결제 전용이며 할랄 인증은 없습니다."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: false,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市明礬6組",
      en: "6-kumi Myoban, Beppu, Oita",
      zh: "大分县别府市明矾6组",
      ko: "오이타현 벳푸시 묘반 6쿠미"
    },
    hours: {
      ja: "08:30 - 17:30（年中無休）",
      en: "08:30 - 17:30 (Open Daily)",
      zh: "08:30 - 17:30（全年无休）",
      ko: "08:30 - 17:30 (연중무휴)"
    },
    phone: "+81 977-66-3228"
  },
  {
    id: 14,
    name: {
      ja: "地獄蒸し体験工房 鉄輪",
      en: "Jigokumushi Kobo Kannawa Experience Center",
      zh: "地狱蒸体验工坊 铁轮",
      ko: "지옥찜 체험공방 칸나와"
    },
    category: "restaurant",
    lat: 33.3140,
    lng: 131.4780,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "鉄輪温泉の高温温泉蒸気を利用して自分で食材を蒸して食べる大人気体験施設。野菜・卵などの定番セットのほか【好みの食材の持ち込みが可能】なため、ハラール認証肉やヴィーガン野菜、好みの調味料を持ち込んで調理できます。多言語案内スタッフ在籍、キャッシュレス対応。",
      en: "Popular cooking experience using Kannawa's natural volcanic steam. Besides standard vegetable sets, visitors are allowed to BRING THEIR OWN INGREDIENTS. Perfect for Halal diners and vegans bringing certified meats or veggies. Multilingual guides and cashless accepted.",
      zh: "铁轮温泉极具人气的传统地狱蒸自炊体验馆。除店内新鲜蔬菜篮外，【允许客人自带食材】，清真或纯素游客可自备认证肉品或蔬菜调料前来蒸制。多语言指导，支持电子支付。",
      ko: "칸나와 온천의 100도 온천 증기로 직접 음식을 쪄 먹는 명소. 기본 채소 세트 외에도 【외부 식재료 반입 가능】하여 할랄 육류나 비건 채소를 직접 가져와 조리할 수 있습니다. 다국어 안내 및 카드 결제 지원."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市風呂本5組（いでゆ坂沿い）",
      en: "5-kumi Furomoto, Beppu, Oita",
      zh: "大分县别府市风吕本5组（汤雾坂旁）",
      ko: "오이타현 벳푸시 후로모토 5쿠미"
    },
    hours: {
      ja: "09:00 - 20:00（第3水曜定休）",
      en: "09:00 - 20:00 (Closed 3rd Wed)",
      zh: "09:00 - 20:00（第3个周三公休）",
      ko: "09:00 - 20:00 (매월 셋째 수요일 휴무)"
    },
    phone: "+81 977-66-3775"
  },
  {
    id: 15,
    name: {
      ja: "ファミリーレストラン ジョイフル 亀川店",
      en: "Family Restaurant Joyfull Kamegawa",
      zh: "家庭餐厅 Joyfull 龟川店",
      ko: "패밀리 레스토랑 조이풀 카메가와점"
    },
    category: "restaurant",
    lat: 33.3280,
    lng: 131.4980,
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "大分県発祥の九州最大手ファミリーレストランチェーン。国道10号線沿いで24時間営業。ハンバーグや定食・デザートがリーズナブルに楽しめ、各種キャッシュレス決済や無料Wi-Fi・英語メニューに対応。※豚肉・牛肉料理を同一調理場で調理しているため、ハラールや厳格な食事制限には非対応です。",
      en: "Kyushu's famous 24-hour family diner originating in Oita, located along Route 10 in Kamegawa. Serving budget-friendly steaks, set meals, and desserts. Multilingual menus and full cashless payments. *Note: Shares cooking areas for pork/beef, strictly NOT Halal or vegan friendly.",
      zh: "发源于大分县的九州著名24小时家庭连锁餐厅，位于国道10号线旁。提供物美价廉的汉堡肉排、定食及甜品。支持全渠道电子支付与多语言菜单。※注意：由于后厨荤食共用器具，不支持清真或纯素要求。",
      ko: "오이타현에서 시작된 큐슈 최대 패밀리 레스토랑 체인점. 카메가와 국도변 24시간 영업. 합리적인 가격의 함박스테이크와 정식, 다양한 간편결제와 무료 Wi-Fi 지원. ※주의: 돼지고기·소고기 조리 기구를 공유하므로 할랄 및 비건 식단은 미지원입니다."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "d払い", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市亀川東町20-15",
      en: "20-15 Kamegawahigashi-machi, Beppu, Oita",
      zh: "大分县别府市龟川东町20-15",
      ko: "오이타현 벳푸시 카메가와히가시마치 20-15"
    },
    hours: {
      ja: "24時間営業",
      en: "24 Hours Open",
      zh: "24小时营业",
      ko: "24시간 영업"
    },
    phone: "+81 977-67-1115"
  },
  {
    id: 16,
    name: {
      ja: "地魚回転寿司 べっぷ海鮮丸",
      en: "Local Fish Conveyor Sushi Beppu Kaisanmaru",
      zh: "地鱼回转寿司 别府海鲜丸",
      ko: "현지 생선 회전초밥 벳푸 카이센마루"
    },
    category: "restaurant",
    lat: 33.3230,
    lng: 131.4990,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "亀川バイパス沿いの新鮮な豊後水道の地魚が味わえる回転寿司。タッチパネル注文機は英語・中国語・韓国語に対応。魚介中心のため豚肉不使用の食事を求める旅行者に適しています。玉子やいなり寿司・かっぱ巻きなど魚以外の選択肢もあり。各種クレジットカード・QR決済完備。",
      en: "Popular conveyor-belt sushi spot near Kamegawa serving fresh local catch from the Bungo Channel. Multilingual touchscreen orders (EN/ZH/KO). Natural pork-free dining suitable for seafood lovers and pescatarians. Fully accepts credit cards and mobile QR payments.",
      zh: "位于龟川附近的超人气回转寿司店，采用丰后水道每日直运的新鲜海鲜。触屏支持中英韩点餐。主打鱼介海鲜，天然无猪肉，非常适合海鲜素或忌猪肉的游客。支持信用卡与扫码支付。",
      ko: "카메가와 인근 분고수도의 싱싱한 제철 생선을 맛볼 수 있는 인기 회전초밥집. 터치패널 다국어(한/영/중) 지원. 생선과 해산물 위주로 돼지고기가 들어가지 않아 무슬림이나 페스코 베지테리언에게 적합합니다. 카드 및 QR 결제 완비."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "楽天ペイ", icon: "fa-solid fa-qrcode" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市亀川中央町1-10",
      en: "1-10 Kamegawachuo-machi, Beppu, Oita",
      zh: "大分县别府市龟川中央町1-10",
      ko: "오이타현 벳푸시 카메가와추오마치 1-10"
    },
    hours: {
      ja: "11:00 - 21:00（木曜定休）",
      en: "11:00 - 21:00 (Closed Thu)",
      zh: "11:00 - 21:00（周四公休）",
      ko: "11:00 - 21:00 (목요일 휴무)"
    },
    phone: "+81 977-67-2216"
  },
  {
    id: 17,
    name: {
      ja: "讃岐釜揚げうどん 丸亀製麺 別府店",
      en: "Marugame Udon Beppu",
      zh: "丸龟制面 别府店",
      ko: "마루가메 제면 벳푸점"
    },
    category: "restaurant",
    lat: 33.2980,
    lng: 131.4700,
    image: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府ICから車で3分、九州横断道路沿いのセルフ讃岐うどんチェーン。国産小麦粉と塩・水のみで作る自家製うどんと、野菜のかき揚げ・さつまいも天ぷらなど植物性の選択肢が豊富。アレルギー表の英語併記あり。キャッシュレス決済完備。※出汁には魚介（鰹節・煮干し）が含まれます。",
      en: "Self-service Sanuki udon chain along the Yamanami Highway near Beppu IC. Fresh noodles crafted simply from wheat, salt, and water. Wide array of vegetable tempura available. Allergen sheets in English. Cashless accepted. *Note: Broth contains fish bonito/sardine flakes.",
      zh: "位于九州横断道路旁、紧邻别府IC的连锁赞岐乌冬面馆。面条仅用面粉、盐和水现做，提供丰富的炸蔬菜饼等素食天妇罗。备有英文过敏原清单与电子支付。※注意：汤底含有鲣鱼等海鲜成分。",
      ko: "벳푸 IC 인근 큐슈횡단도로변에 위치한 사누키 우동 전문점. 밀가루와 소금, 물만으로 매장에서 직접 제면하며 채소 튀김 등 비육류 옵션이 풍부합니다. 영어 알레르기 안내문 및 간편결제 지원. ※주의: 육수에 가쓰오부시 등 생선 성분이 포함됩니다."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "楽天ペイ", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市鶴見字火売885-1",
      en: "885-1 Hiba, Tsurumi, Beppu, Oita",
      zh: "大分县别府市鹤见字火卖885-1",
      ko: "오이타현 벳푸시 쓰루미 히바 885-1"
    },
    hours: {
      ja: "10:30 - 21:30（年中無休）",
      en: "10:30 - 21:30 (Open Daily)",
      zh: "10:30 - 21:30（全年无休）",
      ko: "10:30 - 21:30 (연중무휴)"
    },
    phone: "+81 977-67-3317"
  },
  {
    id: 18,
    name: {
      ja: "浜脇温泉前 レトロ喫茶 湯の香",
      en: "Hamawaki Retro Cafe Yunoka",
      zh: "滨胁温泉前 复古纯吃茶 汤之香",
      ko: "하마와키 온천 앞 레트로 카페 유노카"
    },
    category: "cafe",
    lat: 33.2680,
    lng: 131.5080,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府温泉発祥の地・浜脇の下町路地にある昭和レトロな純喫茶。サイフォン仕立ての自家焙煎珈琲と小倉トースト、昔ながらのナポリタンが名物。【日本円の現金のみ対応（カード・QR不可）】、英語対応やWi-Fiはありません。地元常連客で賑わう昔気質の喫茶店です。",
      en: "Charming Showa-era coffee parlor located in historic Hamawaki onsen neighborhood. Serves siphon drip coffee, Ogura toast, and ketchup Napolitan pasta. *Attention: CASH ONLY (No cards/mobile pay), Japanese language only, no Wi-Fi. Authentic local atmosphere.",
      zh: "坐落于别府温泉发祥地——滨胁老街的昭和复古纯吃茶店。招牌为虹吸手工滴滤咖啡、红豆吐司和传统那不勒斯意面。【仅限日元现金结账（不可刷卡/扫码）】，无英语服务及Wi-Fi，属于深受当地居民喜爱的传统小店。",
      ko: "벳푸 온천의 발상지 하마와키 골목길에 위치한 쇼와 레트로 다방. 사이펀 커피와 토스트, 나폴리탄 스파게티가 명물. 【일본 엔화 현금만 가능 (카드/QR 불가)】, 일본어 전용 매장이며 Wi-Fi 미지원. 현지 단골들이 찾는 정겨운 공간입니다."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: false,
      qr_pay: false,
      ic_card: false,
      cash: true
    },
    paymentBrands: [
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: false,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市浜脇1-8-12",
      en: "1-8-12 Hamawaki, Beppu, Oita",
      zh: "大分县别府市滨胁1-8-12",
      ko: "오이타현 벳푸시 하마와키 1-8-12"
    },
    hours: {
      ja: "08:00 - 18:00（火曜定休）",
      en: "08:00 - 18:00 (Closed Tue)",
      zh: "08:00 - 18:00（周二公休）",
      ko: "08:00 - 18:00 (화요일 휴무)"
    },
    phone: "+81 977-22-4418"
  },
  {
    id: 19,
    name: {
      ja: "APUアジアンハラールダイナー",
      en: "APU Asian Halal Diner",
      zh: "APU 亚州清真餐厅",
      ko: "APU 아시안 할랄 다이너"
    },
    category: "restaurant",
    lat: 33.3390,
    lng: 131.4670,
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "立命館アジア太平洋大学（APU）キャンパスのすぐ隣にある多国籍留学生御用達ダイナー。インドネシア・マレーシア・中東の本格料理を提供。100%ハラール認証肉のみを使用し、豚肉・アルコールは一切排除。店内奥にはウドゥー水場付きの清潔な礼拝スペースを完備。スタッフは英語・インドネシア語・日本語に対応。",
      en: "International diner directly adjacent to Ritsumeikan APU campus, beloved by international students. Serves authentic Indonesian, Malaysian, and Middle Eastern cuisine. 100% Halal certified, strictly zero pork and alcohol. Features an on-site prayer room with wudu ablution area.",
      zh: "紧邻立命馆亚洲太平洋大学（APU）校区，深受各国留学生青睐的清真餐厅。提供地道印尼、马来西亚与中东料理。100%清真认证肉源，严禁猪肉及酒精。店内设有配备小净设施的专用祈祷区。多国语言服务。",
      ko: "리츠메이칸 APU 캠퍼스 바로 옆, 글로벌 유학생들의 아지트 같은 식당. 인도네시아, 말레이시아, 중동 전통 요리를 선보입니다. 100% 할랄 인증 육류 사용, 돼지고기 및 알코올 일체 배제. 우두 시설이 갖춰진 전용 기도실 완비."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市十文字原1-1（APU学生通り）",
      en: "1-1 Jumonjibaru, Beppu, Oita",
      zh: "大分县别府市十文字原1-1（APU学生街）",
      ko: "오이타현 벳푸시 주몬지바루 1-1"
    },
    hours: {
      ja: "11:00 - 21:00（日曜定休）",
      en: "11:00 - 21:00 (Closed Sun)",
      zh: "11:00 - 21:00（周日公休）",
      ko: "11:00 - 21:00 (일요일 휴무)"
    },
    phone: "+81 977-78-5519"
  },
  {
    id: 20,
    name: {
      ja: "別府フェリーターミナル レストラン",
      en: "Beppu Ferry Terminal Restaurant",
      zh: "别府轮渡码头 海景餐厅",
      ko: "벳푸 페리 터미널 레스토랑"
    },
    category: "restaurant",
    lat: 33.3030,
    lng: 131.5050,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府国際観光港のフェリーのりば2階にあるオーシャンビューレストラン。大分名物とり天定食や豊後牛ステーキ、海鮮丼などを提供。多言語タッチパネル券売機を導入しており、英語・中国語・韓国語で注文可能。各種クレジットカードやQR決済に対応。※とり天など鶏肉中心ですがハラール認証ではありません。",
      en: "Oceanfront restaurant on the 2nd floor of Beppu International Ferry Port terminal. Serves local favorites like Oita Toriten (tempura chicken), Bungo beef, and seafood rice bowls. Equipped with multilingual ticket vending machines and full mobile pay support.",
      zh: "位于别府国际观光港客运大楼2楼的海景餐厅。供应大分特色炸鸡天妇罗定食、丰后牛牛排及海鲜丼。配备多语言自助售票机，支持各类信用卡与移动扫码支付。※注意：主营鸡肉海鲜但无清真认证。",
      ko: "벳푸 국제관광항 페리 터미널 2층에 위치한 오션뷰 식당. 오이타 명물 토리텐(닭고기 튀김) 정식과 분고규 스테이크, 해산물 덮밥을 판매합니다. 다국어 무인 발권기 및 각종 간편결제 완비."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "楽天ペイ", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市汐見町9-1（別府観光港ターミナル 2F）",
      en: "2F Ferry Terminal, 9-1 Shiomi-cho, Beppu, Oita",
      zh: "大分县别府市汐见町9-1（别府观光港客运大楼 2F）",
      ko: "오이타현 벳푸시 시오미초 9-1 (벳푸 관광항 터미널 2층)"
    },
    hours: {
      ja: "07:00 - 19:30（無休）",
      en: "07:00 - 19:30 (Open Daily)",
      zh: "07:00 - 19:30（无休）",
      ko: "07:00 - 19:30 (연중무휴)"
    },
    phone: "+81 977-22-6620"
  },
  {
    id: 21,
    name: {
      ja: "海地獄 売店＆カフェ蓮",
      en: "Umi Jigoku Cafe Ren",
      zh: "海地狱 莲花咖啡厅与特产店",
      ko: "우미 지옥 카페 렌"
    },
    category: "cafe",
    lat: 33.3160,
    lng: 131.4720,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "コバルトブルーの美しい海地獄の敷地内にある展望カフェ。名物の地獄蒸し焼きプリンや抹茶ラテ、温泉熱で蒸し上げた「極楽饅頭」を提供。植物性・乳製品ベースの和スイーツが中心でベジタリアンフレンドリー。多言語メニューと各種キャッシュレス決済に対応。",
      en: "Scenic cafe located inside the famous cobalt-blue Umi Jigoku (Sea Hell). Serves geothermal baked custard puddings, matcha lattes, and traditional steamed buns. Vegetarian-friendly sweets. Full English menu and wide cashless payments accepted.",
      zh: "坐落于蔚蓝壮丽的“海地狱”名胜园区内的景观咖啡厅。提供招牌地狱蒸烤布丁、抹茶拿铁及极乐温泉小馒头。以乳制品与植物性日式甜品为主，素食友好。配备多语言菜单，支持扫码及信用卡支付。",
      ko: "코발트블루 빛 우미 지옥 경내에 위치한 전망 카페. 천연 지열로 구워낸 명물 지옥찜 푸딩과 말차 라떼, 온천 만주를 맛볼 수 있습니다. 유제품·식물성 디저트 위주로 채식주의자에게 적합. 다국어 메뉴판 및 간편결제 지원."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市大字鉄輪559-1（海地獄園内）",
      en: "559-1 Kannawa, Beppu, Oita (Inside Umi Jigoku)",
      zh: "大分县别府市大字铁轮559-1（海地狱园内）",
      ko: "오이타현 벳푸시 칸나와 559-1 (우미 지옥 경내)"
    },
    hours: {
      ja: "08:00 - 17:00（年中無休）",
      en: "08:00 - 17:00 (Open Daily)",
      zh: "08:00 - 17:00（全年无休）",
      ko: "08:00 - 17:00 (연중무휴)"
    },
    phone: "+81 977-66-0121"
  },
  {
    id: 22,
    name: {
      ja: "血の池地獄 郷土料理 レストラン極楽",
      en: "Chinoike Jigoku Restaurant Gokuraku",
      zh: "血之池地狱 乡土料理 极乐餐厅",
      ko: "치노이케 지옥 향토요리 레스토랑 고쿠라쿠"
    },
    category: "restaurant",
    lat: 33.3280,
    lng: 131.4780,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "真っ赤な温泉熱泥で有名な血の池地獄に併設された食事処。大分郷土料理「だんご汁」（手延べ小麦麺とごぼう・椎茸・人参などの根菜を味噌仕立てにした汁物）が名物で、肉類を抜いたベジタリアン対応も可能。多言語メニュー・キャッシュレス完備。※ハラール認証施設ではありません。",
      en: "Eatery next to the famous crimson Chinoike Jigoku (Blood Pond Hell). Famous for Oita's traditional Dangojiru (flat wheat noodles with root vegetables in miso soup), adaptable to vegetarian. Multilingual menus and cashless accepted. *Note: Not Halal certified.",
      zh: "紧邻以赤红色温泉热泥闻名的“血之池地狱”名胜餐厅。招牌大分乡土美食“团子汁”（手擀小麦面配牛蒡、香菇等根茎蔬菜味增汤），可做去肉素食版。支持多语言与电子支付。※注意：非清真认证。",
      ko: "붉은 열탕 진흙으로 유명한 치노이케 지옥 옆 향토 음식점. 오이타 명물 단고지루(수제 밀가루 면과 우엉, 표고버섯 등을 된장으로 끓인 국물)를 선보이며 고기를 제외한 베지테리언 맞춤 가능. 다국어 메뉴 및 간편결제 지원."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "楽天ペイ", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市野田778（血の池地獄内）",
      en: "778 Noda, Beppu, Oita (Inside Chinoike Jigoku)",
      zh: "大分县别府市野田778（血之池地狱内）",
      ko: "오이타현 벳푸시 노다 778 (치노이케 지옥 내)"
    },
    hours: {
      ja: "08:30 - 17:00（年中無休）",
      en: "08:30 - 17:00 (Open Daily)",
      zh: "08:30 - 17:00（全年无休）",
      ko: "08:30 - 17:00 (연중무휴)"
    },
    phone: "+81 977-66-1199"
  },
  {
    id: 23,
    name: {
      ja: "鶴見岳高原 展望カフェ",
      en: "Mt. Tsurumi Summit Highland Cafe",
      zh: "鹤见岳高原 展望咖啡厅",
      ko: "쓰루미다케 고원 전망 카페"
    },
    category: "cafe",
    lat: 33.2880,
    lng: 131.4350,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府ロープウェイ山上駅にある絶景カフェ。標高1,300mから別府湾を一望。山菜そば・うどんや抹茶アイス、地元カボスジュースを提供。植物性・卵乳の軽食が中心でベジタリアンの方も利用しやすい環境です。英語表記メニューあり、クレジットカード・交通系IC対応。",
      en: "Breathtaking panoramic cafe atop the Beppu Ropeway summit station (1,300m above sea level). Offers wild mountain vegetable soba/udon, matcha soft-serve, and local Kabosu citrus drinks. Vegetarian-friendly. English menu, credit cards and transit IC cards accepted.",
      zh: "位于别府索道山顶站的壮丽全景咖啡厅，海拔1300米俯瞰别府湾。供应山菜荞麦面、乌冬面、抹茶冰淇淋及大分香母酢果汁。以素食轻食为主，蛋奶素友好。配备英文菜单，支持刷卡与交通IC卡。",
      ko: "벳푸 로프웨이 정상역(해발 1,300m)에 위치한 파노라마 오션뷰 카페. 산나물 소바·우동, 말차 소프트크림, 카보스 음료 등을 판매합니다. 채식 친화적이며 영어 메뉴 구비. 신용카드 및 교통계 IC카드 지원."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: false,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市大字南立石字寒原10-7（ロープウェイ山上駅）",
      en: "10-7 Kankahara, Minamitateishi, Beppu, Oita",
      zh: "大分县别府市大字南立石字寒原10-7（索道山上站）",
      ko: "오이타현 벳푸시 미나미타테이시 간카하라 10-7"
    },
    hours: {
      ja: "09:30 - 16:30（年中無休・悪天候時運休あり）",
      en: "09:30 - 16:30 (Open Daily)",
      zh: "09:30 - 16:30（全年无休）",
      ko: "09:30 - 16:30 (연중무휴)"
    },
    phone: "+81 977-22-2277"
  },
  {
    id: 24,
    name: {
      ja: "志高湖畔 レストハウス＆BBQ広場",
      en: "Lake Shidaka Lakeside Rest House & BBQ",
      zh: "志高湖畔 休闲餐厅与烧烤广场",
      ko: "시다카 호반 레스트하우스 & BBQ 광장"
    },
    category: "restaurant",
    lat: 33.2650,
    lng: 131.4500,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "白鳥が優雅に泳ぐ高原の湖畔レジャー施設。【食材持ち込みBBQ（予約制）】が可能で、ハラール認証肉やヴィーガン用野菜などを持ち込んで大自然の中で自炊バーベキューを楽しめます。売店ではソフトクリームや軽食を販売。※売店の一部は現金のみ対応、ハラール認証施設ではありません。",
      en: "Scenic lakeside retreat with swans on Mt. Tsurumi highland. Features 'Bring-Your-Own-Ingredients' BBQ facilities, ideal for Muslim travelers and vegans bringing their own certified meats and produce. Snack counter available. *Note: Cash only for some kiosk items.",
      zh: "野鸭与天鹅栖息的高原湖畔露营休闲区。支持【自备食材烧烤（需预约）】，清真游客及纯素食者可自行携带认证食材前来烹饪。小卖部售卖饮料及冰淇淋。※注意：小卖部部分商品仅收现金。",
      ko: "백조가 노니는 시다카 호반의 자연 쉼터. 【외부 식재료 반입 바비큐(예약제)】가 가능하여 할랄 인증 고기나 비건 채소를 직접 가져와 자연 속에서 식사를 즐길 수 있습니다. 매점 운영. ※주의: 매점 일부는 현금 전용입니다."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: false,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市志高4380-1（志高湖キャンプ場内）",
      en: "4380-1 Shidaka, Beppu, Oita",
      zh: "大分县别府市志高4380-1（志高湖营地内）",
      ko: "오이타현 벳푸시 시다카 4380-1"
    },
    hours: {
      ja: "09:00 - 17:00（年末年始休業）",
      en: "09:00 - 17:00 (Open Daily)",
      zh: "09:00 - 17:00（年末年始休息）",
      ko: "09:00 - 17:00 (연중무휴)"
    },
    phone: "+81 977-25-3601"
  },
  {
    id: 25,
    name: {
      ja: "別府タワー 展望ラウンジカフェ",
      en: "Beppu Tower Observation Lounge Cafe",
      zh: "别府塔 展望景观咖啡厅",
      ko: "벳푸 타워 전망 라운지 카페"
    },
    category: "cafe",
    lat: 33.2825,
    lng: 131.5065,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府の海岸通りにそびえる国の登録有形文化財・別府タワー展望階のラウンジカフェ。別府湾のパノラマと市街地を一望しながら、珈琲やオリジナルカクテル、スイーツ、ピザなどを楽しめます。英語メニュー・キャッシュレス完備。※ハラールや豚肉不使用などの食事制限対応は行っていません。",
      en: "Lounge cafe on the observation deck of the registered heritage Beppu Tower. Panoramic views over Beppu Bay while enjoying coffee, cocktails, pizza, and sweets. English menu and cashless payments ready. *Note: Religious dietary options like Halal are not provided.",
      zh: "位于别府海岸线地标——国家注册有形文化遗产别府塔展望层的景观咖啡厅。360度俯瞰别府湾美景，提供咖啡、鸡尾酒、披萨和甜点。支持英文菜单与电子支付。※注意：不提供清真等特殊宗教饮食。",
      ko: "벳푸 해안도로의 랜드마크이자 국가 등록유형문화재인 벳푸 타워 전망 라운지 카페. 벳푸만을 내려다보며 커피와 칵테일, 피자, 디저트를 즐길 수 있습니다. 영어 메뉴판 및 간편결제 완비. ※주의: 할랄 등 종교적 식단 배려는 미지원입니다."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市北浜3-10-2（別府タワー 17F）",
      en: "17F Beppu Tower, 3-10-2 Kitahama, Beppu, Oita",
      zh: "大分县别府市北滨3-10-2（别府塔 17F）",
      ko: "오이타현 벳푸시 기타하마 3-10-2 (벳푸 타워 17층)"
    },
    hours: {
      ja: "09:30 - 22:00（年中無休）",
      en: "09:30 - 22:00 (Open Daily)",
      zh: "09:30 - 22:00（全年无休）",
      ko: "09:30 - 22:00 (연중무휴)"
    },
    phone: "+81 977-26-1555"
  },
  {
    id: 26,
    name: {
      ja: "別府海浜砂湯 休憩カフェ",
      en: "Beppu Seaside Sand Bath Cafe",
      zh: "别府海滨砂汤 休闲咖啡店",
      ko: "벳푸 해변 모래찜질 휴게 카페"
    },
    category: "cafe",
    lat: 33.3100,
    lng: 131.5030,
    image: "https://images.unsplash.com/photo-1507133750040-3a4a57c1f5d1?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "上人ヶ浜海岸の天然砂湯施設に併設された休憩カフェ。海風を感じるウッドデッキで、地元産カボスソーダやオーガニックハーブティー、ジェラートを味わえます。水分補給と健康志向のドリンクが中心で、ベジタリアンにも安心。英語案内あり、各種QR決済対応。",
      en: "Relaxation cafe adjoining the famous natural hot-sand bath on Shoningahama Beach. Enjoy local Kabosu lime soda, organic herbal tea, and artisanal gelato on the seaside wooden deck. Vegetarian-friendly drinks. English signs, mobile QR payments accepted.",
      zh: "紧邻上人滨天然海滨砂浴名胜的木质露台咖啡厅。面朝大海享受清爽的大分香母酢苏打水、有机草本茶和手工意式冰淇淋。天然饮品为主，素食友好。配备英文指引与移动扫码支付。",
      ko: "쇼닌가하마 해변의 천연 모래찜질 시설 옆 바다 전망 카페. 시원한 바닷바람과 함께 현지 카보스 에이드, 유기농 허브티, 젤라토를 즐길 수 있습니다. 웰빙 음료 위주로 채식주의자에게도 적합. 영어 안내 및 모바일 간편결제 지원."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市上人ヶ浜（別府海浜砂湯内）",
      en: "Shoningahama, Beppu, Oita",
      zh: "大分县别府市上人滨（别府海滨砂汤内）",
      ko: "오이타현 벳푸시 쇼닌가하마"
    },
    hours: {
      ja: "08:30 - 18:00（第4水曜定休）",
      en: "08:30 - 18:00 (Closed 4th Wed)",
      zh: "08:30 - 18:00（第4个周三公休）",
      ko: "08:30 - 18:00 (매월 넷째 수요일 휴무)"
    },
    phone: "+81 977-66-5737"
  },
  {
    id: 27,
    name: {
      ja: "モスバーガー 別府店",
      en: "Mos Burger Beppu",
      zh: "摩斯汉堡 别府店",
      ko: "모스버거 벳푸점"
    },
    category: "fastfood",
    lat: 33.2870,
    lng: 131.5020,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "日本生まれの大手ハンバーガーチェーン。動物性食材および五葷（ねぎ・にんにく等）を一切使用しない専用の「グリーンバーガー（植物性）」を取り扱っており、ヴィーガン・ベジタリアンの方に強く支持されています。ソイパティ変更も可能。多言語メニュー・キャッシュレス完備。※一般店舗のためハラール認証はありません。",
      en: "Popular Japanese burger chain. Famous for its 100% plant-based 'Green Burger' crafted without any animal ingredients or pungent alliums, perfect for vegans and vegetarians. Soy patty substitutions available. Multilingual menus and cashless ready. *Note: Not Halal certified.",
      zh: "源自日本的高品质汉堡连锁。特设完全不含动物成分及五辛（葱蒜）的“Green Burger（绿色植物汉堡）”，深受纯素与蛋奶素食者喜爱，亦可自由定制大豆植物肉饼。支持多语言与电子支付。※注意：非清真认证。",
      ko: "일본 대표 수제버거 체인점. 동물성 원료 및 오신채(파, 마늘 등)를 전혀 사용하지 않은 전용 '그린 버거(플랜트 베이스)'를 판매하여 비건·채식주의자에게 인기가 높습니다. 소이 패티 변경 가능. 다국어 메뉴 및 간편결제 완비. ※주의: 할랄 인증은 없습니다."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "楽天ペイ", icon: "fa-solid fa-qrcode" },
      { name: "d払い", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市富士見町3-18",
      en: "3-18 Fujimi-cho, Beppu, Oita",
      zh: "大分县别府市富士见町3-18",
      ko: "오이타현 벳푸시 후지미초 3-18"
    },
    hours: {
      ja: "09:00 - 22:00（年中無休）",
      en: "09:00 - 22:00 (Open Daily)",
      zh: "09:00 - 22:00（全年无休）",
      ko: "09:00 - 22:00 (연중무휴)"
    },
    phone: "+81 977-21-2233"
  },
  {
    id: 28,
    name: {
      ja: "スシロー 別府店",
      en: "Sushiro Beppu",
      zh: "寿司郎 别府店",
      ko: "스시로 벳푸점"
    },
    category: "restaurant",
    lat: 33.2950,
    lng: 131.5010,
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "国道10号線沿いの全国最大手回転寿司チェーン。座席のタッチパネル注文機は英語・中国語・韓国語に完全対応。マグロやサーモンなどの魚介握りが豊富で、豚肉を避ける外国人旅行者に人気です。サイドメニューやアレルギー一覧も多言語で確認可能。各種キャッシュレス対応。",
      en: "Japan's largest conveyor sushi chain along Route 10. Table touchscreens fully support English, Chinese, and Korean. Broad assortment of tuna, salmon, and seafood without pork. Multilingual allergen guidelines and full cashless payments accepted.",
      zh: "位于国道10号线旁的大型回转寿司连锁店。餐桌平板点餐机全面支持中、英、韩多语言。主打金枪鱼、三文鱼等各类新鲜鱼介海鲜，无猪肉困扰，深受外国游客欢迎。支持全渠道无现金结账。",
      ko: "국도 10호선변에 위치한 일본 최대 회전초밥 체인점. 전 좌석 태블릿으로 한국어, 영어, 중국어 주문 가능. 참치, 연어 등 해산물 초밥이 다양하여 돼지고기를 기피하는 여행객에게 좋습니다. 다국어 알레르기 안내 및 간편결제 완비."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "楽天ペイ", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市南荘園町13-28",
      en: "13-28 Minamishoen-machi, Beppu, Oita",
      zh: "大分县别府市南庄园町13-28",
      ko: "오이타현 벳푸시 미나미쇼엔초 13-28"
    },
    hours: {
      ja: "11:00 - 23:00（土日祝 10:30〜）",
      en: "11:00 - 23:00 (Sat/Sun/Holidays from 10:30)",
      zh: "11:00 - 23:00（周末节假日 10:30起）",
      ko: "11:00 - 23:00 (주말·공휴일 10:30부터)"
    },
    phone: "+81 977-27-8811"
  },
  {
    id: 29,
    name: {
      ja: "ケンタッキーフライドチキン 別府店",
      en: "KFC Beppu",
      zh: "肯德基 别府店",
      ko: "KFC 벳푸점"
    },
    category: "fastfood",
    lat: 33.2920,
    lng: 131.5020,
    image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "国道10号線沿いの大手フライドチキンチェーン。オリジナルチキンやバーガー、ポテトを提供。※チキン（鶏肉）が主原料ですが、日本の通常店舗のためハラール認証肉は使用しておらず、調理器具も通常仕様です。各種キャッシュレス決済やセルフ注文機に対応。",
      en: "Major fried chicken chain along Route 10 in Beppu. Serves original recipe chicken, burgers, and fries. *Important note: Although chicken is the primary meat, it is NOT Halal certified as standard Japanese stores do not use certified poultry. Cashless accepted.",
      zh: "位于国道10号线旁的大型美式炸鸡连锁。供应经典原味鸡、汉堡及薯条。※特别提示：虽然主料为鸡肉，但作为日本普通门店，不使用清真认证禽肉，亦非清真烹饪。支持各类型无现金支付。",
      ko: "벳푸 국도변 대형 프라이드치킨 매장. 오리지널 치킨, 버거, 감자튀김 판매. ※주의: 닭고기가 주재료이나 일본 일반 매장 특성상 할랄 공식 인증 육류를 사용하지 않으므로 무슬림은 주의가 필요합니다. 간편결제 완비."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "楽天ペイ", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市石垣東10-1-30",
      en: "10-1-30 Ishigakihigashi, Beppu, Oita",
      zh: "大分县别府市石垣东10-1-30",
      ko: "오이타현 벳푸시 이시가키히가시 10-1-30"
    },
    hours: {
      ja: "10:00 - 21:00（年中無休）",
      en: "10:00 - 21:00 (Open Daily)",
      zh: "10:00 - 21:00（全年无休）",
      ko: "10:00 - 21:00 (연중무휴)"
    },
    phone: "+81 977-21-5588"
  },
  {
    id: 30,
    name: {
      ja: "下町大衆食堂 ひばり亭",
      en: "Shitamachi Hibaritei Diner",
      zh: "下町大众食堂 云雀亭",
      ko: "시타마치 대중식당 히바리테이"
    },
    category: "restaurant",
    lat: 33.2730,
    lng: 131.5040,
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府の下町路地で50年以上続く大衆食堂。大分名物とり天定食やちゃんぽん、豚汁が大盛りで安く味わえる地元民の憩いの場。【日本円の現金のみ対応（クレジットカード・電子マネー不可）】、英語対応やWi-Fiはありません。豚肉製品を多く扱うため食事制限非対応の注意喚起店舗です。",
      en: "Beloved neighborhood diner operating for over 50 years in Beppu backstreets. Known for hearty portions of Toriten chicken tempura and pork noodle soup. *Important: CASH ONLY (No cards/QR accepted), Japanese only, no Wi-Fi. Heavy pork usage, not dietary friendly.",
      zh: "隐藏在别府老街巷弄里超过50年的平民大众食堂。招牌大份炸鸡天妇罗定食、杂烩面及猪肉汤深受街坊喜爱。【仅限日元现金结账（不可刷卡/扫码）】，无英语服务及Wi-Fi。大量使用猪肉，无特殊饮食关怀的传统老店。",
      ko: "벳푸 골목길에서 50년 넘게 영업 중인 정겨운 대중식당. 푸짐한 토리텐 정식과 나가사키 짬뽕, 돈지루가 명물. 【일본 엔화 현금만 가능 (카드/QR 불가)】, 일본어 전용 매장이며 Wi-Fi 미지원. 돼지고기를 많이 사용하는 전통 식당입니다."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: false,
      qr_pay: false,
      ic_card: false,
      cash: true
    },
    paymentBrands: [
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: false,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市千代町7-15",
      en: "7-15 Chiyo-machi, Beppu, Oita",
      zh: "大分县别府市千代町7-15",
      ko: "오이타현 벳푸시 지요초 7-15"
    },
    hours: {
      ja: "11:00 - 19:30（日曜定休）",
      en: "11:00 - 19:30 (Closed Sun)",
      zh: "11:00 - 19:30（周日公休）",
      ko: "11:00 - 19:30 (일요일 휴무)"
    },
    phone: "+81 977-23-4567"
  },
  {
    id: 31,
    name: {
      ja: "トルコケバブ＆ハラールグリル カッパドキア別府",
      en: "Turkish Kebab & Halal Grill Cappadocia Beppu",
      zh: "土耳其烤肉与清真烧烤 卡帕多奇亚别府店",
      ko: "터키 케밥 & 할랄 그릴 카파도키아 벳푸"
    },
    category: "restaurant",
    lat: 33.2820,
    lng: 131.5055,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "北浜海岸通り沿いにあるトルコ料理＆ハラールグリル専門店。100%ハラール認証のチキン＆ビーフドネルケバブや、香ばしいピタパン、レンズ豆スープを提供。豚肉・アルコールは一切排除。店舗奥に礼拝マットとウドゥー（清め場）完備。英語とトルコ語対応スタッフが温かく迎えます。",
      en: "Located on Kitahama Seaside Street. Certified Halal Turkish grill serving 100% halal chicken and beef doner kebabs, fresh pita bread, and lentil soup. Strictly pork and alcohol-free. Prayer mat and wudu washing area available on site. Friendly English and Turkish speaking staff.",
      zh: "位于北滨海滨大道的土耳其清真餐厅。提供100%清真认证的鸡肉与牛肉旋转烤肉（Doner Kebab）、新鲜皮塔饼及扁豆浓汤。绝无猪肉及酒精。店内备有祈祷垫与小净洗漱处，店员熟练使用英语与土耳其语。",
      ko: "기타하마 해안도로에 위치한 터키 요리 & 할랄 그릴 전문점. 100% 할랄 인증 닭고기와 소고기 케밥, 갓 구운 피타 브레드, 렌틸콩 수프를 선보입니다. 돼지고기와 주류 일체 미취급. 매장 내 기도 매트와 세족대 완비."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市北浜2-10-18（北浜バスセンター徒歩2分）",
      en: "2-10-18 Kitahama, Beppu, Oita",
      zh: "大分县别府市北滨2-10-18",
      ko: "오이타현 벳푸시 기타하마 2-10-18"
    },
    hours: {
      ja: "11:30 - 22:30（年中無休）",
      en: "11:30 - 22:30 (Open 7 days)",
      zh: "11:30 - 22:30（全年无休）",
      ko: "11:30 - 22:30 (연중무휴)"
    },
    phone: "+81 977-22-3101"
  },
  {
    id: 32,
    name: {
      ja: "観海寺 湯けむりオーガニック 精進ヴィーガン膳",
      en: "Kankaiji Steam Organic Shojin Vegan Dining",
      zh: "观海寺 汤烟有机精进纯素膳",
      ko: "칸카이지 온천연기 유기농 쇼진 비건 정식"
    },
    category: "restaurant",
    lat: 33.2845,
    lng: 131.4780,
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "観海寺の高台から別府湾を見渡す和風ダイニング。大分県産無農薬野菜と大豆、昆布出汁だけで仕立てた完全ヴィーガン対応の精進料理を提供。化学調味料や五葷（ネギ・ニンニク等）にも柔軟に対応。静寂な和室空間で心洗われるひとときを過ごせます。",
      en: "Tranquil dining overlooking Beppu Bay from the heights of Kankaiji. Authentic Buddhist Shojin vegan cuisine made exclusively from organic local vegetables, soy, and kombu dashi broth. Onion and garlic-free options available upon request.",
      zh: "俯瞰别府湾美景的观海寺和风餐厅。传承经典佛教精进料理（纯素），采用当地有机时蔬、大豆与昆布高汤精心烹调。可提供无五辛选项，环境宁静幽雅。",
      ko: "벳푸만이 내려다보이는 칸카이지 언덕의 힐링 레스토랑. 오이타산 유기농 채소와 다시마 육수로 조리한 정통 불교 사찰식(비건) 요리를 선보입니다. 오신채 제외 옵션 가능."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市観海寺1（スギノイパレス手前）",
      en: "1 Kankaiji, Beppu, Oita",
      zh: "大分县别府市观海寺1",
      ko: "오이타현 벳푸시 칸카이지 1"
    },
    hours: {
      ja: "11:30 - 15:00 / 17:30 - 20:30（火曜定休）",
      en: "11:30 - 15:00 / 17:30 - 20:30 (Closed Tue)",
      zh: "11:30 - 15:00 / 17:30 - 20:30（周二公休）",
      ko: "11:30 - 15:00 / 17:30 - 20:30 (화요일 휴무)"
    },
    phone: "+81 977-24-3202"
  },
  {
    id: 33,
    name: {
      ja: "別府手打ち冷麺・温麺 六盛",
      en: "Beppu Handmade Cold Noodles Rokusei",
      zh: "别府手工冷面·温面 六盛",
      ko: "벳푸 수제 냉면·온면 로쿠세이"
    },
    category: "ramen",
    lat: 33.2690,
    lng: 131.5085,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府名物「別府冷麺」の代表的名店。国産牛骨と昆布で丁寧にとった澄み渡る和風出汁と、そば粉と小麦粉を独自配合したコシの強い手打ち自家製麺が自慢。スープ・具材ともに豚肉は不使用（ポークフリー）。チャーシューも牛モモ肉のみを使用しています。",
      en: "Iconic restaurant for Beppu Cold Noodles. Rich yet crystal-clear soup crafted from domestic beef bones and kombu kelp, paired with chewy handmade buckwheat noodles. Completely pork-free (beef toppings only). Popular with international tourists.",
      zh: "别府代表性名物“别府冷面”名店。精选日本牛骨与天然昆布熬制清澈回甘的高汤，搭配弹性十足的手工荞麦冷面。全程无猪肉成分（仅使用牛肉叉烧与牛骨汤），深受食客喜爱。",
      ko: "벳푸의 명물 '벳푸 냉면'을 대표하는 유명 맛집. 한우 사골과 다시마로 우려낸 깔끔하고 깊은 육수와 쫄깃한 메밀 면발이 일품입니다. 돼지고기를 전혀 사용하지 않는 소고기 베이스(포크프리)입니다."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市松原町7-17",
      en: "7-17 Matsubara-cho, Beppu, Oita",
      zh: "大分县别府市松原町7-17",
      ko: "오이타현 벳푸시 마쓰바라초 7-17"
    },
    hours: {
      ja: "11:30 - 14:00 / 18:00 - 20:00（水曜定休）",
      en: "11:30 - 14:00 / 18:00 - 20:00 (Closed Wed)",
      zh: "11:30 - 14:00 / 18:00 - 20:00（周三公休）",
      ko: "11:30 - 14:00 / 18:00 - 20:00 (수요일 휴무)"
    },
    phone: "+81 977-22-3303"
  },
  {
    id: 34,
    name: {
      ja: "ハラール マレーシアキッチン ランカウイ",
      en: "Halal Malaysian Kitchen Langkawi",
      zh: "清真马来西亚餐厅 兰卡威别府店",
      ko: "할랄 말레이시아 키친 랑카위"
    },
    category: "restaurant",
    lat: 33.2800,
    lng: 131.5018,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府駅東口徒歩3分。マレーシア出身シェフによる本格ハラールマレー料理店。ココナッツ香るナシレマ、スパイシーなルンダンビーフ、ロティチャナイが大人気。ムスリムフレンドリー認証を取得しており、完全アルコールフリー・豚肉排除。男女別の礼拝室を完備しています。",
      en: "Authentic Halal Malaysian restaurant 3 minutes walk from Beppu Station. Famous for Nasi Lemak, Beef Rendang, and Roti Canai. Fully Halal certified, alcohol-free, and pork-free. Separate prayer rooms for men and women available on the 2nd floor.",
      zh: "距离别府站东口步行3分钟。由马来西亚主厨掌勺的地道清真南洋料理。招牌椰浆饭（Nasi Lemak）、仁当牛肉及印度煎饼风味正宗。获得清真认证，店内备有男女分开的专用祈祷室。",
      ko: "벳푸역 동쪽 출구 도보 3분 거리. 말레이시아 셰프가 선보이는 정통 할랄 요리 전문점. 나시르막, 비프 렌당, 로티 차나이가 인기. 완전 할랄 인증 및 무알코올, 남녀 분리 기도실 완비."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市駅前町8-5",
      en: "8-5 Ekimae-cho, Beppu, Oita",
      zh: "大分县别府市车站前町8-5",
      ko: "오이타현 벳푸시 에키마에초 8-5"
    },
    hours: {
      ja: "11:30 - 15:00 / 17:30 - 21:30（月曜定休）",
      en: "11:30 - 15:00 / 17:30 - 21:30 (Closed Mon)",
      zh: "11:30 - 15:00 / 17:30 - 21:30（周一公休）",
      ko: "11:30 - 15:00 / 17:30 - 21:30 (월요일 휴무)"
    },
    phone: "+81 977-22-3404"
  },
  {
    id: 35,
    name: {
      ja: "鉄輪 地獄蒸し工房 蒸し野菜専科",
      en: "Kannawa Jigokumushi Steamed Veggie Kitchen",
      zh: "铁轮 地狱蒸工房 蒸蔬菜专门店",
      ko: "칸나와 지옥찜 공방 스팀 베지터블 키친"
    },
    category: "restaurant",
    lat: 33.3142,
    lng: 131.4788,
    image: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "鉄輪温泉の100度近い天然蒸気熱で蒸し上げる体験型レストラン。かぼちゃ、さつまいも、キャベツ、キノコなど地元産旬の採れたて野菜を専用せいろで蒸し上げます。素材本来の甘みとミネラルが凝縮され、完全ヴィーガン・ベジタリアン対応。英語の蒸し方マニュアルも完備。",
      en: "Hands-on geothermal steam cooking experience using Kannawa's 100°C natural hot spring steam. Steam seasonal organic vegetables, roots, and mushrooms in traditional bamboo baskets. 100% plant-based vegan friendly with English step-by-step guides.",
      zh: "体验铁轮近100度天然温泉蒸汽烹调的特色餐厅。使用竹蒸笼蒸制南瓜、红薯、甘蓝与菌菇等本地新鲜有机时蔬。保留食材最纯粹的清甜与矿物质，纯素食者必访，配有英文操作指南。",
      ko: "칸나와 온천의 100도 천연 증기를 이용해 직접 쪄 먹는 이색 체험 식당. 호박, 고구마, 양배추, 버섯 등 신선한 채소를 대나무 찜기에 쪄냅니다. 100% 비건 대응 가능하며 영어 이용 안내서 완비."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市風呂本5組",
      en: "5-kumi Furomoto, Beppu, Oita",
      zh: "大分县别府市风吕本5组",
      ko: "오이타현 벳푸시 후로모토 5구미"
    },
    hours: {
      ja: "10:00 - 18:00（L.O. 17:00 / 第3水曜定休）",
      en: "10:00 - 18:00 (L.O. 17:00 / Closed 3rd Wed)",
      zh: "10:00 - 18:00（最后点单 17:00 / 每月第3个周三公休）",
      ko: "10:00 - 18:00 (라스트오더 17:00 / 매월 셋째 수요일 휴무)"
    },
    phone: "+81 977-66-3505"
  },
  {
    id: 36,
    name: {
      ja: "明礬 岡本屋 湯の花茶屋",
      en: "Myoban Okamotoya Yunohana Teahouse",
      zh: "明矾 冈本屋 汤之花茶屋",
      ko: "묘반 오카모토야 유노하나 다원"
    },
    category: "cafe",
    lat: 33.3180,
    lng: 131.4580,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "明礬大橋の雄大な絶景を望む老舗茶屋。名物の元祖「地獄蒸しプリン」や温泉蒸し卵、うどんが味わえます。プリンはほろ苦いカラメルと濃厚なカスタードが絶妙で、卵・乳を使用するベジタリアン（ラクト・オボ）の方に大人気。各種キャッシュレス決済に対応。",
      en: "Historic teahouse boasting panoramic views of Myoban Bridge. World-famous for its original 'Jigokumushi Custard Pudding' steamed by sulphur hot spring steam. Vegetarian friendly (lacto-ovo). Full cashless payment support.",
      zh: "坐拥明矾大桥壮丽景色的老字号茶屋。以元祖“地狱蒸布丁”闻名遐迩，天然温泉蒸汽蒸出的布丁口感丝滑微苦。蛋奶素食者可选，支持刷卡与各类移动支付。",
      ko: "묘반 대교의 절경을 감상할 수 있는 유서 깊은 디저트 명소. 유황 온천 증기로 쪄낸 원조 '지옥찜 푸딩'과 온천 달걀이 인기. 락토 오보 베지테리언 친화적이며 간편결제 완비."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市明礬4組",
      en: "4-kumi Myoban, Beppu, Oita",
      zh: "大分县别府市明矾4组",
      ko: "오이타현 벳푸시 묘반 4구미"
    },
    hours: {
      ja: "08:30 - 18:30（年中無休）",
      en: "08:30 - 18:30 (Open Daily)",
      zh: "08:30 - 18:30（全年无休）",
      ko: "08:30 - 18:30 (연중무휴)"
    },
    phone: "+81 977-66-3606"
  },
  {
    id: 37,
    name: {
      ja: "インドネシア料理 ワルン・バリ 別府",
      en: "Indonesian Restaurant Warung Bali Beppu",
      zh: "印度尼西亚料理 巴厘小馆 别府店",
      ko: "인도네시아 레스토랑 와룽 발리 벳푸"
    },
    category: "restaurant",
    lat: 33.2985,
    lng: 131.4960,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "石垣東エリアにあるバリ島直伝のアットホームな食堂。発酵大豆テンペを使ったヴィーガン対応のゴレン（炒め物）や、ハラール鶏肉を使用したサテ（焼き鳥）、サンバルソースの炒飯が評判。豚肉は一切持ち込まず、ムスリム留学生からも厚い信頼を集めています。",
      en: "Cozy Balinese diner in Ishigaki area. Offers vegan-friendly fried Tempeh (fermented soybean), Halal chicken satay skewers, and flavorful Nasi Goreng. Completely pork-free kitchen, highly trusted by international Muslim students.",
      zh: "位于石垣东街区温馨的巴厘风情餐厅。招牌炸印尼发酵大豆天贝（Tempeh，高蛋白纯素）、清真沙爹鸡肉串与印尼炒饭。全店无猪肉，深受外国留学生喜爱。",
      ko: "이시가키 지역에 위치한 정겨운 발리식 식당. 식물성 단백질 템페 요리(비건), 할랄 치킨 사테(꼬치구이), 인도네시아식 볶음밥 나시고랭이 인기. 돼지고기 절대 미사용."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市石垣東3-5-20",
      en: "3-5-20 Ishigakihigashi, Beppu, Oita",
      zh: "大分县别府市石垣东3-5-20",
      ko: "오이타현 벳푸시 이시가키히가시 3-5-20"
    },
    hours: {
      ja: "11:30 - 14:30 / 17:30 - 21:00（火曜定休）",
      en: "11:30 - 14:30 / 17:30 - 21:00 (Closed Tue)",
      zh: "11:30 - 14:30 / 17:30 - 21:00（周二公休）",
      ko: "11:30 - 14:30 / 17:30 - 21:00 (화요일 휴무)"
    },
    phone: "+81 977-25-3707"
  },
  {
    id: 38,
    name: {
      ja: "ベトナム料理 フォー＆バインミー クイニョン",
      en: "Vietnamese Pho & Banh Mi Quy Nhon",
      zh: "越南料理 河粉与法棍面包 归仁小馆",
      ko: "베트남 요리 쌀국수 & 반미 퀴논"
    },
    category: "restaurant",
    lat: 33.2765,
    lng: 131.5030,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "楠町アーケード近くの本格ベトナム料理店。牛骨と八角・シナモンをじっくり煮込んだハラールビーフ対応フォーや、野菜と豆腐のベジタリアンフォー、米粉フランスパンのバインミーが好評。豚肉使用メニューと調理器具を明確に区分しています。",
      en: "Authentic Vietnamese restaurant near Kusunoki arcade. Features beef pho made with halal-certified beef, vegetarian tofu pho, and crispy rice-flour banh mi baguettes. Pork dishes are prepared with strictly separated cookware.",
      zh: "靠近楠町商业街的正宗越南餐厅。提供清真牛肉河粉、鲜蔬豆腐素食河粉及外脆内软的法式越南三明治。严格区分荤素及清真烹饪厨具。",
      ko: "쿠스노키 아케이드 인근 베트남 전문점. 할랄 소고기 쌀국수, 두부 야채 비건 쌀국수, 쌀바게트 반미가 인기. 조리도구를 철저히 구분하여 안전하게 제공합니다."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市楠町8-12",
      en: "8-12 Kusunoki-cho, Beppu, Oita",
      zh: "大分县别府市楠町8-12",
      ko: "오이타현 벳푸시 쿠스노키초 8-12"
    },
    hours: {
      ja: "11:00 - 15:00 / 17:00 - 21:00（木曜定休）",
      en: "11:00 - 15:00 / 17:00 - 21:00 (Closed Thu)",
      zh: "11:00 - 15:00 / 17:00 - 21:00（周四公休）",
      ko: "11:00 - 15:00 / 17:00 - 21:00 (목요일 휴무)"
    },
    phone: "+81 977-21-3808"
  },
  {
    id: 39,
    name: {
      ja: "別府クラフトビール＆ベジバーガー タップルーム",
      en: "Beppu Craft Beer & Veggie Burger Taproom",
      zh: "别府精酿啤酒与纯素汉堡 Taproom",
      ko: "벳푸 크래프트 비어 & 베지 버거 탭룸"
    },
    category: "restaurant",
    lat: 33.2810,
    lng: 131.5060,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府タワーそばのスタイリッシュなビアバー。大分産かぼすを使用したクラフトビールとともに、100%植物性大豆ミートと自家製ヴィーガンマヨネーズの特製ベジバーガーを提供。多国籍な旅行者が集まるインターナショナル空間です。",
      en: "Trendy taproom near Beppu Tower. Serves local craft beers made with Oita Kabosu citrus alongside 100% plant-based soy patty veggie burgers with vegan mayo. A vibrant international hangout.",
      zh: "紧邻别府塔的时尚精酿餐吧。精选添加大分香橙的本地精酿啤酒，搭配100%植物大豆肉饼与特制纯素美乃滋的素食汉堡，国际化氛围浓厚。",
      ko: "벳푸 타워 인근의 감각적인 탭룸. 오이타산 카보스 감귤 크래프트 맥주와 100% 식물성 콩패티 비건 버거를 즐길 수 있는 글로벌 핫플레이스입니다."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "Apple Pay", icon: "fa-brands fa-apple-pay" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市北浜1-4-15",
      en: "1-4-15 Kitahama, Beppu, Oita",
      zh: "大分县别府市北滨1-4-15",
      ko: "오이타현 벳푸시 기타하마 1-4-15"
    },
    hours: {
      ja: "16:00 - 23:30（日曜定休）",
      en: "16:00 - 23:30 (Closed Sun)",
      zh: "16:00 - 23:30（周日公休）",
      ko: "16:00 - 23:30 (일요일 휴무)"
    },
    phone: "+81 977-26-3909"
  },
  {
    id: 40,
    name: {
      ja: "純喫茶 なつかし庵",
      en: "Pure Cafe Natsukashian",
      zh: "纯吃茶 怀旧庵",
      ko: "순다방 나츠카시안"
    },
    category: "cafe",
    lat: 33.2750,
    lng: 131.5035,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "昭和の面影が残る楠銀天街のレトロ喫茶。サイフォンで淹れる本格珈琲と厚切り小倉トーストが評判。【完全現金のみ（クレジットカード・QR・電子マネー不可）】、英語対応やWi-Fiはありません。昔ながらの雰囲気を味わうための現金決済限定スポットです。",
      en: "Retro Showa-era coffee house in Kusunoki arcade. Famous for siphon coffee and thick red-bean toast. *Important: CASH ONLY (No cards or mobile payments accepted). Japanese only, no Wi-Fi.",
      zh: "保留昭和风情的怀旧咖啡馆。特色为虹吸手煮咖啡与厚切红豆吐司。【仅收现金（不可刷卡或扫码）】，无英语服务及Wi-Fi。体验纯正日本老街风情。",
      ko: "쇼와 시대의 정취를 간직한 레트로 다방. 사이폰 커피와 두툼한 팥앙금 토스트가 명물. 【현금 결제만 가능 (카드/QR 불가)】, 일본어 전용 및 Wi-Fi 미지원."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: false,
      qr_pay: false,
      ic_card: false,
      cash: true
    },
    paymentBrands: [
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: false,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市楠町5-18",
      en: "5-18 Kusunoki-cho, Beppu, Oita",
      zh: "大分县别府市楠町5-18",
      ko: "오이타현 벳푸시 쿠스노키초 5-18"
    },
    hours: {
      ja: "08:00 - 17:00（水曜定休）",
      en: "08:00 - 17:00 (Closed Wed)",
      zh: "08:00 - 17:00（周三公休）",
      ko: "08:00 - 17:00 (수요일 휴무)"
    },
    phone: "+81 977-22-4010"
  },
  {
    id: 41,
    name: {
      ja: "亀川 浜茶屋 鮮魚と海鮮丼",
      en: "Kamegawa Hamachaya Fresh Seafood & Rice Bowl",
      zh: "龟川 滨茶屋 鲜鱼与海鲜盖饭",
      ko: "카메가와 하마차야 생선회 & 해물덮밥"
    },
    category: "restaurant",
    lat: 33.3280,
    lng: 131.4985,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "亀川漁港すぐそばの海鮮食堂。豊後水道で揚がった新鮮な真鯛やブリの海鮮丼や、大分名物「りゅうきゅう（特製漬け丼）」が絶品。ハラール・ヴィーガン認証醤油やノンアルコール調味料も常備しており、豚肉不使用で魚介の旨味を安心して堪能できます。",
      en: "Seafood eatery right by Kamegawa fishing port. Serves fresh sea bream and yellowtail rice bowls, as well as Oita's traditional marinated 'Ryukyu' sashimi bowl. Halal soy sauce available on request. Pork-free.",
      zh: "位于龟川渔港旁的生鲜海鲜食堂。严选丰后水道当日捕捞的真鲷与鰤鱼刺身盖饭，提供大分特色琉球腌鱼饭。备有清真无酒精特制酱油，无猪肉成分。",
      ko: "카메가와 항구 바로 앞의 해산물 전문점. 분고 수도에서 갓 잡은 참돔과 방어 해물덮밥, 오이타 전통 회무침 '류큐'가 인기. 할랄 간장 구비, 돼지고기 미사용."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市亀川浜町12-3",
      en: "12-3 Kamegawahamacho, Beppu, Oita",
      zh: "大分县别府市龟川滨町12-3",
      ko: "오이타현 벳푸시 카메가와하마초 12-3"
    },
    hours: {
      ja: "11:00 - 15:00 / 17:00 - 20:30（水曜定休）",
      en: "11:00 - 15:00 / 17:00 - 20:30 (Closed Wed)",
      zh: "11:00 - 15:00 / 17:00 - 20:30（周三公休）",
      ko: "11:00 - 15:00 / 17:00 - 20:30 (수요일 휴무)"
    },
    phone: "+81 977-67-4111"
  },
  {
    id: 42,
    name: {
      ja: "ウズベキスタン＆中央アジア料理 サマルカンド",
      en: "Uzbek & Central Asian Cuisine Samarkand Beppu",
      zh: "乌兹别克与中亚料理 撒马尔罕 别府店",
      ko: "우즈베키스탄 & 중앙아시아 요리 사마르칸트"
    },
    category: "restaurant",
    lat: 33.2808,
    lng: 131.4988,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府駅西口から徒歩4分。本場ウズベキスタンのシェフが手がけるハラール中央アジア料理店。大釜で炊き上げる伝統のピラフ「プロフ」や、ジューシーな羊肉シャシリク、サムサ（肉包みパイ）が絶品。店内完全ハラールでアルコール提供なし。2階に絨毯敷きの礼拝室完備。",
      en: "Central Asian dining 4 minutes walk from Beppu Station West Exit. Famous for traditional lamb 'Plov' pilaf cooked in huge cauldrons, grilled shashlik skewers, and meat samsa pies. 100% Halal certified, no alcohol served. Carpeted prayer room on 2nd floor.",
      zh: "距离别府站西口步行4分钟。由乌兹别克斯坦大厨亲自主理的中亚清真餐厅。招牌大铁锅手抓饭（Plov）、炭烤羊肉串及烤包子极为地道。完全清真，店内不售酒水，2楼设有地毯祈祷室。",
      ko: "벳푸역 서쪽 출구 도보 4분. 우즈베키스탄 셰프의 정통 중앙아시아 요리 전문점. 대형 가마솥에 짓는 전통 양고기 볶음밥 '플로프', 양꼬치 샤실릭이 명물. 100% 할랄 및 무알코올, 전용 기도실 완비."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市田の湯町9-15",
      en: "9-15 Tanoyu-machi, Beppu, Oita",
      zh: "大分县别府市田之汤町9-15",
      ko: "오이타현 벳푸시 다노유초 9-15"
    },
    hours: {
      ja: "12:00 - 15:00 / 17:30 - 22:00（火曜定休）",
      en: "12:00 - 15:00 / 17:30 - 22:00 (Closed Tue)",
      zh: "12:00 - 15:00 / 17:30 - 22:00（周二公休）",
      ko: "12:00 - 15:00 / 17:30 - 22:00 (화요일 휴무)"
    },
    phone: "+81 977-23-4212"
  },
  {
    id: 43,
    name: {
      ja: "薬膳＆スパイスチャイ カフェ シーダ",
      en: "Medicinal Herbal & Spiced Chai Cafe Seeda",
      zh: "药膳与香料奶茶 锡达咖啡馆",
      ko: "약선 & 스파이스 차이 카페 시다"
    },
    category: "cafe",
    lat: 33.2830,
    lng: 131.4870,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府青山町の閑静な住宅街にあるオーガニック薬膳カフェ。高麗人参やナツメ、クコの実を煮出した薬膳野菜スープや、スパイス香る有機豆乳マサラチャイ、グルテンフリー米粉ワッフルが人気。動物性食品・白砂糖不使用のヴィーガン仕様です。",
      en: "Peaceful organic herbal cafe in Aoyama-cho. Known for nourishing herbal vegetable soups simmered with ginseng and jujube, spiced organic soy chai, and gluten-free rice waffles. 100% vegan without animal products or refined sugar.",
      zh: "位于青山町静谧住宅区的有机药膳咖啡馆。精选人参、红枣及枸杞熬制的温补素食汤品，搭配有机豆乳马萨拉奶茶与无麸质米粉华夫饼。纯植物性原料，无精制糖。",
      ko: "아오야마초 한적한 주택가의 유기농 약선 카페. 인삼과 대추를 푹 고아낸 야채 약선 수프와 스파이스 두유 차이, 글루텐프리 쌀 와플이 대표 메뉴. 100% 비건 대응."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "Apple Pay", icon: "fa-brands fa-apple-pay" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市青山町11-6",
      en: "11-6 Aoyama-cho, Beppu, Oita",
      zh: "大分县别府市青山町11-6",
      ko: "오이타현 벳푸시 아오야마초 11-6"
    },
    hours: {
      ja: "10:30 - 18:00（月曜・火曜定休）",
      en: "10:30 - 18:00 (Closed Mon & Tue)",
      zh: "10:30 - 18:00（周一、周二公休）",
      ko: "10:30 - 18:00 (월·화요일 휴무)"
    },
    phone: "+81 977-24-4313"
  },
  {
    id: 44,
    name: {
      ja: "鉄輪 足湯カフェ ぽかぽかスチーム",
      en: "Kannawa Footbath Cafe Poka Poka Steam",
      zh: "铁轮 足汤咖啡馆 暖呼呼蒸汽",
      ko: "칸나와 족욕 카페 포카포카 스팀"
    },
    category: "cafe",
    lat: 33.3135,
    lng: 131.4815,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "源泉かけ流しの足湯に浸かりながら、温泉蒸気で蒸した蒸しパンやハーブティーを楽しめるリラクゼーションカフェ。足湯用のタオル貸出無料。蒸しパンは卵・乳不使用のヴィーガンメニューを用意。外国人観光客向けに多言語案内が充実しています。",
      en: "Relaxing footbath cafe where you soak in natural thermal water while savoring hot-spring-steamed bread and herbal teas. Free towel rental. Vegan steamed bread (egg & dairy-free) available. English multilingual assistance provided.",
      zh: "一边体验源泉涌出的足汤温泉，一边享用温泉蒸汽现蒸面包与花草茶的治愈系咖啡厅。免费借用毛巾，提供无蛋奶纯素蒸面包，多语言指引完备。",
      ko: "천연 온천 족욕을 즐기며 온천 증기로 쪄낸 빵과 허브티를 맛볼 수 있는 힐링 카페. 무료 타월 대여, 계란·우유 미사용 비건 빵 제공. 다국어 안내 완비."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市井田3組",
      en: "3-kumi Ida, Beppu, Oita",
      zh: "大分县别府市井田3组",
      ko: "오이타현 벳푸시 이다 3구미"
    },
    hours: {
      ja: "09:30 - 18:30（不定休）",
      en: "09:30 - 18:30 (Irregular holidays)",
      zh: "09:30 - 18:30（不定期公休）",
      ko: "09:30 - 18:30 (부정기 휴무)"
    },
    phone: "+81 977-66-4414"
  },
  {
    id: 45,
    name: {
      ja: "清真・中国蘭州牛肉麺 一清",
      en: "Halal Lanzhou Hand-Pulled Beef Noodles Isshin",
      zh: "清真 兰州牛肉拉面 一清",
      ko: "할랄 란저우 소고기 수타 라멘 잇신"
    },
    category: "ramen",
    lat: 33.2950,
    lng: 131.4930,
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "注文を受けてから職人が手延べする中国・蘭州伝統のハラール牛肉麺。ハラール国産牛骨と十数種の漢方スパイスを炊き上げた薬膳清湯スープに、秘伝ラー油と香菜（パクチー）が調和。豚肉・豚骨は一切使わず、ムスリム調理師による完全清真認証店です。",
      en: "Certified Halal Lanzhou hand-pulled noodles prepared live to order. Clear aromatic herbal beef broth simmered from halal beef bones and spices, topped with homemade chili oil and cilantro. 100% pork-free and halal certified.",
      zh: "现点现拉的传统正宗清真兰州牛肉面。甄选清真认证牛骨与数十种中草药慢火熬煮的清汤，一清二白三红四绿。穆斯林主厨掌勺，无猪肉猪油，地道清真美味。",
      ko: "주문 즉시 수타로 뽑아내는 정통 란저우 소고기 라멘. 할랄 소뼈와 천연 한방 약재로 끓인 맑고 깊은 육수에 고추기름과 고수가 어우러집니다. 무슬림 셰프의 완전 할랄 인증점."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市石垣西4-2-10",
      en: "4-2-10 Ishigakinishi, Beppu, Oita",
      zh: "大分县别府市石垣西4-2-10",
      ko: "오이타현 벳푸시 이시가키니시 4-2-10"
    },
    hours: {
      ja: "11:00 - 15:00 / 17:30 - 21:30（年中無休）",
      en: "11:00 - 15:00 / 17:30 - 21:30 (Open 7 days)",
      zh: "11:00 - 15:00 / 17:30 - 21:30（全年无休）",
      ko: "11:00 - 15:00 / 17:30 - 21:30 (연중무휴)"
    },
    phone: "+81 977-23-4515"
  },
  {
    id: 46,
    name: {
      ja: "別府老舗とり天 こめ吉",
      en: "Beppu Toriten Komekichi - Gluten-Free Rice Batter",
      zh: "别府老字号炸鸡天妇罗 米吉（米粉无麸质）",
      ko: "벳푸 전통 토리텐 코메키치 - 쌀가루 글루텐프리"
    },
    category: "restaurant",
    lat: 33.2770,
    lng: 131.5050,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "大分県産ヒノヒカリの米粉100%を衣に使った、サクサクのグルテンフリーとり天専門店。ハラール処理された国産鶏むね肉のみを使用し、揚げ油も米油100%。豚肉やアルコール由来調味料は一切使用していません。小麦アレルギーの方も安心です。",
      en: "Gluten-free Toriten specialty shop using 100% Oita rice flour batter and pure rice oil. Prepared exclusively with halal-slaughtered domestic chicken breast. Pork-free and alcohol-free.",
      zh: "采用大分当地产100%大米粉制作酥脆面衣的无麸质炸鸡天妇罗名店。精选清真认证鸡胸肉与健康纯米油炸制，绝不使用猪油与料酒，小麦过敏者首选。",
      ko: "오이타산 100% 쌀가루 튀김옷과 미강유를 사용하는 글루텐프리 토리텐 전문점. 할랄 닭가슴살만을 사용하며 돼지고기와 알코올을 일체 배제했습니다."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市元町6-22",
      en: "6-22 Motomachi, Beppu, Oita",
      zh: "大分县别府市元町6-22",
      ko: "오이타현 벳푸시 모토마치 6-22"
    },
    hours: {
      ja: "11:30 - 14:30 / 17:30 - 21:00（火曜定休）",
      en: "11:30 - 14:30 / 17:30 - 21:00 (Closed Tue)",
      zh: "11:30 - 14:30 / 17:30 - 21:00（周二公休）",
      ko: "11:30 - 14:30 / 17:30 - 21:00 (화요일 휴무)"
    },
    phone: "+81 977-22-4616"
  },
  {
    id: 47,
    name: {
      ja: "イタリアン ピッツェリア ヴェローナ",
      en: "Italian Pizzeria Verona Beppu",
      zh: "意式披萨餐厅 维罗纳别府店",
      ko: "이탈리안 피제리아 베로나 벳푸"
    },
    category: "restaurant",
    lat: 33.2818,
    lng: 131.5038,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "イタリア直輸入の薪窯で焼き上げる本格ナポリピッツァ。完熟トマトとモッツァレラ、バジルのクラシック・マルゲリータや、4種のキノコのベジタリアンピッツァが人気。動物性チーズを植物性ヴィーガンチーズに変更するカスタムにも対応しています。",
      en: "Authentic Neapolitan pizzeria with an imported wood-fired oven. Offers classic Margherita and four-mushroom vegetarian pizzas. Vegan plant-based cheese customization available on request.",
      zh: "配备意大利进口柴烧窑炉的正宗那不勒斯披萨店。提供新鲜番茄罗勒经典玛格丽特披萨与时令菌菇素食披萨，可免费将芝士更换为纯植物素芝士。",
      ko: "이탈리아 직수입 참나무 화덕 피자 전문점. 생토마토와 바질의 클래식 마르게리타와 버섯 베지테리언 피자가 인기. 비건 치즈 변경 옵션 가능."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: false,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市北浜1-10-8",
      en: "1-10-8 Kitahama, Beppu, Oita",
      zh: "大分县别府市北滨1-10-8",
      ko: "오이타현 벳푸시 기타하마 1-10-8"
    },
    hours: {
      ja: "11:30 - 14:30 / 18:00 - 22:00（水曜定休）",
      en: "11:30 - 14:30 / 18:00 - 22:00 (Closed Wed)",
      zh: "11:30 - 14:30 / 18:00 - 22:00（周三公休）",
      ko: "11:30 - 14:30 / 18:00 - 22:00 (수요일 휴무)"
    },
    phone: "+81 977-24-4717"
  },
  {
    id: 48,
    name: {
      ja: "湯けむり抹茶カフェ 千代の露",
      en: "Yukemuri Matcha Cafe Chiyonotsuyu",
      zh: "汤烟抹茶咖啡馆 千代之露",
      ko: "온천연기 말차 카페 지요노츠유"
    },
    category: "cafe",
    lat: 33.3150,
    lng: 131.4770,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "鉄輪いでゆ坂の日本庭園を望む和風カフェ。注文ごとに点てる宇治の上質なお抹茶や、小豆と白玉のヴィーガン和菓子、豆乳抹茶ラテが楽しめます。英語での茶道体験ミニレクチャーも定期開催。全品動物性原料不使用のハラール・ヴィーガンフレンドリー店です。",
      en: "Tranquil traditional Japanese cafe facing a zen garden on Ideyu-zaka in Kannawa. Serves freshly whisked Uji ceremonial matcha, vegan wagashi sweets, and soy matcha lattes. English tea culture workshops available. 100% plant-based.",
      zh: "面朝铁轮出汤坂日式庭院的静心茶屋。现点现刷的宇治高级抹茶、红豆白玉纯素和果子及豆乳抹茶拿铁备受青睐。全店无动物性成分，提供英文茶道体验介绍。",
      ko: "칸나와 온천 골목 일본 정원을 마주한 전통 찻집. 주문 즉시 우려내는 우지 말차와 비건 화과자, 두유 말차 라떼가 인기. 100% 식물성 재료만 사용."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市鉄輪上1組",
      en: "1-kumi Kannawakami, Beppu, Oita",
      zh: "大分县别府市铁轮上1组",
      ko: "오이타현 벳푸시 칸나와카미 1구미"
    },
    hours: {
      ja: "10:00 - 17:30（木曜定休）",
      en: "10:00 - 17:30 (Closed Thu)",
      zh: "10:00 - 17:30（周四公休）",
      ko: "10:00 - 17:30 (목요일 휴무)"
    },
    phone: "+81 977-66-4818"
  },
  {
    id: 49,
    name: {
      ja: "ネパール＆チベット料理 カトマンズキッチン",
      en: "Nepalese & Tibetan Dining Kathmandu Kitchen",
      zh: "尼泊尔与西藏料理 加德满都厨房",
      ko: "네팔 & 티베트 요리 카트만두 키친"
    },
    category: "restaurant",
    lat: 33.2840,
    lng: 131.4910,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "富士見通り沿いの本格ヒマラヤ料理店。スパイスで煮込んだレンズ豆スープの定食「ダルバート」や、蒸し餃子「モモ（野菜モモ選択可）」が人気。ハラール認証鶏肉使用、豊富なベジタリアン＆ヴィーガンカレーが揃い、辛さも1〜5段階で自由に選べます。",
      en: "Authentic Himalayan cuisine along Fujimi Street. Features traditional Dal Bhat lentil curry sets and steamed Momo dumplings (vegetable option available). Halal certified meats and wide vegan options. Spice levels adjustable from mild to extra hot.",
      zh: "位于富士见通街的喜马拉雅风味餐厅。招牌尼泊尔扁豆手抓饭套餐（Dal Bhat）与蔬菜蒸饺（Momo）风味地道。肉类均具清真认证，备有丰富的纯素咖喱，辣度可自由定制。",
      ko: "후지미 거리에 위치한 정통 네팔·히말라야 요리점. 렌틸콩 카레 정식 '달밧'과 수제 만두 '모모(야채 선택 가능)'가 인기. 할랄 인증 고기 및 다양한 비건 카레 완비."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市富士見町5-12",
      en: "5-12 Fujimi-cho, Beppu, Oita",
      zh: "大分县别府市富士见町5-12",
      ko: "오이타현 벳푸시 후지미초 5-12"
    },
    hours: {
      ja: "11:00 - 15:00 / 17:00 - 22:00（年中無休）",
      en: "11:00 - 15:00 / 17:00 - 22:00 (Open Daily)",
      zh: "11:00 - 15:00 / 17:00 - 22:00（全年无休）",
      ko: "11:00 - 15:00 / 17:00 - 22:00 (연중무휴)"
    },
    phone: "+81 977-25-4919"
  },
  {
    id: 50,
    name: {
      ja: "地獄蒸しベーカリー スチームブレッド 温泉パン",
      en: "Jigokumushi Bakery Steam Bread Beppu",
      zh: "地狱蒸烘焙坊 温泉蒸汽天然酵母面包",
      ko: "지옥찜 베이커리 스팀 브레드 온천빵"
    },
    category: "cafe",
    lat: 33.3162,
    lng: 131.4820,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "鉄輪の温泉蒸気を窯内に引き込んで焼き上げるユニークな天然酵母ベーカリー。温泉ミネラルの保湿効果で、外はパリッと中は驚くほどモッチリ。卵・乳製品・バター不使用のヴィーガンハードパンや米粉マフィンが多数並び、アレルギー表記も全品明記されています。",
      en: "Unique artisanal bakery utilizing Kannawa's mineral hot spring steam. The steam creates an incredible crispy crust and soft chewy interior. Rich selection of 100% vegan hard breads and rice muffins (dairy & egg-free) with clear allergen cards.",
      zh: "引入铁轮天然温泉蒸汽进行烘焙的特色天然酵母面包房。丰富的温泉矿物质使面包外皮酥脆内里软糯。提供大量无蛋奶无黄油的纯素欧包及米粉松饼，过敏原标识清晰。",
      ko: "칸나와 온천 증기를 주입해 구워내는 천연 효모 베이커리. 겉은 바삭하고 속은 촉촉한 식감이 특징입니다. 우유와 계란을 쓰지 않는 비건 하드 브레드 다수 완비."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "Apple Pay", icon: "fa-brands fa-apple-pay" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市鉄輪東3-8",
      en: "3-8 Kannawahigashi, Beppu, Oita",
      zh: "大分县别府市铁轮东3-8",
      ko: "오이타현 벳푸시 칸나와히가시 3-8"
    },
    hours: {
      ja: "08:30 - 16:30（売り切れ次第終了 / 月曜・火曜定休）",
      en: "08:30 - 16:30 (Until sold out / Closed Mon & Tue)",
      zh: "08:30 - 16:30（售完即止 / 周一、周二公休）",
      ko: "08:30 - 16:30 (소진 시 마감 / 월·화요일 휴무)"
    },
    phone: "+81 977-66-5020"
  },
  {
    id: 51,
    name: {
      ja: "大分郷土料理 だんご汁 庄屋",
      en: "Oita Traditional Dangojiru Shoya - Hamawaki",
      zh: "大分乡土料理 团子汤 庄屋 浜胁店",
      ko: "오이타 향토요리 단고지루 쇼야 - 하마와키"
    },
    category: "restaurant",
    lat: 33.2675,
    lng: 131.5060,
    image: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府最古の温泉地・浜脇にある築100年の古民家レストラン。大分名物「だんご汁（手延べ平麺風だんご、里芋、椎茸、ゴボウの白味噌仕立て）」を提供。動物性肉・魚出汁を使わない「精進ベジタリアンだんご汁」も指定可能。豚肉は一切不使用です。",
      en: "100-year-old heritage house in historic Hamawaki Onsen. Serves Oita's signature 'Dangojiru' flat noodle soup with local root vegetables and white miso. Plant-based vegetarian option with kombu broth available upon request. Pork-free.",
      zh: "位于别府最古老温泉地浜胁的百年古民家餐馆。提供大分名物团子汤（手拉平宽面团、里芋、香菇配甘甜白味噌）。可特制纯素昆布高汤版本，全程无猪肉。",
      ko: "하마와키 온천가의 100년 전통 한옥풍 식당. 오이타 명물 수제 수제비 된장국 '단고지루'를 선보입니다. 고기 대신 다시마 육수로 조리한 비건 단고지루 선택 가능."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市浜脇1-14-5",
      en: "1-14-5 Hamawaki, Beppu, Oita",
      zh: "大分县别府市浜胁1-14-5",
      ko: "오이타현 벳푸시 하마와키 1-14-5"
    },
    hours: {
      ja: "11:00 - 15:00 / 17:30 - 20:00（水曜定休）",
      en: "11:00 - 15:00 / 17:30 - 20:00 (Closed Wed)",
      zh: "11:00 - 15:00 / 17:30 - 20:00（周三公休）",
      ko: "11:00 - 15:00 / 17:30 - 20:00 (수요일 휴무)"
    },
    phone: "+81 977-21-5121"
  },
  {
    id: 52,
    name: {
      ja: "タイ屋台料理 アロイ別府",
      en: "Thai Street Food Aroy Beppu",
      zh: "泰国街头料理 Aroy别府店",
      ko: "태국 길거리 음식 아로이 벳푸"
    },
    category: "restaurant",
    lat: 33.2825,
    lng: 131.5045,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "タイ出身の料理人が腕を振るうアジアン食堂。米粉麺の焼きそば「パッタイ」や、ココナッツミルクのグリーンカレー、トムヤムスープが大人気。チキンは全品ハラール認証肉を使用。ナンプラー（魚醤）を醤油に代えたベジタリアン対応も柔軟に行っています。",
      en: "Vibrant Thai diner run by native Thai chefs. Famous for Pad Thai rice noodles, Green Curry with coconut milk, and Tom Yum soup. Uses 100% Halal chicken. Vegetarian modifications (soy sauce instead of fish sauce) readily available.",
      zh: "由泰国本土主厨烹制的正宗街头美食。招牌泰式炒河粉（Pad Thai）、椰奶青咖喱与冬阴功汤香浓可口。鸡肉选用清真认证食材，可为素食者提供无鱼露特别定制。",
      ko: "태국 현지 셰프가 요리하는 정통 타이 레스토랑. 팟타이 볶음 쌀국수, 코코넛 그린 카레, 똠얌꿍이 인기. 할랄 인증 닭고기 사용 및 피시소스 미사용 비건 옵션 가능."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市北浜2-2-12",
      en: "2-2-12 Kitahama, Beppu, Oita",
      zh: "大分县别府市北滨2-2-12",
      ko: "오이타현 벳푸시 기타하마 2-2-12"
    },
    hours: {
      ja: "11:30 - 15:00 / 17:30 - 22:30（月曜定休）",
      en: "11:30 - 15:00 / 17:30 - 22:30 (Closed Mon)",
      zh: "11:30 - 15:00 / 17:30 - 22:30（周一公休）",
      ko: "11:30 - 15:00 / 17:30 - 22:30 (월요일 휴무)"
    },
    phone: "+81 977-22-5222"
  },
  {
    id: 53,
    name: {
      ja: "オーガニックアサイー＆スムージー ボウル Beppu",
      en: "Organic Acai & Smoothie Bowls Beppu",
      zh: "有机巴西莓果碗与果昔碗 Beppu",
      ko: "유기농 아사이 & 스무디 볼 벳푸"
    },
    category: "cafe",
    lat: 33.2795,
    lng: 131.5010,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府駅前通りにあるヘルシー志向のカフェ。有機アサイーピューレに大分県産の無農薬イチゴやバナナ、自家製グルテンフリーグラノーラ、チアシードをトッピングしたアサイーボウルを提供。白砂糖・乳製品不使用の100%ヴィーガン仕様です。",
      en: "Superfood bowl cafe along Beppu Station Street. Serves organic acai bowls loaded with local strawberries, bananas, homemade gluten-free granola, and chia seeds. 100% plant-based vegan with zero dairy or refined sugar.",
      zh: "位于别府站前通的健康轻食吧。精选有机巴西莓泥，搭配大分有机草莓、香蕉、自制无麸质燕麦坚果脆及奇亚籽。无乳制品与精制白糖，100%纯植物配方。",
      ko: "벳푸역 앞 거리의 슈퍼푸드 헬시 카페. 유기농 아사이베리 퓨레에 오이타산 딸기, 바나나, 수제 글루텐프리 그래놀라를 얹은 아사이 볼 전문점. 100% 비건."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "Apple Pay", icon: "fa-brands fa-apple-pay" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市駅前町6-11",
      en: "6-11 Ekimae-cho, Beppu, Oita",
      zh: "大分县别府市车站前町6-11",
      ko: "오이타현 벳푸시 에키마에초 6-11"
    },
    hours: {
      ja: "08:30 - 17:30（不定休）",
      en: "08:30 - 17:30 (Irregular holidays)",
      zh: "08:30 - 17:30（不定期公休）",
      ko: "08:30 - 17:30 (부정기 휴무)"
    },
    phone: "+81 977-24-5323"
  },
  {
    id: 54,
    name: {
      ja: "別府炭火焼鳥 ハラールチキン専門店 炭火庵",
      en: "Beppu Charcoal Yakitori Halal Chicken Sumibian",
      zh: "别府炭火烤鸡肉串 清真鸡肉专门店 炭火庵",
      ko: "벳푸 숯불 야키토리 할랄 치킨 전문점 스미비안"
    },
    category: "restaurant",
    lat: 33.2778,
    lng: 131.5065,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "日本の伝統文化「焼き鳥」をムスリムの方にも体験していただくための専門店。全串にハラール認証国産地鶏を使用し、備長炭で香ばしく焼き上げます。特製タレはノンアルコール無添加醤油を使用。店内は豚肉を一切扱わない完全ポークフリーで、礼拝マットも用意しています。",
      en: "Dedicated Japanese Yakitori grill for Muslim diners. Uses 100% certified Halal free-range chicken grilled over binchotan charcoal. Special sauce crafted with alcohol-free soy sauce. Entirely pork-free kitchen with prayer mats available.",
      zh: "专为穆斯林旅行者打造的传统炭火日式烤鸡肉串店。选用清真认证日本优质地鸡，以备长炭现烤，酱汁采用特制无酒精纯酿酱油。厨房彻底杜绝猪肉，备有祈祷毯。",
      ko: "무슬림 관광객도 안심하고 즐길 수 있는 숯불 야키토리 전문점. 100% 할랄 인증 토종닭을 비장탄에 구워냅니다. 무알코올 간장 특제 타레 사용, 돼지고기 배제 및 기도 매트 구비."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市元町3-18",
      en: "3-18 Motomachi, Beppu, Oita",
      zh: "大分县别府市元町3-18",
      ko: "오이타현 벳푸시 모토마치 3-18"
    },
    hours: {
      ja: "17:00 - 23:00（L.O. 22:30 / 日曜定休）",
      en: "17:00 - 23:00 (L.O. 22:30 / Closed Sun)",
      zh: "17:00 - 23:00（最后点单 22:30 / 周日公休）",
      ko: "17:00 - 23:00 (라스트오더 22:30 / 일요일 휴무)"
    },
    phone: "+81 977-23-5424"
  },
  {
    id: 55,
    name: {
      ja: "カフェ・ド・ルポ（別府公園前）",
      en: "Cafe de Repos - Beppu Park",
      zh: "休憩咖啡馆 Cafe de Repos（别府公园前）",
      ko: "카페 드 르포 (벳푸 공원 앞)"
    },
    category: "cafe",
    lat: 33.2812,
    lng: 131.4915,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府公園の四季折々の緑を眺められるテラスカフェ。有機栽培スペシャリティコーヒーや、オーツミルク・豆乳への無料カスタマイズが好評。米粉を使ったヴィーガン対応マフィンやブラウニーも揃っています。Wi-Fiと電源席が完備され、テレワークや旅行の休憩に最適です。",
      en: "Relaxing terrace cafe overlooking Beppu Park greenery. Specializes in organic specialty coffee with complimentary oat or soy milk substitutes. Offers vegan rice-flour muffins and brownies. Free high-speed Wi-Fi and power outlets.",
      zh: "面朝别府公园郁郁葱葱景致的露台咖啡厅。提供有机手冲精品咖啡，可免费替换燕麦奶或豆乳。备有米粉素食玛芬及纯素布朗尼，配备高速Wi-Fi与充电插座。",
      ko: "벳푸 공원의 사계절 풍경을 즐길 수 있는 테라스 카페. 유기농 스페셜티 커피와 오트밀크·두유 무료 변경 옵션 제공. 쌀가루 비건 머핀과 브라우니 완비. 콘센트 및 Wi-Fi 구비."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "Apple Pay", icon: "fa-brands fa-apple-pay" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市野口原3030-1",
      en: "3030-1 Noguchibaru, Beppu, Oita",
      zh: "大分县别府市野口原3030-1",
      ko: "오이타현 벳푸시 노구치바루 3030-1"
    },
    hours: {
      ja: "09:00 - 18:00（火曜定休）",
      en: "09:00 - 18:00 (Closed Tue)",
      zh: "09:00 - 18:00（周二公休）",
      ko: "09:00 - 18:00 (화요일 휴무)"
    },
    phone: "+81 977-25-5525"
  },
  {
    id: 56,
    name: {
      ja: "焼肉 豊後苑 別府本店",
      en: "Yakiniku Bungoen Beppu Main Store",
      zh: "烤肉 丰后苑 别府总店",
      ko: "야키니쿠 분고엔 벳푸 본점"
    },
    category: "restaurant",
    lat: 33.2802,
    lng: 131.5048,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "大分県が誇る最高峰の黒毛和牛「豊後牛」の専門店。ムスリム観光客向けに、ハラール認証を取得した特選和牛コース（専用トング・個別鉄板使用、要事前予約）を提供しています。豚肉不使用の特製タレを用意。タッチパネル注文機は4言語に対応しています。",
      en: "Specialty restaurant for Oita's premium Bungo black-haired Wagyu beef. Offers certified Halal Wagyu courses (reservation required, prepared with dedicated tongs and separate grills). Pork-free signature sauce. Multilingual tablet ordering system.",
      zh: "大分县顶级黑毛和牛“丰后牛”名店。特设清真认证特选和牛套餐（需提前预约，配备专属烤夹与独立烤盘）。提供无猪肉特制蘸酱，触屏平板支持中英日韩4种语言点餐。",
      ko: "오이타현 최상급 흑우 '분고규' 전문점. 무슬림 고객을 위한 할랄 인증 특선 와규 코스(전용 집게 및 전용 불판 사용, 사전 예약제)를 운영합니다. 4개 국어 지원 태블릿 주문 완비."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市北浜1-3-22",
      en: "1-3-22 Kitahama, Beppu, Oita",
      zh: "大分县别府市北滨1-3-22",
      ko: "오이타현 벳푸시 기타하마 1-3-22"
    },
    hours: {
      ja: "17:00 - 23:00（L.O. 22:30 / 火曜定休）",
      en: "17:00 - 23:00 (L.O. 22:30 / Closed Tue)",
      zh: "17:00 - 23:00（最后点单 22:30 / 周二公休）",
      ko: "17:00 - 23:00 (라스트오더 22:30 / 화요일 휴무)"
    },
    phone: "+81 977-22-5626"
  },
  {
    id: 57,
    name: {
      ja: "海鮮居酒屋 豊後水道 潮さい",
      en: "Bungo Seafood Izakaya Shiosai",
      zh: "海鲜居酒屋 丰后水道 潮彩",
      ko: "해산물 이자카야 분고수도 시오사이"
    },
    category: "restaurant",
    lat: 33.2798,
    lng: 131.5075,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府湾を望む活気ある海鮮居酒屋。一本釣りされた大分ブランド魚「関アジ」「関サバ」の活造りや、旬の貝類・車海老の炭火焼きが名物。魚介と野菜中心のメニュー構成で、アルコールフリー醤油や英語メニューを完備。各種クレジットカード・電子マネー対応です。",
      en: "Lively seafood izakaya overlooking Beppu Bay. Famous for sashimi of Seki-Aji (horse mackerel) and Seki-Saba (mackerel) caught in Bungo Channel. Seafood and vegetable focused menu with alcohol-free soy sauce and full cashless payment options.",
      zh: "眺望别府湾的生鲜居酒屋。以丰后水道钓捕的顶级“关竹荚鱼”与“关鲭鱼”刺身闻名。以海鲜及烤蔬菜为主，备有无酒精酱油与英文菜单，支持各类信用卡与电子支付。",
      ko: "벳푸만을 마주한 활기찬 해산물 이자카야. 분고 수도 명물 '세키아지(전갱이)'와 '세키사바(고등어)' 활어회, 해산물 숯불구이가 대표 메뉴. 해산물 중심 구성으로 간편결제 완비."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市北浜2-11-5",
      en: "2-11-5 Kitahama, Beppu, Oita",
      zh: "大分县别府市北滨2-11-5",
      ko: "오이타현 벳푸시 기타하마 2-11-5"
    },
    hours: {
      ja: "17:00 - 23:30（年中無休）",
      en: "17:00 - 23:30 (Open Daily)",
      zh: "17:00 - 23:30（全年无休）",
      ko: "17:00 - 23:30 (연중무휴)"
    },
    phone: "+81 977-23-5727"
  },
  {
    id: 58,
    name: {
      ja: "カフェテリア＆ハラールダイニング APU Reborn",
      en: "APU Cafeteria & Halal Dining Reborn",
      zh: "立命馆APU 国际学生清真与素食餐厅 Reborn",
      ko: "APU 인터내셔널 카페테리아 & 할랄 다이닝 리본"
    },
    category: "restaurant",
    lat: 33.3385,
    lng: 131.4700,
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "立命館アジア太平洋大学（APU）キャンパス内にある一般開放カフェテリア。約100カ国からの留学生が集まるため、国際基準のハラール専用調理ライン、ヴィーガン＆ベジタリアンコーナーを常設。全料理に詳細な食材・アレルゲンピクトグラム表記があり、広々とした祈祷室も併設。",
      en: "Open-to-public dining cafeteria at Ritsumeikan Asia Pacific University (APU). Serves certified Halal dishes prepared in a dedicated kitchen, along with comprehensive vegan and vegetarian options. Pictogram labeling for all dishes. Spacious multi-faith prayer rooms on campus.",
      zh: "位于立命馆亚洲太平洋大学（APU）校园内对公众开放的国际餐厅。拥有独立且获得清真认证的厨房专线，常设纯素与素食专区。所有餐品清晰标注食材图标，校区内设有大型专用祈祷室。",
      ko: "리츠메이칸 APU 캠퍼스 내에 위치한 일반인 이용 가능 다문화 카페테리아. 국제 할랄 인증 전용 조리 라인과 비건·채식 코너 완비. 모든 메뉴에 픽토그램 알레르겐 표기 및 대형 기도실 인접."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市十文字原1-1（APUキャンパス内）",
      en: "1-1 Jumonjibaru, Beppu, Oita (Inside APU Campus)",
      zh: "大分县别府市十文字原1-1（APU校区内）",
      ko: "오이타현 벳푸시 주몬지바루 1-1 (APU 캠퍼스 내)"
    },
    hours: {
      ja: "10:30 - 19:30（土日祝は11:00 - 18:00）",
      en: "10:30 - 19:30 (Weekends: 11:00 - 18:00)",
      zh: "10:30 - 19:30（周末及节假日 11:00 - 18:00）",
      ko: "10:30 - 19:30 (주말 및 공휴일 11:00 - 18:00)"
    },
    phone: "+81 977-78-5828"
  },
  {
    id: 59,
    name: {
      ja: "温泉蒸しスイーツ プリン研究所 明礬",
      en: "Onsen Steam Sweets Pudding Lab Myoban",
      zh: "温泉蒸汽甜品 布丁研究所 明矾店",
      ko: "온천 증기 디저트 푸딩 연구소 묘반"
    },
    category: "cafe",
    lat: 33.3210,
    lng: 131.4550,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "明礬の湯の花小屋近くにある温泉スイーツ専門店。有機豆乳と和三盆で仕上げたヴィーガン仕様の「ソイ・スチームプリン」や、温泉熱で蒸し上げたほくほく安納芋スイーツが人気。卵・乳アレルギーの方や植物性志向の方も安心してデザートタイムを楽しめます。",
      en: "Specialty sweets shop near Myoban Yunohana huts. Famous for its vegan 'Soy Steam Pudding' made from organic soymilk and traditional Wasanbon sugar, alongside sweet potatoes steamed with geothermal steam. Friendly for egg/dairy allergic travelers.",
      zh: "位于明矾汤之花小屋旁的特色甜点店。招牌“豆乳温泉蒸布丁”采用有机豆乳与和三盆糖制作（纯素），以及温泉蒸汽慢蒸安纳红薯。无蛋奶过敏原，安心美味。",
      ko: "묘반 유노하나 산장 인근 온천 디저트 전문점. 유기농 두유와 전통 와삼본 당으로 만든 비건 '소이 스팀 푸딩'과 온천 증기 고구마가 명물. 계란·우유 알레르기 걱정 없이 즐길 수 있습니다."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Apple Pay", icon: "fa-brands fa-apple-pay" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市明礬6組",
      en: "6-kumi Myoban, Beppu, Oita",
      zh: "大分县别府市明矾6组",
      ko: "오이타현 벳푸시 묘반 6구미"
    },
    hours: {
      ja: "09:00 - 17:30（不定休）",
      en: "09:00 - 17:30 (Irregular holidays)",
      zh: "09:00 - 17:30（不定期公休）",
      ko: "09:00 - 17:30 (부정기 휴무)"
    },
    phone: "+81 977-66-5929"
  },
  {
    id: 60,
    name: {
      ja: "お好み焼き・焼きそば 鉄板 浪花",
      en: "Teppan Okonomiyaki & Yakisoba Naniwa",
      zh: "铁板大阪烧与炒面 浪花",
      ko: "텟판 오코노미야키 & 야키소바 나니와"
    },
    category: "restaurant",
    lat: 33.2720,
    lng: 131.5030,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "千代町の路地裏にある下町のお好み焼き屋。豚バラ肉とラードをふんだんに使ったボリューム満点のお好み焼きが地元民に愛されています。【現金決済のみ（カード・QR・電子マネー不可）】、豚肉・ラードを共通鉄板で使用するため、ハラール・ヴィーガン等非対応の注意喚起店舗です。",
      en: "Traditional neighborhood Okonomiyaki parlor in Chiyo-machi. Specializes in pork-loaded savory pancakes cooked with pork lard. *Warning: CASH ONLY (No cards/QR). Cooked on shared lard griddles; NOT suitable for Halal, vegetarian, or pork-free diets.",
      zh: "位于千代町小巷里的平民大阪烧老店。以肥美五花肉和猪油铁板煎制的大阪烧闻名。【仅限现金结账（不支持刷卡或扫码）】，使用共同铁板烹调猪肉与猪油，无清真与素食支持的注意提示店铺。",
      ko: "지요초 골목에 자리한 동네 오코노미야키 전문점. 돼지 삼겹살과 라드를 듬뿍 넣은 전통 스타일. 【현금 결제만 가능 (카드/QR 불가)】, 돼지고기와 동물성 기름을 함께 사용하는 철판이므로 할랄·비건 미지원 매장입니다."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: false,
      qr_pay: false,
      ic_card: false,
      cash: true
    },
    paymentBrands: [
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: false,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市千代町9-4",
      en: "9-4 Chiyo-machi, Beppu, Oita",
      zh: "大分县别府市千代町9-4",
      ko: "오이타현 벳푸시 지요초 9-4"
    },
    hours: {
      ja: "17:30 - 23:00（月曜定休）",
      en: "17:30 - 23:00 (Closed Mon)",
      zh: "17:30 - 23:00（周一公休）",
      ko: "17:30 - 23:00 (월요일 휴무)"
    },
    phone: "+81 977-22-6030"
  },
  {
    id: 61,
    name: {
      ja: "ハラール地中海ファラフェル＆フムス Cafe Levant",
      en: "Halal Mediterranean Falafel & Hummus Cafe Levant",
      zh: "清真地中海餐厅 法拉费与鹰嘴豆泥 Cafe Levant",
      ko: "할랄 지중해 팔라펠 & 후무스 카페 레반트"
    },
    category: "restaurant",
    lat: 33.2809,
    lng: 131.5032,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "北浜エリアのスタイリッシュな地中海・中東カフェ。ひよこ豆とハーブをすり潰して揚げたサクサクのファラフェルサンドや、滑らかな自家製フムス（ひよこ豆ペースト）、タッブーレサラダが人気。100%植物性ヴィーガン＆ハラール認証を取得しています。",
      en: "Stylish Mediterranean and Middle Eastern cafe in Kitahama. Renowned for crispy homemade chickpea falafel pita pockets, velvety hummus, and fresh tabbouleh herb salad. 100% plant-based vegan and certified Halal.",
      zh: "位于北滨街区的时尚地中海风味餐厅。招牌中东鹰嘴豆炸丸子（Falafel）皮塔三明治、细腻自制鹰嘴豆泥（Hummus）与法式欧芹沙拉。100%纯素纯植物与清真双重认证。",
      ko: "기타하마의 감각적인 지중해·중동식 브런치 카페. 병아리콩과 허브를 바삭하게 튀긴 팔라펠 피타 샌드위치와 부드러운 수제 후무스가 일품. 100% 비건 및 할랄 인증 완료."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市北浜1-9-14",
      en: "1-9-14 Kitahama, Beppu, Oita",
      zh: "大分县别府市北滨1-9-14",
      ko: "오이타현 벳푸시 기타하마 1-9-14"
    },
    hours: {
      ja: "11:30 - 15:00 / 17:30 - 21:30（水曜定休）",
      en: "11:30 - 15:00 / 17:30 - 21:30 (Closed Wed)",
      zh: "11:30 - 15:00 / 17:30 - 21:30（周三公休）",
      ko: "11:30 - 15:00 / 17:30 - 21:30 (수요일 휴무)"
    },
    phone: "+81 977-24-6131"
  },
  {
    id: 62,
    name: {
      ja: "別府台湾夜市料理 台北小館",
      en: "Beppu Taiwanese Night Market Diner Taipei Kitchen",
      zh: "别府台湾夜市风味 台北小馆",
      ko: "벳푸 대만 야시장 요리 타이베이 소관"
    },
    category: "restaurant",
    lat: 33.2755,
    lng: 131.5048,
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "台湾人店主が営むアットホームな台湾家庭料理店。本場の紅焼牛肉麺や、手作り水餃子、豆花（トウファ）スイーツが人気。素食（台湾ベジタリアン）メニューも豊富に取り揃え、出汁に動物性エキスを使わないベジ麺も用意。PayPayやLINE Payに対応しています。",
      en: "Homey Taiwanese diner run by Taiwanese locals. Famous for braised beef noodles, handmade dumplings, and Douhua tofu pudding desserts. Offers dedicated Taiwanese vegetarian (Su-shi) options with vegetable broth. Mobile payments accepted.",
      zh: "台湾老板经营的温馨小馆。招牌红烧牛肉面、手工水饺及传统古早味手工豆花。备有地道台湾素食专区（素汤面、素燥饭），支持PayPay与微信支付。",
      ko: "대만인 사장님이 운영하는 정겨운 대만 요리점. 우육면과 수제 물만두, 대만식 두부 디저트 또우화가 명물. 동물성 성분이 없는 채식 전용 메뉴 구비, 모바일 간편결제 지원."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "LINE Pay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市楠町4-8",
      en: "4-8 Kusunoki-cho, Beppu, Oita",
      zh: "大分县别府市楠町4-8",
      ko: "오이타현 벳푸시 쿠스노키초 4-8"
    },
    hours: {
      ja: "11:30 - 14:30 / 17:30 - 21:00（火曜定休）",
      en: "11:30 - 14:30 / 17:30 - 21:00 (Closed Tue)",
      zh: "11:30 - 14:30 / 17:30 - 21:00（周二公休）",
      ko: "11:30 - 14:30 / 17:30 - 21:00 (화요일 휴무)"
    },
    phone: "+81 977-21-6232"
  },
  {
    id: 63,
    name: {
      ja: "鉄輪 温泉蒸しピザ工房 ボルケーノ",
      en: "Kannawa Onsen Geothermal Pizza Volcano",
      zh: "铁轮 温泉地热蒸烤披萨工坊 Volcano",
      ko: "칸나와 온천 지열 스팀 피자 공방 볼케이노"
    },
    category: "restaurant",
    lat: 33.3158,
    lng: 131.4792,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "鉄輪の地熱蒸気オーブンを駆使して焼き上げる新感覚ピッツェリア。蒸気熱でモチモチに仕上げたピザ生地に、大分県産の新鮮な高原トマトとズッキーニ、モッツァレラをトッピング。ベジタリアン対応の「大分ベジタブルピッツァ」が名物です。",
      en: "Innovative pizzeria utilizing geothermal steam ovens in Kannawa. Produces incredibly chewy crusts topped with fresh Oita highland tomatoes, zucchini, and cheeses. The 'Oita Garden Veggie Pizza' is a vegetarian favorite.",
      zh: "利用铁轮地热蒸汽烤炉创制的特色披萨餐厅。蒸汽热力锁住面团水分，外酥内韧。精选大分高原番茄、西葫芦与优质芝士，“大分时蔬纯素披萨”深受好评。",
      ko: "칸나와 지열 오븐을 이용해 구워내는 신개념 피자 레스토랑. 쫄깃한 도우에 오이타산 고랭지 토마토와 애호박, 모차렐라 치즈를 올린 베지테리언 '오이타 채소 피자'가 인기입니다."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市風呂本2組",
      en: "2-kumi Furomoto, Beppu, Oita",
      zh: "大分县别府市风吕本2组",
      ko: "오이타현 벳푸시 후로모토 2구미"
    },
    hours: {
      ja: "11:00 - 15:30 / 17:30 - 21:00（月曜定休）",
      en: "11:00 - 15:30 / 17:30 - 21:00 (Closed Mon)",
      zh: "11:00 - 15:30 / 17:30 - 21:00（周一公休）",
      ko: "11:00 - 15:30 / 17:30 - 21:00 (월요일 휴무)"
    },
    phone: "+81 977-66-6333"
  },
  {
    id: 64,
    name: {
      ja: "韓国家庭料理 ソウルハウス",
      en: "Korean Home Dining Seoul House Beppu",
      zh: "韩国料理 首尔家 别府店",
      ko: "한국 가정식 서울하우스 벳푸"
    },
    category: "restaurant",
    lat: 33.2870,
    lng: 131.5035,
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "餅ヶ浜海岸近くの韓国家庭料理店。国産牛骨スープのスンドゥブチゲや、彩り豊かな野菜ビビンバ、海鮮チヂミが自慢。お肉を使わない「野菜オンリースンドゥブ（昆布・椎茸出汁）」やナムル盛り合わせなどベジタリアン対応も可能。豚肉メニューとは鍋を分けて調理しています。",
      en: "Authentic Korean family restaurant near Mochigahama beach. Features silken tofu stew (Sundubu-jjigae), colorful vegetable Bibimbap, and seafood pancakes. Vegetarian tofu stew with kelp-mushroom broth available.",
      zh: "饼之滨海岸旁的韩国家庭风味餐馆。招牌纯豆腐汤（Sundubu）、彩蔬拌饭及海鲜葱饼。备有昆布香菇汤底的纯素豆腐锅，荤素与无猪肉烹调严格区分。",
      ko: "모치가하마 해변 인근의 정갈한 한국 식당. 순두부찌개, 산채 비빔밥, 해물파전이 일품. 채식주의자를 위한 다시마·표고버섯 육수 비건 순두부 주문 가능."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市餅ケ浜町2-15",
      en: "2-15 Mochigahama-cho, Beppu, Oita",
      zh: "大分县别府市饼之滨町2-15",
      ko: "오이타현 벳푸시 모치가하마초 2-15"
    },
    hours: {
      ja: "11:30 - 14:00 / 17:30 - 22:00（木曜定休）",
      en: "11:30 - 14:00 / 17:30 - 22:00 (Closed Thu)",
      zh: "11:30 - 14:00 / 17:30 - 22:00（周四公休）",
      ko: "11:30 - 14:00 / 17:30 - 22:00 (목요일 휴무)"
    },
    phone: "+81 977-22-6434"
  },
  {
    id: 65,
    name: {
      ja: "別府湾シーサイド グリル＆バー オーシャン",
      en: "Beppu Bay Seaside Grill & Bar Ocean",
      zh: "别府湾海景餐厅 烧烤与酒吧 Ocean",
      ko: "벳푸만 씨사이드 그릴 & 바 오션"
    },
    category: "restaurant",
    lat: 33.2920,
    lng: 131.5065,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府国際観光港に面したオーシャンビューのグリルダイニング。大きな窓から別府湾を行き交うフェリーを眺めながら、オージービーフのグリルステーキや地元白身魚のフィッシュ＆チップス、アボカドグリーンサラダを堪能できます。英語対応スタッフ常駐、各種カード決済完備。",
      en: "Stunning oceanfront grill overlooking Beppu Bay ferries. Savor grilled Aussie steaks, local white fish & chips, and avocado harvest salads. Fluent English-speaking staff and full international credit card acceptance.",
      zh: "面朝别府国际观光港的海景餐厅。倚窗眺望海湾轮渡，享用澳洲炭烤牛排、本地海捕鱼柳薯条与牛油果田园沙拉。员工英语流利，支持各类国际信用卡。",
      ko: "벳푸 국제관광항을 마주한 오션뷰 그릴 다이닝. 통유리창으로 여객선이 오가는 바다를 보며 즐기는 호주산 스테이크와 피시앤칩스, 아보카도 샐러드가 일품. 영어 소통 가능."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "Diners Club", icon: "fa-brands fa-cc-diners-club" },
      { name: "Apple Pay", icon: "fa-brands fa-apple-pay" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市汐見町9-1",
      en: "9-1 Shiomi-cho, Beppu, Oita",
      zh: "大分县别府市汐见町9-1",
      ko: "오이타현 벳푸시 시오미초 9-1"
    },
    hours: {
      ja: "11:30 - 15:00 / 17:30 - 22:30（年中無休）",
      en: "11:30 - 15:00 / 17:30 - 22:30 (Open Daily)",
      zh: "11:30 - 15:00 / 17:30 - 22:30（全年无休）",
      ko: "11:30 - 15:00 / 17:30 - 22:30 (연중무휴)"
    },
    phone: "+81 977-26-6535"
  },
  {
    id: 66,
    name: {
      ja: "スリランカ カレー＆アーユルヴェーダ Ceylon Tea House",
      en: "Sri Lankan Curry & Ayurveda Ceylon Tea House",
      zh: "斯里兰卡香料咖喱与阿育吠陀 锡兰茶屋",
      ko: "스리랑카 커리 & 아유르베다 실론 티 하우스"
    },
    category: "restaurant",
    lat: 33.3010,
    lng: 131.4945,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "石垣エリアにあるアーユルヴェーダ思想を取り入れたスリランカ料理店。ココナッツミルクとローストスパイスで作るレンズ豆のパリップカレーや、ビーツのカレー、ココナッツふりかけ（ポルサンボル）のヴィーガンプレートが絶品。ハラール認証チキンも用意されています。",
      en: "Ayurvedic Sri Lankan dining in Ishigaki. Features fragrant vegan plates with red lentil Dhal curry, beetroot curry, and coconut sambol. Halal-certified chicken options also available. 100% pork-free.",
      zh: "融合阿育吠陀养生哲学的斯里兰卡餐厅。提供红扁豆椰奶咖喱（Parippu）、甜菜根咖喱及椰丝拌菜（Pol Sambol）纯素套餐，肉类选用清真鸡肉，全程无猪肉。",
      ko: "이시가키 지역의 아유르베다식 스리랑카 요리 전문점. 코코넛 밀크 렌틸콩 커리와 비트 커리, 코코넛 삼볼로 구성된 비건 플레이트가 인기. 할랄 치킨 옵션 구비, 돼지고기 미사용."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市石垣東7-3-10",
      en: "7-3-10 Ishigakihigashi, Beppu, Oita",
      zh: "大分县别府市石垣东7-3-10",
      ko: "오이타현 벳푸시 이시가키히가시 7-3-10"
    },
    hours: {
      ja: "11:30 - 15:00 / 18:00 - 21:00（月曜定休）",
      en: "11:30 - 15:00 / 18:00 - 21:00 (Closed Mon)",
      zh: "11:30 - 15:00 / 18:00 - 21:00（周一公休）",
      ko: "11:30 - 15:00 / 18:00 - 21:00 (월요일 휴무)"
    },
    phone: "+81 977-24-6636"
  },
  {
    id: 67,
    name: {
      ja: "フルーツパーラー くだもの日和",
      en: "Fruit Parlor Kudamono Biyori",
      zh: "鲜果甜品屋 水果日和 别府店",
      ko: "후르츠 파를러 구다모노 비요리"
    },
    category: "cafe",
    lat: 33.2798,
    lng: 131.5022,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府駅前通りにある老舗果物店直営のフルーツカフェ。大分特産のかぼすジュースや、完熟マンゴー・メロンパフェ、ココナッツミルクベースのヴィーガンアイスクリームを提供。ゼラチンなどの動物性添加物は不使用。各種キャッシュレス決済に対応しています。",
      en: "Fresh fruit cafe run by an established local fruit merchant near Beppu Station. Enjoy seasonal Oita citrus Kabosu smoothies, ripe mango parfaits, and dairy-free coconut ice creams. No animal gelatins used.",
      zh: "别府站前老牌果铺直营的鲜果甜点吧。供应大分特产香橙汁、熟成芒果芭菲与纯植物椰奶雪糕。不含动物明胶等添加剂，支持扫码及信用卡支付。",
      ko: "벳푸역 앞 전통 청과점 직영 과일 디저트 카페. 오이타산 카보스 주스와 완숙 망고 파르페, 식물성 코코넛 아이스크림이 대표 메뉴. 젤라틴 미사용, 간편결제 완비."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市駅前町5-16",
      en: "5-16 Ekimae-cho, Beppu, Oita",
      zh: "大分县别府市车站前町5-16",
      ko: "오이타현 벳푸시 에키마에초 5-16"
    },
    hours: {
      ja: "10:00 - 19:00（火曜定休）",
      en: "10:00 - 19:00 (Closed Tue)",
      zh: "10:00 - 19:00（周二公休）",
      ko: "10:00 - 19:00 (화요일 휴무)"
    },
    phone: "+81 977-22-6737"
  },
  {
    id: 68,
    name: {
      ja: "手打ち十割蕎麦 湯の里",
      en: "Handmade 100% Buckwheat Soba Yunosato - Kankaiji",
      zh: "手工十割纯荞麦面 汤之里 观海寺店",
      ko: "수제 100% 메밀국수 소바 유노사토"
    },
    category: "restaurant",
    lat: 33.2860,
    lng: 131.4755,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "観海寺の清らかな湧き水で打つ国産玄そば100%の十割蕎麦（グルテンフリー）。鰹節を使わず昆布と干し椎茸だけで出汁をとった「精進つゆ」を選べるため、ベジタリアン・ヴィーガンの方も安心。豚肉は一切不使用。窓から別府湾のパノラマが広がります。",
      en: "100% pure buckwheat soba noodles (gluten-free) made with fresh Kankaiji spring water. Offers vegan 'Shojin' dipping sauce simmered from kombu kelp and shiitake mushrooms (fish-free). Pork-free with panoramic bay views.",
      zh: "使用观海寺天然泉水与100%纯荞麦粉手工擀制的十割荞麦面（天然无麸质）。备有仅用昆布与干香菇熬煮的纯素蘸汁，纯素食者必选，俯瞰别府湾美景。",
      ko: "칸카이지의 맑은 지하수와 100% 순메밀로 반죽한 글루텐프리 토와리 소바. 가쓰오부시 대신 다시마와 표고버섯으로 맛을 낸 비건 장국 선택 가능. 돼지고기 미사용."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市観海寺3組",
      en: "3-kumi Kankaiji, Beppu, Oita",
      zh: "大分县别府市观海寺3组",
      ko: "오이타현 벳푸시 칸카이지 3구미"
    },
    hours: {
      ja: "11:00 - 15:00（蕎麦がなくなり次第終了 / 木曜定休）",
      en: "11:00 - 15:00 (Until sold out / Closed Thu)",
      zh: "11:00 - 15:00（面条售完即止 / 周四公休）",
      ko: "11:00 - 15:00 (면 소진 시 마감 / 목요일 휴무)"
    },
    phone: "+81 977-24-6838"
  },
  {
    id: 69,
    name: {
      ja: "ハラール焼肉＆BBQ アル・アミール",
      en: "Halal Yakiniku & BBQ Al-Ameer",
      zh: "清真日式烤肉与烧烤 阿米尔餐厅",
      ko: "할랄 야키니쿠 & BBQ 알 아미르"
    },
    category: "restaurant",
    lat: 33.2855,
    lng: 131.4820,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "南立石にあるハラール和牛・国産牛専門の焼肉店。全仕入れ肉がハラール認証を取得しており、厨房内への豚肉・アルコールの持ち込みを完全禁止。無添加の特製醤油ダレや塩コショウで楽しめます。店内には清潔な礼拝室と手足の洗い場（ウドゥー）を完備しています。",
      en: "Certified Halal Yakiniku specialty restaurant in Minami-Tateishi. 100% Halal certified beef and chicken. Strictly zero pork and zero alcohol premises. Homemade halal dipping sauces. Features a dedicated prayer room with wudu ablution facilities.",
      zh: "位于南立石的清真日式烧肉专门店。全线牛肉与鸡肉均获清真认证，全店杜绝猪肉与酒精。特制无酒精纯酿烤肉酱，店内备有宽敞洁净的男女独立祈祷室及小净设施。",
      ko: "미나미타테이시에 위치한 할랄 인증 한우·와규 야키니쿠 전문점. 매장 내 돼지고기와 주류 반입 전면 금지. 특제 무알코올 타레 소스 제공, 우두 설비와 전용 기도실 완비."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市南立石1区2-10",
      en: "2-10 1-ku Minamitateishi, Beppu, Oita",
      zh: "大分县别府市南立石1区2-10",
      ko: "오이타현 벳푸시 미나미타테이시 1구 2-10"
    },
    hours: {
      ja: "17:00 - 22:30（L.O. 22:00 / 水曜定休）",
      en: "17:00 - 22:30 (L.O. 22:00 / Closed Wed)",
      zh: "17:00 - 22:30（最后点单 22:00 / 周三公休）",
      ko: "17:00 - 22:30 (라스트오더 22:00 / 수요일 휴무)"
    },
    phone: "+81 977-25-6939"
  },
  {
    id: 70,
    name: {
      ja: "亀川 海岸通りカフェ Wave & Breeze",
      en: "Kamegawa Seaside Cafe Wave & Breeze",
      zh: "龟川 海滨大道咖啡馆 Wave & Breeze",
      ko: "카메가와 해안도로 카페 웨이브 & 브리즈"
    },
    category: "cafe",
    lat: 33.3295,
    lng: 131.4990,
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "亀川の海沿いに佇む開放的なビーチカフェ。潮風を感じるテラス席で、完熟アボカドトーストや自家製ソイラテ、オーツミルクスムージーが楽しめます。100%植物性ヴィーガン軽食やグルテンフリーマフィンを用意。英語対応スタッフが常駐しています。",
      en: "Open seaside beach cafe along Kamegawa coast. Enjoy sea breezes on the patio with ripe avocado toast, organic soy lattes, and oat smoothies. 100% vegan light bites and gluten-free muffins. English-speaking staff.",
      zh: "坐落于龟川海边的开阔露天海景咖啡馆。在海风轻拂的露台上品尝牛油果吐司、自制豆乳拿铁及燕麦果昔。备有纯素轻食与无麸质糕点，英文沟通顺畅。",
      ko: "카메가와 해변을 따라 자리 잡은 감성 카페. 바다 전망 테라스에서 즐기는 아보카도 토스트와 소이라테, 오트밀크 스무디가 인기. 100% 비건 스낵 및 글루텐프리 머핀 제공."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "Apple Pay", icon: "fa-brands fa-apple-pay" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市亀川東町8-2",
      en: "8-2 Kamegawahigashimachi, Beppu, Oita",
      zh: "大分县别府市龟川东町8-2",
      ko: "오이타현 벳푸시 카메가와히가시마치 8-2"
    },
    hours: {
      ja: "09:00 - 18:00（木曜定休）",
      en: "09:00 - 18:00 (Closed Thu)",
      zh: "09:00 - 18:00（周四公休）",
      ko: "09:00 - 18:00 (목요일 휴무)"
    },
    phone: "+81 977-67-7040"
  },
  {
    id: 71,
    name: {
      ja: "餃子専門店 ぎょうざの宝来",
      en: "Gyoza Specialty Shop Horai - Motomachi",
      zh: "饺子专卖店 宝来 别府元町店",
      ko: "교자 전문점 교자의 호라이 - 모토마치"
    },
    category: "restaurant",
    lat: 33.2762,
    lng: 131.5058,
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "元町の歓楽街にある創業40年の焼き餃子専門店。豚肉・ニラ・キャベツを豚ラードでパリッと焼き上げる一口餃子が名物。【日本円の現金のみ対応（クレジットカード・QR決済不可）】、豚肉製品のみの提供で、ベジタリアン・ハラール・豚肉不使用には対応していません（注意店舗）。",
      en: "Traditional Gyoza parlor operating 40 years in Motomachi. Famous for crispy bite-sized dumplings filled with minced pork, chives, and cooked in pork lard. *Warning: CASH ONLY. Pork only, NOT suitable for vegetarian or Halal diners.",
      zh: "位于元町繁华街区40年历史的一口煎饺专门店。馅料选用多汁猪肉末与韭菜，猪油香煎酥脆。【仅收现金（不可刷卡/扫码）】，以猪肉为主，不支持素食与清真（注意提示店铺）。",
      ko: "모토마치 유흥가에서 40년 전통을 이어온 한입 야키교자 전문점. 돼지고기와 부추 소를 돼지기름에 바삭하게 구워냅니다. 【현금만 결제 가능 (카드/QR 불가)】, 돼지고기 전용 매장으로 할랄·비건 미지원 매장입니다."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: false,
      qr_pay: false,
      ic_card: false,
      cash: true
    },
    paymentBrands: [
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: false,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市元町8-14",
      en: "8-14 Motomachi, Beppu, Oita",
      zh: "大分县别府市元町8-14",
      ko: "오이타현 벳푸시 모토마치 8-14"
    },
    hours: {
      ja: "18:00 - 01:00（日曜定休）",
      en: "18:00 - 01:00 (Closed Sun)",
      zh: "18:00 - 01:00（周日公休）",
      ko: "18:00 - 01:00 (일요일 휴무)"
    },
    phone: "+81 977-21-7141"
  },
  {
    id: 72,
    name: {
      ja: "パティスリー ベルエポック",
      en: "Patisserie Belle Epoque - Nishinoguchi",
      zh: "法式甜点 贝尔时代 西野口店",
      ko: "파티세리 벨 에포크 - 니시노구치"
    },
    category: "cafe",
    lat: 33.2800,
    lng: 131.4935,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "西野口町にある洗練されたフランス菓子店。卵・乳製品・白砂糖を一切使わないヴィーガン対応の米粉クッキーや、大分県産栗のタルト、豆乳ショコラケーキが人気。全商品に主要アレルゲン7品目のピクトグラムが表示されており、外国人観光客も安心して購入できます。",
      en: "Refined French patisserie in Nishinoguchi. Offers vegan rice-flour cookies, local Oita chestnut tarts, and dairy-free soy chocolate cakes made without eggs, milk, or refined sugar. Clear 7-major allergen pictograms on all tags.",
      zh: "位于西野口町的高雅法式西点店。特制无蛋、无奶、无白糖的纯素米粉饼干、大分栗子挞及豆乳巧克力蛋糕。所有点心均配有清晰的7大过敏原图标标签。",
      ko: "니시노구치초의 고급 프랑스 디저트 숍. 계란·우유·정제 설탕을 쓰지 않는 비건 쌀 쿠키와 오이타산 밤 타르트, 두유 쇼콜라 케이크가 인기. 알레르겐 픽토그램 표기 완비."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市西野口町1-18",
      en: "1-18 Nishinoguchi-cho, Beppu, Oita",
      zh: "大分县别府市西野口町1-18",
      ko: "오이타현 벳푸시 니시노구치초 1-18"
    },
    hours: {
      ja: "10:00 - 19:00（月曜定休）",
      en: "10:00 - 19:00 (Closed Mon)",
      zh: "10:00 - 19:00（周一公休）",
      ko: "10:00 - 19:00 (월요일 휴무)"
    },
    phone: "+81 977-24-7242"
  },
  {
    id: 73,
    name: {
      ja: "インド料理 ロイヤルタージ",
      en: "Indian Restaurant Royal Taj Beppu",
      zh: "印度料理 皇家泰姬 别府店",
      ko: "인도 레스토랑 로열 타지 벳푸"
    },
    category: "restaurant",
    lat: 33.2885,
    lng: 131.5020,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "餅ヶ浜エリアの本格北インド料理レストラン。タンドール窯で焼き上げるナンや、ハラールチキンカレー、ほうれん草とカッテージチーズのパラクパニール（ベジタリアン）が好評。肉類はすべてハラール認証肉を使用し、アルコール提供も控えたムスリム安心仕様です。",
      en: "Authentic North Indian restaurant in Mochigahama. Offers tandoor-baked naan, certified Halal chicken curries, and Palak Paneer (spinach & cottage cheese vegetarian curry). Entirely pork-free with wide vegetarian options.",
      zh: "位于饼之滨街区的正宗北印度料理餐厅。炭烤泥炉烤饼（Naan）、清真鸡肉咖喱及菠菜奶酪素食咖喱极受欢迎。肉类均具清真认证，全店无猪肉。",
      ko: "모치가하마 지역의 정통 북인도 레스토랑. 탄두리 난과 할랄 치킨 커리, 시금치 치즈 커리(팔락 파니르)가 명물. 고기류 전 품목 할랄 인증, 돼지고기 미사용."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市餅ケ浜町6-18",
      en: "6-18 Mochigahama-cho, Beppu, Oita",
      zh: "大分县别府市饼之滨町6-18",
      ko: "오이타현 벳푸시 모치가하마초 6-18"
    },
    hours: {
      ja: "11:00 - 15:00 / 17:00 - 22:30（年中無休）",
      en: "11:00 - 15:00 / 17:00 - 22:30 (Open Daily)",
      zh: "11:00 - 15:00 / 17:00 - 22:30（全年无休）",
      ko: "11:00 - 15:00 / 17:00 - 22:30 (연중무휴)"
    },
    phone: "+81 977-22-7343"
  },
  {
    id: 74,
    name: {
      ja: "別府地獄ラーメン 火の鳥",
      en: "Beppu Jigoku Spicy Ramen Hinotori",
      zh: "别府地狱激辛拉面 火之鸟",
      ko: "벳푸 지옥 라멘 히노토리"
    },
    category: "ramen",
    lat: 33.3148,
    lng: 131.4800,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "鉄輪温泉の地獄めぐりにちなんだ名物激辛ラーメン店。豚骨や豚肉を一切使用せず、国産鶏ガラと香味野菜、十種唐辛子をブレンドしたポークフリー鶏白湯ベースが特徴。辛さは1丁目〜10丁目まで調整可能。チャーシューも柔らかい鶏肉を使用しています。",
      en: "Famous spicy ramen restaurant inspired by Beppu's hot spring 'Hells'. 100% pork-free rich chicken paitan broth made from domestic chicken and aromatic spices. Spice levels adjustable from mild to extreme. Topped with tender chicken slices.",
      zh: "以铁轮地狱温泉为灵感的特色辛辣拉面馆。绝不使用猪骨与猪油，而是以日本优质鸡骨搭配多种辛香辣椒熬制的鸡白汤底（完全无猪肉）。辛辣度可按级挑选，配以鲜嫩鸡肉叉烧。",
      ko: "칸나와 지옥 온천을 테마로 한 명물 매운 라멘 전문점. 돼지 성분을 일체 쓰지 않고 닭 육수와 10종의 고추로 맛을 낸 포크프리 치킨 라멘. 맵기 조절 가능."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市鉄輪風呂本3組",
      en: "3-kumi Furomoto, Beppu, Oita",
      zh: "大分县别府市铁轮风吕本3组",
      ko: "오이타현 벳푸시 후로모토 3구미"
    },
    hours: {
      ja: "11:30 - 15:00 / 18:00 - 22:00（火曜定休）",
      en: "11:30 - 15:00 / 18:00 - 22:00 (Closed Tue)",
      zh: "11:30 - 15:00 / 18:00 - 22:00（周二公休）",
      ko: "11:30 - 15:00 / 18:00 - 22:00 (화요일 휴무)"
    },
    phone: "+81 977-66-7444"
  },
  {
    id: 75,
    name: {
      ja: "観海寺 テラスラウンジ 森と星",
      en: "Kankaiji Terrace Lounge Forest & Stars",
      zh: "观海寺 森林与星空露台酒廊",
      ko: "칸카이지 테라스 라운지 숲과 별"
    },
    category: "cafe",
    lat: 33.2875,
    lng: 131.4740,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "観海寺温泉の高台に位置するリゾートラウンジ。夜は別府市街と別府湾の夜景、昼は緑豊かな山並みを眺めながら、完全植物性のヴィーガンアフタヌーンティーや有機ハーブティーが楽しめます。多言語スタッフ常駐で各種国際カード対応。",
      en: "Resort lounge high up in Kankaiji Onsen. Enjoy panoramic vistas of Beppu Bay and nighttime city lights. Serves 100% plant-based vegan afternoon tea sets and organic herbal teas. Multilingual staff and full card acceptance.",
      zh: "位于观海寺高处的高端度假景观酒廊。白天远眺青翠山峦，夜晚饱览别府湾璀璨夜景。提供纯植物性纯素下午茶套餐与有机花草茶，支持国际卡与多语种服务。",
      ko: "칸카이지 온천 고지대에 위치한 리조트형 라운지. 낮에는 벳푸만, 밤에는 도시 야경을 감상하며 100% 비건 애프터눈 티 세트와 유기농 허브티를 즐길 수 있습니다."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "Diners Club", icon: "fa-brands fa-cc-diners-club" },
      { name: "Apple Pay", icon: "fa-brands fa-apple-pay" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市観海寺1組",
      en: "1-kumi Kankaiji, Beppu, Oita",
      zh: "大分县别府市观海寺1组",
      ko: "오이타현 벳푸시 칸카이지 1구미"
    },
    hours: {
      ja: "11:00 - 22:00（年中無休）",
      en: "11:00 - 22:00 (Open Daily)",
      zh: "11:00 - 22:00（全年无休）",
      ko: "11:00 - 22:00 (연중무휴)"
    },
    phone: "+81 977-24-7545"
  },
  {
    id: 76,
    name: {
      ja: "ハラール・シャワルマ＆ビリヤニスタンド オアシス",
      en: "Halal Shawarma & Biryani Stand Oasis",
      zh: "清真沙威玛与香料手抓饭小站 绿洲别府站店",
      ko: "할랄 샤와르마 & 비리야니 스탠드 오아시스"
    },
    category: "fastfood",
    lat: 33.2792,
    lng: 131.5002,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府駅高架下のテイクアウト＆イートインスタンド。ハラールチキンを回転グリルで焼き上げたスパイシーなシャワルマラップや、香り高いバスマティライスのマトンビリヤニが人気。豚肉・アルコール完全排除の公認ハラール店で、多言語対応スタッフが迅速に提供します。",
      en: "Convenient Halal stand beneath Beppu Station viaduct. Serves rotating rotisserie Halal chicken shawarma wraps and fragrant Basmati mutton biryani. Strictly pork and alcohol-free certified halal food with quick multilingual service.",
      zh: "紧邻别府站高架桥下的快捷清真美食小站。现烤清真鸡肉沙威玛卷饼与香气四溢的巴斯马蒂羊肉手抓饭备受青睐。100%清真无酒精无猪肉，出餐快捷支持扫码。",
      ko: "벳푸역 고가 철교 밑에 위치한 테이크아웃 겸용 할랄 스탠드. 회전 그릴 치킨 샤와르마 랩과 바스마티 라이스 양고기 비리야니가 인기. 완전 할랄 인증 및 무알코올."
    },
    dietary: {
      vegetarian: true,
      vegan: false,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市駅前町11-7（高架下商店街）",
      en: "11-7 Ekimae-cho, Beppu, Oita",
      zh: "大分县别府市车站前町11-7（高架下）",
      ko: "오이타현 벳푸시 에키마에초 11-7"
    },
    hours: {
      ja: "11:00 - 22:00（年中無休）",
      en: "11:00 - 22:00 (Open Daily)",
      zh: "11:00 - 22:00（全年无休）",
      ko: "11:00 - 22:00 (연중무휴)"
    },
    phone: "+81 977-22-7646"
  },
  {
    id: 77,
    name: {
      ja: "和カフェ かんなわ茶房",
      en: "Japanese Harmony Cafe Kannawa Sabo",
      zh: "日式和风茶坊 铁轮茶房",
      ko: "일본식 화카페 칸나와 다방"
    },
    category: "cafe",
    lat: 33.3168,
    lng: 131.4782,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "鉄輪温泉の歴史的景観に溶け込む日本家屋カフェ。地熱温泉蒸気でじっくり炊き上げた北海道産小豆の「地獄蒸しぜんざい」や、きな粉餅、無農薬ほうじ茶が絶品。植物性原料100%のヴィーガン甘味処として外国人旅行者に人気です。",
      en: "Historic Japanese tea house in Kannawa Onsen. Famous for 'Jigokumushi Zenzai' sweet red-bean soup cooked via geothermal steam, roasted soybean mochi, and organic roasted green tea. 100% vegan traditional confectionery.",
      zh: "融入铁轮古街温泉风貌的和风茶舍。招牌“地狱蒸善哉（红豆年糕汤）”采用温泉地热蒸汽熬煮北海道红豆，配以香气四溢的无农药焙茶。100%纯植物传统素点心。",
      ko: "칸나와 온천의 고즈넉한 전통 가옥 찻집. 온천 증기로 푹 끓여낸 팥죽 '지옥찜 단팥죽'과 콩고물 떡, 유기농 호지차가 일품입니다. 100% 식물성 비건 디저트 전문."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/nimoca)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: false,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市鉄輪上2組",
      en: "2-kumi Kannawakami, Beppu, Oita",
      zh: "大分县别府市铁轮上2组",
      ko: "오이타현 벳푸시 칸나와카미 2구미"
    },
    hours: {
      ja: "10:00 - 17:00（水曜定休）",
      en: "10:00 - 17:00 (Closed Wed)",
      zh: "10:00 - 17:00（周三公休）",
      ko: "10:00 - 17:00 (수요일 휴무)"
    },
    phone: "+81 977-66-7747"
  },
  {
    id: 78,
    name: {
      ja: "ベジタブルヌードル＆サラダボウル GREEN FIELD",
      en: "Vegetable Noodles & Salad Bowls GREEN FIELD",
      zh: "时蔬低碳面与沙拉碗 GREEN FIELD 别府站前店",
      ko: "베지터블 누들 & 샐러드 볼 그린 필드"
    },
    category: "restaurant",
    lat: 33.2804,
    lng: 131.5008,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府駅東口徒歩1分のヘルシーファストカジュアル店。ズッキーニや大根を麺状に削った「ベジヌードル」や、雑穀米とアボカド・ケール・ロースト豆腐のカスタムサラダボウルを提供。ドレッシングも自家製無添加・ヴィーガン仕様。英語堪能なスタッフが対応します。",
      en: "Healthy fast-casual spot 1 minute walk from Beppu Station East Exit. Serves spiralized zucchini noodles and custom grain salad bowls with roasted tofu, avocado, and kale. 100% vegan dressings. Fluent English staff.",
      zh: "距离别府站东口仅1分钟的健康轻食店。提供西葫芦螺旋蔬食面，以及搭配烤豆腐、牛油果与羽衣甘蓝的定制谷物沙拉碗。全自制纯素低卡酱汁，店员英语流利。",
      ko: "벳푸역 동쪽 출구 도보 1분 거리의 헬시 캐주얼 레스토랑. 주키니 호박을 면처럼 뽑아낸 '베지 누들'과 구운 두부 아보카도 샐러드 볼이 인기. 100% 비건 드레싱, 영어 응대 가능."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "American Express", icon: "fa-brands fa-cc-amex" },
      { name: "Apple Pay", icon: "fa-brands fa-apple-pay" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "交通系IC (Suica/PASMO)", icon: "fa-solid fa-train-subway" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市駅前町3-10",
      en: "3-10 Ekimae-cho, Beppu, Oita",
      zh: "大分县别府市车站前町3-10",
      ko: "오이타현 벳푸시 에키마에초 3-10"
    },
    hours: {
      ja: "08:00 - 20:00（年中無休）",
      en: "08:00 - 20:00 (Open Daily)",
      zh: "08:00 - 20:00（全年无休）",
      ko: "08:00 - 20:00 (연중무휴)"
    },
    phone: "+81 977-21-7848"
  },
  {
    id: 79,
    name: {
      ja: "中東フュージョンダイニング ダマスカス",
      en: "Middle Eastern Fusion Dining Damascus Beppu",
      zh: "中东特色融合餐厅 大马士革 别府店",
      ko: "중동 퓨전 다이닝 다마스쿠스 벳푸"
    },
    category: "restaurant",
    lat: 33.2815,
    lng: 131.5050,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "北浜にあるシリア・レバノン・中東フュージョン料理店。ハラールラム肉のシシケバブや、ナスとタヒニのペースト「ババガヌーシュ」、パセリとミントのタッブーレサラダが名物。ハラール完全認証・完全アルコールフリーで、2階に礼拝室を完備しています。",
      en: "Middle Eastern fusion dining in Kitahama serving Syrian and Lebanese classics. Famous for grilled Halal lamb shish kebabs, smoky Baba Ganoush eggplant dip, and fresh herb Tabbouleh. Fully certified Halal and alcohol-free with dedicated prayer rooms.",
      zh: "位于北滨的中东叙利亚与黎巴嫩风味餐厅。招牌清真炭烤羊肉串、炭烤茄子芝麻酱（Baba Ganoush）及新鲜欧芹薄荷沙拉。严格清真认证无酒精，2楼配备专用男女祈祷室。",
      ko: "기타하마의 중동 시리아·레바논 퓨전 레스토랑. 할랄 양고기 시시케밥, 가지 페이스트 바바가누쉬, 파슬리 타불레 샐러드가 명물. 완전 할랄 인증 및 무알코올, 2층 기도실 완비."
    },
    dietary: {
      vegetarian: true,
      vegan: true,
      halal: true,
      pork_free: true,
      prayer_room: true
    },
    paymentTypes: {
      credit_card: true,
      qr_pay: true,
      ic_card: true,
      cash: true
    },
    paymentBrands: [
      { name: "Visa", icon: "fa-brands fa-cc-visa" },
      { name: "Mastercard", icon: "fa-brands fa-cc-mastercard" },
      { name: "JCB", icon: "fa-regular fa-credit-card" },
      { name: "PayPay", icon: "fa-solid fa-qrcode" },
      { name: "Alipay (支付宝)", icon: "fa-brands fa-alipay" },
      { name: "WeChat Pay (微信支付)", icon: "fa-brands fa-weixin" },
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: true,
      english_staff: true,
      free_wifi: true
    },
    address: {
      ja: "大分県別府市北浜2-1-24",
      en: "2-1-24 Kitahama, Beppu, Oita",
      zh: "大分县别府市北滨2-1-24",
      ko: "오이타현 벳푸시 기타하마 2-1-24"
    },
    hours: {
      ja: "12:00 - 15:00 / 17:30 - 22:30（月曜定休）",
      en: "12:00 - 15:00 / 17:30 - 22:30 (Closed Mon)",
      zh: "12:00 - 15:00 / 17:30 - 22:30（周一公休）",
      ko: "12:00 - 15:00 / 17:30 - 22:30 (월요일 휴무)"
    },
    phone: "+81 977-23-7949"
  },
  {
    id: 80,
    name: {
      ja: "昔ながらの立ち食いそば・うどん 駅前庵",
      en: "Traditional Standing Soba & Udon Ekimaean",
      zh: "传统站立式荞麦面与乌冬面 站前庵",
      ko: "전통 서서 먹는 소바·우동 에키마에안"
    },
    category: "restaurant",
    lat: 33.2790,
    lng: 131.5003,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80",
    description: {
      ja: "別府駅コンコース内にある昔ながらの立ち食い麺類スタンド。甘めの醤油出汁にモチモチのうどん・そばが素早く手頃に味わえます。【現金食券機のみ（クレジットカード・QR・電子マネー不可）】。豚肉天ぷらと共用油で揚げるため、ベジタリアン・ハラールには非対応の注意店舗です。",
      en: "Traditional standing noodle stand inside Beppu Station concourse. Fast, affordable Japanese soba and udon in sweet soy broth. *Warning: CASH VENDING MACHINE ONLY (No cards/QR). Shared fryer with pork tempura; not dietary/halal friendly.",
      zh: "位于别府站候车大厅内的传统站食面铺。出餐极快、价格亲民，提供关东甜酱油汤底乌冬与荞麦面。【仅限现金自动售票机（不支持刷卡或扫码）】。油锅炸制猪肉天妇罗，无清真与素食支持（注意提示店铺）。",
      ko: "벳푸역 대합실 내에 위치한 서서 먹는 옛날식 면집. 달콤한 간장 육수 우동과 소바를 저렴하게 즐길 수 있습니다. 【현금 전용 자판기만 이용 가능 (카드/QR 불가)】, 돼지고기 튀김 공용 기름 사용으로 할랄·비건 미지원 매장입니다."
    },
    dietary: {
      vegetarian: false,
      vegan: false,
      halal: false,
      pork_free: false,
      prayer_room: false
    },
    paymentTypes: {
      credit_card: false,
      qr_pay: false,
      ic_card: false,
      cash: true
    },
    paymentBrands: [
      { name: "現金 (JPY)", icon: "fa-solid fa-money-bill-wave" }
    ],
    services: {
      english_menu: false,
      english_staff: false,
      free_wifi: false
    },
    address: {
      ja: "大分県別府市駅前町12-13（別府駅構内）",
      en: "Inside Beppu Station, 12-13 Ekimae-cho, Beppu, Oita",
      zh: "大分县别府市车站前町12-13（别府站内）",
      ko: "오이타현 벳푸시 에키마에초 12-13 (벳푸역 내)"
    },
    hours: {
      ja: "07:00 - 20:00（年中無休）",
      en: "07:00 - 20:00 (Open Daily)",
      zh: "07:00 - 20:00（全年无休）",
      ko: "07:00 - 20:00 (연중무휴)"
    },
    phone: "+81 977-21-8050"
  }
];
