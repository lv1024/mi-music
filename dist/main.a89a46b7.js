parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"5IsC":[function(require,module,exports) {
!function(c){var a,t='<svg><symbol id="icon-dingshi" viewBox="0 0 1024 1024"><path d="M510.407736 960.414823c-60.290131 0-118.797663-11.81714-173.898609-35.122939-53.199643-22.50148-100.970646-54.706973-141.983735-95.720062s-73.218582-88.784092-95.720062-141.983735c-23.305799-55.101969-35.122939-113.608477-35.122939-173.898609 0-60.290131 11.81714-118.797663 35.122939-173.898609 22.50148-53.200666 54.706973-100.970646 95.720062-141.983735 41.013089-41.014112 88.784092-73.218582 141.983735-95.721085 55.101969-23.305799 113.608477-35.122939 173.898609-35.122939s118.797663 11.81714 173.898609 35.122939c53.199643 22.502503 100.970646 54.706973 141.983735 95.721085 41.013089 41.013089 73.218582 88.784092 95.720062 141.983735 23.305799 55.100946 35.122939 113.608477 35.122939 173.898609 0 60.290131-11.81714 118.797663-35.122939 173.898609-22.50148 53.199643-54.706973 100.970646-95.720062 141.983735s-88.784092 73.218582-141.983735 95.720062C629.205399 948.597683 570.697867 960.414823 510.407736 960.414823zM510.407736 130.408095c-102.377692 0-198.627826 39.868009-271.0206 112.260783-72.392774 72.392774-112.260783 168.642908-112.260783 271.0206s39.868009 198.627826 112.260783 271.0206c72.39175 72.392774 168.642908 112.260783 271.0206 112.260783 102.377692 0 198.62885-39.868009 271.0206-112.260783s112.260783-168.642908 112.260783-271.0206-39.868009-198.627826-112.260783-271.0206S612.786451 130.408095 510.407736 130.408095z"  ></path><path d="M704.347796 512.541329 512.731664 512.541329 512.731664 292.051589 411.414117 292.051589 411.414117 613.858876 704.347796 613.858876Z"  ></path></symbol><symbol id="icon-xihuan1" viewBox="0 0 1024 1024"><path d="M512 998.4c-19.2 0-38.4-12.8-38.4-19.2C454.4 966.4 128 640 83.2 595.2 32 537.6 0 467.2 0 396.8s32-147.2 83.2-198.4c51.2-51.2 121.6-83.2 198.4-83.2 76.8 0 147.2 32 198.4 83.2C492.8 211.2 505.6 224 512 236.8c6.4-12.8 19.2-25.6 32-38.4 51.2-51.2 121.6-83.2 198.4-83.2 76.8 0 147.2 32 198.4 83.2C992 249.6 1024 320 1024 396.8c0 76.8-32 147.2-83.2 198.4C896 640 569.6 966.4 550.4 979.2 550.4 985.6 531.2 998.4 512 998.4z"  ></path></symbol><symbol id="icon-like-1" viewBox="0 0 1024 1024"><path d="M510.22354 915.870304l-352.119663-375.931998c-67.23838-72.341608-99.459223-146.19464-95.817276-219.767286 4.707209-95.256504 69.033259-153.085584 71.77879-155.4924 50.821479-43.370787 105.234763-65.225537 162.05077-65.225537 97.723695 0 176.116113 64.493873 214.052121 103.045911 38.048571-38.663578 116.102275-103.045911 214.274178-103.045911 56.816007 0 111.168915 21.85475 161.65782 64.886823 3.193739 2.744507 67.409273 60.573587 72.116481 155.831115 3.698229 73.518411-28.579919 147.425677-95.760994 219.652675L510.22354 915.870304 510.22354 915.870304 510.22354 915.870304zM174.801165 211.635071c0 0-47.5162 43.648103-50.482765 112.570845-2.411933 55.866379 24.205285 114.195855 79.229482 173.255972l306.676681 327.46617 306.730916-327.46617c54.913681-59.116399 81.641415-117.444852 79.118965-173.312254-2.970658-68.866461-50.428529-112.570845-50.987255-113.019053-38.331004-32.725332-79.123059-49.591465-120.698966-49.591465-104.730273 0-188.893114 105.514125-189.675944 106.577341l-25.218358 32.04995-24.316825-32.725332c-0.336668-0.444115-83.826174-105.8467-189.116195-105.8467C254.484995 161.595398 213.69294 178.460508 174.801165 211.635071L174.801165 211.635071 174.801165 211.635071 174.801165 211.635071zM174.801165 211.635071"  ></path></symbol><symbol id="icon-xiazai" viewBox="0 0 1024 1024"><path d="M450.56 820.48c4.48 4.48 10.88 7.04 16.64 8.96C471.04 831.36 475.52 832 480 832s8.96-0.64 12.8-2.56c6.4-1.28 12.16-3.84 16.64-8.96l313.6-313.6c14.08-14.08 14.08-35.84 0-49.92-14.08-14.08-35.84-14.08-49.92 0L512 718.08 512 160C512 142.08 497.92 128 480 128 462.08 128 448 142.08 448 160l0 558.08L186.88 456.96c-14.08-14.08-35.84-14.08-49.92 0-14.08 14.08-14.08 35.84 0 49.92L450.56 820.48zM864 896l-768 0C78.08 896 64 910.08 64 928 64 945.92 78.08 960 96 960l768 0c17.92 0 32-14.08 32-32C896 910.08 881.92 896 864 896z"  ></path></symbol><symbol id="icon-goumai" viewBox="0 0 1024 1024"><path d="M237.358431 284.464797l131.472334 375.310851-27.569916-19.554358L890.249275 640.22129c16.136515 0 29.212322 13.0799 29.212322 29.213345 0 16.129352-13.075807 29.205159-29.212322 29.205159L341.259826 698.639794c-12.409634 0-23.465434-7.836479-27.566846-19.549242L109.05016 94.8963l27.567869 19.553335L77.586564 114.449635c-16.129352 0-29.207206-13.074783-29.207206-29.212322 0-16.129352 13.077853-29.207206 29.207206-29.207206l59.032488 0c12.409634 0 23.466458 7.842619 27.566846 19.555381l52.728922 150.525272 710.724017 0c18.48705 0 32.326243 16.962324 28.612665 35.077913l-46.633087 227.389894c-2.547009 12.408611-12.796444 21.75549-25.382087 23.160489l-431.515944 48.065715c-16.036231 1.786693-30.482245-9.761318-32.266891-25.797549-1.783623-16.030092 9.764388-30.475082 25.798573-32.257681l410.798087-47.145763c0 0 20.75879-96.119151 35.926234-170.074513C893.311007 282.900162 362.038058 284.149619 237.358431 284.464797L237.358431 284.464797zM407.438061 818.372759c23.362081 0 42.36897 19.004843 42.36897 42.3659 0 23.360034-19.006889 42.364877-42.36897 42.364877-23.360034 0-42.363853-19.004843-42.363853-42.364877C365.073184 837.377602 384.078027 818.372759 407.438061 818.372759M407.438061 762.594385c-54.202483 0-98.142228 43.941791-98.142228 98.144274 0 54.207599 43.939745 98.143251 98.142228 98.143251s98.147344-43.936675 98.147344-98.143251C505.584382 806.536176 461.640544 762.594385 407.438061 762.594385L407.438061 762.594385zM816.372707 818.372759c23.357987 0 42.360783 19.004843 42.360783 42.3659 0 23.360034-19.002796 42.364877-42.360783 42.364877-23.360034 0-42.364877-19.004843-42.364877-42.364877C774.007831 837.377602 793.012673 818.372759 816.372707 818.372759M816.372707 762.594385c-54.206576 0-98.143251 43.941791-98.143251 98.144274 0 54.207599 43.937698 98.143251 98.143251 98.143251 54.200436 0 98.139158-43.936675 98.139158-98.143251C914.512888 806.536176 870.573143 762.594385 816.372707 762.594385L816.372707 762.594385zM816.372707 958.88191"  ></path></symbol><symbol id="icon-weibiaoti518" viewBox="0 0 1024 1024"><path d="M305.031716 195.566094c0-15.954367 10.718109-21.556968 23.818475-12.45159l456.459033 317.265854c13.100366 9.105379 13.100366 24.00574 0 33.111119l-456.459033 317.263807c-13.100366 9.105379-23.818475 3.502777-23.818475-12.45159L305.031716 195.566094z"  ></path></symbol><symbol id="icon-iconstop" viewBox="0 0 1024 1024"><path d="M319.618435 145.655358c-30.518061 0-55.258535 24.740474-55.258535 55.258535l0 622.170169c0 30.518061 24.740474 55.258535 55.258535 55.258535s55.258535-24.740474 55.258535-55.258535l0-622.170169C374.876969 170.395832 350.136495 145.655358 319.618435 145.655358z"  ></path><path d="M704.381565 145.655358c-30.518061 0-55.258535 24.740474-55.258535 55.258535l0 622.170169c0 30.518061 24.740474 55.258535 55.258535 55.258535s55.258535-24.740474 55.258535-55.258535l0-622.170169C759.6401 170.395832 734.899626 145.655358 704.381565 145.655358z"  ></path></symbol><symbol id="icon-gengduo" viewBox="0 0 1024 1024"><path d="M197.844997 512m-74.694189 0a72.993 72.993 0 1 0 149.388379 0 72.993 72.993 0 1 0-149.388379 0Z"  ></path><path d="M512 512m-74.694189 0a72.993 72.993 0 1 0 149.388379 0 72.993 72.993 0 1 0-149.388379 0Z"  ></path><path d="M826.155003 512m-74.694189 0a72.993 72.993 0 1 0 149.388379 0 72.993 72.993 0 1 0-149.388379 0Z"  ></path></symbol><symbol id="icon-xiaolaba" viewBox="0 0 1024 1024"><path d="M525.541411 131.503033l-230.494605 148.031475h-114.988917c-63.895239 0-115.679649 51.14996-115.679649 115.219161v230.898811c0 63.664995 51.150984 115.219161 115.679649 115.219161h114.988917l230.494605 147.915841c32.582069 14.128789 57.840336-0.980327 57.840336-33.04358V164.54559c0-32.120558-25.892717-46.825468-57.840336-33.042557z m194.223516 186.033997c-10.841929-11.649318-29.122271-12.283768-40.712237-1.384533-11.649318 10.899234-12.226462 29.122271-1.384533 40.770565 5.363148 5.76633 14.531971 18.511609 23.989367 37.772279 16.146749 32.870642 25.892717 71.449285 25.892717 115.507733 0 44.058448-9.745968 82.694397-25.892717 115.507734-9.457396 19.259646-18.626219 32.004925-23.989367 37.772278-10.899234 11.648294-10.264784 29.871331 1.384533 40.770566 11.648294 10.899234 29.871331 10.264784 40.770566-1.384533 9.054213-9.68764 21.509896-26.987654 33.620725-51.727105 19.895119-40.483017 31.774681-87.654362 31.774681-140.996245 0-53.341882-11.879562-100.514251-31.774681-140.996244-12.169157-24.62484-24.625864-41.983183-33.679054-51.612495z m176.806845-35.69599c-23.297612-39.444361-46.825468-66.778916-63.318094-81.483826-11.880585-10.609639-30.102598-9.572006-40.714284 2.36486-10.609639 11.936867-9.573029 30.101575 2.364861 40.712238 2.709715 2.421142 8.131191 7.842619 15.396665 16.261358 12.455683 14.416338 24.911366 31.601742 36.619012 51.439556 33.504068 56.860009 53.630455 123.349329 53.630455 199.066825s-20.126386 142.206816-53.68776 199.125153c-11.706623 19.836791-24.220634 37.022195-36.619012 51.438533-7.265474 8.41874-12.68695 13.840216-15.397689 16.261359-11.879562 10.610662-12.916171 28.833699-2.363837 40.714283 10.553357 11.879562 28.833699 12.916171 40.713261 2.363838 16.493649-14.70491 40.021505-41.98216 63.319117-81.483826 38.522362-65.336054 61.646012-141.745305 61.646012-228.41934 0.058328-86.614683-23.066345-163.023934-61.588707-228.361011z"  ></path></symbol><symbol id="icon-047caozuo_shangyishou" viewBox="0 0 1024 1024"><path d="M128 102.4V928c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32V102.4c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32z m646.028 41.395l-404.352 331.09c-27.383 22.42-27.435 58.886 0 81.35l404.352 331.09c27.382 22.42 49.676 12.003 49.676-23.366V167.16c0-35.646-22.24-45.83-49.676-23.365z m-40.546-49.518c69.12-56.597 154.222-16.897 154.222 72.883v696.8c0 89.481-85.14 129.447-154.222 72.883L329.13 605.753c-58.7-48.064-58.662-132.353 0-180.386l404.352-331.09z"  ></path></symbol><symbol id="icon-048caozuo_xiayishou" viewBox="0 0 1024 1024"><path d="M889.6 921.6V96c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32v825.6c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32z m-646.028-41.395l404.352-331.09c27.383-22.42 27.435-58.886 0-81.35l-404.352-331.09c-27.382-22.42-49.676-12.003-49.676 23.366V856.84c0 35.646 22.24 45.83 49.676 23.365z m40.546 49.518c-69.12 56.597-154.222 16.897-154.222-72.883v-696.8c0-89.481 85.14-129.447 154.222-72.883l404.352 331.09c58.7 48.064 58.662 132.353 0 180.386l-404.352 331.09z"  ></path></symbol><symbol id="icon-ziyuan" viewBox="0 0 1066 1024"><path d="M802.191355 1024a99.46576 99.46576 0 0 1-45.75425-11.438562L533.136474 895.191841l-222.803303 117.369597a99.46576 99.46576 0 0 1-142.733365-103.444391l42.770277-248.6644L29.839728 484.398252a99.46576 99.46576 0 0 1 54.208839-167.102477l248.6644-36.305003L447.59592 54.706168a99.46576 99.46576 0 0 1 176.054396 0l111.401651 225.787275 248.6644 36.305003a99.46576 99.46576 0 0 1 54.208839 167.599806l-180.530354 176.054395 42.770277 248.6644a99.46576 99.46576 0 0 1-96.481788 114.882953zM533.136474 72.610005a24.86644 24.86644 0 0 0-22.877125 14.422535L389.90578 329.728995A36.305002 36.305002 0 0 1 363.050024 348.13016l-268.557552 38.791647a25.861098 25.861098 0 0 0-14.422535 44.262263l193.958232 189.482273a36.305002 36.305002 0 0 1 10.443905 31.829043l-45.75425 267.065566a25.861098 25.861098 0 0 0 37.29966 27.353084l240.209811-126.321515a36.305002 36.305002 0 0 1 33.818358 0l240.209811 126.321515a25.861098 25.861098 0 0 0 37.29966-27.353084l-45.75425-267.065566a36.305002 36.305002 0 0 1 10.443905-31.829043l193.958232-189.482273a25.861098 25.861098 0 0 0-14.422535-44.262263L703.720253 348.13016a36.305002 36.305002 0 0 1-27.353084-19.893152l-119.856241-241.204468a24.86644 24.86644 0 0 0-23.374454-14.422535z"  ></path></symbol><symbol id="icon-suijibofang" viewBox="0 0 1024 1024"><path d="M844.8 665.6c-6.4-6.4-16-12.8-25.6-9.6-19.2 0-35.2 16-35.2 35.2 0 9.6 6.4 19.2 12.8 25.6l41.6 41.6c-44.8-6.4-86.4-22.4-121.6-51.2-3.2 0-3.2-3.2-6.4-6.4L332.8 304C268.8 233.6 192 195.2 99.2 195.2c-19.2 0-35.2 16-35.2 35.2s16 32 35.2 32c73.6 0 134.4 32 182.4 86.4l384 400 6.4 6.4c48 38.4 108.8 64 172.8 70.4l-48 44.8c-9.6 6.4-16 19.2-16 28.8 0 19.2 19.2 35.2 38.4 32 9.6 0 19.2-6.4 25.6-12.8l99.2-92.8c16-16 16-41.6 0-57.6l-99.2-102.4z m-3.2-556.8c-12.8-16-32-19.2-48-6.4-9.6 6.4-12.8 16-12.8 25.6 0 12.8 3.2 22.4 16 28.8l41.6 41.6c-73.6 9.6-140.8 38.4-192 89.6l-115.2 118.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 16 9.6 25.6 9.6s19.2-3.2 25.6-9.6l112-118.4c41.6-38.4 92.8-64 147.2-70.4l-44.8 44.8c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 32 35.2 9.6 0 19.2-3.2 28.8-9.6L950.4 256c12.8-12.8 12.8-35.2 0-48l-108.8-99.2m-438.4 448c-9.6 0-19.2 3.2-25.6 9.6l-118.4 121.6c-48 44.8-96 67.2-160 67.2H96c-19.2 0-35.2 16-35.2 35.2s16 32 35.2 32h3.2c83.2 0 147.2-32 211.2-86.4l121.6-124.8c6.4-6.4 9.6-12.8 9.6-22.4 0-9.6-3.2-16-9.6-22.4-9.6-6.4-19.2-9.6-28.8-9.6z"  ></path></symbol><symbol id="icon-xunhuanbofang" viewBox="0 0 1024 1024"><path d="M694.4 854.4H195.2l48 44.8c9.6 6.4 16 16 16 28.8-3.2 19.2-19.2 32-38.4 32-9.6 0-22.4-6.4-28.8-12.8l-108.8-96c-12.8-12.8-16-35.2 0-48L192 704c6.4-6.4 19.2-9.6 28.8-9.6 19.2 0 35.2 16 35.2 35.2 0 9.6-6.4 19.2-12.8 25.6l-41.6 38.4h496c112 0 198.4-89.6 198.4-198.4v-86.4c0-19.2 12.8-32 32-32s32 12.8 32 32v86.4c0 140.8-118.4 259.2-265.6 259.2zM329.6 169.6h496l-48-44.8c-9.6-6.4-16-16-16-28.8 3.2-19.2 19.2-32 38.4-32 9.6 0 22.4 6.4 28.8 12.8l108.8 96c12.8 12.8 16 35.2 0 48L832 320c-6.4 6.4-19.2 9.6-28.8 9.6-19.2 0-35.2-16-35.2-35.2 0-9.6 6.4-19.2 12.8-25.6l41.6-38.4H326.4C217.6 233.6 128 323.2 128 435.2v89.6c0 19.2-12.8 32-32 32s-32-12.8-32-32v-86.4C64 288 182.4 169.6 329.6 169.6z"  ></path></symbol><symbol id="icon-danquxunhuan" viewBox="0 0 1024 1024"><path d="M928 476.8c-19.2 0-32 12.8-32 32v86.4c0 108.8-86.4 198.4-198.4 198.4H201.6l41.6-38.4c6.4-6.4 12.8-16 12.8-25.6 0-19.2-16-35.2-35.2-35.2-9.6 0-22.4 3.2-28.8 9.6l-108.8 99.2c-16 12.8-12.8 35.2 0 48l108.8 96c6.4 6.4 19.2 12.8 28.8 12.8 19.2 0 35.2-12.8 38.4-32 0-12.8-6.4-22.4-16-28.8l-48-44.8h499.2c147.2 0 265.6-118.4 265.6-259.2v-86.4c0-19.2-12.8-32-32-32zM96 556.8c19.2 0 32-12.8 32-32v-89.6c0-112 89.6-201.6 198.4-204.8h496l-41.6 38.4c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 35.2 35.2 9.6 0 22.4-3.2 28.8-9.6l105.6-99.2c16-12.8 12.8-35.2 0-48l-108.8-96c-6.4-6.4-19.2-12.8-28.8-12.8-19.2 0-35.2 12.8-38.4 32 0 12.8 6.4 22.4 16 28.8l48 44.8H329.6C182.4 169.6 64 288 64 438.4v86.4c0 19.2 12.8 32 32 32z"  ></path><path d="M544 672V352h-48L416 409.6l16 41.6 60.8-41.6V672z"  ></path></symbol><symbol id="icon-xiazaiwancheng" viewBox="0 0 1024 1024"><path d="M512 67.2c-246.4 0-448 201.6-448 448s201.6 448 448 448 448-201.6 448-448-201.6-448-448-448z m230.4 339.2l-281.6 262.4-9.6 6.4c-6.4 3.2-9.6 3.2-12.8 3.2-3.2 0-9.6-3.2-12.8-3.2l-9.6-6.4-134.4-134.4c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l112 112 259.2-240c12.8-9.6 32-9.6 44.8 3.2 12.8 12.8 12.8 32 0 41.6z"  ></path></symbol><symbol id="icon-pinglun" viewBox="0 0 1024 1024"><path d="M716.518 392.185c-28.037 0-50.743 24.206-50.743 54.131 0 29.878 22.706 54.076 50.743 54.076 28.035 0 50.69-24.198 50.69-54.076 0.051-29.924-22.655-54.131-50.69-54.131zM513.602 392.185c-28.009 0-50.688 24.206-50.688 54.131 0 29.878 22.711 54.076 50.688 54.076 27.977 0 50.686-24.198 50.686-54.076 0-29.924-22.65-54.131-50.686-54.131z"  ></path><path d="M817.95 93.893H209.256c-70.911 0-145.378 36.701-145.378 149.387v388.393c0 77.342 37.231 164.357 147.643 146.566h142.984c36.225 39.165 130.679 139.679 130.679 139.679 7.408 7.934 17.737 12.517 28.413 12.517 10.649 0 21.005-4.583 29.198-13.437 0.812-0.837 73.86-86.027 125.656-138.784h147.147c94.443 8.808 144.524-69.206 144.524-146.541V213.396c0.029-74.993-39.733-124.353-142.172-119.503z m82.422 149.388v388.393c0 46.304-43.817 90.735-84.688 90.735H646.56l-7.922 7.855c-42.552 42.497-102.812 108.363-126.305 135.403-28.71-30.495-104.78-110.635-126.49-134.469l-8.002-8.736H211.526c-52.679 0-87.897-44.485-87.897-90.789V243.281c0-44.182 44.592-93.606 85.628-93.606h608.745c43.464-4.853 89.648 27.509 82.37 93.606z"  ></path><path d="M310.687 392.185c-28.005 0-50.688 24.206-50.688 54.131 0 29.878 22.739 54.076 50.688 54.076 27.984 0 50.718-24.198 50.718-54.076 0-29.924-22.683-54.131-50.718-54.131z"  ></path></symbol><symbol id="icon-guangdie" viewBox="0 0 1024 1024"><path d="M703.564889 37.090342A511.683556 511.683556 0 1 0 986.909658 703.877975 511.683556 511.683556 0 0 0 703.564889 37.090342zM345.3864 927.739531A447.723111 447.723111 0 1 1 927.426445 678.6136 447.723111 447.723111 0 0 1 345.3864 927.739531z"  ></path><path d="M535.668722 452.833231a63.960444 63.960444 0 1 0 35.498047 83.148578 63.960444 63.960444 0 0 0-35.498047-83.148578z m-35.817849 89.22482a31.980222 31.980222 0 1 1 41.574289-17.908924 31.980222 31.980222 0 0 1-41.574289 17.589122z"  ></path><path d="M582.999451 333.866804a191.881333 191.881333 0 1 0 106.813943 249.445734 191.881333 191.881333 0 0 0-106.813943-249.445734z m-118.966426 296.776463a127.920889 127.920889 0 1 1 166.297155-71.315896 127.920889 127.920889 0 0 1-165.977353 71.635698zM749.296607 607.937309a15.990111 15.990111 0 0 0-29.741607-11.832682 223.861556 223.861556 0 0 1-119.606031 122.484251 15.990111 15.990111 0 0 0 12.472287 29.421804A255.841778 255.841778 0 0 0 749.296607 607.937309zM859.308571 633.841289a15.990111 15.990111 0 0 0-20.787144 8.954462 351.782445 351.782445 0 0 1-188.043707 191.881333 15.990111 15.990111 0 0 0 12.472287 29.421805 383.762667 383.762667 0 0 0 204.033818-209.470456 15.990111 15.990111 0 0 0-7.675254-20.787144z"  ></path><path d="M799.505556 610.175924a15.990111 15.990111 0 0 0-20.787145 8.954463 287.822 287.822 0 0 1-153.824869 157.662495 15.990111 15.990111 0 0 0 12.472287 29.421805 319.802222 319.802222 0 0 0 170.134782-174.612014 15.990111 15.990111 0 0 0-7.995055-21.426749zM432.052802 285.256866a15.990111 15.990111 0 0 0-21.106946-8.314857A255.841778 255.841778 0 0 0 274.390307 416.055975a15.990111 15.990111 0 0 0 29.741606 11.832683 223.861556 223.861556 0 0 1 119.606032-122.484252 15.990111 15.990111 0 0 0 8.314857-20.14754zM381.843853 167.889451a15.990111 15.990111 0 0 0-21.106946-7.675253 383.762667 383.762667 0 0 0-204.033818 209.470455 15.990111 15.990111 0 1 0 29.741607 11.832682 351.782445 351.782445 0 0 1 188.043706-191.881333 15.990111 15.990111 0 0 0 7.355451-21.746551z"  ></path><path d="M398.473569 247.520204a15.990111 15.990111 0 1 0-12.472287-29.421804 319.802222 319.802222 0 0 0-170.134782 174.612013 15.990111 15.990111 0 1 0 29.741607 11.832682 287.822 287.822 0 0 1 153.824869-157.662495z"  ></path></symbol><symbol id="icon-shoucang" viewBox="0 0 1024 1024"><path d="M992.12066 500.081091c30.237461-30.237461 39.541296-76.756633 25.585544-116.297928-13.955751-41.867254-46.519171-72.104715-88.386426-79.082592l-186.076684-32.563419c-20.933627-4.651917-37.215337-16.28171-46.519172-34.889379l-88.386425-172.120933C592.055787 23.259586 554.84045 0 512.973196 0c-41.867254 0-79.082591 23.259586-100.016218 62.800881L326.896511 234.921815c-9.303834 18.607668-27.911503 32.56342-46.519171 34.889378L94.300655 302.374613c-41.867254 6.977876-74.430674 37.215337-88.386425 79.082591-13.955751 41.867254-2.325959 86.060467 25.585544 116.297928l130.253679 139.557514c13.955751 13.955751 20.933627 37.215337 18.607669 58.148964l-27.911503 193.05456C145.471743 930.383424 164.079412 974.576637 196.642832 1000.162181c18.607668 13.955751 41.867254 23.259586 65.12684 23.259586 16.28171 0 34.889378-4.651917 48.845129-11.629793l169.794975-86.060467c18.607668-9.303834 39.541296-9.303834 58.148964 0l169.794975 86.060467c37.215337 18.607668 81.40855 16.28171 116.297928-9.303834 32.56342-25.585544 51.171088-67.452798 44.193213-111.646011L843.259312 697.787568c-2.325959-20.933627 4.651917-41.867254 18.607668-58.148964l130.25368-139.557513z"  ></path></symbol><symbol id="icon-gerenxinxi" viewBox="0 0 1024 1024"><path d="M694.83 592.92l-2.41-1.38c0.79 0.46 1.58 0.94 2.41 1.38zM731.26 521.59c1.28 0.72 2.56 1.44 3.82 2.17a40.88 40.88 0 0 0-3.82-2.17z"  ></path><path d="M694.83 592.92a40 40 0 0 0 40.25-69.16c-1.26-0.73-2.54-1.45-3.82-2.17a444.83 444.83 0 0 0-68.19-31.11A239.54 239.54 0 0 0 752 304c0-132.55-107.45-240-240-240S272 171.45 272 304a239.49 239.49 0 0 0 88.91 186.46C187.83 552.46 64 717.93 64 912.34v7.58c0 1.06 0 2.1 0.13 3.13a40 40 0 0 0 80-2.85v-0.28c0-0.71 0-1.41-0.06-2.11v-5.48c0-203.24 164.76-368 368-368a366.28 366.28 0 0 1 180.42 47.2zM512 464a160 160 0 1 1 160-160 160 160 0 0 1-160 160zM923.33 880H644.67c-20.25 0-36.67 17.91-36.67 40s16.42 40 36.67 40h278.66c20.25 0 36.67-17.91 36.67-40s-16.42-40-36.67-40zM608 808.5c0 22.09 16.42 40 36.67 40h214.66c20.25 0 36.67-17.91 36.67-40s-16.42-40-36.67-40H644.67c-20.25 0-36.67 17.91-36.67 40z"  ></path><path d="M608 680c0 22.09 16.42 40 36.67 40h150.66c20.25 0 36.67-17.91 36.67-40s-16.42-40-36.67-40H644.67c-20.25 0-36.67 17.91-36.67 40z"  ></path></symbol><symbol id="icon-fenxiang" viewBox="0 0 1024 1024"><path d="M837.818182 116.363636c38.493091 0 69.818182 31.325091 69.818182 69.818182s-31.325091 69.818182-69.818182 69.818182-69.818182-31.325091-69.818182-69.818182 31.325091-69.818182 69.818182-69.818182M232.727273 628.363636c-64.162909 0-116.363636-52.200727-116.363637-116.363636s52.200727-116.363636 116.363637-116.363636 116.363636 52.200727 116.363636 116.363636-52.200727 116.363636-116.363636 116.363636m605.090909 139.636364c38.493091 0 69.818182 31.325091 69.818182 69.818182s-31.325091 69.818182-69.818182 69.818182-69.818182-31.325091-69.818182-69.818182 31.325091-69.818182 69.818182-69.818182m0-442.181818a139.636364 139.636364 0 0 0 0-279.272727 139.636364 139.636364 0 0 0-139.636364 139.636363c0 13.754182 2.071273 26.996364 5.771637 39.540364l-330.123637 165.050182A185.483636 185.483636 0 0 0 232.727273 325.818182a186.181818 186.181818 0 0 0 0 372.363636c56.087273 0 106.24-24.901818 140.381091-64.139636l328.378181 173.847273A139.240727 139.240727 0 0 0 698.181818 837.818182a139.636364 139.636364 0 0 0 279.272727 0 139.636364 139.636364 0 0 0-139.636363-139.636364 139.124364 139.124364 0 0 0-104.680727 47.453091l-324.887273-172.008727A185.716364 185.716364 0 0 0 418.909091 512a185.716364 185.716364 0 0 0-10.263273-60.555636l331.357091-165.678546A139.170909 139.170909 0 0 0 837.818182 325.818182"  ></path></symbol><symbol id="icon-gengduo2" viewBox="0 0 1024 1024"><path d="M512 298.6496a85.3504 85.3504 0 1 0 0-170.6496 85.3504 85.3504 0 0 0 0 170.6496z"  ></path><path d="M512 512m-85.3504 0a85.3504 85.3504 0 1 0 170.7008 0 85.3504 85.3504 0 1 0-170.7008 0Z"  ></path><path d="M512 896a85.3504 85.3504 0 1 0 0-170.7008 85.3504 85.3504 0 0 0 0 170.7008z"  ></path></symbol><symbol id="icon-yinleliebiao" viewBox="0 0 1024 1024"><path d="M838.99432863 162.40722482l-186.33127437 38.02037807c-13.51137403 2.82796201-23.25213204 14.61113702-23.25213205 28.43672906v412.09690783c0 23.09502305-15.86800901 43.20497508-38.49170507 48.54668107L534.04575904 702.86218588c-34.24976206 8.01255901-61.27251012 37.39194207-61.42961915 72.58435814-0.31421799 48.07535409 44.30473808 83.58198817 90.96611119 72.74146715l29.85071007-6.91279599c48.70379009-11.31184801 83.26777017-53.73127811 85.62440516-103.22061322h0.47132701v-372.34833075c0-10.84052103 7.69834101-20.26706103 18.38175304-22.46658704l150.35331329-30.63625506c10.84052103-2.19952601 18.69597103-11.78317502 18.69597104-22.93791404v-104.47748521c0.15710901-14.76824603-13.35426503-25.76587604-27.96540206-22.78080504zM166.72491631 255.88708001h375.96183773v33.14999904H166.72491631zM166.72491631 387.38731327h375.96183773v33.14999905H166.72491631z"  ></path><path d="M166.72491631 518.88754654h375.96183773V552.03754558H166.72491631zM166.72491631 650.3877798h202.98482839v33.14999904H166.72491631z"  ></path></symbol><symbol id="icon-weibiaoti--" viewBox="0 0 1024 1024"><path d="M420.4 913.3l198.9-198.9 5.2-5.2c1.4-1.4 2.6-2.8 3.8-4.3 76.1-85.7 73.1-217-9-299.1-7-7-14.4-13.4-22.1-19.3l-50.1 64.7c4.4 3.5 7.2 5.4 14.3 12.5 52.9 52.9 53.2 138.4 1 191.7L364.1 853.7l-0.1-0.1c-1.1 1.2-2.3 2.4-3.5 3.6-53.2 53.2-139.6 53.2-192.8 0-53.2-53.2-53.2-139.6 0-192.8 1.5-1.5 3-2.9 4.6-4.3l-0.1-0.1 96-96-57.9-57.9-98.5 98.5-0.7 0.7-1.2 1.2c-85.2 85.2-85.2 223.4 0 308.6 85.2 85.2 223.4 85.2 308.6 0 0.4-0.4 0.8-0.8 1.2-1.3 0.2-0.1 0.5-0.3 0.7-0.5z"  ></path><path d="M480.8 578.3c-4-3.3-11.3-9.1-18.2-15.9-53.2-53.2-53.2-139.6 0-192.8 1.5-1.5 3-2.9 4.6-4.3l-0.1-0.1L665.3 167c53.4-51.4 138.3-50.8 190.9 1.8 52.9 52.9 53.2 138.4 1 191.7L757.8 460l57.9 57.9 98.5-98.5 5.2-5.2c1.4-1.4 2.6-2.8 3.8-4.3 76.1-85.7 73.1-217-9-299.1-82.1-82.1-213.3-85.1-299.1-9-1.5 1.1-3 2.4-4.3 3.8L406.6 309.8l-0.7 0.7-1.2 1.2c-85.2 85.2-85.2 223.4 0 308.6 6.7 6.7 13.8 12.9 21.1 18.6l55-60.6z"  ></path><path d="M197.620454 539.083086a40.898773 40.898773 0 1 0 81.546398-6.404953 40.898773 40.898773 0 1 0-81.546398 6.404953Z"  ></path><path d="M532.111847 422.48802a40.898773 40.898773 0 1 0 81.546399-6.404952 40.898773 40.898773 0 1 0-81.546399 6.404952Z"  ></path><path d="M411.610657 610.987133a40.898773 40.898773 0 1 0 81.546399-6.404953 40.898773 40.898773 0 1 0-81.546399 6.404953Z"  ></path><path d="M746.007396 492.188238a40.898773 40.898773 0 1 0 81.546398-6.404952 40.898773 40.898773 0 1 0-81.546398 6.404952Z"  ></path></symbol><symbol id="icon-shunxubofang" viewBox="0 0 1024 1024"><path d="M489.498 189.173H847c61.856 0 112 50.144 112 112V781c0 61.856-50.144 112-112 112H224c-61.856 0-112-50.144-112-112V301.914c0-61.856 50.144-112 112-112h29.75c22.091 0 40 17.908 40 40 0 22.091-17.909 40-40 40H224c-17.673 0-32 14.327-32 32V781c0 17.673 14.327 32 32 32h623c17.673 0 32-14.327 32-32V301.173c0-17.673-14.327-32-32-32H387.562c-36.364 0-53.863-44.595-27.203-69.326L480.203 88.675c16.196-15.024 41.504-14.074 56.528 2.122 15.024 16.196 14.075 41.504-2.121 56.528l-45.112 41.848zM472 406c0-22.091 17.909-40 40-40s40 17.909 40 40v270c0 22.091-17.909 40-40 40s-40-17.909-40-40V406z"  ></path></symbol><symbol id="icon-shanchu" viewBox="0 0 1024 1024"><path d="M519.620465 0c-103.924093 0-188.511256 82.467721-192.083349 185.820279H85.015814A48.91386 48.91386 0 0 0 36.101953 234.686512a48.91386 48.91386 0 0 0 48.913861 48.866232h54.010046V831.345116c0 102.852465 69.822512 186.844279 155.909954 186.844279h439.200744c86.087442 0 155.909953-83.491721 155.909954-186.844279V284.100465h48.91386a48.91386 48.91386 0 0 0 48.913861-48.890046 48.91386 48.91386 0 0 0-48.913861-48.866233h-227.756651A191.559442 191.559442 0 0 0 519.620465 0z m-107.234232 177.080558c3.548279-49.771163 46.627721-88.540279 99.851907-88.540279 53.224186 0 96.327442 38.745302 99.351813 88.540279h-199.20372z m-111.997024 752.044651c-30.981953 0-65.083535-39.15014-65.083535-95.041488V287.744h575.488v546.839814c0 55.915163-34.077767 95.041488-65.059721 95.041488H300.389209v-0.500093z"  ></path><path d="M368.116093 796.814884c24.361674 0 44.27014-21.670698 44.27014-48.818605v-278.623256c0-27.147907-19.908465-48.818605-44.27014-48.818604-24.33786 0-44.27014 21.670698-44.27014 48.818604v278.623256c0 27.147907 19.360744 48.818605 44.293954 48.818605z m154.933581 0c24.361674 0 44.293953-21.670698 44.293954-48.818605v-278.623256c0-27.147907-19.932279-48.818605-44.293954-48.818604-24.33786 0-44.27014 21.670698-44.270139 48.818604v278.623256c0 27.147907 19.932279 48.818605 44.293953 48.818605z m132.810419 0c24.33786 0 44.27014-21.670698 44.27014-48.818605v-278.623256c0-27.147907-19.932279-48.818605-44.27014-48.818604s-44.27014 21.670698-44.27014 48.818604v278.623256c0 27.147907 19.360744 48.818605 44.27014 48.818605z"  ></path></symbol><symbol id="icon-x" viewBox="0 0 1024 1024"><path d="M256 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l512-512c17.066667-17.066667 42.666667-17.066667 59.733334 0s17.066667 42.666667 0 59.733334l-512 512c-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"  ></path><path d="M768 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8l-512-512c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733334 0l512 512c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"  ></path></symbol><symbol id="icon-icon-test" viewBox="0 0 1024 1024"><path d="M745.376 662.624L512 429.248l-233.376 233.376-45.248-45.248L512 338.752l278.624 278.624z"  ></path></symbol><symbol id="icon-icon-test1" viewBox="0 0 1024 1024"><path d="M589.088 790.624L310.464 512l278.624-278.624 45.248 45.248L400.96 512l233.376 233.376z"  ></path></symbol><symbol id="icon-icon-test2" viewBox="0 0 1024 1024"><path d="M512 685.248l-278.624-278.624 45.248-45.248L512 594.752l233.376-233.376 45.248 45.248z"  ></path></symbol><symbol id="icon-icon-test3" viewBox="0 0 1024 1024"><path d="M434.944 790.624l-45.248-45.248L623.04 512l-233.376-233.376 45.248-45.248L713.568 512z"  ></path></symbol><symbol id="icon-gengduo1" viewBox="0 0 1024 1024"><path d="M284.444444 568.888889c-31.288889 0-56.888889-25.6-56.888888-56.888889s25.6-56.888889 56.888888-56.888889 56.888889 25.6 56.888889 56.888889-25.6 56.888889-56.888889 56.888889z m227.555556 0c-31.288889 0-56.888889-25.6-56.888889-56.888889s25.6-56.888889 56.888889-56.888889 56.888889 25.6 56.888889 56.888889-25.6 56.888889-56.888889 56.888889z m227.555556 0c-31.288889 0-56.888889-25.6-56.888889-56.888889s25.6-56.888889 56.888889-56.888889 56.888889 25.6 56.888888 56.888889-25.6 56.888889-56.888888 56.888889z"  ></path><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 967.111111C261.688889 967.111111 56.888889 762.311111 56.888889 512S261.688889 56.888889 512 56.888889s455.111111 204.8 455.111111 455.111111-204.8 455.111111-455.111111 455.111111z"  ></path></symbol></svg>';if((a=document.getElementsByTagName("script"))[a.length-1].getAttribute("data-injectcss")&&!c.__iconfont__svg__cssinject__){c.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(a){console&&console.log(a)}}!function(a){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(a,0);else{document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c,!1),a()},!1)}else document.attachEvent&&(l=a,o=c.document,i=!1,(h=function(){try{o.documentElement.doScroll("left")}catch(a){return void setTimeout(h,50)}t()})(),o.onreadystatechange=function(){"complete"==o.readyState&&(o.onreadystatechange=null,t())});function t(){i||(i=!0,l())}var l,o,i,h}(function(){var c,a;(c=document.createElement("div")).innerHTML=t,t=null,(a=c.getElementsByTagName("svg")[0])&&(a.setAttribute("aria-hidden","true"),a.style.position="absolute",a.style.width=0,a.style.height=0,a.style.overflow="hidden",function(c,a){a.firstChild?function(c,a){a.parentNode.insertBefore(c,a)}(c,a.firstChild):a.appendChild(c)}(a,document.body))})}(window);
},{}],"vmUo":[function(require,module,exports) {
"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function n(e){if(t(this,n),!e)throw new Error("需要传递需要绑定的DOM元素");var o,i,r,c="string"==typeof e?document.querySelector(e):e,u={swipLeft:[],swipRight:[]};c.ontouchstart=function(t){o=t.changedTouches[0].pageX},c.ontouchmove=function(t){r&&clearInterval(r),r=setTimeout(function(){(i=t.changedTouches[0].pageX)-o>50?u.swipRight.forEach(function(t){return t.bind(c)()}):o-i>50&&u.swipLeft.forEach(function(t){return t.bind(c)()})},100)},this.on=function(t,n){u[t]&&u[t].push(n)},this.off=function(t,n){var e=u[t].indexOf(n);-1!==e&&u[t].splice(e,1)}},e=n;exports.default=e;
},{}],"aR/y":[function(require,module,exports) {
"use strict";require("./iconfont.js");var t=e(require("./swiper.js"));function e(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}var s=function(){function e(t){var n=this;i(this,e),this.root="string"==typeof t?document.querySelector(t):t,this.$=function(t){return n.root.querySelector(t)},this.$$=function(t){return n.root.querySelectorAll(t)},this.songList=[],this.currentIndex=0,this.audio=new Audio,this.lyricsArr=[],this.lyricIndex=-1,this.start(),this.bind()}return r(e,[{key:"start",value:function(){var t=this;fetch("https://chenning02.github.io/Document/song/mini-music/music_list.json").then(function(t){return t.json()}).then(function(e){t.songList=e,t.audio.src=t.songList[t.currentIndex].url,t.renderSong()})}},{key:"bind",value:function(){var e=this,i=this,n=this.$(".songBottom > .actions"),r=n.querySelector("svg:nth-child(3)");n.querySelector("svg:nth-child(3)").onclick=function(){this.classList.contains("open")?(i.audio.play(),this.classList.remove("open"),this.classList.add("shut"),this.querySelector("use").setAttribute("xlink:href","#icon-iconstop")):this.classList.contains("shut")&&(i.audio.pause(),this.classList.remove("shut"),this.classList.add("open"),this.querySelector("use").setAttribute("xlink:href","#icon-weibiaoti518"))},n.querySelector("svg:nth-child(2)").onclick=function(){e.currentIndex=(e.songList.length+e.currentIndex-1)%e.songList.length,e.audio.src=e.songList[e.currentIndex].url,r.classList.remove("open"),r.classList.add("shut"),r.querySelector("use").setAttribute("xlink:href","#icon-iconstop"),e.renderSong(),e.audio.play()},n.querySelector("svg:nth-child(4)").onclick=function(){e.currentIndex=(e.currentIndex+1)%e.songList.length,e.audio.src=e.songList[e.currentIndex].url,r.classList.remove("open"),r.classList.add("shut"),r.querySelector("use").setAttribute("xlink:href","#icon-iconstop"),e.renderSong(),e.audio.play()},this.audio.ontimeupdate=function(){i.locateLyric(),i.setProgerssBar()};var s=this.$(".songMain"),c=new t.default(s);c.on("swipLeft",function(){this.classList.add("active")}),c.on("swipRight",function(){this.classList.remove("active")})}},{key:"renderSong",value:function(){var t=this,e=this.songList[this.currentIndex];this.$(".songTop > h2").innerText=e.title,this.$(".songTop > p").innerText=e.author,this.audio.src=e.url,this.audio.onloadedmetadata=function(){return t.$(".time-end").innerText=t.formateTime(t.audio.duration)},this.loadLyrics()}},{key:"loadLyrics",value:function(){var t=this;fetch(this.songList[this.currentIndex].lyric).then(function(t){return t.json()}).then(function(e){t.setLyrics(e.lrc.lyric),window.lyrics=e.lrc.lyric})}},{key:"locateLyric",value:function(){if(1e3*this.audio.currentTime>this.lyricsArr[this.lyricIndex+1][0]&&this.lyricIndex<this.lyricsArr.length-1){this.lyricIndex++;var t=this.$('[data-time="'+this.lyricsArr[this.lyricIndex][0]+'"]');t&&this.setLineToCenter(t),this.$$(".panel-effect .mini-lyric p")[0].innerText=this.lyricsArr[this.lyricIndex][1],this.$$(".panel-effect .mini-lyric p")[1].innerText=this.lyricsArr[this.lyricIndex+1]?this.lyricsArr[this.lyricIndex+1][1]:""}}},{key:"setLyrics",value:function(t){this.lyricIndex=0;var e=document.createDocumentFragment(),i=[];this.lyricsArr=i,t.split(/\n/).filter(function(t){return t.match(/\[.+?\]/)}).forEach(function(t){var e=t.replace(/\[.+?\]/g,"");t.match(/\[.+?\]/g).forEach(function(t){t=t.replace(/[\[\]]/g,"");var n=60*parseInt(t.slice(0,2))*1e3+1e3*parseInt(t.slice(3,5))+parseInt(t.slice(6));i.push([n,e])})}),i.filter(function(t){return""!==t[1].trim()}).sort(function(t,e){return t[0]>e[0]?1:-1}).forEach(function(t){var i=document.createElement("p");i.setAttribute("data-time",t[0]),i.innerText=t[1],e.appendChild(i)}),this.$(".panel-lyrics .container").innerHTML="",this.$(".panel-lyrics .container").appendChild(e)}},{key:"setLineToCenter",value:function(t){var e=t.offsetTop-this.$(".panel-lyrics").offsetHeight/2;e=e>0?e:0,this.$(".panel-lyrics > .container").style.transform="translateY(-".concat(e,"px)"),this.$$(".panel-lyrics > .container p").forEach(function(t){return t.classList.remove("current")}),t.classList.add("current")}},{key:"setProgerssBar",value:function(){var t=100*this.audio.currentTime/this.audio.duration+"%";this.$(".bar-area .bar .progress").style.width=t,this.$(".time-start").innerText=this.formateTime(this.audio.currentTime)}},{key:"formateTime",value:function(t){var e=parseInt(t/60);e=e>=10?""+e:"0"+e;var i=parseInt(t%60);return e+":"+(i=i>=10?""+i:"0"+i)}}]),e}();new s("#player");
},{"./iconfont.js":"5IsC","./swiper.js":"vmUo"}]},{},["aR/y"], null)
//# sourceMappingURL=main.a89a46b7.js.map