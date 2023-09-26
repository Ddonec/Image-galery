const _0x5f53ba = _0x4924;
function _0x4924(_0x23c199, _0x454b67) {
  const _0x16f575 = _0x16f5();
  return (
    (_0x4924 = function (_0x4924bc, _0x13629d) {
      _0x4924bc = _0x4924bc - 0xae;
      let _0x2f3aa9 = _0x16f575[_0x4924bc];
      return _0x2f3aa9;
    }),
    _0x4924(_0x23c199, _0x454b67)
  );
}
(function (_0x3e5ffc, _0x544b72) {
  const _0x543813 = _0x4924,
    _0x5be801 = _0x3e5ffc();
  while (!![]) {
    try {
      const _0x7cb1bc =
        -parseInt(_0x543813(0xc0)) / 0x1 +
        (-parseInt(_0x543813(0xae)) / 0x2) *
          (-parseInt(_0x543813(0xd8)) / 0x3) +
        (parseInt(_0x543813(0xc1)) / 0x4) * (parseInt(_0x543813(0xbf)) / 0x5) +
        (-parseInt(_0x543813(0xaf)) / 0x6) * (parseInt(_0x543813(0xbe)) / 0x7) +
        (parseInt(_0x543813(0xd3)) / 0x8) * (parseInt(_0x543813(0xce)) / 0x9) +
        parseInt(_0x543813(0xbd)) / 0xa +
        parseInt(_0x543813(0xcb)) / 0xb;
      if (_0x7cb1bc === _0x544b72) break;
      else _0x5be801["push"](_0x5be801["shift"]());
    } catch (_0x26ec99) {
      _0x5be801["push"](_0x5be801["shift"]());
    }
  }
})(_0x16f5, 0xb5551),
  (dayNightTheme = () => {
    const _0x4de431 = _0x4924;
    let _0x3c0322 = new Date(),
      _0x4e553b = _0x3c0322[_0x4de431(0xb3)]();
    _0x4e553b >= 0x7 && _0x4e553b < 0x13
      ? ((document[_0x4de431(0xbb)][_0x4de431(0xc6)][_0x4de431(0xc9)] =
          _0x4de431(0xc3)),
        (document[_0x4de431(0xbb)][_0x4de431(0xc6)][_0x4de431(0xd6)] =
          _0x4de431(0xd5)))
      : ((document[_0x4de431(0xbb)][_0x4de431(0xc6)]["backgroundColor"] =
          _0x4de431(0xd5)),
        (document[_0x4de431(0xbb)]["style"][_0x4de431(0xd6)] =
          _0x4de431(0xc3)));
  }),
  window[_0x5f53ba(0xd0)](_0x5f53ba(0xcd), dayNightTheme),
  window[_0x5f53ba(0xd0)]("load", () => {
    apiRequest();
  }),
  document[_0x5f53ba(0xd1)]("#input")["addEventListener"](
    _0x5f53ba(0xb0),
    (_0x46c57a) => {
      const _0x4517b0 = _0x5f53ba;
      if (_0x46c57a[_0x4517b0(0xd4)] == "Enter") apiRequest();
    }
  ),
  document["querySelector"](_0x5f53ba(0xb7))[_0x5f53ba(0xd0)]("click", () => {
    apiRequest();
  }),
  (apiRequest = () => {
    const _0x1e954d = _0x5f53ba;
    document[_0x1e954d(0xd1)](_0x1e954d(0xd9))["textContent"] = "";
    let _0x47163a;
    input["value"]
      ? (_0x47163a = _0x1e954d(0xbc) + input["value"] + _0x1e954d(0xb8))
      : (_0x47163a = _0x1e954d(0xb6)),
      fetch(_0x47163a)
        [_0x1e954d(0xb1)]((_0x8c5883) => {
          const _0x371d12 = _0x1e954d;
          if (!_0x8c5883["ok"]) throw Error(_0x8c5883[_0x371d12(0xb9)]);
          return _0x8c5883[_0x371d12(0xc8)]();
        })
        [_0x1e954d(0xb1)]((_0x263d77) => {
          loadImages(_0x263d77);
        })
        [_0x1e954d(0xb5)]((_0x48ae70) => console[_0x1e954d(0xca)](_0x48ae70));
  }),
  (loadImages = (_0x576fa4) => {
    const _0x465ec2 = _0x5f53ba;
    for (
      let _0x1433fd = 0x0;
      _0x1433fd < _0x576fa4[_0x465ec2(0xc5)]["length"];
      _0x1433fd++
    ) {
      let _0x1def19 = document[_0x465ec2(0xdb)](_0x465ec2(0xcc));
      (_0x1def19[_0x465ec2(0xba)] = _0x465ec2(0xd7)),
        (_0x1def19[_0x465ec2(0xc6)][_0x465ec2(0xc2)] =
          _0x465ec2(0xda) +
          _0x576fa4[_0x465ec2(0xc5)][_0x1433fd][_0x465ec2(0xd2)][
            _0x465ec2(0xb2)
          ] +
          _0x465ec2(0xc7) +
          ")"),
        _0x1def19[_0x465ec2(0xd0)]("dblclick", function () {
          const _0x124828 = _0x465ec2;
          window["open"](
            _0x576fa4[_0x124828(0xc5)][_0x1433fd][_0x124828(0xc4)][
              _0x124828(0xb4)
            ],
            _0x124828(0xcf)
          );
        }),
        document["querySelector"](_0x465ec2(0xd9))["appendChild"](_0x1def19);
    }
  });
function _0x16f5() {
  const _0x94b4f1 = [
    "download",
    "catch",
    "https://api.unsplash.com/search/photos?query=\x22spring\x22&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo",
    "#search",
    "&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo",
    "statusText",
    "className",
    "body",
    "https://api.unsplash.com/search/photos?query=",
    "14650770wjSxAC",
    "6624891ywfHSm",
    "25tTlpBo",
    "1473727nIZAOK",
    "444912NNMltr",
    "backgroundImage",
    "white",
    "links",
    "results",
    "style",
    "&w=1366&h=768",
    "json",
    "backgroundColor",
    "log",
    "2471502YeMFlJ",
    "div",
    "load",
    "1211337BkdcUR",
    "_blank",
    "addEventListener",
    "querySelector",
    "urls",
    "24pMBRmK",
    "key",
    "black",
    "color",
    "img",
    "3saHQQE",
    "#grid",
    "url(",
    "createElement",
    "1026398ZdqzZG",
    "6MAFAZH",
    "keydown",
    "then",
    "raw",
    "getHours",
  ];
  _0x16f5 = function () {
    return _0x94b4f1;
  };
  return _0x16f5();
}
