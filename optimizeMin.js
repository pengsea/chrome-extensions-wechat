var css = '.rich_media_area_primary_inner { max-width: none !important; }' +
    ' .qr_code_pc_inner{display:none;} ',
    head = document.getElementsByTagName('head')[0],
    style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
head.appendChild(style);

//@ sourceURL=optimize.js
