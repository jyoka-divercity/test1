/**
 * 外国人向けダイバーシティ安心マップWebアプリ - メインスクリプト
 * 機能: Leaflet地図制御、ボトムシートアニメーション、多言語即時切替、検索＆決済フィルター
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // 1. 状態管理 (State Management)
  // ==========================================================================
  let currentLang = "ja";               // 現在の選択言語 ('ja' | 'en' | 'zh' | 'ko')
  let currentFilter = "all";            // 現在のアクティブフィルター
  let searchQuery = "";                 // 現在の検索キーワード
  let selectedSpotId = null;            // 現在選択・詳細表示中の店舗ID
  let mapInstance = null;               // Leaflet地図インスタンス
  let markers = {};                     // 各店舗IDに対応するLeafletマーカーの辞書
  let activeMarkerId = null;            // 現在ハイライト中のマーカーID

  // 別府市全域（南の浜脇〜北の亀川・APU、西の観海寺・明礬）を見渡す初期座標とズームレベル
  const BEPPU_CENTER = [33.300, 131.488];
  const DEFAULT_ZOOM = 13;

  // ==========================================================================
  // 2. DOM要素の参照
  // ==========================================================================
  const appTitleEl = document.getElementById("app-title");
  const appSubtitleEl = document.getElementById("app-subtitle");
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const langBtns = document.querySelectorAll(".lang-btn");
  const spotsListEl = document.getElementById("spots-list");
  const resultsCountEl = document.getElementById("results-count");
  const recenterBtn = document.getElementById("recenter-btn");

  // ボトムシートモーダル関連
  const bottomSheet = document.getElementById("bottom-sheet");
  const modalOverlay = document.getElementById("modal-overlay");
  const closeSheetBtn = document.getElementById("close-sheet-btn");
  const sheetDragHandle = document.getElementById("sheet-drag-handle");
  
  // ボトムシート内コンテンツ要素
  const detailImage = document.getElementById("detail-image");
  const detailCategory = document.getElementById("detail-category");
  const detailName = document.getElementById("detail-name");
  const detailQuickTags = document.getElementById("detail-quick-tags");
  const detailDescription = document.getElementById("detail-description");
  const detailDietaryBadges = document.getElementById("detail-dietary-badges");
  const detailPaymentTypes = document.getElementById("detail-payment-types");
  const detailPaymentBrands = document.getElementById("detail-payment-brands");
  const detailServicesBadges = document.getElementById("detail-services-badges");
  const detailAddress = document.getElementById("detail-address");
  const detailHours = document.getElementById("detail-hours");
  const detailPhone = document.getElementById("detail-phone");
  const detailPhoneLink = document.getElementById("detail-phone-link");
  const detailRouteBtn = document.getElementById("detail-route-btn");
  const btnRouteText = document.getElementById("btn-route-text");

  // セクション見出し要素
  const sectionDietaryTitle = document.getElementById("section-dietary-title");
  const sectionPaymentsTitle = document.getElementById("section-payments-title");
  const sectionServicesTitle = document.getElementById("section-services-title");
  const sectionInfoTitle = document.getElementById("section-info-title");
  const labelAddress = document.getElementById("label-address");
  const labelHours = document.getElementById("label-hours");
  const labelPhone = document.getElementById("label-phone");

  // ==========================================================================
  // 3. Leaflet.js 地図の初期化
  // ==========================================================================
  function initMap() {
    // Leafletマップの作成
    mapInstance = L.map("map", {
      center: BEPPU_CENTER,
      zoom: DEFAULT_ZOOM,
      zoomControl: false // コントロール位置を整理するため手動追加
    });

    // ズームコントロールを右下に配置
    L.control.zoom({ position: "bottomright" }).addTo(mapInstance);

    // OpenStreetMapタイルレイヤーの追加
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);

    // 店舗マーカーの作成
    createMapMarkers();
  }

  // スタイリッシュなカスタムピンマーカーの作成
  function createCustomIcon(isSelected = false) {
    const activeClass = isSelected ? "selected" : "";
    return L.divIcon({
      className: `custom-pin-wrapper`,
      html: `
        <div class="custom-pin ${activeClass}">
          <div class="custom-pin-inner">
            <i class="fa-solid fa-utensils"></i>
          </div>
          <div class="custom-pin-pulse"></div>
        </div>
      `,
      iconSize: [40, 48],
      iconAnchor: [20, 44]
    });
  }

  // 全店舗のマーカーを地図上へ配置
  function createMapMarkers() {
    spotsData.forEach(spot => {
      const marker = L.marker([spot.lat, spot.lng], {
        icon: createCustomIcon(false),
        title: spot.name[currentLang] || spot.name.ja
      }).addTo(mapInstance);

      // マーカータップ（クリック）でボトムシートを開く
      marker.on("click", () => {
        openSpotDetail(spot.id);
      });

      markers[spot.id] = marker;
    });
  }

  // マーカーのアクティブ表示状態を更新
  function updateMarkerActiveState(spotId) {
    if (activeMarkerId && markers[activeMarkerId]) {
      markers[activeMarkerId].setIcon(createCustomIcon(false));
    }
    if (spotId && markers[spotId]) {
      markers[spotId].setIcon(createCustomIcon(true));
      activeMarkerId = spotId;
    } else {
      activeMarkerId = null;
    }
  }

  // ==========================================================================
  // 4. 店舗詳細ボトムシートモーダル制御（最重要機能）
  // ==========================================================================

  // 指定した店舗の詳細をボトムシートに流し込み、表示する
  function openSpotDetail(spotId) {
    const spot = spotsData.find(s => s.id === spotId);
    if (!spot) return;

    selectedSpotId = spotId;
    const lang = currentLang;
    const dict = i18n[lang];

    // マーカーのアクティブ化＆地図をスムーズに中心へ移動
    updateMarkerActiveState(spotId);
    mapInstance.panTo([spot.lat, spot.lng], { animate: true, duration: 0.8 });

    // リストカードのアクティブ化
    document.querySelectorAll(".spot-card").forEach(card => {
      card.classList.toggle("selected", parseInt(card.dataset.id) === spotId);
    });

    // ヒーロー画像と基本情報
    detailImage.src = spot.image;
    detailImage.alt = spot.name[lang] || spot.name.ja;
    
    // カテゴリ表示
    let categoryLabel = dict.categoryRestaurant;
    if (spot.category === "cafe") categoryLabel = dict.categoryCafe;
    else if (spot.category === "fastfood") categoryLabel = dict.categoryFastfood || "ファストフード";
    else if (spot.category === "ramen") categoryLabel = dict.categoryRamen || "ラーメン・麺類";
    detailCategory.textContent = categoryLabel;

    detailName.textContent = spot.name[lang] || spot.name.ja;
    detailDescription.textContent = spot.description[lang] || spot.description.ja;

    // クイックタグ（タイトル下部）
    detailQuickTags.innerHTML = "";
    const hasDietary = spot.dietary.halal || spot.dietary.vegan || spot.dietary.vegetarian || spot.dietary.pork_free || spot.dietary.prayer_room;
    const isCashOnly = !spot.paymentTypes.credit_card && !spot.paymentTypes.qr_pay && !spot.paymentTypes.ic_card;

    if (!hasDietary) {
      detailQuickTags.innerHTML += `<span class="badge-pill non-dietary"><i class="fa-solid fa-triangle-exclamation"></i> ${dict.badgeNonDietary}</span>`;
    }
    if (isCashOnly) {
      detailQuickTags.innerHTML += `<span class="badge-pill cash-only"><i class="fa-solid fa-coins"></i> ${dict.badgeCashOnly}</span>`;
    }
    if (spot.dietary.halal) {
      detailQuickTags.innerHTML += `<span class="badge-pill halal"><i class="fa-solid fa-moon"></i> ${dict.tagHalal}</span>`;
    }
    if (spot.dietary.vegan) {
      detailQuickTags.innerHTML += `<span class="badge-pill vegan"><i class="fa-solid fa-seedling"></i> ${dict.tagVegan}</span>`;
    }
    if (spot.dietary.vegetarian) {
      detailQuickTags.innerHTML += `<span class="badge-pill vege"><i class="fa-solid fa-leaf"></i> ${dict.tagVegetarian}</span>`;
    }
    if (spot.dietary.pork_free) {
      detailQuickTags.innerHTML += `<span class="badge-pill porkfree"><i class="fa-solid fa-ban"></i> ${dict.tagPorkFree}</span>`;
    }
    if (spot.dietary.prayer_room) {
      detailQuickTags.innerHTML += `<span class="badge-pill prayer"><i class="fa-solid fa-kaaba"></i> ${dict.tagPrayerRoom}</span>`;
    }

    // ① 食の配慮ピクトグラムグリッド（対応・非対応の明確化）
    const renderPictoItem = (isSupported, iconClass, labelText) => `
      <div class="picto-item ${isSupported ? 'active' : 'inactive'}">
        <span class="picto-icon"><i class="${iconClass}"></i></span>
        <div class="picto-text-wrap">
          <span class="picto-label">${labelText}</span>
          <span class="picto-status-pill ${isSupported ? 'status-ok' : 'status-ng'}">
            <i class="fa-solid ${isSupported ? 'fa-check' : 'fa-xmark'}"></i>
            ${isSupported ? dict.statusSupported : dict.statusNotSupported}
          </span>
        </div>
      </div>
    `;

    detailDietaryBadges.innerHTML = `
      ${renderPictoItem(spot.dietary.vegetarian, "fa-solid fa-leaf", dict.tagVegetarian)}
      ${renderPictoItem(spot.dietary.vegan, "fa-solid fa-seedling", dict.tagVegan)}
      ${renderPictoItem(spot.dietary.halal, "fa-solid fa-mosque", dict.tagHalal)}
      ${renderPictoItem(spot.dietary.pork_free, "fa-solid fa-shield-halved", dict.tagPorkFree)}
      ${renderPictoItem(spot.dietary.prayer_room, "fa-solid fa-person-praying", dict.tagPrayerRoom)}
    `;

    // ② 使えるお支払い方法（大分類バッジ ＋ ブランドタグ一覧）
    let paymentHtml = "";
    if (isCashOnly) {
      paymentHtml += `
        <div class="cash-only-banner">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>${dict.badgeCashOnly}</span>
        </div>
      `;
    }
    paymentHtml += `
      ${spot.paymentTypes.credit_card ? `<span class="pay-type-badge"><i class="fa-regular fa-credit-card"></i> ${dict.paymentCreditCard}</span>` : ''}
      ${spot.paymentTypes.qr_pay ? `<span class="pay-type-badge"><i class="fa-solid fa-qrcode"></i> ${dict.paymentQr}</span>` : ''}
      ${spot.paymentTypes.ic_card ? `<span class="pay-type-badge"><i class="fa-solid fa-train-subway"></i> ${dict.paymentIc}</span>` : ''}
      ${spot.paymentTypes.cash ? `<span class="pay-type-badge cash-badge"><i class="fa-solid fa-money-bill-wave"></i> ${dict.paymentCash}</span>` : ''}
    `;
    detailPaymentTypes.innerHTML = paymentHtml;

    detailPaymentBrands.innerHTML = "";
    if (spot.paymentBrands && spot.paymentBrands.length > 0) {
      spot.paymentBrands.forEach(brand => {
        detailPaymentBrands.innerHTML += `
          <div class="payment-brand-badge">
            <i class="${brand.icon}"></i>
            <span>${brand.name}</span>
          </div>
        `;
      });
    }

    // ③ 言語・サービス設備
    detailServicesBadges.innerHTML = `
      <div class="service-item">
        <i class="fa-solid fa-book-open"></i>
        <span>${spot.services.english_menu ? dict.tagEnglishMenu : '英語メニュー準備中'}</span>
      </div>
      <div class="service-item">
        <i class="fa-solid fa-comments"></i>
        <span>${spot.services.english_staff ? dict.tagEnglishStaff : 'ジェスチャー・翻訳対応'}</span>
      </div>
      <div class="service-item">
        <i class="fa-solid fa-wifi"></i>
        <span>${spot.services.free_wifi ? dict.tagWifi : 'Wi-Fiなし'}</span>
      </div>
    `;

    // ④ 基本情報（住所・時間・電話）
    detailAddress.textContent = spot.address[lang] || spot.address.ja;
    detailHours.textContent = spot.hours[lang] || spot.hours.ja;
    detailPhone.textContent = spot.phone;
    detailPhoneLink.href = `tel:${spot.phone.replace(/[^0-9+]/g, '')}`;

    // ⑤ Google Maps ルート案内ボタン連携
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${spot.lat},${spot.lng}`;
    detailRouteBtn.href = googleMapsUrl;
    btnRouteText.textContent = dict.routeBtn;

    // ボトムシートを開くアニメーション
    bottomSheet.classList.add("open");
    modalOverlay.classList.add("active");
    bottomSheet.setAttribute("aria-hidden", "false");
  }

  // ボトムシートを閉じる
  function closeSpotDetail() {
    bottomSheet.classList.remove("open");
    modalOverlay.classList.remove("active");
    bottomSheet.setAttribute("aria-hidden", "true");
    updateMarkerActiveState(null);
    selectedSpotId = null;

    document.querySelectorAll(".spot-card").forEach(card => {
      card.classList.remove("selected");
    });
  }

  // ==========================================================================
  // 5. 検索＆フィルタリング機能
  // ==========================================================================

  // 条件に合致する店舗一覧を取得
  function getFilteredSpots() {
    return spotsData.filter(spot => {
      // 1. カテゴリ/属性フィルター
      if (currentFilter !== "all") {
        if (currentFilter === "vegetarian" && !spot.dietary.vegetarian) return false;
        if (currentFilter === "vegan" && !spot.dietary.vegan) return false;
        if (currentFilter === "halal" && !spot.dietary.halal) return false;
        if (currentFilter === "pork_free" && !spot.dietary.pork_free) return false;
        if (currentFilter === "prayer_room" && !spot.dietary.prayer_room) return false;
        if (currentFilter === "credit_card" && !spot.paymentTypes.credit_card) return false;
        if (currentFilter === "qr_pay" && !spot.paymentTypes.qr_pay && !spot.paymentTypes.ic_card) return false;
      }

      // 2. キーワード検索（店名、説明文、住所など）
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const nameJa = (spot.name.ja || "").toLowerCase();
        const nameEn = (spot.name.en || "").toLowerCase();
        const nameZh = (spot.name.zh || "").toLowerCase();
        const nameKo = (spot.name.ko || "").toLowerCase();
        const descJa = (spot.description.ja || "").toLowerCase();
        const descEn = (spot.description.en || "").toLowerCase();

        const match = nameJa.includes(q) || nameEn.includes(q) || nameZh.includes(q) || nameKo.includes(q) ||
                      descJa.includes(q) || descEn.includes(q);
        if (!match) return false;
      }

      return true;
    });
  }

  // 店舗リストビューと地図ピンの同期更新
  function renderSpotsList() {
    const filteredSpots = getFilteredSpots();
    const lang = currentLang;
    const dict = i18n[lang];

    // 件数表示の更新
    resultsCountEl.textContent = `${filteredSpots.length} ${dict.resultsCount}`;

    // リストのクリア
    spotsListEl.innerHTML = "";

    if (filteredSpots.length === 0) {
      spotsListEl.innerHTML = `
        <div class="no-results-msg">
          <i class="fa-solid fa-magnifying-glass-location"></i>
          <p>${dict.noResults}</p>
        </div>
      `;
    } else {
      filteredSpots.forEach(spot => {
        const isSelected = spot.id === selectedSpotId;
        const card = document.createElement("div");
        card.className = `spot-card ${isSelected ? 'selected' : ''}`;
        card.dataset.id = spot.id;

        // カテゴリラベル
        let cardCatLabel = dict.categoryRestaurant;
        if (spot.category === "cafe") cardCatLabel = dict.categoryCafe;
        else if (spot.category === "fastfood") cardCatLabel = dict.categoryFastfood || "ファストフード";
        else if (spot.category === "ramen") cardCatLabel = dict.categoryRamen || "ラーメン・麺類";

        const hasDietary = spot.dietary.halal || spot.dietary.vegan || spot.dietary.vegetarian || spot.dietary.pork_free || spot.dietary.prayer_room;
        const isCashOnly = !spot.paymentTypes.credit_card && !spot.paymentTypes.qr_pay && !spot.paymentTypes.ic_card;

        // 決済サマリー文字列
        const payList = [];
        if (spot.paymentTypes.credit_card) payList.push("Card");
        if (spot.paymentTypes.qr_pay) payList.push("QR");
        if (spot.paymentTypes.ic_card) payList.push("IC");
        if (spot.paymentTypes.cash) payList.push("Cash");

        card.innerHTML = `
          <div class="spot-card-img-wrap">
            <img src="${spot.image}" alt="${spot.name[lang] || spot.name.ja}" class="spot-card-img" loading="lazy">
            <span class="spot-card-category">${cardCatLabel}</span>
          </div>
          <div class="spot-card-body">
            <h3 class="spot-card-title">${spot.name[lang] || spot.name.ja}</h3>
            <p class="spot-card-desc">${spot.description[lang] || spot.description.ja}</p>
            <div class="spot-card-badges">
              ${!hasDietary ? `<span class="badge-pill non-dietary"><i class="fa-solid fa-triangle-exclamation"></i> ${dict.badgeNonDietary}</span>` : ''}
              ${isCashOnly ? `<span class="badge-pill cash-only"><i class="fa-solid fa-coins"></i> ${dict.badgeCashOnly}</span>` : ''}
              ${spot.dietary.halal ? `<span class="badge-pill halal"><i class="fa-solid fa-moon"></i> ${dict.tagHalal}</span>` : ''}
              ${spot.dietary.vegan ? `<span class="badge-pill vegan"><i class="fa-solid fa-seedling"></i> ${dict.tagVegan}</span>` : ''}
              ${spot.dietary.vegetarian ? `<span class="badge-pill vege"><i class="fa-solid fa-leaf"></i> ${dict.tagVegetarian}</span>` : ''}
              ${spot.dietary.pork_free ? `<span class="badge-pill porkfree"><i class="fa-solid fa-ban"></i> ${dict.tagPorkFree}</span>` : ''}
              ${spot.dietary.prayer_room ? `<span class="badge-pill prayer"><i class="fa-solid fa-kaaba"></i> ${dict.tagPrayerRoom}</span>` : ''}
            </div>
            <div class="card-payment-summary ${isCashOnly ? 'cash-only-summary' : ''}">
              <i class="${isCashOnly ? 'fa-solid fa-triangle-exclamation' : 'fa-regular fa-credit-card'}"></i>
              <span>${isCashOnly ? dict.badgeCashOnly : payList.join(' ・ ')}</span>
            </div>
          </div>
        `;

        // カードクリックで詳細ボトムシート展開
        card.addEventListener("click", () => {
          openSpotDetail(spot.id);
        });

        spotsListEl.appendChild(card);
      });
    }

    // 地図上のピンの表示/非表示をフィルターに連動
    const filteredIds = new Set(filteredSpots.map(s => s.id));
    spotsData.forEach(spot => {
      const marker = markers[spot.id];
      if (!marker) return;

      if (filteredIds.has(spot.id)) {
        if (!mapInstance.hasLayer(marker)) {
          marker.addTo(mapInstance);
        }
      } else {
        if (mapInstance.hasLayer(marker)) {
          mapInstance.removeLayer(marker);
        }
      }
    });
  }

  // ==========================================================================
  // 6. 多言語切り替え機能 (i18n Switcher)
  // ==========================================================================
  function switchLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    const dict = i18n[lang];

    // 言語ボタンのアクティブ切り替え
    langBtns.forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    // 静的UIテキストの更新
    appTitleEl.textContent = dict.appTitle;
    appSubtitleEl.textContent = dict.appSubtitle;
    searchInput.placeholder = dict.searchPlaceholder;

    // フィルターボタンテキストの多言語化
    filterBtns.forEach(btn => {
      const f = btn.dataset.filter;
      if (f === "all") btn.textContent = dict.filterAll;
      if (f === "vegetarian") btn.textContent = dict.filterVegetarian;
      if (f === "vegan") btn.textContent = dict.filterVegan;
      if (f === "halal") btn.textContent = dict.filterHalal;
      if (f === "pork_free") btn.textContent = dict.filterPorkFree;
      if (f === "prayer_room") btn.textContent = dict.filterPrayerRoom;
      if (f === "credit_card") btn.textContent = dict.filterCreditCard;
      if (f === "qr_pay") btn.textContent = dict.filterQrPay;
    });

    // ボトムシート内固定ラベルの更新
    sectionDietaryTitle.innerHTML = `<i class="fa-solid fa-utensils"></i> ${dict.sectionDietary}`;
    sectionPaymentsTitle.innerHTML = `<i class="fa-solid fa-credit-card"></i> ${dict.sectionPayments}`;
    sectionServicesTitle.innerHTML = `<i class="fa-solid fa-globe"></i> ${dict.sectionServices}`;
    sectionInfoTitle.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${dict.sectionInfo}`;
    labelAddress.textContent = dict.addressLabel;
    labelHours.textContent = dict.hoursLabel;
    labelPhone.textContent = dict.phoneLabel;
    btnRouteText.textContent = dict.routeBtn;

    // リストとマーカー情報の再描画
    renderSpotsList();

    // ボトムシートが開いていれば再描画
    if (selectedSpotId) {
      openSpotDetail(selectedSpotId);
    }
  }

  // ==========================================================================
  // 7. イベントリスナー登録
  // ==========================================================================

  // 多言語切り替えボタン
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      switchLanguage(btn.dataset.lang);
    });
  });

  // フィルターボタン
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderSpotsList();
    });
  });

  // 検索入力イベント
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery.length > 0 ? "block" : "none";
    renderSpotsList();
  });

  // 検索クリアボタン
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    searchInput.focus();
    renderSpotsList();
  });

  // ボトムシート閉じる操作
  closeSheetBtn.addEventListener("click", closeSpotDetail);
  modalOverlay.addEventListener("click", closeSpotDetail);

  // Escキーでボトムシートを閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && bottomSheet.classList.contains("open")) {
      closeSpotDetail();
    }
  });

  // 地図再センタリングボタン
  recenterBtn.addEventListener("click", () => {
    mapInstance.flyTo(BEPPU_CENTER, DEFAULT_ZOOM, {
      duration: 1.2
    });
  });

  // スマホ向けボトムシートスワイプ・ドラッグ閉じる処理
  let touchStartY = 0;
  let touchMoveY = 0;
  sheetDragHandle.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  sheetDragHandle.addEventListener("touchmove", (e) => {
    touchMoveY = e.touches[0].clientY;
  }, { passive: true });

  sheetDragHandle.addEventListener("touchend", () => {
    if (touchMoveY - touchStartY > 60) {
      closeSpotDetail();
    }
    touchStartY = 0;
    touchMoveY = 0;
  });

  // ==========================================================================
  // 8. アプリケーション開始
  // ==========================================================================
  initMap();
  switchLanguage("ja");
});
