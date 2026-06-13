// 右サイドバー目次（TOC）から法律バッジのテキストを除去
function cleanTOC() {
  document.querySelectorAll('.md-nav--secondary a').forEach(function(link) {
    link.innerHTML = link.innerHTML.replace(/\s*(薬機法|景表法|特商法|ステマ規制)/g, '');
  });
}

// 初回ロード時に実行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', cleanTOC);
} else {
  cleanTOC();
}

// MkDocs Material の navigation.instant でページ遷移したときも実行
if (typeof document$ !== 'undefined') {
  document$.subscribe(cleanTOC);
}
