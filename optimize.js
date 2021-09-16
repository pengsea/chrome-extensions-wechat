var css = '.rich_media_area_primary_inner { max-width: none !important; }' +
    ' .qr_code_pc_inner{display:none;} ' +
    ' section{margin:0 !important;line-height:1em !important;min-height:0 !important;} ' +
    ' p{line-height: normal !important;} ' +
    ' .rich_media_content p {min-height: 0;} ' +
    ' br{display:none}',
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
