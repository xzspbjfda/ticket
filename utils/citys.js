const cityData = [
  {
    "provinceCode": "110000", //省份代码
    "provinceName": "北京市", //省份名称
    "provinceType": 1, //省份类型：直辖市 = 1, 省 = 2, 自治区 = 3
    "cities": [
      {
        "cityCode": "110100", //城市代码
        "cityName": "市辖区", //城市名称
        "cityType": 1, //城市类型：市辖区 = 1, 直辖市 = 2, 地级市 = 3, 地区 = 4, 自治州 = 5, 盟 = 6
        "isCapital": true, //是否是省会
        "counties": [
          {
            "countyCode": "110101", //县代码
            "countyName": "东城区", //县名称
            "isCity": false //是否是县级市
          },
          {
            "countyCode": "110102",
            "countyName": "西城区",
            "isCity": false
          },
          {
            "countyCode": "110103",
            "countyName": "崇文区",
            "isCity": false
          },
          {
            "countyCode": "110104",
            "countyName": "宣武区",
            "isCity": false
          },
          {
            "countyCode": "110105",
            "countyName": "朝阳区",
            "isCity": false
          },
          {
            "countyCode": "110106",
            "countyName": "丰台区",
            "isCity": false
          },
          {
            "countyCode": "110107",
            "countyName": "石景山区",
            "isCity": false
          },
          {
            "countyCode": "110108",
            "countyName": "海淀区",
            "isCity": false
          },
          {
            "countyCode": "110109",
            "countyName": "门头沟区",
            "isCity": false
          },
          {
            "countyCode": "110111",
            "countyName": "房山区",
            "isCity": false
          },
          {
            "countyCode": "110112",
            "countyName": "通州区",
            "isCity": false
          },
          {
            "countyCode": "110113",
            "countyName": "顺义区",
            "isCity": false
          },
          {
            "countyCode": "110114",
            "countyName": "昌平区",
            "isCity": false
          },
          {
            "countyCode": "110115",
            "countyName": "大兴区",
            "isCity": false
          },
          {
            "countyCode": "110116",
            "countyName": "怀柔区",
            "isCity": false
          },
          {
            "countyCode": "110117",
            "countyName": "平谷区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "110000",
        "cityName": "县",
        "cityType": 2,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "110228",
            "countyName": "密云县",
            "isCity": false
          },
          {
            "countyCode": "110229",
            "countyName": "延庆县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "120000",
    "provinceName": "天津市",
    "provinceType": 1,
    "cities": [
      {
        "cityCode": "120100",
        "cityName": "市辖区",
        "cityType": 1,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "120101",
            "countyName": "和平区",
            "isCity": false
          },
          {
            "countyCode": "120102",
            "countyName": "河东区",
            "isCity": false
          },
          {
            "countyCode": "120103",
            "countyName": "河西区",
            "isCity": false
          },
          {
            "countyCode": "120104",
            "countyName": "南开区",
            "isCity": false
          },
          {
            "countyCode": "120105",
            "countyName": "河北区",
            "isCity": false
          },
          {
            "countyCode": "120106",
            "countyName": "红桥区",
            "isCity": false
          },
          {
            "countyCode": "120107",
            "countyName": "塘沽区",
            "isCity": false
          },
          {
            "countyCode": "120108",
            "countyName": "汉沽区",
            "isCity": false
          },
          {
            "countyCode": "120109",
            "countyName": "大港区",
            "isCity": false
          },
          {
            "countyCode": "120110",
            "countyName": "东丽区",
            "isCity": false
          },
          {
            "countyCode": "120111",
            "countyName": "西青区",
            "isCity": false
          },
          {
            "countyCode": "120112",
            "countyName": "津南区",
            "isCity": false
          },
          {
            "countyCode": "120113",
            "countyName": "北辰区",
            "isCity": false
          },
          {
            "countyCode": "120114",
            "countyName": "武清区",
            "isCity": false
          },
          {
            "countyCode": "120115",
            "countyName": "宝坻区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "120000",
        "cityName": "县",
        "cityType": 2,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "120221",
            "countyName": "宁河县",
            "isCity": false
          },
          {
            "countyCode": "120223",
            "countyName": "静海县",
            "isCity": false
          },
          {
            "countyCode": "120225",
            "countyName": "蓟县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "130000",
    "provinceName": "河北省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "130100",
        "cityName": "石家庄市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "130101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "130102",
            "countyName": "长安区",
            "isCity": false
          },
          {
            "countyCode": "130103",
            "countyName": "桥东区",
            "isCity": false
          },
          {
            "countyCode": "130104",
            "countyName": "桥西区",
            "isCity": false
          },
          {
            "countyCode": "130105",
            "countyName": "新华区",
            "isCity": false
          },
          {
            "countyCode": "130107",
            "countyName": "井陉矿区",
            "isCity": false
          },
          {
            "countyCode": "130108",
            "countyName": "裕华区",
            "isCity": false
          },
          {
            "countyCode": "130121",
            "countyName": "井陉县",
            "isCity": false
          },
          {
            "countyCode": "130123",
            "countyName": "正定县",
            "isCity": false
          },
          {
            "countyCode": "130124",
            "countyName": "栾城县",
            "isCity": false
          },
          {
            "countyCode": "130125",
            "countyName": "行唐县",
            "isCity": false
          },
          {
            "countyCode": "130126",
            "countyName": "灵寿县",
            "isCity": false
          },
          {
            "countyCode": "130127",
            "countyName": "高邑县",
            "isCity": false
          },
          {
            "countyCode": "130128",
            "countyName": "深泽县",
            "isCity": false
          },
          {
            "countyCode": "130129",
            "countyName": "赞皇县",
            "isCity": false
          },
          {
            "countyCode": "130130",
            "countyName": "无极县",
            "isCity": false
          },
          {
            "countyCode": "130131",
            "countyName": "平山县",
            "isCity": false
          },
          {
            "countyCode": "130132",
            "countyName": "元氏县",
            "isCity": false
          },
          {
            "countyCode": "130133",
            "countyName": "赵县",
            "isCity": false
          },
          {
            "countyCode": "130181",
            "countyName": "辛集市",
            "isCity": true
          },
          {
            "countyCode": "130182",
            "countyName": "藁城市",
            "isCity": true
          },
          {
            "countyCode": "130183",
            "countyName": "晋州市",
            "isCity": true
          },
          {
            "countyCode": "130184",
            "countyName": "新乐市",
            "isCity": true
          },
          {
            "countyCode": "130185",
            "countyName": "鹿泉市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "130200",
        "cityName": "唐山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "130201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "130202",
            "countyName": "路南区",
            "isCity": false
          },
          {
            "countyCode": "130203",
            "countyName": "路北区",
            "isCity": false
          },
          {
            "countyCode": "130204",
            "countyName": "古冶区",
            "isCity": false
          },
          {
            "countyCode": "130205",
            "countyName": "开平区",
            "isCity": false
          },
          {
            "countyCode": "130207",
            "countyName": "丰南区",
            "isCity": false
          },
          {
            "countyCode": "130208",
            "countyName": "丰润区",
            "isCity": false
          },
          {
            "countyCode": "130223",
            "countyName": "滦县",
            "isCity": false
          },
          {
            "countyCode": "130224",
            "countyName": "滦南县",
            "isCity": false
          },
          {
            "countyCode": "130225",
            "countyName": "乐亭县",
            "isCity": false
          },
          {
            "countyCode": "130227",
            "countyName": "迁西县",
            "isCity": false
          },
          {
            "countyCode": "130229",
            "countyName": "玉田县",
            "isCity": false
          },
          {
            "countyCode": "130230",
            "countyName": "唐海县",
            "isCity": false
          },
          {
            "countyCode": "130281",
            "countyName": "遵化市",
            "isCity": true
          },
          {
            "countyCode": "130283",
            "countyName": "迁安市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "130300",
        "cityName": "秦皇岛市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "130301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "130302",
            "countyName": "海港区",
            "isCity": false
          },
          {
            "countyCode": "130303",
            "countyName": "山海关区",
            "isCity": false
          },
          {
            "countyCode": "130304",
            "countyName": "北戴河区",
            "isCity": false
          },
          {
            "countyCode": "130321",
            "countyName": "青龙满族自治县",
            "isCity": false
          },
          {
            "countyCode": "130322",
            "countyName": "昌黎县",
            "isCity": false
          },
          {
            "countyCode": "130323",
            "countyName": "抚宁县",
            "isCity": false
          },
          {
            "countyCode": "130324",
            "countyName": "卢龙县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "130400",
        "cityName": "邯郸市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "130401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "130402",
            "countyName": "邯山区",
            "isCity": false
          },
          {
            "countyCode": "130403",
            "countyName": "丛台区",
            "isCity": false
          },
          {
            "countyCode": "130404",
            "countyName": "复兴区",
            "isCity": false
          },
          {
            "countyCode": "130406",
            "countyName": "峰峰矿区",
            "isCity": false
          },
          {
            "countyCode": "130421",
            "countyName": "邯郸县",
            "isCity": false
          },
          {
            "countyCode": "130423",
            "countyName": "临漳县",
            "isCity": false
          },
          {
            "countyCode": "130424",
            "countyName": "成安县",
            "isCity": false
          },
          {
            "countyCode": "130425",
            "countyName": "大名县",
            "isCity": false
          },
          {
            "countyCode": "130426",
            "countyName": "涉县",
            "isCity": false
          },
          {
            "countyCode": "130427",
            "countyName": "磁县",
            "isCity": false
          },
          {
            "countyCode": "130428",
            "countyName": "肥乡县",
            "isCity": false
          },
          {
            "countyCode": "130429",
            "countyName": "永年县",
            "isCity": false
          },
          {
            "countyCode": "130430",
            "countyName": "邱县",
            "isCity": false
          },
          {
            "countyCode": "130431",
            "countyName": "鸡泽县",
            "isCity": false
          },
          {
            "countyCode": "130432",
            "countyName": "广平县",
            "isCity": false
          },
          {
            "countyCode": "130433",
            "countyName": "馆陶县",
            "isCity": false
          },
          {
            "countyCode": "130434",
            "countyName": "魏县",
            "isCity": false
          },
          {
            "countyCode": "130435",
            "countyName": "曲周县",
            "isCity": false
          },
          {
            "countyCode": "130481",
            "countyName": "武安市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "130500",
        "cityName": "邢台市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "130501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "130502",
            "countyName": "桥东区",
            "isCity": false
          },
          {
            "countyCode": "130503",
            "countyName": "桥西区",
            "isCity": false
          },
          {
            "countyCode": "130521",
            "countyName": "邢台县",
            "isCity": false
          },
          {
            "countyCode": "130522",
            "countyName": "临城县",
            "isCity": false
          },
          {
            "countyCode": "130523",
            "countyName": "内丘县",
            "isCity": false
          },
          {
            "countyCode": "130524",
            "countyName": "柏乡县",
            "isCity": false
          },
          {
            "countyCode": "130525",
            "countyName": "隆尧县",
            "isCity": false
          },
          {
            "countyCode": "130526",
            "countyName": "任县",
            "isCity": false
          },
          {
            "countyCode": "130527",
            "countyName": "南和县",
            "isCity": false
          },
          {
            "countyCode": "130528",
            "countyName": "宁晋县",
            "isCity": false
          },
          {
            "countyCode": "130529",
            "countyName": "巨鹿县",
            "isCity": false
          },
          {
            "countyCode": "130530",
            "countyName": "新河县",
            "isCity": false
          },
          {
            "countyCode": "130531",
            "countyName": "广宗县",
            "isCity": false
          },
          {
            "countyCode": "130532",
            "countyName": "平乡县",
            "isCity": false
          },
          {
            "countyCode": "130533",
            "countyName": "威县",
            "isCity": false
          },
          {
            "countyCode": "130534",
            "countyName": "清河县",
            "isCity": false
          },
          {
            "countyCode": "130535",
            "countyName": "临西县",
            "isCity": false
          },
          {
            "countyCode": "130581",
            "countyName": "南宫市",
            "isCity": true
          },
          {
            "countyCode": "130582",
            "countyName": "沙河市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "130600",
        "cityName": "保定市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "130601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "130602",
            "countyName": "新市区",
            "isCity": false
          },
          {
            "countyCode": "130603",
            "countyName": "北市区",
            "isCity": false
          },
          {
            "countyCode": "130604",
            "countyName": "南市区",
            "isCity": false
          },
          {
            "countyCode": "130621",
            "countyName": "满城县",
            "isCity": false
          },
          {
            "countyCode": "130622",
            "countyName": "清苑县",
            "isCity": false
          },
          {
            "countyCode": "130623",
            "countyName": "涞水县",
            "isCity": false
          },
          {
            "countyCode": "130624",
            "countyName": "阜平县",
            "isCity": false
          },
          {
            "countyCode": "130625",
            "countyName": "徐水县",
            "isCity": false
          },
          {
            "countyCode": "130626",
            "countyName": "定兴县",
            "isCity": false
          },
          {
            "countyCode": "130627",
            "countyName": "唐县",
            "isCity": false
          },
          {
            "countyCode": "130628",
            "countyName": "高阳县",
            "isCity": false
          },
          {
            "countyCode": "130629",
            "countyName": "容城县",
            "isCity": false
          },
          {
            "countyCode": "130630",
            "countyName": "涞源县",
            "isCity": false
          },
          {
            "countyCode": "130631",
            "countyName": "望都县",
            "isCity": false
          },
          {
            "countyCode": "130632",
            "countyName": "安新县",
            "isCity": false
          },
          {
            "countyCode": "130633",
            "countyName": "易县",
            "isCity": false
          },
          {
            "countyCode": "130634",
            "countyName": "曲阳县",
            "isCity": false
          },
          {
            "countyCode": "130635",
            "countyName": "蠡县",
            "isCity": false
          },
          {
            "countyCode": "130636",
            "countyName": "顺平县",
            "isCity": false
          },
          {
            "countyCode": "130637",
            "countyName": "博野县",
            "isCity": false
          },
          {
            "countyCode": "130638",
            "countyName": "雄县",
            "isCity": false
          },
          {
            "countyCode": "130681",
            "countyName": "涿州市",
            "isCity": true
          },
          {
            "countyCode": "130682",
            "countyName": "定州市",
            "isCity": true
          },
          {
            "countyCode": "130683",
            "countyName": "安国市",
            "isCity": true
          },
          {
            "countyCode": "130684",
            "countyName": "高碑店市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "130700",
        "cityName": "张家口市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "130701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "130702",
            "countyName": "桥东区",
            "isCity": false
          },
          {
            "countyCode": "130703",
            "countyName": "桥西区",
            "isCity": false
          },
          {
            "countyCode": "130705",
            "countyName": "宣化区",
            "isCity": false
          },
          {
            "countyCode": "130706",
            "countyName": "下花园区",
            "isCity": false
          },
          {
            "countyCode": "130721",
            "countyName": "宣化县",
            "isCity": false
          },
          {
            "countyCode": "130722",
            "countyName": "张北县",
            "isCity": false
          },
          {
            "countyCode": "130723",
            "countyName": "康保县",
            "isCity": false
          },
          {
            "countyCode": "130724",
            "countyName": "沽源县",
            "isCity": false
          },
          {
            "countyCode": "130725",
            "countyName": "尚义县",
            "isCity": false
          },
          {
            "countyCode": "130726",
            "countyName": "蔚县",
            "isCity": false
          },
          {
            "countyCode": "130727",
            "countyName": "阳原县",
            "isCity": false
          },
          {
            "countyCode": "130728",
            "countyName": "怀安县",
            "isCity": false
          },
          {
            "countyCode": "130729",
            "countyName": "万全县",
            "isCity": false
          },
          {
            "countyCode": "130730",
            "countyName": "怀来县",
            "isCity": false
          },
          {
            "countyCode": "130731",
            "countyName": "涿鹿县",
            "isCity": false
          },
          {
            "countyCode": "130732",
            "countyName": "赤城县",
            "isCity": false
          },
          {
            "countyCode": "130733",
            "countyName": "崇礼县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "130800",
        "cityName": "承德市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "130801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "130802",
            "countyName": "双桥区",
            "isCity": false
          },
          {
            "countyCode": "130803",
            "countyName": "双滦区",
            "isCity": false
          },
          {
            "countyCode": "130804",
            "countyName": "鹰手营子矿区",
            "isCity": false
          },
          {
            "countyCode": "130821",
            "countyName": "承德县",
            "isCity": false
          },
          {
            "countyCode": "130822",
            "countyName": "兴隆县",
            "isCity": false
          },
          {
            "countyCode": "130823",
            "countyName": "平泉县",
            "isCity": false
          },
          {
            "countyCode": "130824",
            "countyName": "滦平县",
            "isCity": false
          },
          {
            "countyCode": "130825",
            "countyName": "隆化县",
            "isCity": false
          },
          {
            "countyCode": "130826",
            "countyName": "丰宁满族自治县",
            "isCity": false
          },
          {
            "countyCode": "130827",
            "countyName": "宽城满族自治县",
            "isCity": false
          },
          {
            "countyCode": "130828",
            "countyName": "围场满族蒙古族自治",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "130900",
        "cityName": "沧州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "130901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "130902",
            "countyName": "新华区",
            "isCity": false
          },
          {
            "countyCode": "130903",
            "countyName": "运河区",
            "isCity": false
          },
          {
            "countyCode": "130921",
            "countyName": "沧县",
            "isCity": false
          },
          {
            "countyCode": "130922",
            "countyName": "青县",
            "isCity": false
          },
          {
            "countyCode": "130923",
            "countyName": "东光县",
            "isCity": false
          },
          {
            "countyCode": "130924",
            "countyName": "海兴县",
            "isCity": false
          },
          {
            "countyCode": "130925",
            "countyName": "盐山县",
            "isCity": false
          },
          {
            "countyCode": "130926",
            "countyName": "肃宁县",
            "isCity": false
          },
          {
            "countyCode": "130927",
            "countyName": "南皮县",
            "isCity": false
          },
          {
            "countyCode": "130928",
            "countyName": "吴桥县",
            "isCity": false
          },
          {
            "countyCode": "130929",
            "countyName": "献县",
            "isCity": false
          },
          {
            "countyCode": "130930",
            "countyName": "孟村回族自治县",
            "isCity": false
          },
          {
            "countyCode": "130981",
            "countyName": "泊头市",
            "isCity": true
          },
          {
            "countyCode": "130982",
            "countyName": "任丘市",
            "isCity": true
          },
          {
            "countyCode": "130983",
            "countyName": "黄骅市",
            "isCity": true
          },
          {
            "countyCode": "130984",
            "countyName": "河间市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "131000",
        "cityName": "廊坊市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "131001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "131002",
            "countyName": "安次区",
            "isCity": false
          },
          {
            "countyCode": "131003",
            "countyName": "广阳区",
            "isCity": false
          },
          {
            "countyCode": "131022",
            "countyName": "固安县",
            "isCity": false
          },
          {
            "countyCode": "131023",
            "countyName": "永清县",
            "isCity": false
          },
          {
            "countyCode": "131024",
            "countyName": "香河县",
            "isCity": false
          },
          {
            "countyCode": "131025",
            "countyName": "大城县",
            "isCity": false
          },
          {
            "countyCode": "131026",
            "countyName": "文安县",
            "isCity": false
          },
          {
            "countyCode": "131028",
            "countyName": "大厂回族自治县",
            "isCity": false
          },
          {
            "countyCode": "131081",
            "countyName": "霸州市",
            "isCity": true
          },
          {
            "countyCode": "131082",
            "countyName": "三河市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "131100",
        "cityName": "衡水市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "131101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "131102",
            "countyName": "桃城区",
            "isCity": false
          },
          {
            "countyCode": "131121",
            "countyName": "枣强县",
            "isCity": false
          },
          {
            "countyCode": "131122",
            "countyName": "武邑县",
            "isCity": false
          },
          {
            "countyCode": "131123",
            "countyName": "武强县",
            "isCity": false
          },
          {
            "countyCode": "131124",
            "countyName": "饶阳县",
            "isCity": false
          },
          {
            "countyCode": "131125",
            "countyName": "安平县",
            "isCity": false
          },
          {
            "countyCode": "131126",
            "countyName": "故城县",
            "isCity": false
          },
          {
            "countyCode": "131127",
            "countyName": "景县",
            "isCity": false
          },
          {
            "countyCode": "131128",
            "countyName": "阜城县",
            "isCity": false
          },
          {
            "countyCode": "131181",
            "countyName": "冀州市",
            "isCity": true
          },
          {
            "countyCode": "131182",
            "countyName": "深州市",
            "isCity": true
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "140000",
    "provinceName": "山西省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "140100",
        "cityName": "太原市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "140101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "140105",
            "countyName": "小店区",
            "isCity": false
          },
          {
            "countyCode": "140106",
            "countyName": "迎泽区",
            "isCity": false
          },
          {
            "countyCode": "140107",
            "countyName": "杏花岭区",
            "isCity": false
          },
          {
            "countyCode": "140108",
            "countyName": "尖草坪区",
            "isCity": false
          },
          {
            "countyCode": "140109",
            "countyName": "万柏林区",
            "isCity": false
          },
          {
            "countyCode": "140110",
            "countyName": "晋源区",
            "isCity": false
          },
          {
            "countyCode": "140121",
            "countyName": "清徐县",
            "isCity": false
          },
          {
            "countyCode": "140122",
            "countyName": "阳曲县",
            "isCity": false
          },
          {
            "countyCode": "140123",
            "countyName": "娄烦县",
            "isCity": false
          },
          {
            "countyCode": "140181",
            "countyName": "古交市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "140200",
        "cityName": "大同市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "140201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "140202",
            "countyName": "城区",
            "isCity": false
          },
          {
            "countyCode": "140203",
            "countyName": "矿区",
            "isCity": false
          },
          {
            "countyCode": "140211",
            "countyName": "南郊区",
            "isCity": false
          },
          {
            "countyCode": "140212",
            "countyName": "新荣区",
            "isCity": false
          },
          {
            "countyCode": "140221",
            "countyName": "阳高县",
            "isCity": false
          },
          {
            "countyCode": "140222",
            "countyName": "天镇县",
            "isCity": false
          },
          {
            "countyCode": "140223",
            "countyName": "广灵县",
            "isCity": false
          },
          {
            "countyCode": "140224",
            "countyName": "灵丘县",
            "isCity": false
          },
          {
            "countyCode": "140225",
            "countyName": "浑源县",
            "isCity": false
          },
          {
            "countyCode": "140226",
            "countyName": "左云县",
            "isCity": false
          },
          {
            "countyCode": "140227",
            "countyName": "大同县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "140300",
        "cityName": "阳泉市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "140301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "140302",
            "countyName": "城区",
            "isCity": false
          },
          {
            "countyCode": "140303",
            "countyName": "矿区",
            "isCity": false
          },
          {
            "countyCode": "140311",
            "countyName": "郊区",
            "isCity": false
          },
          {
            "countyCode": "140321",
            "countyName": "平定县",
            "isCity": false
          },
          {
            "countyCode": "140322",
            "countyName": "盂县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "140400",
        "cityName": "长治市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "140401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "140402",
            "countyName": "城区",
            "isCity": false
          },
          {
            "countyCode": "140411",
            "countyName": "郊区",
            "isCity": false
          },
          {
            "countyCode": "140421",
            "countyName": "长治县",
            "isCity": false
          },
          {
            "countyCode": "140423",
            "countyName": "襄垣县",
            "isCity": false
          },
          {
            "countyCode": "140424",
            "countyName": "屯留县",
            "isCity": false
          },
          {
            "countyCode": "140425",
            "countyName": "平顺县",
            "isCity": false
          },
          {
            "countyCode": "140426",
            "countyName": "黎城县",
            "isCity": false
          },
          {
            "countyCode": "140427",
            "countyName": "壶关县",
            "isCity": false
          },
          {
            "countyCode": "140428",
            "countyName": "长子县",
            "isCity": false
          },
          {
            "countyCode": "140429",
            "countyName": "武乡县",
            "isCity": false
          },
          {
            "countyCode": "140430",
            "countyName": "沁县",
            "isCity": false
          },
          {
            "countyCode": "140431",
            "countyName": "沁源县",
            "isCity": false
          },
          {
            "countyCode": "140481",
            "countyName": "潞城市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "140500",
        "cityName": "晋城市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "140501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "140502",
            "countyName": "城区",
            "isCity": false
          },
          {
            "countyCode": "140521",
            "countyName": "沁水县",
            "isCity": false
          },
          {
            "countyCode": "140522",
            "countyName": "阳城县",
            "isCity": false
          },
          {
            "countyCode": "140524",
            "countyName": "陵川县",
            "isCity": false
          },
          {
            "countyCode": "140525",
            "countyName": "泽州县",
            "isCity": false
          },
          {
            "countyCode": "140581",
            "countyName": "高平市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "140600",
        "cityName": "朔州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "140601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "140602",
            "countyName": "朔城区",
            "isCity": false
          },
          {
            "countyCode": "140603",
            "countyName": "平鲁区",
            "isCity": false
          },
          {
            "countyCode": "140621",
            "countyName": "山阴县",
            "isCity": false
          },
          {
            "countyCode": "140622",
            "countyName": "应县",
            "isCity": false
          },
          {
            "countyCode": "140623",
            "countyName": "右玉县",
            "isCity": false
          },
          {
            "countyCode": "140624",
            "countyName": "怀仁县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "140700",
        "cityName": "晋中市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "140701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "140702",
            "countyName": "榆次区",
            "isCity": false
          },
          {
            "countyCode": "140721",
            "countyName": "榆社县",
            "isCity": false
          },
          {
            "countyCode": "140722",
            "countyName": "左权县",
            "isCity": false
          },
          {
            "countyCode": "140723",
            "countyName": "和顺县",
            "isCity": false
          },
          {
            "countyCode": "140724",
            "countyName": "昔阳县",
            "isCity": false
          },
          {
            "countyCode": "140725",
            "countyName": "寿阳县",
            "isCity": false
          },
          {
            "countyCode": "140726",
            "countyName": "太谷县",
            "isCity": false
          },
          {
            "countyCode": "140727",
            "countyName": "祁县",
            "isCity": false
          },
          {
            "countyCode": "140728",
            "countyName": "平遥县",
            "isCity": false
          },
          {
            "countyCode": "140729",
            "countyName": "灵石县",
            "isCity": false
          },
          {
            "countyCode": "140781",
            "countyName": "介休市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "140800",
        "cityName": "运城市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "140801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "140802",
            "countyName": "盐湖区",
            "isCity": false
          },
          {
            "countyCode": "140821",
            "countyName": "临猗县",
            "isCity": false
          },
          {
            "countyCode": "140822",
            "countyName": "万荣县",
            "isCity": false
          },
          {
            "countyCode": "140823",
            "countyName": "闻喜县",
            "isCity": false
          },
          {
            "countyCode": "140824",
            "countyName": "稷山县",
            "isCity": false
          },
          {
            "countyCode": "140825",
            "countyName": "新绛县",
            "isCity": false
          },
          {
            "countyCode": "140826",
            "countyName": "绛县",
            "isCity": false
          },
          {
            "countyCode": "140827",
            "countyName": "垣曲县",
            "isCity": false
          },
          {
            "countyCode": "140828",
            "countyName": "夏县",
            "isCity": false
          },
          {
            "countyCode": "140829",
            "countyName": "平陆县",
            "isCity": false
          },
          {
            "countyCode": "140830",
            "countyName": "芮城县",
            "isCity": false
          },
          {
            "countyCode": "140881",
            "countyName": "永济市",
            "isCity": true
          },
          {
            "countyCode": "140882",
            "countyName": "河津市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "140900",
        "cityName": "忻州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "140901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "140902",
            "countyName": "忻府区",
            "isCity": false
          },
          {
            "countyCode": "140921",
            "countyName": "定襄县",
            "isCity": false
          },
          {
            "countyCode": "140922",
            "countyName": "五台县",
            "isCity": false
          },
          {
            "countyCode": "140923",
            "countyName": "代县",
            "isCity": false
          },
          {
            "countyCode": "140924",
            "countyName": "繁峙县",
            "isCity": false
          },
          {
            "countyCode": "140925",
            "countyName": "宁武县",
            "isCity": false
          },
          {
            "countyCode": "140926",
            "countyName": "静乐县",
            "isCity": false
          },
          {
            "countyCode": "140927",
            "countyName": "神池县",
            "isCity": false
          },
          {
            "countyCode": "140928",
            "countyName": "五寨县",
            "isCity": false
          },
          {
            "countyCode": "140929",
            "countyName": "岢岚县",
            "isCity": false
          },
          {
            "countyCode": "140930",
            "countyName": "河曲县",
            "isCity": false
          },
          {
            "countyCode": "140931",
            "countyName": "保德县",
            "isCity": false
          },
          {
            "countyCode": "140932",
            "countyName": "偏关县",
            "isCity": false
          },
          {
            "countyCode": "140981",
            "countyName": "原平市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "141000",
        "cityName": "临汾市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "141001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "141002",
            "countyName": "尧都区",
            "isCity": false
          },
          {
            "countyCode": "141021",
            "countyName": "曲沃县",
            "isCity": false
          },
          {
            "countyCode": "141022",
            "countyName": "翼城县",
            "isCity": false
          },
          {
            "countyCode": "141023",
            "countyName": "襄汾县",
            "isCity": false
          },
          {
            "countyCode": "141024",
            "countyName": "洪洞县",
            "isCity": false
          },
          {
            "countyCode": "141025",
            "countyName": "古县",
            "isCity": false
          },
          {
            "countyCode": "141026",
            "countyName": "安泽县",
            "isCity": false
          },
          {
            "countyCode": "141027",
            "countyName": "浮山县",
            "isCity": false
          },
          {
            "countyCode": "141028",
            "countyName": "吉县",
            "isCity": false
          },
          {
            "countyCode": "141029",
            "countyName": "乡宁县",
            "isCity": false
          },
          {
            "countyCode": "141030",
            "countyName": "大宁县",
            "isCity": false
          },
          {
            "countyCode": "141031",
            "countyName": "隰县",
            "isCity": false
          },
          {
            "countyCode": "141032",
            "countyName": "永和县",
            "isCity": false
          },
          {
            "countyCode": "141033",
            "countyName": "蒲县",
            "isCity": false
          },
          {
            "countyCode": "141034",
            "countyName": "汾西县",
            "isCity": false
          },
          {
            "countyCode": "141081",
            "countyName": "侯马市",
            "isCity": true
          },
          {
            "countyCode": "141082",
            "countyName": "霍州市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "141100",
        "cityName": "吕梁市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "141101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "141102",
            "countyName": "离石区",
            "isCity": false
          },
          {
            "countyCode": "141121",
            "countyName": "文水县",
            "isCity": false
          },
          {
            "countyCode": "141122",
            "countyName": "交城县",
            "isCity": false
          },
          {
            "countyCode": "141123",
            "countyName": "兴县",
            "isCity": false
          },
          {
            "countyCode": "141124",
            "countyName": "临县",
            "isCity": false
          },
          {
            "countyCode": "141125",
            "countyName": "柳林县",
            "isCity": false
          },
          {
            "countyCode": "141126",
            "countyName": "石楼县",
            "isCity": false
          },
          {
            "countyCode": "141127",
            "countyName": "岚县",
            "isCity": false
          },
          {
            "countyCode": "141128",
            "countyName": "方山县",
            "isCity": false
          },
          {
            "countyCode": "141129",
            "countyName": "中阳县",
            "isCity": false
          },
          {
            "countyCode": "141130",
            "countyName": "交口县",
            "isCity": false
          },
          {
            "countyCode": "141181",
            "countyName": "孝义市",
            "isCity": true
          },
          {
            "countyCode": "141182",
            "countyName": "汾阳市",
            "isCity": true
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "150000",
    "provinceName": "内蒙古自治区",
    "provinceType": 3,
    "cities": [
      {
        "cityCode": "150100",
        "cityName": "呼和浩特市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "150101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "150102",
            "countyName": "新城区",
            "isCity": false
          },
          {
            "countyCode": "150103",
            "countyName": "回民区",
            "isCity": false
          },
          {
            "countyCode": "150104",
            "countyName": "玉泉区",
            "isCity": false
          },
          {
            "countyCode": "150105",
            "countyName": "赛罕区",
            "isCity": false
          },
          {
            "countyCode": "150121",
            "countyName": "土默特左旗",
            "isCity": false
          },
          {
            "countyCode": "150122",
            "countyName": "托克托县",
            "isCity": false
          },
          {
            "countyCode": "150123",
            "countyName": "和林格尔县",
            "isCity": false
          },
          {
            "countyCode": "150124",
            "countyName": "清水河县",
            "isCity": false
          },
          {
            "countyCode": "150125",
            "countyName": "武川县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "150200",
        "cityName": "包头市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "150201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "150202",
            "countyName": "东河区",
            "isCity": false
          },
          {
            "countyCode": "150203",
            "countyName": "昆都仑区",
            "isCity": false
          },
          {
            "countyCode": "150204",
            "countyName": "青山区",
            "isCity": false
          },
          {
            "countyCode": "150205",
            "countyName": "石拐区",
            "isCity": false
          },
          {
            "countyCode": "150206",
            "countyName": "白云矿区",
            "isCity": false
          },
          {
            "countyCode": "150207",
            "countyName": "九原区",
            "isCity": false
          },
          {
            "countyCode": "150221",
            "countyName": "土默特右旗",
            "isCity": false
          },
          {
            "countyCode": "150222",
            "countyName": "固阳县",
            "isCity": false
          },
          {
            "countyCode": "150223",
            "countyName": "达尔罕茂明安联合旗",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "150300",
        "cityName": "乌海市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "150301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "150302",
            "countyName": "海勃湾区",
            "isCity": false
          },
          {
            "countyCode": "150303",
            "countyName": "海南区",
            "isCity": false
          },
          {
            "countyCode": "150304",
            "countyName": "乌达区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "150400",
        "cityName": "赤峰市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "150401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "150402",
            "countyName": "红山区",
            "isCity": false
          },
          {
            "countyCode": "150403",
            "countyName": "元宝山区",
            "isCity": false
          },
          {
            "countyCode": "150404",
            "countyName": "松山区",
            "isCity": false
          },
          {
            "countyCode": "150421",
            "countyName": "阿鲁科尔沁旗",
            "isCity": false
          },
          {
            "countyCode": "150422",
            "countyName": "巴林左旗",
            "isCity": false
          },
          {
            "countyCode": "150423",
            "countyName": "巴林右旗",
            "isCity": false
          },
          {
            "countyCode": "150424",
            "countyName": "林西县",
            "isCity": false
          },
          {
            "countyCode": "150425",
            "countyName": "克什克腾旗",
            "isCity": false
          },
          {
            "countyCode": "150426",
            "countyName": "翁牛特旗",
            "isCity": false
          },
          {
            "countyCode": "150428",
            "countyName": "喀喇沁旗",
            "isCity": false
          },
          {
            "countyCode": "150429",
            "countyName": "宁城县",
            "isCity": false
          },
          {
            "countyCode": "150430",
            "countyName": "敖汉旗",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "150500",
        "cityName": "通辽市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "150501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "150502",
            "countyName": "科尔沁区",
            "isCity": false
          },
          {
            "countyCode": "150521",
            "countyName": "科尔沁左翼中旗",
            "isCity": false
          },
          {
            "countyCode": "150522",
            "countyName": "科尔沁左翼后旗",
            "isCity": false
          },
          {
            "countyCode": "150523",
            "countyName": "开鲁县",
            "isCity": false
          },
          {
            "countyCode": "150524",
            "countyName": "库伦旗",
            "isCity": false
          },
          {
            "countyCode": "150525",
            "countyName": "奈曼旗",
            "isCity": false
          },
          {
            "countyCode": "150526",
            "countyName": "扎鲁特旗",
            "isCity": false
          },
          {
            "countyCode": "150581",
            "countyName": "霍林郭勒市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "150600",
        "cityName": "鄂尔多斯市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "150602",
            "countyName": "东胜区",
            "isCity": false
          },
          {
            "countyCode": "150621",
            "countyName": "达拉特旗",
            "isCity": false
          },
          {
            "countyCode": "150622",
            "countyName": "准格尔旗",
            "isCity": false
          },
          {
            "countyCode": "150623",
            "countyName": "鄂托克前旗",
            "isCity": false
          },
          {
            "countyCode": "150624",
            "countyName": "鄂托克旗",
            "isCity": false
          },
          {
            "countyCode": "150625",
            "countyName": "杭锦旗",
            "isCity": false
          },
          {
            "countyCode": "150626",
            "countyName": "乌审旗",
            "isCity": false
          },
          {
            "countyCode": "150627",
            "countyName": "伊金霍洛旗",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "150700",
        "cityName": "呼伦贝尔市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "150701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "150702",
            "countyName": "海拉尔区",
            "isCity": false
          },
          {
            "countyCode": "150721",
            "countyName": "阿荣旗",
            "isCity": false
          },
          {
            "countyCode": "150722",
            "countyName": "莫力达瓦达斡尔族自",
            "isCity": false
          },
          {
            "countyCode": "150723",
            "countyName": "鄂伦春自治旗",
            "isCity": false
          },
          {
            "countyCode": "150724",
            "countyName": "鄂温克族自治旗",
            "isCity": false
          },
          {
            "countyCode": "150725",
            "countyName": "陈巴尔虎旗",
            "isCity": false
          },
          {
            "countyCode": "150726",
            "countyName": "新巴尔虎左旗",
            "isCity": false
          },
          {
            "countyCode": "150727",
            "countyName": "新巴尔虎右旗",
            "isCity": false
          },
          {
            "countyCode": "150781",
            "countyName": "满洲里市",
            "isCity": true
          },
          {
            "countyCode": "150782",
            "countyName": "牙克石市",
            "isCity": true
          },
          {
            "countyCode": "150783",
            "countyName": "扎兰屯市",
            "isCity": true
          },
          {
            "countyCode": "150784",
            "countyName": "额尔古纳市",
            "isCity": true
          },
          {
            "countyCode": "150785",
            "countyName": "根河市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "150800",
        "cityName": "巴彦淖尔市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "150801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "150802",
            "countyName": "临河区",
            "isCity": false
          },
          {
            "countyCode": "150821",
            "countyName": "五原县",
            "isCity": false
          },
          {
            "countyCode": "150822",
            "countyName": "磴口县",
            "isCity": false
          },
          {
            "countyCode": "150823",
            "countyName": "乌拉特前旗",
            "isCity": false
          },
          {
            "countyCode": "150824",
            "countyName": "乌拉特中旗",
            "isCity": false
          },
          {
            "countyCode": "150825",
            "countyName": "乌拉特后旗",
            "isCity": false
          },
          {
            "countyCode": "150826",
            "countyName": "杭锦后旗",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "150900",
        "cityName": "乌兰察布市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "150901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "150902",
            "countyName": "集宁区",
            "isCity": false
          },
          {
            "countyCode": "150921",
            "countyName": "卓资县",
            "isCity": false
          },
          {
            "countyCode": "150922",
            "countyName": "化德县",
            "isCity": false
          },
          {
            "countyCode": "150923",
            "countyName": "商都县",
            "isCity": false
          },
          {
            "countyCode": "150924",
            "countyName": "兴和县",
            "isCity": false
          },
          {
            "countyCode": "150925",
            "countyName": "凉城县",
            "isCity": false
          },
          {
            "countyCode": "150926",
            "countyName": "察哈尔右翼前旗",
            "isCity": false
          },
          {
            "countyCode": "150927",
            "countyName": "察哈尔右翼中旗",
            "isCity": false
          },
          {
            "countyCode": "150928",
            "countyName": "察哈尔右翼后旗",
            "isCity": false
          },
          {
            "countyCode": "150929",
            "countyName": "四子王旗",
            "isCity": false
          },
          {
            "countyCode": "150981",
            "countyName": "丰镇市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "152200",
        "cityName": "兴安盟",
        "cityType": 6,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "152201",
            "countyName": "乌兰浩特市",
            "isCity": true
          },
          {
            "countyCode": "152202",
            "countyName": "阿尔山市",
            "isCity": true
          },
          {
            "countyCode": "152221",
            "countyName": "科尔沁右翼前旗",
            "isCity": false
          },
          {
            "countyCode": "152222",
            "countyName": "科尔沁右翼中旗",
            "isCity": false
          },
          {
            "countyCode": "152223",
            "countyName": "扎赉特旗",
            "isCity": false
          },
          {
            "countyCode": "152224",
            "countyName": "突泉县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "152500",
        "cityName": "锡林郭勒盟",
        "cityType": 6,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "152501",
            "countyName": "二连浩特市",
            "isCity": true
          },
          {
            "countyCode": "152502",
            "countyName": "锡林浩特市",
            "isCity": true
          },
          {
            "countyCode": "152522",
            "countyName": "阿巴嘎旗",
            "isCity": false
          },
          {
            "countyCode": "152523",
            "countyName": "苏尼特左旗",
            "isCity": false
          },
          {
            "countyCode": "152524",
            "countyName": "苏尼特右旗",
            "isCity": false
          },
          {
            "countyCode": "152525",
            "countyName": "东乌珠穆沁旗",
            "isCity": false
          },
          {
            "countyCode": "152526",
            "countyName": "西乌珠穆沁旗",
            "isCity": false
          },
          {
            "countyCode": "152527",
            "countyName": "太仆寺旗",
            "isCity": false
          },
          {
            "countyCode": "152528",
            "countyName": "镶黄旗",
            "isCity": false
          },
          {
            "countyCode": "152529",
            "countyName": "正镶白旗",
            "isCity": false
          },
          {
            "countyCode": "152530",
            "countyName": "正蓝旗",
            "isCity": false
          },
          {
            "countyCode": "152531",
            "countyName": "多伦县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "152900",
        "cityName": "阿拉善盟",
        "cityType": 6,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "152921",
            "countyName": "阿拉善左旗",
            "isCity": false
          },
          {
            "countyCode": "152922",
            "countyName": "阿拉善右旗",
            "isCity": false
          },
          {
            "countyCode": "152923",
            "countyName": "额济纳旗",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "210000",
    "provinceName": "辽宁省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "210100",
        "cityName": "沈阳市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "210101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "210102",
            "countyName": "和平区",
            "isCity": false
          },
          {
            "countyCode": "210103",
            "countyName": "沈河区",
            "isCity": false
          },
          {
            "countyCode": "210104",
            "countyName": "大东区",
            "isCity": false
          },
          {
            "countyCode": "210105",
            "countyName": "皇姑区",
            "isCity": false
          },
          {
            "countyCode": "210106",
            "countyName": "铁西区",
            "isCity": false
          },
          {
            "countyCode": "210111",
            "countyName": "苏家屯区",
            "isCity": false
          },
          {
            "countyCode": "210112",
            "countyName": "东陵区",
            "isCity": false
          },
          {
            "countyCode": "210113",
            "countyName": "沈北新区",
            "isCity": false
          },
          {
            "countyCode": "210114",
            "countyName": "于洪区",
            "isCity": false
          },
          {
            "countyCode": "210122",
            "countyName": "辽中县",
            "isCity": false
          },
          {
            "countyCode": "210123",
            "countyName": "康平县",
            "isCity": false
          },
          {
            "countyCode": "210124",
            "countyName": "法库县",
            "isCity": false
          },
          {
            "countyCode": "210181",
            "countyName": "新民市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "210200",
        "cityName": "大连市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "210201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "210202",
            "countyName": "中山区",
            "isCity": false
          },
          {
            "countyCode": "210203",
            "countyName": "西岗区",
            "isCity": false
          },
          {
            "countyCode": "210204",
            "countyName": "沙河口区",
            "isCity": false
          },
          {
            "countyCode": "210211",
            "countyName": "甘井子区",
            "isCity": false
          },
          {
            "countyCode": "210212",
            "countyName": "旅顺口区",
            "isCity": false
          },
          {
            "countyCode": "210213",
            "countyName": "金州区",
            "isCity": false
          },
          {
            "countyCode": "210224",
            "countyName": "长海县",
            "isCity": false
          },
          {
            "countyCode": "210281",
            "countyName": "瓦房店市",
            "isCity": true
          },
          {
            "countyCode": "210282",
            "countyName": "普兰店市",
            "isCity": true
          },
          {
            "countyCode": "210283",
            "countyName": "庄河市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "210300",
        "cityName": "鞍山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "210301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "210302",
            "countyName": "铁东区",
            "isCity": false
          },
          {
            "countyCode": "210303",
            "countyName": "铁西区",
            "isCity": false
          },
          {
            "countyCode": "210304",
            "countyName": "立山区",
            "isCity": false
          },
          {
            "countyCode": "210311",
            "countyName": "千山区",
            "isCity": false
          },
          {
            "countyCode": "210321",
            "countyName": "台安县",
            "isCity": false
          },
          {
            "countyCode": "210323",
            "countyName": "岫岩满族自治县",
            "isCity": false
          },
          {
            "countyCode": "210381",
            "countyName": "海城市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "210400",
        "cityName": "抚顺市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "210401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "210402",
            "countyName": "新抚区",
            "isCity": false
          },
          {
            "countyCode": "210403",
            "countyName": "东洲区",
            "isCity": false
          },
          {
            "countyCode": "210404",
            "countyName": "望花区",
            "isCity": false
          },
          {
            "countyCode": "210411",
            "countyName": "顺城区",
            "isCity": false
          },
          {
            "countyCode": "210421",
            "countyName": "抚顺县",
            "isCity": false
          },
          {
            "countyCode": "210422",
            "countyName": "新宾满族自治县",
            "isCity": false
          },
          {
            "countyCode": "210423",
            "countyName": "清原满族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "210500",
        "cityName": "本溪市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "210501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "210502",
            "countyName": "平山区",
            "isCity": false
          },
          {
            "countyCode": "210503",
            "countyName": "溪湖区",
            "isCity": false
          },
          {
            "countyCode": "210504",
            "countyName": "明山区",
            "isCity": false
          },
          {
            "countyCode": "210505",
            "countyName": "南芬区",
            "isCity": false
          },
          {
            "countyCode": "210521",
            "countyName": "本溪满族自治县",
            "isCity": false
          },
          {
            "countyCode": "210522",
            "countyName": "桓仁满族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "210600",
        "cityName": "丹东市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "210601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "210602",
            "countyName": "元宝区",
            "isCity": false
          },
          {
            "countyCode": "210603",
            "countyName": "振兴区",
            "isCity": false
          },
          {
            "countyCode": "210604",
            "countyName": "振安区",
            "isCity": false
          },
          {
            "countyCode": "210624",
            "countyName": "宽甸满族自治县",
            "isCity": false
          },
          {
            "countyCode": "210681",
            "countyName": "东港市",
            "isCity": true
          },
          {
            "countyCode": "210682",
            "countyName": "凤城市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "210700",
        "cityName": "锦州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "210701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "210702",
            "countyName": "古塔区",
            "isCity": false
          },
          {
            "countyCode": "210703",
            "countyName": "凌河区",
            "isCity": false
          },
          {
            "countyCode": "210711",
            "countyName": "太和区",
            "isCity": false
          },
          {
            "countyCode": "210726",
            "countyName": "黑山县",
            "isCity": false
          },
          {
            "countyCode": "210727",
            "countyName": "义县",
            "isCity": false
          },
          {
            "countyCode": "210781",
            "countyName": "凌海市",
            "isCity": true
          },
          {
            "countyCode": "210782",
            "countyName": "北镇市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "210800",
        "cityName": "营口市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "210801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "210802",
            "countyName": "站前区",
            "isCity": false
          },
          {
            "countyCode": "210803",
            "countyName": "西市区",
            "isCity": false
          },
          {
            "countyCode": "210804",
            "countyName": "鲅鱼圈区",
            "isCity": false
          },
          {
            "countyCode": "210811",
            "countyName": "老边区",
            "isCity": false
          },
          {
            "countyCode": "210881",
            "countyName": "盖州市",
            "isCity": true
          },
          {
            "countyCode": "210882",
            "countyName": "大石桥市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "210900",
        "cityName": "阜新市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "210901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "210902",
            "countyName": "海州区",
            "isCity": false
          },
          {
            "countyCode": "210903",
            "countyName": "新邱区",
            "isCity": false
          },
          {
            "countyCode": "210904",
            "countyName": "太平区",
            "isCity": false
          },
          {
            "countyCode": "210905",
            "countyName": "清河门区",
            "isCity": false
          },
          {
            "countyCode": "210911",
            "countyName": "细河区",
            "isCity": false
          },
          {
            "countyCode": "210921",
            "countyName": "阜新蒙古族自治县",
            "isCity": false
          },
          {
            "countyCode": "210922",
            "countyName": "彰武县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "211000",
        "cityName": "辽阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "211001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "211002",
            "countyName": "白塔区",
            "isCity": false
          },
          {
            "countyCode": "211003",
            "countyName": "文圣区",
            "isCity": false
          },
          {
            "countyCode": "211004",
            "countyName": "宏伟区",
            "isCity": false
          },
          {
            "countyCode": "211005",
            "countyName": "弓长岭区",
            "isCity": false
          },
          {
            "countyCode": "211011",
            "countyName": "太子河区",
            "isCity": false
          },
          {
            "countyCode": "211021",
            "countyName": "辽阳县",
            "isCity": false
          },
          {
            "countyCode": "211081",
            "countyName": "灯塔市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "211100",
        "cityName": "盘锦市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "211101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "211102",
            "countyName": "双台子区",
            "isCity": false
          },
          {
            "countyCode": "211103",
            "countyName": "兴隆台区",
            "isCity": false
          },
          {
            "countyCode": "211121",
            "countyName": "大洼县",
            "isCity": false
          },
          {
            "countyCode": "211122",
            "countyName": "盘山县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "211200",
        "cityName": "铁岭市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "211201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "211202",
            "countyName": "银州区",
            "isCity": false
          },
          {
            "countyCode": "211204",
            "countyName": "清河区",
            "isCity": false
          },
          {
            "countyCode": "211221",
            "countyName": "铁岭县",
            "isCity": false
          },
          {
            "countyCode": "211223",
            "countyName": "西丰县",
            "isCity": false
          },
          {
            "countyCode": "211224",
            "countyName": "昌图县",
            "isCity": false
          },
          {
            "countyCode": "211281",
            "countyName": "调兵山市",
            "isCity": true
          },
          {
            "countyCode": "211282",
            "countyName": "开原市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "211300",
        "cityName": "朝阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "211301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "211302",
            "countyName": "双塔区",
            "isCity": false
          },
          {
            "countyCode": "211303",
            "countyName": "龙城区",
            "isCity": false
          },
          {
            "countyCode": "211321",
            "countyName": "朝阳县",
            "isCity": false
          },
          {
            "countyCode": "211322",
            "countyName": "建平县",
            "isCity": false
          },
          {
            "countyCode": "211324",
            "countyName": "喀喇沁左翼蒙古族自",
            "isCity": false
          },
          {
            "countyCode": "211381",
            "countyName": "北票市",
            "isCity": true
          },
          {
            "countyCode": "211382",
            "countyName": "凌源市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "211400",
        "cityName": "葫芦岛市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "211401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "211402",
            "countyName": "连山区",
            "isCity": false
          },
          {
            "countyCode": "211403",
            "countyName": "龙港区",
            "isCity": false
          },
          {
            "countyCode": "211404",
            "countyName": "南票区",
            "isCity": false
          },
          {
            "countyCode": "211421",
            "countyName": "绥中县",
            "isCity": false
          },
          {
            "countyCode": "211422",
            "countyName": "建昌县",
            "isCity": false
          },
          {
            "countyCode": "211481",
            "countyName": "兴城市",
            "isCity": true
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "220000",
    "provinceName": "吉林省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "220100",
        "cityName": "长春市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "220101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "220102",
            "countyName": "南关区",
            "isCity": false
          },
          {
            "countyCode": "220103",
            "countyName": "宽城区",
            "isCity": false
          },
          {
            "countyCode": "220104",
            "countyName": "朝阳区",
            "isCity": false
          },
          {
            "countyCode": "220105",
            "countyName": "二道区",
            "isCity": false
          },
          {
            "countyCode": "220106",
            "countyName": "绿园区",
            "isCity": false
          },
          {
            "countyCode": "220112",
            "countyName": "双阳区",
            "isCity": false
          },
          {
            "countyCode": "220122",
            "countyName": "农安县",
            "isCity": false
          },
          {
            "countyCode": "220181",
            "countyName": "九台市",
            "isCity": true
          },
          {
            "countyCode": "220182",
            "countyName": "榆树市",
            "isCity": true
          },
          {
            "countyCode": "220183",
            "countyName": "德惠市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "220200",
        "cityName": "吉林市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "220201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "220202",
            "countyName": "昌邑区",
            "isCity": false
          },
          {
            "countyCode": "220203",
            "countyName": "龙潭区",
            "isCity": false
          },
          {
            "countyCode": "220204",
            "countyName": "船营区",
            "isCity": false
          },
          {
            "countyCode": "220211",
            "countyName": "丰满区",
            "isCity": false
          },
          {
            "countyCode": "220221",
            "countyName": "永吉县",
            "isCity": false
          },
          {
            "countyCode": "220281",
            "countyName": "蛟河市",
            "isCity": true
          },
          {
            "countyCode": "220282",
            "countyName": "桦甸市",
            "isCity": true
          },
          {
            "countyCode": "220283",
            "countyName": "舒兰市",
            "isCity": true
          },
          {
            "countyCode": "220284",
            "countyName": "磐石市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "220300",
        "cityName": "四平市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "220301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "220302",
            "countyName": "铁西区",
            "isCity": false
          },
          {
            "countyCode": "220303",
            "countyName": "铁东区",
            "isCity": false
          },
          {
            "countyCode": "220322",
            "countyName": "梨树县",
            "isCity": false
          },
          {
            "countyCode": "220323",
            "countyName": "伊通满族自治县",
            "isCity": false
          },
          {
            "countyCode": "220381",
            "countyName": "公主岭市",
            "isCity": true
          },
          {
            "countyCode": "220382",
            "countyName": "双辽市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "220400",
        "cityName": "辽源市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "220401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "220402",
            "countyName": "龙山区",
            "isCity": false
          },
          {
            "countyCode": "220403",
            "countyName": "西安区",
            "isCity": false
          },
          {
            "countyCode": "220421",
            "countyName": "东丰县",
            "isCity": false
          },
          {
            "countyCode": "220422",
            "countyName": "东辽县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "220500",
        "cityName": "通化市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "220501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "220502",
            "countyName": "东昌区",
            "isCity": false
          },
          {
            "countyCode": "220503",
            "countyName": "二道江区",
            "isCity": false
          },
          {
            "countyCode": "220521",
            "countyName": "通化县",
            "isCity": false
          },
          {
            "countyCode": "220523",
            "countyName": "辉南县",
            "isCity": false
          },
          {
            "countyCode": "220524",
            "countyName": "柳河县",
            "isCity": false
          },
          {
            "countyCode": "220581",
            "countyName": "梅河口市",
            "isCity": true
          },
          {
            "countyCode": "220582",
            "countyName": "集安市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "220600",
        "cityName": "白山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "220601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "220602",
            "countyName": "八道江区",
            "isCity": false
          },
          {
            "countyCode": "220604",
            "countyName": "江源区",
            "isCity": false
          },
          {
            "countyCode": "220621",
            "countyName": "抚松县",
            "isCity": false
          },
          {
            "countyCode": "220622",
            "countyName": "靖宇县",
            "isCity": false
          },
          {
            "countyCode": "220623",
            "countyName": "长白朝鲜族自治县",
            "isCity": false
          },
          {
            "countyCode": "220681",
            "countyName": "临江市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "220700",
        "cityName": "松原市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "220701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "220702",
            "countyName": "宁江区",
            "isCity": false
          },
          {
            "countyCode": "220721",
            "countyName": "前郭尔罗斯蒙古族自",
            "isCity": false
          },
          {
            "countyCode": "220722",
            "countyName": "长岭县",
            "isCity": false
          },
          {
            "countyCode": "220723",
            "countyName": "乾安县",
            "isCity": false
          },
          {
            "countyCode": "220724",
            "countyName": "扶余县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "220800",
        "cityName": "白城市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "220801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "220802",
            "countyName": "洮北区",
            "isCity": false
          },
          {
            "countyCode": "220821",
            "countyName": "镇赉县",
            "isCity": false
          },
          {
            "countyCode": "220822",
            "countyName": "通榆县",
            "isCity": false
          },
          {
            "countyCode": "220881",
            "countyName": "洮南市",
            "isCity": true
          },
          {
            "countyCode": "220882",
            "countyName": "大安市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "222400",
        "cityName": "延边朝鲜族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "222401",
            "countyName": "延吉市",
            "isCity": true
          },
          {
            "countyCode": "222402",
            "countyName": "图们市",
            "isCity": true
          },
          {
            "countyCode": "222403",
            "countyName": "敦化市",
            "isCity": true
          },
          {
            "countyCode": "222404",
            "countyName": "珲春市",
            "isCity": true
          },
          {
            "countyCode": "222405",
            "countyName": "龙井市",
            "isCity": true
          },
          {
            "countyCode": "222406",
            "countyName": "和龙市",
            "isCity": true
          },
          {
            "countyCode": "222424",
            "countyName": "汪清县",
            "isCity": false
          },
          {
            "countyCode": "222426",
            "countyName": "安图县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "230000",
    "provinceName": "黑龙江省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "230100",
        "cityName": "哈尔滨市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "230101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "230102",
            "countyName": "道里区",
            "isCity": false
          },
          {
            "countyCode": "230103",
            "countyName": "南岗区",
            "isCity": false
          },
          {
            "countyCode": "230104",
            "countyName": "道外区",
            "isCity": false
          },
          {
            "countyCode": "230108",
            "countyName": "平房区",
            "isCity": false
          },
          {
            "countyCode": "230109",
            "countyName": "松北区",
            "isCity": false
          },
          {
            "countyCode": "230110",
            "countyName": "香坊区",
            "isCity": false
          },
          {
            "countyCode": "230111",
            "countyName": "呼兰区",
            "isCity": false
          },
          {
            "countyCode": "230112",
            "countyName": "阿城区",
            "isCity": false
          },
          {
            "countyCode": "230123",
            "countyName": "依兰县",
            "isCity": false
          },
          {
            "countyCode": "230124",
            "countyName": "方正县",
            "isCity": false
          },
          {
            "countyCode": "230125",
            "countyName": "宾县",
            "isCity": false
          },
          {
            "countyCode": "230126",
            "countyName": "巴彦县",
            "isCity": false
          },
          {
            "countyCode": "230127",
            "countyName": "木兰县",
            "isCity": false
          },
          {
            "countyCode": "230128",
            "countyName": "通河县",
            "isCity": false
          },
          {
            "countyCode": "230129",
            "countyName": "延寿县",
            "isCity": false
          },
          {
            "countyCode": "230182",
            "countyName": "双城市",
            "isCity": true
          },
          {
            "countyCode": "230183",
            "countyName": "尚志市",
            "isCity": true
          },
          {
            "countyCode": "230184",
            "countyName": "五常市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "230200",
        "cityName": "齐齐哈尔市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "230201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "230202",
            "countyName": "龙沙区",
            "isCity": false
          },
          {
            "countyCode": "230203",
            "countyName": "建华区",
            "isCity": false
          },
          {
            "countyCode": "230204",
            "countyName": "铁锋区",
            "isCity": false
          },
          {
            "countyCode": "230205",
            "countyName": "昂昂溪区",
            "isCity": false
          },
          {
            "countyCode": "230206",
            "countyName": "富拉尔基区",
            "isCity": false
          },
          {
            "countyCode": "230207",
            "countyName": "碾子山区",
            "isCity": false
          },
          {
            "countyCode": "230208",
            "countyName": "梅里斯达斡尔族区",
            "isCity": false
          },
          {
            "countyCode": "230221",
            "countyName": "龙江县",
            "isCity": false
          },
          {
            "countyCode": "230223",
            "countyName": "依安县",
            "isCity": false
          },
          {
            "countyCode": "230224",
            "countyName": "泰来县",
            "isCity": false
          },
          {
            "countyCode": "230225",
            "countyName": "甘南县",
            "isCity": false
          },
          {
            "countyCode": "230227",
            "countyName": "富裕县",
            "isCity": false
          },
          {
            "countyCode": "230229",
            "countyName": "克山县",
            "isCity": false
          },
          {
            "countyCode": "230230",
            "countyName": "克东县",
            "isCity": false
          },
          {
            "countyCode": "230231",
            "countyName": "拜泉县",
            "isCity": false
          },
          {
            "countyCode": "230281",
            "countyName": "讷河市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "230300",
        "cityName": "鸡西市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "230301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "230302",
            "countyName": "鸡冠区",
            "isCity": false
          },
          {
            "countyCode": "230303",
            "countyName": "恒山区",
            "isCity": false
          },
          {
            "countyCode": "230304",
            "countyName": "滴道区",
            "isCity": false
          },
          {
            "countyCode": "230305",
            "countyName": "梨树区",
            "isCity": false
          },
          {
            "countyCode": "230306",
            "countyName": "城子河区",
            "isCity": false
          },
          {
            "countyCode": "230307",
            "countyName": "麻山区",
            "isCity": false
          },
          {
            "countyCode": "230321",
            "countyName": "鸡东县",
            "isCity": false
          },
          {
            "countyCode": "230381",
            "countyName": "虎林市",
            "isCity": true
          },
          {
            "countyCode": "230382",
            "countyName": "密山市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "230400",
        "cityName": "鹤岗市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "230401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "230402",
            "countyName": "向阳区",
            "isCity": false
          },
          {
            "countyCode": "230403",
            "countyName": "工农区",
            "isCity": false
          },
          {
            "countyCode": "230404",
            "countyName": "南山区",
            "isCity": false
          },
          {
            "countyCode": "230405",
            "countyName": "兴安区",
            "isCity": false
          },
          {
            "countyCode": "230406",
            "countyName": "东山区",
            "isCity": false
          },
          {
            "countyCode": "230407",
            "countyName": "兴山区",
            "isCity": false
          },
          {
            "countyCode": "230421",
            "countyName": "萝北县",
            "isCity": false
          },
          {
            "countyCode": "230422",
            "countyName": "绥滨县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "230500",
        "cityName": "双鸭山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "230501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "230502",
            "countyName": "尖山区",
            "isCity": false
          },
          {
            "countyCode": "230503",
            "countyName": "岭东区",
            "isCity": false
          },
          {
            "countyCode": "230505",
            "countyName": "四方台区",
            "isCity": false
          },
          {
            "countyCode": "230506",
            "countyName": "宝山区",
            "isCity": false
          },
          {
            "countyCode": "230521",
            "countyName": "集贤县",
            "isCity": false
          },
          {
            "countyCode": "230522",
            "countyName": "友谊县",
            "isCity": false
          },
          {
            "countyCode": "230523",
            "countyName": "宝清县",
            "isCity": false
          },
          {
            "countyCode": "230524",
            "countyName": "饶河县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "230600",
        "cityName": "大庆市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "230601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "230602",
            "countyName": "萨尔图区",
            "isCity": false
          },
          {
            "countyCode": "230603",
            "countyName": "龙凤区",
            "isCity": false
          },
          {
            "countyCode": "230604",
            "countyName": "让胡路区",
            "isCity": false
          },
          {
            "countyCode": "230605",
            "countyName": "红岗区",
            "isCity": false
          },
          {
            "countyCode": "230606",
            "countyName": "大同区",
            "isCity": false
          },
          {
            "countyCode": "230621",
            "countyName": "肇州县",
            "isCity": false
          },
          {
            "countyCode": "230622",
            "countyName": "肇源县",
            "isCity": false
          },
          {
            "countyCode": "230623",
            "countyName": "林甸县",
            "isCity": false
          },
          {
            "countyCode": "230624",
            "countyName": "杜尔伯特蒙古族自治",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "230700",
        "cityName": "伊春市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "230701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "230702",
            "countyName": "伊春区",
            "isCity": false
          },
          {
            "countyCode": "230703",
            "countyName": "南岔区",
            "isCity": false
          },
          {
            "countyCode": "230704",
            "countyName": "友好区",
            "isCity": false
          },
          {
            "countyCode": "230705",
            "countyName": "西林区",
            "isCity": false
          },
          {
            "countyCode": "230706",
            "countyName": "翠峦区",
            "isCity": false
          },
          {
            "countyCode": "230707",
            "countyName": "新青区",
            "isCity": false
          },
          {
            "countyCode": "230708",
            "countyName": "美溪区",
            "isCity": false
          },
          {
            "countyCode": "230709",
            "countyName": "金山屯区",
            "isCity": false
          },
          {
            "countyCode": "230710",
            "countyName": "五营区",
            "isCity": false
          },
          {
            "countyCode": "230711",
            "countyName": "乌马河区",
            "isCity": false
          },
          {
            "countyCode": "230712",
            "countyName": "汤旺河区",
            "isCity": false
          },
          {
            "countyCode": "230713",
            "countyName": "带岭区",
            "isCity": false
          },
          {
            "countyCode": "230714",
            "countyName": "乌伊岭区",
            "isCity": false
          },
          {
            "countyCode": "230715",
            "countyName": "红星区",
            "isCity": false
          },
          {
            "countyCode": "230716",
            "countyName": "上甘岭区",
            "isCity": false
          },
          {
            "countyCode": "230722",
            "countyName": "嘉荫县",
            "isCity": false
          },
          {
            "countyCode": "230781",
            "countyName": "铁力市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "230800",
        "cityName": "佳木斯市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "230801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "230803",
            "countyName": "向阳区",
            "isCity": false
          },
          {
            "countyCode": "230804",
            "countyName": "前进区",
            "isCity": false
          },
          {
            "countyCode": "230805",
            "countyName": "东风区",
            "isCity": false
          },
          {
            "countyCode": "230811",
            "countyName": "郊区",
            "isCity": false
          },
          {
            "countyCode": "230822",
            "countyName": "桦南县",
            "isCity": false
          },
          {
            "countyCode": "230826",
            "countyName": "桦川县",
            "isCity": false
          },
          {
            "countyCode": "230828",
            "countyName": "汤原县",
            "isCity": false
          },
          {
            "countyCode": "230833",
            "countyName": "抚远县",
            "isCity": false
          },
          {
            "countyCode": "230881",
            "countyName": "同江市",
            "isCity": true
          },
          {
            "countyCode": "230882",
            "countyName": "富锦市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "230900",
        "cityName": "七台河市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "230901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "230902",
            "countyName": "新兴区",
            "isCity": false
          },
          {
            "countyCode": "230903",
            "countyName": "桃山区",
            "isCity": false
          },
          {
            "countyCode": "230904",
            "countyName": "茄子河区",
            "isCity": false
          },
          {
            "countyCode": "230921",
            "countyName": "勃利县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "231000",
        "cityName": "牡丹江市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "231001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "231002",
            "countyName": "东安区",
            "isCity": false
          },
          {
            "countyCode": "231003",
            "countyName": "阳明区",
            "isCity": false
          },
          {
            "countyCode": "231004",
            "countyName": "爱民区",
            "isCity": false
          },
          {
            "countyCode": "231005",
            "countyName": "西安区",
            "isCity": false
          },
          {
            "countyCode": "231024",
            "countyName": "东宁县",
            "isCity": false
          },
          {
            "countyCode": "231025",
            "countyName": "林口县",
            "isCity": false
          },
          {
            "countyCode": "231081",
            "countyName": "绥芬河市",
            "isCity": true
          },
          {
            "countyCode": "231083",
            "countyName": "海林市",
            "isCity": true
          },
          {
            "countyCode": "231084",
            "countyName": "宁安市",
            "isCity": true
          },
          {
            "countyCode": "231085",
            "countyName": "穆棱市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "231100",
        "cityName": "黑河市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "231101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "231102",
            "countyName": "爱辉区",
            "isCity": false
          },
          {
            "countyCode": "231121",
            "countyName": "嫩江县",
            "isCity": false
          },
          {
            "countyCode": "231123",
            "countyName": "逊克县",
            "isCity": false
          },
          {
            "countyCode": "231124",
            "countyName": "孙吴县",
            "isCity": false
          },
          {
            "countyCode": "231181",
            "countyName": "北安市",
            "isCity": true
          },
          {
            "countyCode": "231182",
            "countyName": "五大连池市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "231200",
        "cityName": "绥化市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "231201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "231202",
            "countyName": "北林区",
            "isCity": false
          },
          {
            "countyCode": "231221",
            "countyName": "望奎县",
            "isCity": false
          },
          {
            "countyCode": "231222",
            "countyName": "兰西县",
            "isCity": false
          },
          {
            "countyCode": "231223",
            "countyName": "青冈县",
            "isCity": false
          },
          {
            "countyCode": "231224",
            "countyName": "庆安县",
            "isCity": false
          },
          {
            "countyCode": "231225",
            "countyName": "明水县",
            "isCity": false
          },
          {
            "countyCode": "231226",
            "countyName": "绥棱县",
            "isCity": false
          },
          {
            "countyCode": "231281",
            "countyName": "安达市",
            "isCity": true
          },
          {
            "countyCode": "231282",
            "countyName": "肇东市",
            "isCity": true
          },
          {
            "countyCode": "231283",
            "countyName": "海伦市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "232700",
        "cityName": "大兴安岭地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "232701",
            "countyName": "加格达奇区",
            "isCity": false
          },
          {
            "countyCode": "232702",
            "countyName": "松岭区",
            "isCity": false
          },
          {
            "countyCode": "232703",
            "countyName": "新林区",
            "isCity": false
          },
          {
            "countyCode": "232704",
            "countyName": "呼中区",
            "isCity": false
          },
          {
            "countyCode": "232721",
            "countyName": "呼玛县",
            "isCity": false
          },
          {
            "countyCode": "232722",
            "countyName": "塔河县",
            "isCity": false
          },
          {
            "countyCode": "232723",
            "countyName": "漠河县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "310000",
    "provinceName": "上海市",
    "provinceType": 1,
    "cities": [
      {
        "cityCode": "310100",
        "cityName": "市辖区",
        "cityType": 1,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "310101",
            "countyName": "黄浦区",
            "isCity": false
          },
          {
            "countyCode": "310103",
            "countyName": "卢湾区",
            "isCity": false
          },
          {
            "countyCode": "310104",
            "countyName": "徐汇区",
            "isCity": false
          },
          {
            "countyCode": "310105",
            "countyName": "长宁区",
            "isCity": false
          },
          {
            "countyCode": "310106",
            "countyName": "静安区",
            "isCity": false
          },
          {
            "countyCode": "310107",
            "countyName": "普陀区",
            "isCity": false
          },
          {
            "countyCode": "310108",
            "countyName": "闸北区",
            "isCity": false
          },
          {
            "countyCode": "310109",
            "countyName": "虹口区",
            "isCity": false
          },
          {
            "countyCode": "310110",
            "countyName": "杨浦区",
            "isCity": false
          },
          {
            "countyCode": "310112",
            "countyName": "闵行区",
            "isCity": false
          },
          {
            "countyCode": "310113",
            "countyName": "宝山区",
            "isCity": false
          },
          {
            "countyCode": "310114",
            "countyName": "嘉定区",
            "isCity": false
          },
          {
            "countyCode": "310115",
            "countyName": "浦东新区",
            "isCity": false
          },
          {
            "countyCode": "310116",
            "countyName": "金山区",
            "isCity": false
          },
          {
            "countyCode": "310117",
            "countyName": "松江区",
            "isCity": false
          },
          {
            "countyCode": "310118",
            "countyName": "青浦区",
            "isCity": false
          },
          {
            "countyCode": "310119",
            "countyName": "南汇区",
            "isCity": false
          },
          {
            "countyCode": "310120",
            "countyName": "奉贤区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "310000",
        "cityName": "县",
        "cityType": 2,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "310230",
            "countyName": "崇明县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "320000",
    "provinceName": "江苏省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "320100",
        "cityName": "南京市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "320101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "320102",
            "countyName": "玄武区",
            "isCity": false
          },
          {
            "countyCode": "320103",
            "countyName": "白下区",
            "isCity": false
          },
          {
            "countyCode": "320104",
            "countyName": "秦淮区",
            "isCity": false
          },
          {
            "countyCode": "320105",
            "countyName": "建邺区",
            "isCity": false
          },
          {
            "countyCode": "320106",
            "countyName": "鼓楼区",
            "isCity": false
          },
          {
            "countyCode": "320107",
            "countyName": "下关区",
            "isCity": false
          },
          {
            "countyCode": "320111",
            "countyName": "浦口区",
            "isCity": false
          },
          {
            "countyCode": "320113",
            "countyName": "栖霞区",
            "isCity": false
          },
          {
            "countyCode": "320114",
            "countyName": "雨花台区",
            "isCity": false
          },
          {
            "countyCode": "320115",
            "countyName": "江宁区",
            "isCity": false
          },
          {
            "countyCode": "320116",
            "countyName": "六合区",
            "isCity": false
          },
          {
            "countyCode": "320124",
            "countyName": "溧水县",
            "isCity": false
          },
          {
            "countyCode": "320125",
            "countyName": "高淳县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "320200",
        "cityName": "无锡市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "320201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "320202",
            "countyName": "崇安区",
            "isCity": false
          },
          {
            "countyCode": "320203",
            "countyName": "南长区",
            "isCity": false
          },
          {
            "countyCode": "320204",
            "countyName": "北塘区",
            "isCity": false
          },
          {
            "countyCode": "320205",
            "countyName": "锡山区",
            "isCity": false
          },
          {
            "countyCode": "320206",
            "countyName": "惠山区",
            "isCity": false
          },
          {
            "countyCode": "320211",
            "countyName": "滨湖区",
            "isCity": false
          },
          {
            "countyCode": "320281",
            "countyName": "江阴市",
            "isCity": true
          },
          {
            "countyCode": "320282",
            "countyName": "宜兴市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "320300",
        "cityName": "徐州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "320301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "320302",
            "countyName": "鼓楼区",
            "isCity": false
          },
          {
            "countyCode": "320303",
            "countyName": "云龙区",
            "isCity": false
          },
          {
            "countyCode": "320304",
            "countyName": "九里区",
            "isCity": false
          },
          {
            "countyCode": "320305",
            "countyName": "贾汪区",
            "isCity": false
          },
          {
            "countyCode": "320311",
            "countyName": "泉山区",
            "isCity": false
          },
          {
            "countyCode": "320321",
            "countyName": "丰县",
            "isCity": false
          },
          {
            "countyCode": "320322",
            "countyName": "沛县",
            "isCity": false
          },
          {
            "countyCode": "320323",
            "countyName": "铜山县",
            "isCity": false
          },
          {
            "countyCode": "320324",
            "countyName": "睢宁县",
            "isCity": false
          },
          {
            "countyCode": "320381",
            "countyName": "新沂市",
            "isCity": true
          },
          {
            "countyCode": "320382",
            "countyName": "邳州市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "320400",
        "cityName": "常州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "320401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "320402",
            "countyName": "天宁区",
            "isCity": false
          },
          {
            "countyCode": "320404",
            "countyName": "钟楼区",
            "isCity": false
          },
          {
            "countyCode": "320405",
            "countyName": "戚墅堰区",
            "isCity": false
          },
          {
            "countyCode": "320411",
            "countyName": "新北区",
            "isCity": false
          },
          {
            "countyCode": "320412",
            "countyName": "武进区",
            "isCity": false
          },
          {
            "countyCode": "320481",
            "countyName": "溧阳市",
            "isCity": true
          },
          {
            "countyCode": "320482",
            "countyName": "金坛市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "320500",
        "cityName": "苏州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "320501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "320502",
            "countyName": "沧浪区",
            "isCity": false
          },
          {
            "countyCode": "320503",
            "countyName": "平江区",
            "isCity": false
          },
          {
            "countyCode": "320504",
            "countyName": "金阊区",
            "isCity": false
          },
          {
            "countyCode": "320505",
            "countyName": "虎丘区",
            "isCity": false
          },
          {
            "countyCode": "320506",
            "countyName": "吴中区",
            "isCity": false
          },
          {
            "countyCode": "320507",
            "countyName": "相城区",
            "isCity": false
          },
          {
            "countyCode": "320581",
            "countyName": "常熟市",
            "isCity": true
          },
          {
            "countyCode": "320582",
            "countyName": "张家港市",
            "isCity": true
          },
          {
            "countyCode": "320583",
            "countyName": "昆山市",
            "isCity": true
          },
          {
            "countyCode": "320584",
            "countyName": "吴江市",
            "isCity": true
          },
          {
            "countyCode": "320585",
            "countyName": "太仓市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "320600",
        "cityName": "南通市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "320601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "320602",
            "countyName": "崇川区",
            "isCity": false
          },
          {
            "countyCode": "320611",
            "countyName": "港闸区",
            "isCity": false
          },
          {
            "countyCode": "320621",
            "countyName": "海安县",
            "isCity": false
          },
          {
            "countyCode": "320623",
            "countyName": "如东县",
            "isCity": false
          },
          {
            "countyCode": "320681",
            "countyName": "启东市",
            "isCity": true
          },
          {
            "countyCode": "320682",
            "countyName": "如皋市",
            "isCity": true
          },
          {
            "countyCode": "320683",
            "countyName": "通州市",
            "isCity": true
          },
          {
            "countyCode": "320684",
            "countyName": "海门市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "320700",
        "cityName": "连云港市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "320701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "320703",
            "countyName": "连云区",
            "isCity": false
          },
          {
            "countyCode": "320705",
            "countyName": "新浦区",
            "isCity": false
          },
          {
            "countyCode": "320706",
            "countyName": "海州区",
            "isCity": false
          },
          {
            "countyCode": "320721",
            "countyName": "赣榆县",
            "isCity": false
          },
          {
            "countyCode": "320722",
            "countyName": "东海县",
            "isCity": false
          },
          {
            "countyCode": "320723",
            "countyName": "灌云县",
            "isCity": false
          },
          {
            "countyCode": "320724",
            "countyName": "灌南县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "320800",
        "cityName": "淮安市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "320801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "320802",
            "countyName": "清河区",
            "isCity": false
          },
          {
            "countyCode": "320803",
            "countyName": "楚州区",
            "isCity": false
          },
          {
            "countyCode": "320804",
            "countyName": "淮阴区",
            "isCity": false
          },
          {
            "countyCode": "320811",
            "countyName": "清浦区",
            "isCity": false
          },
          {
            "countyCode": "320826",
            "countyName": "涟水县",
            "isCity": false
          },
          {
            "countyCode": "320829",
            "countyName": "洪泽县",
            "isCity": false
          },
          {
            "countyCode": "320830",
            "countyName": "盱眙县",
            "isCity": false
          },
          {
            "countyCode": "320831",
            "countyName": "金湖县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "320900",
        "cityName": "盐城市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "320901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "320902",
            "countyName": "亭湖区",
            "isCity": false
          },
          {
            "countyCode": "320903",
            "countyName": "盐都区",
            "isCity": false
          },
          {
            "countyCode": "320921",
            "countyName": "响水县",
            "isCity": false
          },
          {
            "countyCode": "320922",
            "countyName": "滨海县",
            "isCity": false
          },
          {
            "countyCode": "320923",
            "countyName": "阜宁县",
            "isCity": false
          },
          {
            "countyCode": "320924",
            "countyName": "射阳县",
            "isCity": false
          },
          {
            "countyCode": "320925",
            "countyName": "建湖县",
            "isCity": false
          },
          {
            "countyCode": "320981",
            "countyName": "东台市",
            "isCity": true
          },
          {
            "countyCode": "320982",
            "countyName": "大丰市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "321000",
        "cityName": "扬州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "321001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "321002",
            "countyName": "广陵区",
            "isCity": false
          },
          {
            "countyCode": "321003",
            "countyName": "邗江区",
            "isCity": false
          },
          {
            "countyCode": "321011",
            "countyName": "维扬区",
            "isCity": false
          },
          {
            "countyCode": "321023",
            "countyName": "宝应县",
            "isCity": false
          },
          {
            "countyCode": "321081",
            "countyName": "仪征市",
            "isCity": true
          },
          {
            "countyCode": "321084",
            "countyName": "高邮市",
            "isCity": true
          },
          {
            "countyCode": "321088",
            "countyName": "江都市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "321100",
        "cityName": "镇江市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "321101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "321102",
            "countyName": "京口区",
            "isCity": false
          },
          {
            "countyCode": "321111",
            "countyName": "润州区",
            "isCity": false
          },
          {
            "countyCode": "321112",
            "countyName": "丹徒区",
            "isCity": false
          },
          {
            "countyCode": "321181",
            "countyName": "丹阳市",
            "isCity": true
          },
          {
            "countyCode": "321182",
            "countyName": "扬中市",
            "isCity": true
          },
          {
            "countyCode": "321183",
            "countyName": "句容市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "321200",
        "cityName": "泰州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "321201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "321202",
            "countyName": "海陵区",
            "isCity": false
          },
          {
            "countyCode": "321203",
            "countyName": "高港区",
            "isCity": false
          },
          {
            "countyCode": "321281",
            "countyName": "兴化市",
            "isCity": true
          },
          {
            "countyCode": "321282",
            "countyName": "靖江市",
            "isCity": true
          },
          {
            "countyCode": "321283",
            "countyName": "泰兴市",
            "isCity": true
          },
          {
            "countyCode": "321284",
            "countyName": "姜堰市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "321300",
        "cityName": "宿迁市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "321301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "321302",
            "countyName": "宿城区",
            "isCity": false
          },
          {
            "countyCode": "321311",
            "countyName": "宿豫区",
            "isCity": false
          },
          {
            "countyCode": "321322",
            "countyName": "沭阳县",
            "isCity": false
          },
          {
            "countyCode": "321323",
            "countyName": "泗阳县",
            "isCity": false
          },
          {
            "countyCode": "321324",
            "countyName": "泗洪县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "330000",
    "provinceName": "浙江省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "330100",
        "cityName": "杭州市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "330101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "330102",
            "countyName": "上城区",
            "isCity": false
          },
          {
            "countyCode": "330103",
            "countyName": "下城区",
            "isCity": false
          },
          {
            "countyCode": "330104",
            "countyName": "江干区",
            "isCity": false
          },
          {
            "countyCode": "330105",
            "countyName": "拱墅区",
            "isCity": false
          },
          {
            "countyCode": "330106",
            "countyName": "西湖区",
            "isCity": false
          },
          {
            "countyCode": "330108",
            "countyName": "滨江区",
            "isCity": false
          },
          {
            "countyCode": "330109",
            "countyName": "萧山区",
            "isCity": false
          },
          {
            "countyCode": "330110",
            "countyName": "余杭区",
            "isCity": false
          },
          {
            "countyCode": "330122",
            "countyName": "桐庐县",
            "isCity": false
          },
          {
            "countyCode": "330127",
            "countyName": "淳安县",
            "isCity": false
          },
          {
            "countyCode": "330182",
            "countyName": "建德市",
            "isCity": true
          },
          {
            "countyCode": "330183",
            "countyName": "富阳市",
            "isCity": true
          },
          {
            "countyCode": "330185",
            "countyName": "临安市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "330200",
        "cityName": "宁波市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "330201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "330203",
            "countyName": "海曙区",
            "isCity": false
          },
          {
            "countyCode": "330204",
            "countyName": "江东区",
            "isCity": false
          },
          {
            "countyCode": "330205",
            "countyName": "江北区",
            "isCity": false
          },
          {
            "countyCode": "330206",
            "countyName": "北仑区",
            "isCity": false
          },
          {
            "countyCode": "330211",
            "countyName": "镇海区",
            "isCity": false
          },
          {
            "countyCode": "330212",
            "countyName": "鄞州区",
            "isCity": false
          },
          {
            "countyCode": "330225",
            "countyName": "象山县",
            "isCity": false
          },
          {
            "countyCode": "330226",
            "countyName": "宁海县",
            "isCity": false
          },
          {
            "countyCode": "330281",
            "countyName": "余姚市",
            "isCity": true
          },
          {
            "countyCode": "330282",
            "countyName": "慈溪市",
            "isCity": true
          },
          {
            "countyCode": "330283",
            "countyName": "奉化市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "330300",
        "cityName": "温州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "330301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "330302",
            "countyName": "鹿城区",
            "isCity": false
          },
          {
            "countyCode": "330303",
            "countyName": "龙湾区",
            "isCity": false
          },
          {
            "countyCode": "330304",
            "countyName": "瓯海区",
            "isCity": false
          },
          {
            "countyCode": "330322",
            "countyName": "洞头县",
            "isCity": false
          },
          {
            "countyCode": "330324",
            "countyName": "永嘉县",
            "isCity": false
          },
          {
            "countyCode": "330326",
            "countyName": "平阳县",
            "isCity": false
          },
          {
            "countyCode": "330327",
            "countyName": "苍南县",
            "isCity": false
          },
          {
            "countyCode": "330328",
            "countyName": "文成县",
            "isCity": false
          },
          {
            "countyCode": "330329",
            "countyName": "泰顺县",
            "isCity": false
          },
          {
            "countyCode": "330381",
            "countyName": "瑞安市",
            "isCity": true
          },
          {
            "countyCode": "330382",
            "countyName": "乐清市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "330400",
        "cityName": "嘉兴市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "330401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "330402",
            "countyName": "秀城区",
            "isCity": false
          },
          {
            "countyCode": "330411",
            "countyName": "秀洲区",
            "isCity": false
          },
          {
            "countyCode": "330421",
            "countyName": "嘉善县",
            "isCity": false
          },
          {
            "countyCode": "330424",
            "countyName": "海盐县",
            "isCity": false
          },
          {
            "countyCode": "330481",
            "countyName": "海宁市",
            "isCity": true
          },
          {
            "countyCode": "330482",
            "countyName": "平湖市",
            "isCity": true
          },
          {
            "countyCode": "330483",
            "countyName": "桐乡市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "330500",
        "cityName": "湖州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "330501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "330502",
            "countyName": "吴兴区",
            "isCity": false
          },
          {
            "countyCode": "330503",
            "countyName": "南浔区",
            "isCity": false
          },
          {
            "countyCode": "330521",
            "countyName": "德清县",
            "isCity": false
          },
          {
            "countyCode": "330522",
            "countyName": "长兴县",
            "isCity": false
          },
          {
            "countyCode": "330523",
            "countyName": "安吉县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "330600",
        "cityName": "绍兴市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "330601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "330602",
            "countyName": "越城区",
            "isCity": false
          },
          {
            "countyCode": "330621",
            "countyName": "绍兴县",
            "isCity": false
          },
          {
            "countyCode": "330624",
            "countyName": "新昌县",
            "isCity": false
          },
          {
            "countyCode": "330681",
            "countyName": "诸暨市",
            "isCity": true
          },
          {
            "countyCode": "330682",
            "countyName": "上虞市",
            "isCity": true
          },
          {
            "countyCode": "330683",
            "countyName": "嵊州市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "330700",
        "cityName": "金华市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "330701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "330702",
            "countyName": "婺城区",
            "isCity": false
          },
          {
            "countyCode": "330703",
            "countyName": "金东区",
            "isCity": false
          },
          {
            "countyCode": "330723",
            "countyName": "武义县",
            "isCity": false
          },
          {
            "countyCode": "330726",
            "countyName": "浦江县",
            "isCity": false
          },
          {
            "countyCode": "330727",
            "countyName": "磐安县",
            "isCity": false
          },
          {
            "countyCode": "330781",
            "countyName": "兰溪市",
            "isCity": true
          },
          {
            "countyCode": "330782",
            "countyName": "义乌市",
            "isCity": true
          },
          {
            "countyCode": "330783",
            "countyName": "东阳市",
            "isCity": true
          },
          {
            "countyCode": "330784",
            "countyName": "永康市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "330800",
        "cityName": "衢州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "330801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "330802",
            "countyName": "柯城区",
            "isCity": false
          },
          {
            "countyCode": "330803",
            "countyName": "衢江区",
            "isCity": false
          },
          {
            "countyCode": "330822",
            "countyName": "常山县",
            "isCity": false
          },
          {
            "countyCode": "330824",
            "countyName": "开化县",
            "isCity": false
          },
          {
            "countyCode": "330825",
            "countyName": "龙游县",
            "isCity": false
          },
          {
            "countyCode": "330881",
            "countyName": "江山市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "330900",
        "cityName": "舟山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "330901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "330902",
            "countyName": "定海区",
            "isCity": false
          },
          {
            "countyCode": "330903",
            "countyName": "普陀区",
            "isCity": false
          },
          {
            "countyCode": "330921",
            "countyName": "岱山县",
            "isCity": false
          },
          {
            "countyCode": "330922",
            "countyName": "嵊泗县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "331000",
        "cityName": "台州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "331001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "331002",
            "countyName": "椒江区",
            "isCity": false
          },
          {
            "countyCode": "331003",
            "countyName": "黄岩区",
            "isCity": false
          },
          {
            "countyCode": "331004",
            "countyName": "路桥区",
            "isCity": false
          },
          {
            "countyCode": "331021",
            "countyName": "玉环县",
            "isCity": false
          },
          {
            "countyCode": "331022",
            "countyName": "三门县",
            "isCity": false
          },
          {
            "countyCode": "331023",
            "countyName": "天台县",
            "isCity": false
          },
          {
            "countyCode": "331024",
            "countyName": "仙居县",
            "isCity": false
          },
          {
            "countyCode": "331081",
            "countyName": "温岭市",
            "isCity": true
          },
          {
            "countyCode": "331082",
            "countyName": "临海市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "331100",
        "cityName": "丽水市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "331101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "331102",
            "countyName": "莲都区",
            "isCity": false
          },
          {
            "countyCode": "331121",
            "countyName": "青田县",
            "isCity": false
          },
          {
            "countyCode": "331122",
            "countyName": "缙云县",
            "isCity": false
          },
          {
            "countyCode": "331123",
            "countyName": "遂昌县",
            "isCity": false
          },
          {
            "countyCode": "331124",
            "countyName": "松阳县",
            "isCity": false
          },
          {
            "countyCode": "331125",
            "countyName": "云和县",
            "isCity": false
          },
          {
            "countyCode": "331126",
            "countyName": "庆元县",
            "isCity": false
          },
          {
            "countyCode": "331127",
            "countyName": "景宁畲族自治县",
            "isCity": false
          },
          {
            "countyCode": "331181",
            "countyName": "龙泉市",
            "isCity": true
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "340000",
    "provinceName": "安徽省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "340100",
        "cityName": "合肥市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "340101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "340102",
            "countyName": "瑶海区",
            "isCity": false
          },
          {
            "countyCode": "340103",
            "countyName": "庐阳区",
            "isCity": false
          },
          {
            "countyCode": "340104",
            "countyName": "蜀山区",
            "isCity": false
          },
          {
            "countyCode": "340111",
            "countyName": "包河区",
            "isCity": false
          },
          {
            "countyCode": "340121",
            "countyName": "长丰县",
            "isCity": false
          },
          {
            "countyCode": "340122",
            "countyName": "肥东县",
            "isCity": false
          },
          {
            "countyCode": "340123",
            "countyName": "肥西县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "340200",
        "cityName": "芜湖市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "340201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "340202",
            "countyName": "镜湖区",
            "isCity": false
          },
          {
            "countyCode": "340203",
            "countyName": "弋江区",
            "isCity": false
          },
          {
            "countyCode": "340207",
            "countyName": "鸠江区",
            "isCity": false
          },
          {
            "countyCode": "340208",
            "countyName": "三山区",
            "isCity": false
          },
          {
            "countyCode": "340221",
            "countyName": "芜湖县",
            "isCity": false
          },
          {
            "countyCode": "340222",
            "countyName": "繁昌县",
            "isCity": false
          },
          {
            "countyCode": "340223",
            "countyName": "南陵县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "340300",
        "cityName": "蚌埠市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "340301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "340302",
            "countyName": "龙子湖区",
            "isCity": false
          },
          {
            "countyCode": "340303",
            "countyName": "蚌山区",
            "isCity": false
          },
          {
            "countyCode": "340304",
            "countyName": "禹会区",
            "isCity": false
          },
          {
            "countyCode": "340311",
            "countyName": "淮上区",
            "isCity": false
          },
          {
            "countyCode": "340321",
            "countyName": "怀远县",
            "isCity": false
          },
          {
            "countyCode": "340322",
            "countyName": "五河县",
            "isCity": false
          },
          {
            "countyCode": "340323",
            "countyName": "固镇县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "340400",
        "cityName": "淮南市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "340401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "340402",
            "countyName": "大通区",
            "isCity": false
          },
          {
            "countyCode": "340403",
            "countyName": "田家庵区",
            "isCity": false
          },
          {
            "countyCode": "340404",
            "countyName": "谢家集区",
            "isCity": false
          },
          {
            "countyCode": "340405",
            "countyName": "八公山区",
            "isCity": false
          },
          {
            "countyCode": "340406",
            "countyName": "潘集区",
            "isCity": false
          },
          {
            "countyCode": "340421",
            "countyName": "凤台县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "340500",
        "cityName": "马鞍山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "340501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "340502",
            "countyName": "金家庄区",
            "isCity": false
          },
          {
            "countyCode": "340503",
            "countyName": "花山区",
            "isCity": false
          },
          {
            "countyCode": "340504",
            "countyName": "雨山区",
            "isCity": false
          },
          {
            "countyCode": "340521",
            "countyName": "当涂县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "340600",
        "cityName": "淮北市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "340601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "340602",
            "countyName": "杜集区",
            "isCity": false
          },
          {
            "countyCode": "340603",
            "countyName": "相山区",
            "isCity": false
          },
          {
            "countyCode": "340604",
            "countyName": "烈山区",
            "isCity": false
          },
          {
            "countyCode": "340621",
            "countyName": "濉溪县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "340700",
        "cityName": "铜陵市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "340701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "340702",
            "countyName": "铜官山区",
            "isCity": false
          },
          {
            "countyCode": "340703",
            "countyName": "狮子山区",
            "isCity": false
          },
          {
            "countyCode": "340711",
            "countyName": "郊区",
            "isCity": false
          },
          {
            "countyCode": "340721",
            "countyName": "铜陵县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "340800",
        "cityName": "安庆市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "340801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "340802",
            "countyName": "迎江区",
            "isCity": false
          },
          {
            "countyCode": "340803",
            "countyName": "大观区",
            "isCity": false
          },
          {
            "countyCode": "340811",
            "countyName": "宜秀区",
            "isCity": false
          },
          {
            "countyCode": "340822",
            "countyName": "怀宁县",
            "isCity": false
          },
          {
            "countyCode": "340823",
            "countyName": "枞阳县",
            "isCity": false
          },
          {
            "countyCode": "340824",
            "countyName": "潜山县",
            "isCity": false
          },
          {
            "countyCode": "340825",
            "countyName": "太湖县",
            "isCity": false
          },
          {
            "countyCode": "340826",
            "countyName": "宿松县",
            "isCity": false
          },
          {
            "countyCode": "340827",
            "countyName": "望江县",
            "isCity": false
          },
          {
            "countyCode": "340828",
            "countyName": "岳西县",
            "isCity": false
          },
          {
            "countyCode": "340881",
            "countyName": "桐城市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "341000",
        "cityName": "黄山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "341001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "341002",
            "countyName": "屯溪区",
            "isCity": false
          },
          {
            "countyCode": "341003",
            "countyName": "黄山区",
            "isCity": false
          },
          {
            "countyCode": "341004",
            "countyName": "徽州区",
            "isCity": false
          },
          {
            "countyCode": "341021",
            "countyName": "歙县",
            "isCity": false
          },
          {
            "countyCode": "341022",
            "countyName": "休宁县",
            "isCity": false
          },
          {
            "countyCode": "341023",
            "countyName": "黟县",
            "isCity": false
          },
          {
            "countyCode": "341024",
            "countyName": "祁门县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "341100",
        "cityName": "滁州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "341101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "341102",
            "countyName": "琅琊区",
            "isCity": false
          },
          {
            "countyCode": "341103",
            "countyName": "南谯区",
            "isCity": false
          },
          {
            "countyCode": "341122",
            "countyName": "来安县",
            "isCity": false
          },
          {
            "countyCode": "341124",
            "countyName": "全椒县",
            "isCity": false
          },
          {
            "countyCode": "341125",
            "countyName": "定远县",
            "isCity": false
          },
          {
            "countyCode": "341126",
            "countyName": "凤阳县",
            "isCity": false
          },
          {
            "countyCode": "341181",
            "countyName": "天长市",
            "isCity": true
          },
          {
            "countyCode": "341182",
            "countyName": "明光市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "341200",
        "cityName": "阜阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "341201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "341202",
            "countyName": "颍州区",
            "isCity": false
          },
          {
            "countyCode": "341203",
            "countyName": "颍东区",
            "isCity": false
          },
          {
            "countyCode": "341204",
            "countyName": "颍泉区",
            "isCity": false
          },
          {
            "countyCode": "341221",
            "countyName": "临泉县",
            "isCity": false
          },
          {
            "countyCode": "341222",
            "countyName": "太和县",
            "isCity": false
          },
          {
            "countyCode": "341225",
            "countyName": "阜南县",
            "isCity": false
          },
          {
            "countyCode": "341226",
            "countyName": "颍上县",
            "isCity": false
          },
          {
            "countyCode": "341282",
            "countyName": "界首市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "341300",
        "cityName": "宿州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "341301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "341302",
            "countyName": "埇桥区",
            "isCity": false
          },
          {
            "countyCode": "341321",
            "countyName": "砀山县",
            "isCity": false
          },
          {
            "countyCode": "341322",
            "countyName": "萧县",
            "isCity": false
          },
          {
            "countyCode": "341323",
            "countyName": "灵璧县",
            "isCity": false
          },
          {
            "countyCode": "341324",
            "countyName": "泗县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "341400",
        "cityName": "巢湖市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "341401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "341402",
            "countyName": "居巢区",
            "isCity": false
          },
          {
            "countyCode": "341421",
            "countyName": "庐江县",
            "isCity": false
          },
          {
            "countyCode": "341422",
            "countyName": "无为县",
            "isCity": false
          },
          {
            "countyCode": "341423",
            "countyName": "含山县",
            "isCity": false
          },
          {
            "countyCode": "341424",
            "countyName": "和县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "341500",
        "cityName": "六安市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "341501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "341502",
            "countyName": "金安区",
            "isCity": false
          },
          {
            "countyCode": "341503",
            "countyName": "裕安区",
            "isCity": false
          },
          {
            "countyCode": "341521",
            "countyName": "寿县",
            "isCity": false
          },
          {
            "countyCode": "341522",
            "countyName": "霍邱县",
            "isCity": false
          },
          {
            "countyCode": "341523",
            "countyName": "舒城县",
            "isCity": false
          },
          {
            "countyCode": "341524",
            "countyName": "金寨县",
            "isCity": false
          },
          {
            "countyCode": "341525",
            "countyName": "霍山县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "341600",
        "cityName": "亳州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "341601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "341602",
            "countyName": "谯城区",
            "isCity": false
          },
          {
            "countyCode": "341621",
            "countyName": "涡阳县",
            "isCity": false
          },
          {
            "countyCode": "341622",
            "countyName": "蒙城县",
            "isCity": false
          },
          {
            "countyCode": "341623",
            "countyName": "利辛县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "341700",
        "cityName": "池州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "341701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "341702",
            "countyName": "贵池区",
            "isCity": false
          },
          {
            "countyCode": "341721",
            "countyName": "东至县",
            "isCity": false
          },
          {
            "countyCode": "341722",
            "countyName": "石台县",
            "isCity": false
          },
          {
            "countyCode": "341723",
            "countyName": "青阳县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "341800",
        "cityName": "宣城市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "341801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "341802",
            "countyName": "宣州区",
            "isCity": false
          },
          {
            "countyCode": "341821",
            "countyName": "郎溪县",
            "isCity": false
          },
          {
            "countyCode": "341822",
            "countyName": "广德县",
            "isCity": false
          },
          {
            "countyCode": "341823",
            "countyName": "泾县",
            "isCity": false
          },
          {
            "countyCode": "341824",
            "countyName": "绩溪县",
            "isCity": false
          },
          {
            "countyCode": "341825",
            "countyName": "旌德县",
            "isCity": false
          },
          {
            "countyCode": "341881",
            "countyName": "宁国市",
            "isCity": true
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "350000",
    "provinceName": "福建省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "350100",
        "cityName": "福州市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "350101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "350102",
            "countyName": "鼓楼区",
            "isCity": false
          },
          {
            "countyCode": "350103",
            "countyName": "台江区",
            "isCity": false
          },
          {
            "countyCode": "350104",
            "countyName": "仓山区",
            "isCity": false
          },
          {
            "countyCode": "350105",
            "countyName": "马尾区",
            "isCity": false
          },
          {
            "countyCode": "350111",
            "countyName": "晋安区",
            "isCity": false
          },
          {
            "countyCode": "350121",
            "countyName": "闽侯县",
            "isCity": false
          },
          {
            "countyCode": "350122",
            "countyName": "连江县",
            "isCity": false
          },
          {
            "countyCode": "350123",
            "countyName": "罗源县",
            "isCity": false
          },
          {
            "countyCode": "350124",
            "countyName": "闽清县",
            "isCity": false
          },
          {
            "countyCode": "350125",
            "countyName": "永泰县",
            "isCity": false
          },
          {
            "countyCode": "350128",
            "countyName": "平潭县",
            "isCity": false
          },
          {
            "countyCode": "350181",
            "countyName": "福清市",
            "isCity": true
          },
          {
            "countyCode": "350182",
            "countyName": "长乐市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "350200",
        "cityName": "厦门市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "350201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "350203",
            "countyName": "思明区",
            "isCity": false
          },
          {
            "countyCode": "350205",
            "countyName": "海沧区",
            "isCity": false
          },
          {
            "countyCode": "350206",
            "countyName": "湖里区",
            "isCity": false
          },
          {
            "countyCode": "350211",
            "countyName": "集美区",
            "isCity": false
          },
          {
            "countyCode": "350212",
            "countyName": "同安区",
            "isCity": false
          },
          {
            "countyCode": "350213",
            "countyName": "翔安区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "350300",
        "cityName": "莆田市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "350301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "350302",
            "countyName": "城厢区",
            "isCity": false
          },
          {
            "countyCode": "350303",
            "countyName": "涵江区",
            "isCity": false
          },
          {
            "countyCode": "350304",
            "countyName": "荔城区",
            "isCity": false
          },
          {
            "countyCode": "350305",
            "countyName": "秀屿区",
            "isCity": false
          },
          {
            "countyCode": "350322",
            "countyName": "仙游县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "350400",
        "cityName": "三明市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "350401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "350402",
            "countyName": "梅列区",
            "isCity": false
          },
          {
            "countyCode": "350403",
            "countyName": "三元区",
            "isCity": false
          },
          {
            "countyCode": "350421",
            "countyName": "明溪县",
            "isCity": false
          },
          {
            "countyCode": "350423",
            "countyName": "清流县",
            "isCity": false
          },
          {
            "countyCode": "350424",
            "countyName": "宁化县",
            "isCity": false
          },
          {
            "countyCode": "350425",
            "countyName": "大田县",
            "isCity": false
          },
          {
            "countyCode": "350426",
            "countyName": "尤溪县",
            "isCity": false
          },
          {
            "countyCode": "350427",
            "countyName": "沙县",
            "isCity": false
          },
          {
            "countyCode": "350428",
            "countyName": "将乐县",
            "isCity": false
          },
          {
            "countyCode": "350429",
            "countyName": "泰宁县",
            "isCity": false
          },
          {
            "countyCode": "350430",
            "countyName": "建宁县",
            "isCity": false
          },
          {
            "countyCode": "350481",
            "countyName": "永安市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "350500",
        "cityName": "泉州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "350501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "350502",
            "countyName": "鲤城区",
            "isCity": false
          },
          {
            "countyCode": "350503",
            "countyName": "丰泽区",
            "isCity": false
          },
          {
            "countyCode": "350504",
            "countyName": "洛江区",
            "isCity": false
          },
          {
            "countyCode": "350505",
            "countyName": "泉港区",
            "isCity": false
          },
          {
            "countyCode": "350521",
            "countyName": "惠安县",
            "isCity": false
          },
          {
            "countyCode": "350524",
            "countyName": "安溪县",
            "isCity": false
          },
          {
            "countyCode": "350525",
            "countyName": "永春县",
            "isCity": false
          },
          {
            "countyCode": "350526",
            "countyName": "德化县",
            "isCity": false
          },
          {
            "countyCode": "350527",
            "countyName": "金门县",
            "isCity": false
          },
          {
            "countyCode": "350581",
            "countyName": "石狮市",
            "isCity": true
          },
          {
            "countyCode": "350582",
            "countyName": "晋江市",
            "isCity": true
          },
          {
            "countyCode": "350583",
            "countyName": "南安市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "350600",
        "cityName": "漳州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "350601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "350602",
            "countyName": "芗城区",
            "isCity": false
          },
          {
            "countyCode": "350603",
            "countyName": "龙文区",
            "isCity": false
          },
          {
            "countyCode": "350622",
            "countyName": "云霄县",
            "isCity": false
          },
          {
            "countyCode": "350623",
            "countyName": "漳浦县",
            "isCity": false
          },
          {
            "countyCode": "350624",
            "countyName": "诏安县",
            "isCity": false
          },
          {
            "countyCode": "350625",
            "countyName": "长泰县",
            "isCity": false
          },
          {
            "countyCode": "350626",
            "countyName": "东山县",
            "isCity": false
          },
          {
            "countyCode": "350627",
            "countyName": "南靖县",
            "isCity": false
          },
          {
            "countyCode": "350628",
            "countyName": "平和县",
            "isCity": false
          },
          {
            "countyCode": "350629",
            "countyName": "华安县",
            "isCity": false
          },
          {
            "countyCode": "350681",
            "countyName": "龙海市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "350700",
        "cityName": "南平市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "350701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "350702",
            "countyName": "延平区",
            "isCity": false
          },
          {
            "countyCode": "350721",
            "countyName": "顺昌县",
            "isCity": false
          },
          {
            "countyCode": "350722",
            "countyName": "浦城县",
            "isCity": false
          },
          {
            "countyCode": "350723",
            "countyName": "光泽县",
            "isCity": false
          },
          {
            "countyCode": "350724",
            "countyName": "松溪县",
            "isCity": false
          },
          {
            "countyCode": "350725",
            "countyName": "政和县",
            "isCity": false
          },
          {
            "countyCode": "350781",
            "countyName": "邵武市",
            "isCity": true
          },
          {
            "countyCode": "350782",
            "countyName": "武夷山市",
            "isCity": true
          },
          {
            "countyCode": "350783",
            "countyName": "建瓯市",
            "isCity": true
          },
          {
            "countyCode": "350784",
            "countyName": "建阳市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "350800",
        "cityName": "龙岩市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "350801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "350802",
            "countyName": "新罗区",
            "isCity": false
          },
          {
            "countyCode": "350821",
            "countyName": "长汀县",
            "isCity": false
          },
          {
            "countyCode": "350822",
            "countyName": "永定县",
            "isCity": false
          },
          {
            "countyCode": "350823",
            "countyName": "上杭县",
            "isCity": false
          },
          {
            "countyCode": "350824",
            "countyName": "武平县",
            "isCity": false
          },
          {
            "countyCode": "350825",
            "countyName": "连城县",
            "isCity": false
          },
          {
            "countyCode": "350881",
            "countyName": "漳平市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "350900",
        "cityName": "宁德市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "350901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "350902",
            "countyName": "蕉城区",
            "isCity": false
          },
          {
            "countyCode": "350921",
            "countyName": "霞浦县",
            "isCity": false
          },
          {
            "countyCode": "350922",
            "countyName": "古田县",
            "isCity": false
          },
          {
            "countyCode": "350923",
            "countyName": "屏南县",
            "isCity": false
          },
          {
            "countyCode": "350924",
            "countyName": "寿宁县",
            "isCity": false
          },
          {
            "countyCode": "350925",
            "countyName": "周宁县",
            "isCity": false
          },
          {
            "countyCode": "350926",
            "countyName": "柘荣县",
            "isCity": false
          },
          {
            "countyCode": "350981",
            "countyName": "福安市",
            "isCity": true
          },
          {
            "countyCode": "350982",
            "countyName": "福鼎市",
            "isCity": true
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "360000",
    "provinceName": "江西省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "360100",
        "cityName": "南昌市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "360101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "360102",
            "countyName": "东湖区",
            "isCity": false
          },
          {
            "countyCode": "360103",
            "countyName": "西湖区",
            "isCity": false
          },
          {
            "countyCode": "360104",
            "countyName": "青云谱区",
            "isCity": false
          },
          {
            "countyCode": "360105",
            "countyName": "湾里区",
            "isCity": false
          },
          {
            "countyCode": "360111",
            "countyName": "青山湖区",
            "isCity": false
          },
          {
            "countyCode": "360121",
            "countyName": "南昌县",
            "isCity": false
          },
          {
            "countyCode": "360122",
            "countyName": "新建县",
            "isCity": false
          },
          {
            "countyCode": "360123",
            "countyName": "安义县",
            "isCity": false
          },
          {
            "countyCode": "360124",
            "countyName": "进贤县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "360200",
        "cityName": "景德镇市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "360201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "360202",
            "countyName": "昌江区",
            "isCity": false
          },
          {
            "countyCode": "360203",
            "countyName": "珠山区",
            "isCity": false
          },
          {
            "countyCode": "360222",
            "countyName": "浮梁县",
            "isCity": false
          },
          {
            "countyCode": "360281",
            "countyName": "乐平市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "360300",
        "cityName": "萍乡市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "360301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "360302",
            "countyName": "安源区",
            "isCity": false
          },
          {
            "countyCode": "360313",
            "countyName": "湘东区",
            "isCity": false
          },
          {
            "countyCode": "360321",
            "countyName": "莲花县",
            "isCity": false
          },
          {
            "countyCode": "360322",
            "countyName": "上栗县",
            "isCity": false
          },
          {
            "countyCode": "360323",
            "countyName": "芦溪县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "360400",
        "cityName": "九江市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "360401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "360402",
            "countyName": "庐山区",
            "isCity": false
          },
          {
            "countyCode": "360403",
            "countyName": "浔阳区",
            "isCity": false
          },
          {
            "countyCode": "360421",
            "countyName": "九江县",
            "isCity": false
          },
          {
            "countyCode": "360423",
            "countyName": "武宁县",
            "isCity": false
          },
          {
            "countyCode": "360424",
            "countyName": "修水县",
            "isCity": false
          },
          {
            "countyCode": "360425",
            "countyName": "永修县",
            "isCity": false
          },
          {
            "countyCode": "360426",
            "countyName": "德安县",
            "isCity": false
          },
          {
            "countyCode": "360427",
            "countyName": "星子县",
            "isCity": false
          },
          {
            "countyCode": "360428",
            "countyName": "都昌县",
            "isCity": false
          },
          {
            "countyCode": "360429",
            "countyName": "湖口县",
            "isCity": false
          },
          {
            "countyCode": "360430",
            "countyName": "彭泽县",
            "isCity": false
          },
          {
            "countyCode": "360481",
            "countyName": "瑞昌市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "360500",
        "cityName": "新余市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "360501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "360502",
            "countyName": "渝水区",
            "isCity": false
          },
          {
            "countyCode": "360521",
            "countyName": "分宜县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "360600",
        "cityName": "鹰潭市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "360601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "360602",
            "countyName": "月湖区",
            "isCity": false
          },
          {
            "countyCode": "360622",
            "countyName": "余江县",
            "isCity": false
          },
          {
            "countyCode": "360681",
            "countyName": "贵溪市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "360700",
        "cityName": "赣州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "360701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "360702",
            "countyName": "章贡区",
            "isCity": false
          },
          {
            "countyCode": "360721",
            "countyName": "赣县",
            "isCity": false
          },
          {
            "countyCode": "360722",
            "countyName": "信丰县",
            "isCity": false
          },
          {
            "countyCode": "360723",
            "countyName": "大余县",
            "isCity": false
          },
          {
            "countyCode": "360724",
            "countyName": "上犹县",
            "isCity": false
          },
          {
            "countyCode": "360725",
            "countyName": "崇义县",
            "isCity": false
          },
          {
            "countyCode": "360726",
            "countyName": "安远县",
            "isCity": false
          },
          {
            "countyCode": "360727",
            "countyName": "龙南县",
            "isCity": false
          },
          {
            "countyCode": "360728",
            "countyName": "定南县",
            "isCity": false
          },
          {
            "countyCode": "360729",
            "countyName": "全南县",
            "isCity": false
          },
          {
            "countyCode": "360730",
            "countyName": "宁都县",
            "isCity": false
          },
          {
            "countyCode": "360731",
            "countyName": "于都县",
            "isCity": false
          },
          {
            "countyCode": "360732",
            "countyName": "兴国县",
            "isCity": false
          },
          {
            "countyCode": "360733",
            "countyName": "会昌县",
            "isCity": false
          },
          {
            "countyCode": "360734",
            "countyName": "寻乌县",
            "isCity": false
          },
          {
            "countyCode": "360735",
            "countyName": "石城县",
            "isCity": false
          },
          {
            "countyCode": "360781",
            "countyName": "瑞金市",
            "isCity": true
          },
          {
            "countyCode": "360782",
            "countyName": "南康市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "360800",
        "cityName": "吉安市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "360801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "360802",
            "countyName": "吉州区",
            "isCity": false
          },
          {
            "countyCode": "360803",
            "countyName": "青原区",
            "isCity": false
          },
          {
            "countyCode": "360821",
            "countyName": "吉安县",
            "isCity": false
          },
          {
            "countyCode": "360822",
            "countyName": "吉水县",
            "isCity": false
          },
          {
            "countyCode": "360823",
            "countyName": "峡江县",
            "isCity": false
          },
          {
            "countyCode": "360824",
            "countyName": "新干县",
            "isCity": false
          },
          {
            "countyCode": "360825",
            "countyName": "永丰县",
            "isCity": false
          },
          {
            "countyCode": "360826",
            "countyName": "泰和县",
            "isCity": false
          },
          {
            "countyCode": "360827",
            "countyName": "遂川县",
            "isCity": false
          },
          {
            "countyCode": "360828",
            "countyName": "万安县",
            "isCity": false
          },
          {
            "countyCode": "360829",
            "countyName": "安福县",
            "isCity": false
          },
          {
            "countyCode": "360830",
            "countyName": "永新县",
            "isCity": false
          },
          {
            "countyCode": "360881",
            "countyName": "井冈山市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "360900",
        "cityName": "宜春市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "360901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "360902",
            "countyName": "袁州区",
            "isCity": false
          },
          {
            "countyCode": "360921",
            "countyName": "奉新县",
            "isCity": false
          },
          {
            "countyCode": "360922",
            "countyName": "万载县",
            "isCity": false
          },
          {
            "countyCode": "360923",
            "countyName": "上高县",
            "isCity": false
          },
          {
            "countyCode": "360924",
            "countyName": "宜丰县",
            "isCity": false
          },
          {
            "countyCode": "360925",
            "countyName": "靖安县",
            "isCity": false
          },
          {
            "countyCode": "360926",
            "countyName": "铜鼓县",
            "isCity": false
          },
          {
            "countyCode": "360981",
            "countyName": "丰城市",
            "isCity": true
          },
          {
            "countyCode": "360982",
            "countyName": "樟树市",
            "isCity": true
          },
          {
            "countyCode": "360983",
            "countyName": "高安市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "361000",
        "cityName": "抚州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "361001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "361002",
            "countyName": "临川区",
            "isCity": false
          },
          {
            "countyCode": "361021",
            "countyName": "南城县",
            "isCity": false
          },
          {
            "countyCode": "361022",
            "countyName": "黎川县",
            "isCity": false
          },
          {
            "countyCode": "361023",
            "countyName": "南丰县",
            "isCity": false
          },
          {
            "countyCode": "361024",
            "countyName": "崇仁县",
            "isCity": false
          },
          {
            "countyCode": "361025",
            "countyName": "乐安县",
            "isCity": false
          },
          {
            "countyCode": "361026",
            "countyName": "宜黄县",
            "isCity": false
          },
          {
            "countyCode": "361027",
            "countyName": "金溪县",
            "isCity": false
          },
          {
            "countyCode": "361028",
            "countyName": "资溪县",
            "isCity": false
          },
          {
            "countyCode": "361029",
            "countyName": "东乡县",
            "isCity": false
          },
          {
            "countyCode": "361030",
            "countyName": "广昌县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "361100",
        "cityName": "上饶市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "361101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "361102",
            "countyName": "信州区",
            "isCity": false
          },
          {
            "countyCode": "361121",
            "countyName": "上饶县",
            "isCity": false
          },
          {
            "countyCode": "361122",
            "countyName": "广丰县",
            "isCity": false
          },
          {
            "countyCode": "361123",
            "countyName": "玉山县",
            "isCity": false
          },
          {
            "countyCode": "361124",
            "countyName": "铅山县",
            "isCity": false
          },
          {
            "countyCode": "361125",
            "countyName": "横峰县",
            "isCity": false
          },
          {
            "countyCode": "361126",
            "countyName": "弋阳县",
            "isCity": false
          },
          {
            "countyCode": "361127",
            "countyName": "余干县",
            "isCity": false
          },
          {
            "countyCode": "361128",
            "countyName": "鄱阳县",
            "isCity": false
          },
          {
            "countyCode": "361129",
            "countyName": "万年县",
            "isCity": false
          },
          {
            "countyCode": "361130",
            "countyName": "婺源县",
            "isCity": false
          },
          {
            "countyCode": "361181",
            "countyName": "德兴市",
            "isCity": true
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "370000",
    "provinceName": "山东省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "370100",
        "cityName": "济南市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "370101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "370102",
            "countyName": "历下区",
            "isCity": false
          },
          {
            "countyCode": "370103",
            "countyName": "市中区",
            "isCity": false
          },
          {
            "countyCode": "370104",
            "countyName": "槐荫区",
            "isCity": false
          },
          {
            "countyCode": "370105",
            "countyName": "天桥区",
            "isCity": false
          },
          {
            "countyCode": "370112",
            "countyName": "历城区",
            "isCity": false
          },
          {
            "countyCode": "370113",
            "countyName": "长清区",
            "isCity": false
          },
          {
            "countyCode": "370124",
            "countyName": "平阴县",
            "isCity": false
          },
          {
            "countyCode": "370125",
            "countyName": "济阳县",
            "isCity": false
          },
          {
            "countyCode": "370126",
            "countyName": "商河县",
            "isCity": false
          },
          {
            "countyCode": "370181",
            "countyName": "章丘市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "370200",
        "cityName": "青岛市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "370201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "370202",
            "countyName": "市南区",
            "isCity": false
          },
          {
            "countyCode": "370203",
            "countyName": "市北区",
            "isCity": false
          },
          {
            "countyCode": "370205",
            "countyName": "四方区",
            "isCity": false
          },
          {
            "countyCode": "370211",
            "countyName": "黄岛区",
            "isCity": false
          },
          {
            "countyCode": "370212",
            "countyName": "崂山区",
            "isCity": false
          },
          {
            "countyCode": "370213",
            "countyName": "李沧区",
            "isCity": false
          },
          {
            "countyCode": "370214",
            "countyName": "城阳区",
            "isCity": false
          },
          {
            "countyCode": "370281",
            "countyName": "胶州市",
            "isCity": true
          },
          {
            "countyCode": "370282",
            "countyName": "即墨市",
            "isCity": true
          },
          {
            "countyCode": "370283",
            "countyName": "平度市",
            "isCity": true
          },
          {
            "countyCode": "370284",
            "countyName": "胶南市",
            "isCity": true
          },
          {
            "countyCode": "370285",
            "countyName": "莱西市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "370300",
        "cityName": "淄博市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "370301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "370302",
            "countyName": "淄川区",
            "isCity": false
          },
          {
            "countyCode": "370303",
            "countyName": "张店区",
            "isCity": false
          },
          {
            "countyCode": "370304",
            "countyName": "博山区",
            "isCity": false
          },
          {
            "countyCode": "370305",
            "countyName": "临淄区",
            "isCity": false
          },
          {
            "countyCode": "370306",
            "countyName": "周村区",
            "isCity": false
          },
          {
            "countyCode": "370321",
            "countyName": "桓台县",
            "isCity": false
          },
          {
            "countyCode": "370322",
            "countyName": "高青县",
            "isCity": false
          },
          {
            "countyCode": "370323",
            "countyName": "沂源县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "370400",
        "cityName": "枣庄市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "370401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "370402",
            "countyName": "市中区",
            "isCity": false
          },
          {
            "countyCode": "370403",
            "countyName": "薛城区",
            "isCity": false
          },
          {
            "countyCode": "370404",
            "countyName": "峄城区",
            "isCity": false
          },
          {
            "countyCode": "370405",
            "countyName": "台儿庄区",
            "isCity": false
          },
          {
            "countyCode": "370406",
            "countyName": "山亭区",
            "isCity": false
          },
          {
            "countyCode": "370481",
            "countyName": "滕州市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "370500",
        "cityName": "东营市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "370501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "370502",
            "countyName": "东营区",
            "isCity": false
          },
          {
            "countyCode": "370503",
            "countyName": "河口区",
            "isCity": false
          },
          {
            "countyCode": "370521",
            "countyName": "垦利县",
            "isCity": false
          },
          {
            "countyCode": "370522",
            "countyName": "利津县",
            "isCity": false
          },
          {
            "countyCode": "370523",
            "countyName": "广饶县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "370600",
        "cityName": "烟台市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "370601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "370602",
            "countyName": "芝罘区",
            "isCity": false
          },
          {
            "countyCode": "370611",
            "countyName": "福山区",
            "isCity": false
          },
          {
            "countyCode": "370612",
            "countyName": "牟平区",
            "isCity": false
          },
          {
            "countyCode": "370613",
            "countyName": "莱山区",
            "isCity": false
          },
          {
            "countyCode": "370634",
            "countyName": "长岛县",
            "isCity": false
          },
          {
            "countyCode": "370681",
            "countyName": "龙口市",
            "isCity": true
          },
          {
            "countyCode": "370682",
            "countyName": "莱阳市",
            "isCity": true
          },
          {
            "countyCode": "370683",
            "countyName": "莱州市",
            "isCity": true
          },
          {
            "countyCode": "370684",
            "countyName": "蓬莱市",
            "isCity": true
          },
          {
            "countyCode": "370685",
            "countyName": "招远市",
            "isCity": true
          },
          {
            "countyCode": "370686",
            "countyName": "栖霞市",
            "isCity": true
          },
          {
            "countyCode": "370687",
            "countyName": "海阳市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "370700",
        "cityName": "潍坊市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "370701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "370702",
            "countyName": "潍城区",
            "isCity": false
          },
          {
            "countyCode": "370703",
            "countyName": "寒亭区",
            "isCity": false
          },
          {
            "countyCode": "370704",
            "countyName": "坊子区",
            "isCity": false
          },
          {
            "countyCode": "370705",
            "countyName": "奎文区",
            "isCity": false
          },
          {
            "countyCode": "370724",
            "countyName": "临朐县",
            "isCity": false
          },
          {
            "countyCode": "370725",
            "countyName": "昌乐县",
            "isCity": false
          },
          {
            "countyCode": "370781",
            "countyName": "青州市",
            "isCity": true
          },
          {
            "countyCode": "370782",
            "countyName": "诸城市",
            "isCity": true
          },
          {
            "countyCode": "370783",
            "countyName": "寿光市",
            "isCity": true
          },
          {
            "countyCode": "370784",
            "countyName": "安丘市",
            "isCity": true
          },
          {
            "countyCode": "370785",
            "countyName": "高密市",
            "isCity": true
          },
          {
            "countyCode": "370786",
            "countyName": "昌邑市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "370800",
        "cityName": "济宁市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "370801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "370802",
            "countyName": "市中区",
            "isCity": false
          },
          {
            "countyCode": "370811",
            "countyName": "任城区",
            "isCity": false
          },
          {
            "countyCode": "370826",
            "countyName": "微山县",
            "isCity": false
          },
          {
            "countyCode": "370827",
            "countyName": "鱼台县",
            "isCity": false
          },
          {
            "countyCode": "370828",
            "countyName": "金乡县",
            "isCity": false
          },
          {
            "countyCode": "370829",
            "countyName": "嘉祥县",
            "isCity": false
          },
          {
            "countyCode": "370830",
            "countyName": "汶上县",
            "isCity": false
          },
          {
            "countyCode": "370831",
            "countyName": "泗水县",
            "isCity": false
          },
          {
            "countyCode": "370832",
            "countyName": "梁山县",
            "isCity": false
          },
          {
            "countyCode": "370881",
            "countyName": "曲阜市",
            "isCity": true
          },
          {
            "countyCode": "370882",
            "countyName": "兖州市",
            "isCity": true
          },
          {
            "countyCode": "370883",
            "countyName": "邹城市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "370900",
        "cityName": "泰安市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "370901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "370902",
            "countyName": "泰山区",
            "isCity": false
          },
          {
            "countyCode": "370903",
            "countyName": "岱岳区",
            "isCity": false
          },
          {
            "countyCode": "370921",
            "countyName": "宁阳县",
            "isCity": false
          },
          {
            "countyCode": "370923",
            "countyName": "东平县",
            "isCity": false
          },
          {
            "countyCode": "370982",
            "countyName": "新泰市",
            "isCity": true
          },
          {
            "countyCode": "370983",
            "countyName": "肥城市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "371000",
        "cityName": "威海市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "371001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "371002",
            "countyName": "环翠区",
            "isCity": false
          },
          {
            "countyCode": "371081",
            "countyName": "文登市",
            "isCity": true
          },
          {
            "countyCode": "371082",
            "countyName": "荣成市",
            "isCity": true
          },
          {
            "countyCode": "371083",
            "countyName": "乳山市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "371100",
        "cityName": "日照市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "371101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "371102",
            "countyName": "东港区",
            "isCity": false
          },
          {
            "countyCode": "371103",
            "countyName": "岚山区",
            "isCity": false
          },
          {
            "countyCode": "371121",
            "countyName": "五莲县",
            "isCity": false
          },
          {
            "countyCode": "371122",
            "countyName": "莒县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "371200",
        "cityName": "莱芜市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "371201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "371202",
            "countyName": "莱城区",
            "isCity": false
          },
          {
            "countyCode": "371203",
            "countyName": "钢城区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "371300",
        "cityName": "临沂市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "371301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "371302",
            "countyName": "兰山区",
            "isCity": false
          },
          {
            "countyCode": "371311",
            "countyName": "罗庄区",
            "isCity": false
          },
          {
            "countyCode": "371312",
            "countyName": "河东区",
            "isCity": false
          },
          {
            "countyCode": "371321",
            "countyName": "沂南县",
            "isCity": false
          },
          {
            "countyCode": "371322",
            "countyName": "郯城县",
            "isCity": false
          },
          {
            "countyCode": "371323",
            "countyName": "沂水县",
            "isCity": false
          },
          {
            "countyCode": "371324",
            "countyName": "苍山县",
            "isCity": false
          },
          {
            "countyCode": "371325",
            "countyName": "费县",
            "isCity": false
          },
          {
            "countyCode": "371326",
            "countyName": "平邑县",
            "isCity": false
          },
          {
            "countyCode": "371327",
            "countyName": "莒南县",
            "isCity": false
          },
          {
            "countyCode": "371328",
            "countyName": "蒙阴县",
            "isCity": false
          },
          {
            "countyCode": "371329",
            "countyName": "临沭县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "371400",
        "cityName": "德州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "371401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "371402",
            "countyName": "德城区",
            "isCity": false
          },
          {
            "countyCode": "371421",
            "countyName": "陵县",
            "isCity": false
          },
          {
            "countyCode": "371422",
            "countyName": "宁津县",
            "isCity": false
          },
          {
            "countyCode": "371423",
            "countyName": "庆云县",
            "isCity": false
          },
          {
            "countyCode": "371424",
            "countyName": "临邑县",
            "isCity": false
          },
          {
            "countyCode": "371425",
            "countyName": "齐河县",
            "isCity": false
          },
          {
            "countyCode": "371426",
            "countyName": "平原县",
            "isCity": false
          },
          {
            "countyCode": "371427",
            "countyName": "夏津县",
            "isCity": false
          },
          {
            "countyCode": "371428",
            "countyName": "武城县",
            "isCity": false
          },
          {
            "countyCode": "371481",
            "countyName": "乐陵市",
            "isCity": true
          },
          {
            "countyCode": "371482",
            "countyName": "禹城市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "371500",
        "cityName": "聊城市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "371501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "371502",
            "countyName": "东昌府区",
            "isCity": false
          },
          {
            "countyCode": "371521",
            "countyName": "阳谷县",
            "isCity": false
          },
          {
            "countyCode": "371522",
            "countyName": "莘县",
            "isCity": false
          },
          {
            "countyCode": "371523",
            "countyName": "茌平县",
            "isCity": false
          },
          {
            "countyCode": "371524",
            "countyName": "东阿县",
            "isCity": false
          },
          {
            "countyCode": "371525",
            "countyName": "冠县",
            "isCity": false
          },
          {
            "countyCode": "371526",
            "countyName": "高唐县",
            "isCity": false
          },
          {
            "countyCode": "371581",
            "countyName": "临清市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "371600",
        "cityName": "滨州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "371601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "371602",
            "countyName": "滨城区",
            "isCity": false
          },
          {
            "countyCode": "371621",
            "countyName": "惠民县",
            "isCity": false
          },
          {
            "countyCode": "371622",
            "countyName": "阳信县",
            "isCity": false
          },
          {
            "countyCode": "371623",
            "countyName": "无棣县",
            "isCity": false
          },
          {
            "countyCode": "371624",
            "countyName": "沾化县",
            "isCity": false
          },
          {
            "countyCode": "371625",
            "countyName": "博兴县",
            "isCity": false
          },
          {
            "countyCode": "371626",
            "countyName": "邹平县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "371700",
        "cityName": "菏泽市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "371701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "371702",
            "countyName": "牡丹区",
            "isCity": false
          },
          {
            "countyCode": "371721",
            "countyName": "曹县",
            "isCity": false
          },
          {
            "countyCode": "371722",
            "countyName": "单县",
            "isCity": false
          },
          {
            "countyCode": "371723",
            "countyName": "成武县",
            "isCity": false
          },
          {
            "countyCode": "371724",
            "countyName": "巨野县",
            "isCity": false
          },
          {
            "countyCode": "371725",
            "countyName": "郓城县",
            "isCity": false
          },
          {
            "countyCode": "371726",
            "countyName": "鄄城县",
            "isCity": false
          },
          {
            "countyCode": "371727",
            "countyName": "定陶县",
            "isCity": false
          },
          {
            "countyCode": "371728",
            "countyName": "东明县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "410000",
    "provinceName": "河南省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "410100",
        "cityName": "郑州市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "410101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "410102",
            "countyName": "中原区",
            "isCity": false
          },
          {
            "countyCode": "410103",
            "countyName": "二七区",
            "isCity": false
          },
          {
            "countyCode": "410104",
            "countyName": "管城回族区",
            "isCity": false
          },
          {
            "countyCode": "410105",
            "countyName": "金水区",
            "isCity": false
          },
          {
            "countyCode": "410106",
            "countyName": "上街区",
            "isCity": false
          },
          {
            "countyCode": "410108",
            "countyName": "惠济区",
            "isCity": false
          },
          {
            "countyCode": "410122",
            "countyName": "中牟县",
            "isCity": false
          },
          {
            "countyCode": "410181",
            "countyName": "巩义市",
            "isCity": true
          },
          {
            "countyCode": "410182",
            "countyName": "荥阳市",
            "isCity": true
          },
          {
            "countyCode": "410183",
            "countyName": "新密市",
            "isCity": true
          },
          {
            "countyCode": "410184",
            "countyName": "新郑市",
            "isCity": true
          },
          {
            "countyCode": "410185",
            "countyName": "登封市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "410200",
        "cityName": "开封市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "410201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "410202",
            "countyName": "龙亭区",
            "isCity": false
          },
          {
            "countyCode": "410203",
            "countyName": "顺河回族区",
            "isCity": false
          },
          {
            "countyCode": "410204",
            "countyName": "鼓楼区",
            "isCity": false
          },
          {
            "countyCode": "410205",
            "countyName": "禹王台区",
            "isCity": false
          },
          {
            "countyCode": "410211",
            "countyName": "金明区",
            "isCity": false
          },
          {
            "countyCode": "410221",
            "countyName": "杞县",
            "isCity": false
          },
          {
            "countyCode": "410222",
            "countyName": "通许县",
            "isCity": false
          },
          {
            "countyCode": "410223",
            "countyName": "尉氏县",
            "isCity": false
          },
          {
            "countyCode": "410224",
            "countyName": "开封县",
            "isCity": false
          },
          {
            "countyCode": "410225",
            "countyName": "兰考县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "410300",
        "cityName": "洛阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "410301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "410302",
            "countyName": "老城区",
            "isCity": false
          },
          {
            "countyCode": "410303",
            "countyName": "西工区",
            "isCity": false
          },
          {
            "countyCode": "410304",
            "countyName": "廛河回族区",
            "isCity": false
          },
          {
            "countyCode": "410305",
            "countyName": "涧西区",
            "isCity": false
          },
          {
            "countyCode": "410306",
            "countyName": "吉利区",
            "isCity": false
          },
          {
            "countyCode": "410307",
            "countyName": "洛龙区",
            "isCity": false
          },
          {
            "countyCode": "410322",
            "countyName": "孟津县",
            "isCity": false
          },
          {
            "countyCode": "410323",
            "countyName": "新安县",
            "isCity": false
          },
          {
            "countyCode": "410324",
            "countyName": "栾川县",
            "isCity": false
          },
          {
            "countyCode": "410325",
            "countyName": "嵩县",
            "isCity": false
          },
          {
            "countyCode": "410326",
            "countyName": "汝阳县",
            "isCity": false
          },
          {
            "countyCode": "410327",
            "countyName": "宜阳县",
            "isCity": false
          },
          {
            "countyCode": "410328",
            "countyName": "洛宁县",
            "isCity": false
          },
          {
            "countyCode": "410329",
            "countyName": "伊川县",
            "isCity": false
          },
          {
            "countyCode": "410381",
            "countyName": "偃师市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "410400",
        "cityName": "平顶山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "410401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "410402",
            "countyName": "新华区",
            "isCity": false
          },
          {
            "countyCode": "410403",
            "countyName": "卫东区",
            "isCity": false
          },
          {
            "countyCode": "410404",
            "countyName": "石龙区",
            "isCity": false
          },
          {
            "countyCode": "410411",
            "countyName": "湛河区",
            "isCity": false
          },
          {
            "countyCode": "410421",
            "countyName": "宝丰县",
            "isCity": false
          },
          {
            "countyCode": "410422",
            "countyName": "叶县",
            "isCity": false
          },
          {
            "countyCode": "410423",
            "countyName": "鲁山县",
            "isCity": false
          },
          {
            "countyCode": "410425",
            "countyName": "郏县",
            "isCity": false
          },
          {
            "countyCode": "410481",
            "countyName": "舞钢市",
            "isCity": true
          },
          {
            "countyCode": "410482",
            "countyName": "汝州市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "410500",
        "cityName": "安阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "410501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "410502",
            "countyName": "文峰区",
            "isCity": false
          },
          {
            "countyCode": "410503",
            "countyName": "北关区",
            "isCity": false
          },
          {
            "countyCode": "410505",
            "countyName": "殷都区",
            "isCity": false
          },
          {
            "countyCode": "410506",
            "countyName": "龙安区",
            "isCity": false
          },
          {
            "countyCode": "410522",
            "countyName": "安阳县",
            "isCity": false
          },
          {
            "countyCode": "410523",
            "countyName": "汤阴县",
            "isCity": false
          },
          {
            "countyCode": "410526",
            "countyName": "滑县",
            "isCity": false
          },
          {
            "countyCode": "410527",
            "countyName": "内黄县",
            "isCity": false
          },
          {
            "countyCode": "410581",
            "countyName": "林州市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "410600",
        "cityName": "鹤壁市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "410601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "410602",
            "countyName": "鹤山区",
            "isCity": false
          },
          {
            "countyCode": "410603",
            "countyName": "山城区",
            "isCity": false
          },
          {
            "countyCode": "410611",
            "countyName": "淇滨区",
            "isCity": false
          },
          {
            "countyCode": "410621",
            "countyName": "浚县",
            "isCity": false
          },
          {
            "countyCode": "410622",
            "countyName": "淇县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "410700",
        "cityName": "新乡市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "410701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "410702",
            "countyName": "红旗区",
            "isCity": false
          },
          {
            "countyCode": "410703",
            "countyName": "卫滨区",
            "isCity": false
          },
          {
            "countyCode": "410704",
            "countyName": "凤泉区",
            "isCity": false
          },
          {
            "countyCode": "410711",
            "countyName": "牧野区",
            "isCity": false
          },
          {
            "countyCode": "410721",
            "countyName": "新乡县",
            "isCity": false
          },
          {
            "countyCode": "410724",
            "countyName": "获嘉县",
            "isCity": false
          },
          {
            "countyCode": "410725",
            "countyName": "原阳县",
            "isCity": false
          },
          {
            "countyCode": "410726",
            "countyName": "延津县",
            "isCity": false
          },
          {
            "countyCode": "410727",
            "countyName": "封丘县",
            "isCity": false
          },
          {
            "countyCode": "410728",
            "countyName": "长垣县",
            "isCity": false
          },
          {
            "countyCode": "410781",
            "countyName": "卫辉市",
            "isCity": true
          },
          {
            "countyCode": "410782",
            "countyName": "辉县市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "410800",
        "cityName": "焦作市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "410801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "410802",
            "countyName": "解放区",
            "isCity": false
          },
          {
            "countyCode": "410803",
            "countyName": "中站区",
            "isCity": false
          },
          {
            "countyCode": "410804",
            "countyName": "马村区",
            "isCity": false
          },
          {
            "countyCode": "410811",
            "countyName": "山阳区",
            "isCity": false
          },
          {
            "countyCode": "410821",
            "countyName": "修武县",
            "isCity": false
          },
          {
            "countyCode": "410822",
            "countyName": "博爱县",
            "isCity": false
          },
          {
            "countyCode": "410823",
            "countyName": "武陟县",
            "isCity": false
          },
          {
            "countyCode": "410825",
            "countyName": "温县",
            "isCity": false
          },
          {
            "countyCode": "410881",
            "countyName": "济源市",
            "isCity": true
          },
          {
            "countyCode": "410882",
            "countyName": "沁阳市",
            "isCity": true
          },
          {
            "countyCode": "410883",
            "countyName": "孟州市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "410900",
        "cityName": "濮阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "410901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "410902",
            "countyName": "华龙区",
            "isCity": false
          },
          {
            "countyCode": "410922",
            "countyName": "清丰县",
            "isCity": false
          },
          {
            "countyCode": "410923",
            "countyName": "南乐县",
            "isCity": false
          },
          {
            "countyCode": "410926",
            "countyName": "范县",
            "isCity": false
          },
          {
            "countyCode": "410927",
            "countyName": "台前县",
            "isCity": false
          },
          {
            "countyCode": "410928",
            "countyName": "濮阳县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "411000",
        "cityName": "许昌市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "411001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "411002",
            "countyName": "魏都区",
            "isCity": false
          },
          {
            "countyCode": "411023",
            "countyName": "许昌县",
            "isCity": false
          },
          {
            "countyCode": "411024",
            "countyName": "鄢陵县",
            "isCity": false
          },
          {
            "countyCode": "411025",
            "countyName": "襄城县",
            "isCity": false
          },
          {
            "countyCode": "411081",
            "countyName": "禹州市",
            "isCity": true
          },
          {
            "countyCode": "411082",
            "countyName": "长葛市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "411100",
        "cityName": "漯河市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "411101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "411102",
            "countyName": "源汇区",
            "isCity": false
          },
          {
            "countyCode": "411103",
            "countyName": "郾城区",
            "isCity": false
          },
          {
            "countyCode": "411104",
            "countyName": "召陵区",
            "isCity": false
          },
          {
            "countyCode": "411121",
            "countyName": "舞阳县",
            "isCity": false
          },
          {
            "countyCode": "411122",
            "countyName": "临颍县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "411200",
        "cityName": "三门峡市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "411201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "411202",
            "countyName": "湖滨区",
            "isCity": false
          },
          {
            "countyCode": "411221",
            "countyName": "渑池县",
            "isCity": false
          },
          {
            "countyCode": "411222",
            "countyName": "陕县",
            "isCity": false
          },
          {
            "countyCode": "411224",
            "countyName": "卢氏县",
            "isCity": false
          },
          {
            "countyCode": "411281",
            "countyName": "义马市",
            "isCity": true
          },
          {
            "countyCode": "411282",
            "countyName": "灵宝市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "411300",
        "cityName": "南阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "411301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "411302",
            "countyName": "宛城区",
            "isCity": false
          },
          {
            "countyCode": "411303",
            "countyName": "卧龙区",
            "isCity": false
          },
          {
            "countyCode": "411321",
            "countyName": "南召县",
            "isCity": false
          },
          {
            "countyCode": "411322",
            "countyName": "方城县",
            "isCity": false
          },
          {
            "countyCode": "411323",
            "countyName": "西峡县",
            "isCity": false
          },
          {
            "countyCode": "411324",
            "countyName": "镇平县",
            "isCity": false
          },
          {
            "countyCode": "411325",
            "countyName": "内乡县",
            "isCity": false
          },
          {
            "countyCode": "411326",
            "countyName": "淅川县",
            "isCity": false
          },
          {
            "countyCode": "411327",
            "countyName": "社旗县",
            "isCity": false
          },
          {
            "countyCode": "411328",
            "countyName": "唐河县",
            "isCity": false
          },
          {
            "countyCode": "411329",
            "countyName": "新野县",
            "isCity": false
          },
          {
            "countyCode": "411330",
            "countyName": "桐柏县",
            "isCity": false
          },
          {
            "countyCode": "411381",
            "countyName": "邓州市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "411400",
        "cityName": "商丘市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "411401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "411402",
            "countyName": "梁园区",
            "isCity": false
          },
          {
            "countyCode": "411403",
            "countyName": "睢阳区",
            "isCity": false
          },
          {
            "countyCode": "411421",
            "countyName": "民权县",
            "isCity": false
          },
          {
            "countyCode": "411422",
            "countyName": "睢县",
            "isCity": false
          },
          {
            "countyCode": "411423",
            "countyName": "宁陵县",
            "isCity": false
          },
          {
            "countyCode": "411424",
            "countyName": "柘城县",
            "isCity": false
          },
          {
            "countyCode": "411425",
            "countyName": "虞城县",
            "isCity": false
          },
          {
            "countyCode": "411426",
            "countyName": "夏邑县",
            "isCity": false
          },
          {
            "countyCode": "411481",
            "countyName": "永城市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "411500",
        "cityName": "信阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "411501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "411502",
            "countyName": "浉河区",
            "isCity": false
          },
          {
            "countyCode": "411503",
            "countyName": "平桥区",
            "isCity": false
          },
          {
            "countyCode": "411521",
            "countyName": "罗山县",
            "isCity": false
          },
          {
            "countyCode": "411522",
            "countyName": "光山县",
            "isCity": false
          },
          {
            "countyCode": "411523",
            "countyName": "新县",
            "isCity": false
          },
          {
            "countyCode": "411524",
            "countyName": "商城县",
            "isCity": false
          },
          {
            "countyCode": "411525",
            "countyName": "固始县",
            "isCity": false
          },
          {
            "countyCode": "411526",
            "countyName": "潢川县",
            "isCity": false
          },
          {
            "countyCode": "411527",
            "countyName": "淮滨县",
            "isCity": false
          },
          {
            "countyCode": "411528",
            "countyName": "息县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "411600",
        "cityName": "周口市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "411601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "411602",
            "countyName": "川汇区",
            "isCity": false
          },
          {
            "countyCode": "411621",
            "countyName": "扶沟县",
            "isCity": false
          },
          {
            "countyCode": "411622",
            "countyName": "西华县",
            "isCity": false
          },
          {
            "countyCode": "411623",
            "countyName": "商水县",
            "isCity": false
          },
          {
            "countyCode": "411624",
            "countyName": "沈丘县",
            "isCity": false
          },
          {
            "countyCode": "411625",
            "countyName": "郸城县",
            "isCity": false
          },
          {
            "countyCode": "411626",
            "countyName": "淮阳县",
            "isCity": false
          },
          {
            "countyCode": "411627",
            "countyName": "太康县",
            "isCity": false
          },
          {
            "countyCode": "411628",
            "countyName": "鹿邑县",
            "isCity": false
          },
          {
            "countyCode": "411681",
            "countyName": "项城市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "411700",
        "cityName": "驻马店市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "411701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "411702",
            "countyName": "驿城区",
            "isCity": false
          },
          {
            "countyCode": "411721",
            "countyName": "西平县",
            "isCity": false
          },
          {
            "countyCode": "411722",
            "countyName": "上蔡县",
            "isCity": false
          },
          {
            "countyCode": "411723",
            "countyName": "平舆县",
            "isCity": false
          },
          {
            "countyCode": "411724",
            "countyName": "正阳县",
            "isCity": false
          },
          {
            "countyCode": "411725",
            "countyName": "确山县",
            "isCity": false
          },
          {
            "countyCode": "411726",
            "countyName": "泌阳县",
            "isCity": false
          },
          {
            "countyCode": "411727",
            "countyName": "汝南县",
            "isCity": false
          },
          {
            "countyCode": "411728",
            "countyName": "遂平县",
            "isCity": false
          },
          {
            "countyCode": "411729",
            "countyName": "新蔡县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "420000",
    "provinceName": "湖北省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "420100",
        "cityName": "武汉市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "420101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "420102",
            "countyName": "江岸区",
            "isCity": false
          },
          {
            "countyCode": "420103",
            "countyName": "江汉区",
            "isCity": false
          },
          {
            "countyCode": "420104",
            "countyName": "硚口区",
            "isCity": false
          },
          {
            "countyCode": "420105",
            "countyName": "汉阳区",
            "isCity": false
          },
          {
            "countyCode": "420106",
            "countyName": "武昌区",
            "isCity": false
          },
          {
            "countyCode": "420107",
            "countyName": "青山区",
            "isCity": false
          },
          {
            "countyCode": "420111",
            "countyName": "洪山区",
            "isCity": false
          },
          {
            "countyCode": "420112",
            "countyName": "东西湖区",
            "isCity": false
          },
          {
            "countyCode": "420113",
            "countyName": "汉南区",
            "isCity": false
          },
          {
            "countyCode": "420114",
            "countyName": "蔡甸区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "420700",
        "cityName": "鄂州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "420701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "420702",
            "countyName": "梁子湖区",
            "isCity": false
          },
          {
            "countyCode": "420703",
            "countyName": "华容区",
            "isCity": false
          },
          {
            "countyCode": "420704",
            "countyName": "鄂城区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "420800",
        "cityName": "荆门市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "420801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "420802",
            "countyName": "东宝区",
            "isCity": false
          },
          {
            "countyCode": "420804",
            "countyName": "掇刀区",
            "isCity": false
          },
          {
            "countyCode": "420821",
            "countyName": "京山县",
            "isCity": false
          },
          {
            "countyCode": "420822",
            "countyName": "沙洋县",
            "isCity": false
          },
          {
            "countyCode": "420881",
            "countyName": "钟祥市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "420900",
        "cityName": "孝感市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "420901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "420902",
            "countyName": "孝南区",
            "isCity": false
          },
          {
            "countyCode": "420921",
            "countyName": "孝昌县",
            "isCity": false
          },
          {
            "countyCode": "420922",
            "countyName": "大悟县",
            "isCity": false
          },
          {
            "countyCode": "420923",
            "countyName": "云梦县",
            "isCity": false
          },
          {
            "countyCode": "420981",
            "countyName": "应城市",
            "isCity": true
          },
          {
            "countyCode": "420982",
            "countyName": "安陆市",
            "isCity": true
          },
          {
            "countyCode": "420984",
            "countyName": "汉川市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "421000",
        "cityName": "荆州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "421001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "421002",
            "countyName": "沙市区",
            "isCity": false
          },
          {
            "countyCode": "421003",
            "countyName": "荆州区",
            "isCity": false
          },
          {
            "countyCode": "421022",
            "countyName": "公安县",
            "isCity": false
          },
          {
            "countyCode": "421023",
            "countyName": "监利县",
            "isCity": false
          },
          {
            "countyCode": "421024",
            "countyName": "江陵县",
            "isCity": false
          },
          {
            "countyCode": "421081",
            "countyName": "石首市",
            "isCity": true
          },
          {
            "countyCode": "421083",
            "countyName": "洪湖市",
            "isCity": true
          },
          {
            "countyCode": "421087",
            "countyName": "松滋市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "421100",
        "cityName": "黄冈市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "421101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "421102",
            "countyName": "黄州区",
            "isCity": false
          },
          {
            "countyCode": "421121",
            "countyName": "团风县",
            "isCity": false
          },
          {
            "countyCode": "421122",
            "countyName": "红安县",
            "isCity": false
          },
          {
            "countyCode": "421123",
            "countyName": "罗田县",
            "isCity": false
          },
          {
            "countyCode": "421124",
            "countyName": "英山县",
            "isCity": false
          },
          {
            "countyCode": "421125",
            "countyName": "浠水县",
            "isCity": false
          },
          {
            "countyCode": "421126",
            "countyName": "蕲春县",
            "isCity": false
          },
          {
            "countyCode": "421127",
            "countyName": "黄梅县",
            "isCity": false
          },
          {
            "countyCode": "421181",
            "countyName": "麻城市",
            "isCity": true
          },
          {
            "countyCode": "421182",
            "countyName": "武穴市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "421200",
        "cityName": "咸宁市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "421201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "421202",
            "countyName": "咸安区",
            "isCity": false
          },
          {
            "countyCode": "421221",
            "countyName": "嘉鱼县",
            "isCity": false
          },
          {
            "countyCode": "421222",
            "countyName": "通城县",
            "isCity": false
          },
          {
            "countyCode": "421223",
            "countyName": "崇阳县",
            "isCity": false
          },
          {
            "countyCode": "421224",
            "countyName": "通山县",
            "isCity": false
          },
          {
            "countyCode": "421281",
            "countyName": "赤壁市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "421300",
        "cityName": "随州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "421301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "421302",
            "countyName": "曾都区",
            "isCity": false
          },
          {
            "countyCode": "421381",
            "countyName": "广水市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "422800",
        "cityName": "恩施土家族苗族自",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "422801",
            "countyName": "恩施市",
            "isCity": true
          },
          {
            "countyCode": "422802",
            "countyName": "利川市",
            "isCity": true
          },
          {
            "countyCode": "422822",
            "countyName": "建始县",
            "isCity": false
          },
          {
            "countyCode": "422823",
            "countyName": "巴东县",
            "isCity": false
          },
          {
            "countyCode": "422825",
            "countyName": "宣恩县",
            "isCity": false
          },
          {
            "countyCode": "422826",
            "countyName": "咸丰县",
            "isCity": false
          },
          {
            "countyCode": "422827",
            "countyName": "来凤县",
            "isCity": false
          },
          {
            "countyCode": "422828",
            "countyName": "鹤峰县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "429000",
        "cityName": "省直辖行政单位",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "429004",
            "countyName": "仙桃市",
            "isCity": true
          },
          {
            "countyCode": "429005",
            "countyName": "潜江市",
            "isCity": true
          },
          {
            "countyCode": "429006",
            "countyName": "天门市",
            "isCity": true
          },
          {
            "countyCode": "429021",
            "countyName": "神农架林区",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "430000",
    "provinceName": "湖南省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "430100",
        "cityName": "长沙市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "430101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "430102",
            "countyName": "芙蓉区",
            "isCity": false
          },
          {
            "countyCode": "430103",
            "countyName": "天心区",
            "isCity": false
          },
          {
            "countyCode": "430104",
            "countyName": "岳麓区",
            "isCity": false
          },
          {
            "countyCode": "430105",
            "countyName": "开福区",
            "isCity": false
          },
          {
            "countyCode": "430111",
            "countyName": "雨花区",
            "isCity": false
          },
          {
            "countyCode": "430121",
            "countyName": "长沙县",
            "isCity": false
          },
          {
            "countyCode": "430122",
            "countyName": "望城县",
            "isCity": false
          },
          {
            "countyCode": "430124",
            "countyName": "宁乡县",
            "isCity": false
          },
          {
            "countyCode": "430181",
            "countyName": "浏阳市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "430200",
        "cityName": "株洲市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "430201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "430202",
            "countyName": "荷塘区",
            "isCity": false
          },
          {
            "countyCode": "430203",
            "countyName": "芦淞区",
            "isCity": false
          },
          {
            "countyCode": "430204",
            "countyName": "石峰区",
            "isCity": false
          },
          {
            "countyCode": "430211",
            "countyName": "天元区",
            "isCity": false
          },
          {
            "countyCode": "430221",
            "countyName": "株洲县",
            "isCity": false
          },
          {
            "countyCode": "430223",
            "countyName": "攸县",
            "isCity": false
          },
          {
            "countyCode": "430224",
            "countyName": "茶陵县",
            "isCity": false
          },
          {
            "countyCode": "430225",
            "countyName": "炎陵县",
            "isCity": false
          },
          {
            "countyCode": "430281",
            "countyName": "醴陵市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "430300",
        "cityName": "湘潭市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "430301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "430302",
            "countyName": "雨湖区",
            "isCity": false
          },
          {
            "countyCode": "430304",
            "countyName": "岳塘区",
            "isCity": false
          },
          {
            "countyCode": "430321",
            "countyName": "湘潭县",
            "isCity": false
          },
          {
            "countyCode": "430381",
            "countyName": "湘乡市",
            "isCity": true
          },
          {
            "countyCode": "430382",
            "countyName": "韶山市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "430400",
        "cityName": "衡阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "430401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "430405",
            "countyName": "珠晖区",
            "isCity": false
          },
          {
            "countyCode": "430406",
            "countyName": "雁峰区",
            "isCity": false
          },
          {
            "countyCode": "430407",
            "countyName": "石鼓区",
            "isCity": false
          },
          {
            "countyCode": "430408",
            "countyName": "蒸湘区",
            "isCity": false
          },
          {
            "countyCode": "430412",
            "countyName": "南岳区",
            "isCity": false
          },
          {
            "countyCode": "430421",
            "countyName": "衡阳县",
            "isCity": false
          },
          {
            "countyCode": "430422",
            "countyName": "衡南县",
            "isCity": false
          },
          {
            "countyCode": "430423",
            "countyName": "衡山县",
            "isCity": false
          },
          {
            "countyCode": "430424",
            "countyName": "衡东县",
            "isCity": false
          },
          {
            "countyCode": "430426",
            "countyName": "祁东县",
            "isCity": false
          },
          {
            "countyCode": "430481",
            "countyName": "耒阳市",
            "isCity": true
          },
          {
            "countyCode": "430482",
            "countyName": "常宁市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "430500",
        "cityName": "邵阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "430501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "430502",
            "countyName": "双清区",
            "isCity": false
          },
          {
            "countyCode": "430503",
            "countyName": "大祥区",
            "isCity": false
          },
          {
            "countyCode": "430511",
            "countyName": "北塔区",
            "isCity": false
          },
          {
            "countyCode": "430521",
            "countyName": "邵东县",
            "isCity": false
          },
          {
            "countyCode": "430522",
            "countyName": "新邵县",
            "isCity": false
          },
          {
            "countyCode": "430523",
            "countyName": "邵阳县",
            "isCity": false
          },
          {
            "countyCode": "430524",
            "countyName": "隆回县",
            "isCity": false
          },
          {
            "countyCode": "430525",
            "countyName": "洞口县",
            "isCity": false
          },
          {
            "countyCode": "430527",
            "countyName": "绥宁县",
            "isCity": false
          },
          {
            "countyCode": "430528",
            "countyName": "新宁县",
            "isCity": false
          },
          {
            "countyCode": "430529",
            "countyName": "城步苗族自治县",
            "isCity": false
          },
          {
            "countyCode": "430581",
            "countyName": "武冈市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "430600",
        "cityName": "岳阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "430601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "430602",
            "countyName": "岳阳楼区",
            "isCity": false
          },
          {
            "countyCode": "430603",
            "countyName": "云溪区",
            "isCity": false
          },
          {
            "countyCode": "430611",
            "countyName": "君山区",
            "isCity": false
          },
          {
            "countyCode": "430621",
            "countyName": "岳阳县",
            "isCity": false
          },
          {
            "countyCode": "430623",
            "countyName": "华容县",
            "isCity": false
          },
          {
            "countyCode": "430624",
            "countyName": "湘阴县",
            "isCity": false
          },
          {
            "countyCode": "430626",
            "countyName": "平江县",
            "isCity": false
          },
          {
            "countyCode": "430681",
            "countyName": "汨罗市",
            "isCity": true
          },
          {
            "countyCode": "430682",
            "countyName": "临湘市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "430700",
        "cityName": "常德市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "430701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "430702",
            "countyName": "武陵区",
            "isCity": false
          },
          {
            "countyCode": "430703",
            "countyName": "鼎城区",
            "isCity": false
          },
          {
            "countyCode": "430721",
            "countyName": "安乡县",
            "isCity": false
          },
          {
            "countyCode": "430722",
            "countyName": "汉寿县",
            "isCity": false
          },
          {
            "countyCode": "430723",
            "countyName": "澧县",
            "isCity": false
          },
          {
            "countyCode": "430724",
            "countyName": "临澧县",
            "isCity": false
          },
          {
            "countyCode": "430725",
            "countyName": "桃源县",
            "isCity": false
          },
          {
            "countyCode": "430726",
            "countyName": "石门县",
            "isCity": false
          },
          {
            "countyCode": "430781",
            "countyName": "津市市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "430800",
        "cityName": "张家界市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "430801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "430802",
            "countyName": "永定区",
            "isCity": false
          },
          {
            "countyCode": "430811",
            "countyName": "武陵源区",
            "isCity": false
          },
          {
            "countyCode": "430821",
            "countyName": "慈利县",
            "isCity": false
          },
          {
            "countyCode": "430822",
            "countyName": "桑植县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "430900",
        "cityName": "益阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "430901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "430902",
            "countyName": "资阳区",
            "isCity": false
          },
          {
            "countyCode": "430903",
            "countyName": "赫山区",
            "isCity": false
          },
          {
            "countyCode": "430921",
            "countyName": "南县",
            "isCity": false
          },
          {
            "countyCode": "430922",
            "countyName": "桃江县",
            "isCity": false
          },
          {
            "countyCode": "430923",
            "countyName": "安化县",
            "isCity": false
          },
          {
            "countyCode": "430981",
            "countyName": "沅江市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "431000",
        "cityName": "郴州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "431001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "431002",
            "countyName": "北湖区",
            "isCity": false
          },
          {
            "countyCode": "431003",
            "countyName": "苏仙区",
            "isCity": false
          },
          {
            "countyCode": "431021",
            "countyName": "桂阳县",
            "isCity": false
          },
          {
            "countyCode": "431022",
            "countyName": "宜章县",
            "isCity": false
          },
          {
            "countyCode": "431023",
            "countyName": "永兴县",
            "isCity": false
          },
          {
            "countyCode": "431024",
            "countyName": "嘉禾县",
            "isCity": false
          },
          {
            "countyCode": "431025",
            "countyName": "临武县",
            "isCity": false
          },
          {
            "countyCode": "431026",
            "countyName": "汝城县",
            "isCity": false
          },
          {
            "countyCode": "431027",
            "countyName": "桂东县",
            "isCity": false
          },
          {
            "countyCode": "431028",
            "countyName": "安仁县",
            "isCity": false
          },
          {
            "countyCode": "431081",
            "countyName": "资兴市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "431100",
        "cityName": "永州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "431101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "431102",
            "countyName": "零陵区",
            "isCity": false
          },
          {
            "countyCode": "431103",
            "countyName": "冷水滩区",
            "isCity": false
          },
          {
            "countyCode": "431121",
            "countyName": "祁阳县",
            "isCity": false
          },
          {
            "countyCode": "431122",
            "countyName": "东安县",
            "isCity": false
          },
          {
            "countyCode": "431123",
            "countyName": "双牌县",
            "isCity": false
          },
          {
            "countyCode": "431124",
            "countyName": "道县",
            "isCity": false
          },
          {
            "countyCode": "431125",
            "countyName": "江永县",
            "isCity": false
          },
          {
            "countyCode": "431126",
            "countyName": "宁远县",
            "isCity": false
          },
          {
            "countyCode": "431127",
            "countyName": "蓝山县",
            "isCity": false
          },
          {
            "countyCode": "431128",
            "countyName": "新田县",
            "isCity": false
          },
          {
            "countyCode": "431129",
            "countyName": "江华瑶族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "431200",
        "cityName": "怀化市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "431201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "431202",
            "countyName": "鹤城区",
            "isCity": false
          },
          {
            "countyCode": "431221",
            "countyName": "中方县",
            "isCity": false
          },
          {
            "countyCode": "431222",
            "countyName": "沅陵县",
            "isCity": false
          },
          {
            "countyCode": "431223",
            "countyName": "辰溪县",
            "isCity": false
          },
          {
            "countyCode": "431224",
            "countyName": "溆浦县",
            "isCity": false
          },
          {
            "countyCode": "431225",
            "countyName": "会同县",
            "isCity": false
          },
          {
            "countyCode": "431226",
            "countyName": "麻阳苗族自治县",
            "isCity": false
          },
          {
            "countyCode": "431227",
            "countyName": "新晃侗族自治县",
            "isCity": false
          },
          {
            "countyCode": "431228",
            "countyName": "芷江侗族自治县",
            "isCity": false
          },
          {
            "countyCode": "431229",
            "countyName": "靖州苗族侗族自治县",
            "isCity": false
          },
          {
            "countyCode": "431230",
            "countyName": "通道侗族自治县",
            "isCity": false
          },
          {
            "countyCode": "431281",
            "countyName": "洪江市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "431300",
        "cityName": "娄底市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "431301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "431302",
            "countyName": "娄星区",
            "isCity": false
          },
          {
            "countyCode": "431321",
            "countyName": "双峰县",
            "isCity": false
          },
          {
            "countyCode": "431322",
            "countyName": "新化县",
            "isCity": false
          },
          {
            "countyCode": "431381",
            "countyName": "冷水江市",
            "isCity": true
          },
          {
            "countyCode": "431382",
            "countyName": "涟源市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "433100",
        "cityName": "湘西土家族苗族自",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "433101",
            "countyName": "吉首市",
            "isCity": true
          },
          {
            "countyCode": "433122",
            "countyName": "泸溪县",
            "isCity": false
          },
          {
            "countyCode": "433123",
            "countyName": "凤凰县",
            "isCity": false
          },
          {
            "countyCode": "433124",
            "countyName": "花垣县",
            "isCity": false
          },
          {
            "countyCode": "433125",
            "countyName": "保靖县",
            "isCity": false
          },
          {
            "countyCode": "433126",
            "countyName": "古丈县",
            "isCity": false
          },
          {
            "countyCode": "433127",
            "countyName": "永顺县",
            "isCity": false
          },
          {
            "countyCode": "433130",
            "countyName": "龙山县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "440000",
    "provinceName": "广东省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "440100",
        "cityName": "广州市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "440101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "440103",
            "countyName": "荔湾区",
            "isCity": false
          },
          {
            "countyCode": "440104",
            "countyName": "越秀区",
            "isCity": false
          },
          {
            "countyCode": "440105",
            "countyName": "海珠区",
            "isCity": false
          },
          {
            "countyCode": "440106",
            "countyName": "天河区",
            "isCity": false
          },
          {
            "countyCode": "440111",
            "countyName": "白云区",
            "isCity": false
          },
          {
            "countyCode": "440112",
            "countyName": "黄埔区",
            "isCity": false
          },
          {
            "countyCode": "440113",
            "countyName": "番禺区",
            "isCity": false
          },
          {
            "countyCode": "440114",
            "countyName": "花都区",
            "isCity": false
          },
          {
            "countyCode": "440115",
            "countyName": "南沙区",
            "isCity": false
          },
          {
            "countyCode": "440116",
            "countyName": "萝岗区",
            "isCity": false
          },
          {
            "countyCode": "440183",
            "countyName": "增城市",
            "isCity": true
          },
          {
            "countyCode": "440184",
            "countyName": "从化市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "440200",
        "cityName": "韶关市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "440201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "440203",
            "countyName": "武江区",
            "isCity": false
          },
          {
            "countyCode": "440204",
            "countyName": "浈江区",
            "isCity": false
          },
          {
            "countyCode": "440205",
            "countyName": "曲江区",
            "isCity": false
          },
          {
            "countyCode": "440222",
            "countyName": "始兴县",
            "isCity": false
          },
          {
            "countyCode": "440224",
            "countyName": "仁化县",
            "isCity": false
          },
          {
            "countyCode": "440229",
            "countyName": "翁源县",
            "isCity": false
          },
          {
            "countyCode": "440232",
            "countyName": "乳源瑶族自治县",
            "isCity": false
          },
          {
            "countyCode": "440233",
            "countyName": "新丰县",
            "isCity": false
          },
          {
            "countyCode": "440281",
            "countyName": "乐昌市",
            "isCity": true
          },
          {
            "countyCode": "440282",
            "countyName": "南雄市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "440300",
        "cityName": "深圳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "440301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "440303",
            "countyName": "罗湖区",
            "isCity": false
          },
          {
            "countyCode": "440304",
            "countyName": "福田区",
            "isCity": false
          },
          {
            "countyCode": "440305",
            "countyName": "南山区",
            "isCity": false
          },
          {
            "countyCode": "440306",
            "countyName": "宝安区",
            "isCity": false
          },
          {
            "countyCode": "440307",
            "countyName": "龙岗区",
            "isCity": false
          },
          {
            "countyCode": "440308",
            "countyName": "盐田区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "440400",
        "cityName": "珠海市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "440401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "440402",
            "countyName": "香洲区",
            "isCity": false
          },
          {
            "countyCode": "440403",
            "countyName": "斗门区",
            "isCity": false
          },
          {
            "countyCode": "440404",
            "countyName": "金湾区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "440500",
        "cityName": "汕头市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "440501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "440507",
            "countyName": "龙湖区",
            "isCity": false
          },
          {
            "countyCode": "440511",
            "countyName": "金平区",
            "isCity": false
          },
          {
            "countyCode": "440512",
            "countyName": "濠江区",
            "isCity": false
          },
          {
            "countyCode": "440513",
            "countyName": "潮阳区",
            "isCity": false
          },
          {
            "countyCode": "440514",
            "countyName": "潮南区",
            "isCity": false
          },
          {
            "countyCode": "440515",
            "countyName": "澄海区",
            "isCity": false
          },
          {
            "countyCode": "440523",
            "countyName": "南澳县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "440600",
        "cityName": "佛山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "440601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "440604",
            "countyName": "禅城区",
            "isCity": false
          },
          {
            "countyCode": "440605",
            "countyName": "南海区",
            "isCity": false
          },
          {
            "countyCode": "440606",
            "countyName": "顺德区",
            "isCity": false
          },
          {
            "countyCode": "440607",
            "countyName": "三水区",
            "isCity": false
          },
          {
            "countyCode": "440608",
            "countyName": "高明区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "440700",
        "cityName": "江门市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "440701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "440703",
            "countyName": "蓬江区",
            "isCity": false
          },
          {
            "countyCode": "440704",
            "countyName": "江海区",
            "isCity": false
          },
          {
            "countyCode": "440705",
            "countyName": "新会区",
            "isCity": false
          },
          {
            "countyCode": "440781",
            "countyName": "台山市",
            "isCity": true
          },
          {
            "countyCode": "440783",
            "countyName": "开平市",
            "isCity": true
          },
          {
            "countyCode": "440784",
            "countyName": "鹤山市",
            "isCity": true
          },
          {
            "countyCode": "440785",
            "countyName": "恩平市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "440800",
        "cityName": "湛江市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "440801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "440802",
            "countyName": "赤坎区",
            "isCity": false
          },
          {
            "countyCode": "440803",
            "countyName": "霞山区",
            "isCity": false
          },
          {
            "countyCode": "440804",
            "countyName": "坡头区",
            "isCity": false
          },
          {
            "countyCode": "440811",
            "countyName": "麻章区",
            "isCity": false
          },
          {
            "countyCode": "440823",
            "countyName": "遂溪县",
            "isCity": false
          },
          {
            "countyCode": "440825",
            "countyName": "徐闻县",
            "isCity": false
          },
          {
            "countyCode": "440881",
            "countyName": "廉江市",
            "isCity": true
          },
          {
            "countyCode": "440882",
            "countyName": "雷州市",
            "isCity": true
          },
          {
            "countyCode": "440883",
            "countyName": "吴川市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "440900",
        "cityName": "茂名市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "440901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "440902",
            "countyName": "茂南区",
            "isCity": false
          },
          {
            "countyCode": "440903",
            "countyName": "茂港区",
            "isCity": false
          },
          {
            "countyCode": "440923",
            "countyName": "电白县",
            "isCity": false
          },
          {
            "countyCode": "440981",
            "countyName": "高州市",
            "isCity": true
          },
          {
            "countyCode": "440982",
            "countyName": "化州市",
            "isCity": true
          },
          {
            "countyCode": "440983",
            "countyName": "信宜市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "441200",
        "cityName": "肇庆市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "441201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "441202",
            "countyName": "端州区",
            "isCity": false
          },
          {
            "countyCode": "441203",
            "countyName": "鼎湖区",
            "isCity": false
          },
          {
            "countyCode": "441223",
            "countyName": "广宁县",
            "isCity": false
          },
          {
            "countyCode": "441224",
            "countyName": "怀集县",
            "isCity": false
          },
          {
            "countyCode": "441225",
            "countyName": "封开县",
            "isCity": false
          },
          {
            "countyCode": "441226",
            "countyName": "德庆县",
            "isCity": false
          },
          {
            "countyCode": "441283",
            "countyName": "高要市",
            "isCity": true
          },
          {
            "countyCode": "441284",
            "countyName": "四会市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "441300",
        "cityName": "惠州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "441301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "441302",
            "countyName": "惠城区",
            "isCity": false
          },
          {
            "countyCode": "441303",
            "countyName": "惠阳区",
            "isCity": false
          },
          {
            "countyCode": "441322",
            "countyName": "博罗县",
            "isCity": false
          },
          {
            "countyCode": "441323",
            "countyName": "惠东县",
            "isCity": false
          },
          {
            "countyCode": "441324",
            "countyName": "龙门县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "441400",
        "cityName": "梅州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "441401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "441402",
            "countyName": "梅江区",
            "isCity": false
          },
          {
            "countyCode": "441421",
            "countyName": "梅县",
            "isCity": false
          },
          {
            "countyCode": "441422",
            "countyName": "大埔县",
            "isCity": false
          },
          {
            "countyCode": "441423",
            "countyName": "丰顺县",
            "isCity": false
          },
          {
            "countyCode": "441424",
            "countyName": "五华县",
            "isCity": false
          },
          {
            "countyCode": "441426",
            "countyName": "平远县",
            "isCity": false
          },
          {
            "countyCode": "441427",
            "countyName": "蕉岭县",
            "isCity": false
          },
          {
            "countyCode": "441481",
            "countyName": "兴宁市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "441500",
        "cityName": "汕尾市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "441501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "441502",
            "countyName": "城区",
            "isCity": false
          },
          {
            "countyCode": "441521",
            "countyName": "海丰县",
            "isCity": false
          },
          {
            "countyCode": "441523",
            "countyName": "陆河县",
            "isCity": false
          },
          {
            "countyCode": "441581",
            "countyName": "陆丰市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "441600",
        "cityName": "河源市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "441601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "441602",
            "countyName": "源城区",
            "isCity": false
          },
          {
            "countyCode": "441621",
            "countyName": "紫金县",
            "isCity": false
          },
          {
            "countyCode": "441622",
            "countyName": "龙川县",
            "isCity": false
          },
          {
            "countyCode": "441623",
            "countyName": "连平县",
            "isCity": false
          },
          {
            "countyCode": "441624",
            "countyName": "和平县",
            "isCity": false
          },
          {
            "countyCode": "441625",
            "countyName": "东源县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "441700",
        "cityName": "阳江市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "441701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "441702",
            "countyName": "江城区",
            "isCity": false
          },
          {
            "countyCode": "441721",
            "countyName": "阳西县",
            "isCity": false
          },
          {
            "countyCode": "441723",
            "countyName": "阳东县",
            "isCity": false
          },
          {
            "countyCode": "441781",
            "countyName": "阳春市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "441800",
        "cityName": "清远市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "441801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "441802",
            "countyName": "清城区",
            "isCity": false
          },
          {
            "countyCode": "441821",
            "countyName": "佛冈县",
            "isCity": false
          },
          {
            "countyCode": "441823",
            "countyName": "阳山县",
            "isCity": false
          },
          {
            "countyCode": "441825",
            "countyName": "连山壮族瑶族自治县",
            "isCity": false
          },
          {
            "countyCode": "441826",
            "countyName": "连南瑶族自治县",
            "isCity": false
          },
          {
            "countyCode": "441827",
            "countyName": "清新县",
            "isCity": false
          },
          {
            "countyCode": "441881",
            "countyName": "英德市",
            "isCity": true
          },
          {
            "countyCode": "441882",
            "countyName": "连州市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "441900",
        "cityName": "东莞市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "441901",
            "countyName": "东莞市市辖区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "442000",
        "cityName": "中山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "442001",
            "countyName": "中山市市辖区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "445100",
        "cityName": "潮州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "445101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "445102",
            "countyName": "湘桥区",
            "isCity": false
          },
          {
            "countyCode": "445121",
            "countyName": "潮安县",
            "isCity": false
          },
          {
            "countyCode": "445122",
            "countyName": "饶平县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "445200",
        "cityName": "揭阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "445201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "445202",
            "countyName": "榕城区",
            "isCity": false
          },
          {
            "countyCode": "445221",
            "countyName": "揭东县",
            "isCity": false
          },
          {
            "countyCode": "445222",
            "countyName": "揭西县",
            "isCity": false
          },
          {
            "countyCode": "445224",
            "countyName": "惠来县",
            "isCity": false
          },
          {
            "countyCode": "445281",
            "countyName": "普宁市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "445300",
        "cityName": "云浮市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "445301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "445302",
            "countyName": "云城区",
            "isCity": false
          },
          {
            "countyCode": "445321",
            "countyName": "新兴县",
            "isCity": false
          },
          {
            "countyCode": "445322",
            "countyName": "郁南县",
            "isCity": false
          },
          {
            "countyCode": "445323",
            "countyName": "云安县",
            "isCity": false
          },
          {
            "countyCode": "445381",
            "countyName": "罗定市",
            "isCity": true
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "450000",
    "provinceName": "广西壮族自治区",
    "provinceType": 3,
    "cities": [
      {
        "cityCode": "450100",
        "cityName": "南宁市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "450101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "450102",
            "countyName": "兴宁区",
            "isCity": false
          },
          {
            "countyCode": "450103",
            "countyName": "青秀区",
            "isCity": false
          },
          {
            "countyCode": "450105",
            "countyName": "江南区",
            "isCity": false
          },
          {
            "countyCode": "450107",
            "countyName": "西乡塘区",
            "isCity": false
          },
          {
            "countyCode": "450108",
            "countyName": "良庆区",
            "isCity": false
          },
          {
            "countyCode": "450109",
            "countyName": "邕宁区",
            "isCity": false
          },
          {
            "countyCode": "450122",
            "countyName": "武鸣县",
            "isCity": false
          },
          {
            "countyCode": "450123",
            "countyName": "隆安县",
            "isCity": false
          },
          {
            "countyCode": "450124",
            "countyName": "马山县",
            "isCity": false
          },
          {
            "countyCode": "450125",
            "countyName": "上林县",
            "isCity": false
          },
          {
            "countyCode": "450126",
            "countyName": "宾阳县",
            "isCity": false
          },
          {
            "countyCode": "450127",
            "countyName": "横县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "450200",
        "cityName": "柳州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "450201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "450202",
            "countyName": "城中区",
            "isCity": false
          },
          {
            "countyCode": "450203",
            "countyName": "鱼峰区",
            "isCity": false
          },
          {
            "countyCode": "450204",
            "countyName": "柳南区",
            "isCity": false
          },
          {
            "countyCode": "450205",
            "countyName": "柳北区",
            "isCity": false
          },
          {
            "countyCode": "450221",
            "countyName": "柳江县",
            "isCity": false
          },
          {
            "countyCode": "450222",
            "countyName": "柳城县",
            "isCity": false
          },
          {
            "countyCode": "450223",
            "countyName": "鹿寨县",
            "isCity": false
          },
          {
            "countyCode": "450224",
            "countyName": "融安县",
            "isCity": false
          },
          {
            "countyCode": "450225",
            "countyName": "融水苗族自治县",
            "isCity": false
          },
          {
            "countyCode": "450226",
            "countyName": "三江侗族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "450300",
        "cityName": "桂林市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "450301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "450302",
            "countyName": "秀峰区",
            "isCity": false
          },
          {
            "countyCode": "450303",
            "countyName": "叠彩区",
            "isCity": false
          },
          {
            "countyCode": "450304",
            "countyName": "象山区",
            "isCity": false
          },
          {
            "countyCode": "450305",
            "countyName": "七星区",
            "isCity": false
          },
          {
            "countyCode": "450311",
            "countyName": "雁山区",
            "isCity": false
          },
          {
            "countyCode": "450321",
            "countyName": "阳朔县",
            "isCity": false
          },
          {
            "countyCode": "450322",
            "countyName": "临桂县",
            "isCity": false
          },
          {
            "countyCode": "450323",
            "countyName": "灵川县",
            "isCity": false
          },
          {
            "countyCode": "450324",
            "countyName": "全州县",
            "isCity": false
          },
          {
            "countyCode": "450325",
            "countyName": "兴安县",
            "isCity": false
          },
          {
            "countyCode": "450326",
            "countyName": "永福县",
            "isCity": false
          },
          {
            "countyCode": "450327",
            "countyName": "灌阳县",
            "isCity": false
          },
          {
            "countyCode": "450328",
            "countyName": "龙胜各族自治县",
            "isCity": false
          },
          {
            "countyCode": "450329",
            "countyName": "资源县",
            "isCity": false
          },
          {
            "countyCode": "450330",
            "countyName": "平乐县",
            "isCity": false
          },
          {
            "countyCode": "450331",
            "countyName": "荔蒲县",
            "isCity": false
          },
          {
            "countyCode": "450332",
            "countyName": "恭城瑶族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "450400",
        "cityName": "梧州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "450401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "450403",
            "countyName": "万秀区",
            "isCity": false
          },
          {
            "countyCode": "450404",
            "countyName": "蝶山区",
            "isCity": false
          },
          {
            "countyCode": "450405",
            "countyName": "长洲区",
            "isCity": false
          },
          {
            "countyCode": "450421",
            "countyName": "苍梧县",
            "isCity": false
          },
          {
            "countyCode": "450422",
            "countyName": "藤县",
            "isCity": false
          },
          {
            "countyCode": "450423",
            "countyName": "蒙山县",
            "isCity": false
          },
          {
            "countyCode": "450481",
            "countyName": "岑溪市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "450500",
        "cityName": "北海市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "450501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "450502",
            "countyName": "海城区",
            "isCity": false
          },
          {
            "countyCode": "450503",
            "countyName": "银海区",
            "isCity": false
          },
          {
            "countyCode": "450512",
            "countyName": "铁山港区",
            "isCity": false
          },
          {
            "countyCode": "450521",
            "countyName": "合浦县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "450600",
        "cityName": "防城港市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "450601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "450602",
            "countyName": "港口区",
            "isCity": false
          },
          {
            "countyCode": "450603",
            "countyName": "防城区",
            "isCity": false
          },
          {
            "countyCode": "450621",
            "countyName": "上思县",
            "isCity": false
          },
          {
            "countyCode": "450681",
            "countyName": "东兴市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "450700",
        "cityName": "钦州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "450701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "450702",
            "countyName": "钦南区",
            "isCity": false
          },
          {
            "countyCode": "450703",
            "countyName": "钦北区",
            "isCity": false
          },
          {
            "countyCode": "450721",
            "countyName": "灵山县",
            "isCity": false
          },
          {
            "countyCode": "450722",
            "countyName": "浦北县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "450800",
        "cityName": "贵港市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "450801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "450802",
            "countyName": "港北区",
            "isCity": false
          },
          {
            "countyCode": "450803",
            "countyName": "港南区",
            "isCity": false
          },
          {
            "countyCode": "450804",
            "countyName": "覃塘区",
            "isCity": false
          },
          {
            "countyCode": "450821",
            "countyName": "平南县",
            "isCity": false
          },
          {
            "countyCode": "450881",
            "countyName": "桂平市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "450900",
        "cityName": "玉林市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "450901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "450902",
            "countyName": "玉州区",
            "isCity": false
          },
          {
            "countyCode": "450921",
            "countyName": "容县",
            "isCity": false
          },
          {
            "countyCode": "450922",
            "countyName": "陆川县",
            "isCity": false
          },
          {
            "countyCode": "450923",
            "countyName": "博白县",
            "isCity": false
          },
          {
            "countyCode": "450924",
            "countyName": "兴业县",
            "isCity": false
          },
          {
            "countyCode": "450981",
            "countyName": "北流市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "451000",
        "cityName": "百色市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "451001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "451002",
            "countyName": "右江区",
            "isCity": false
          },
          {
            "countyCode": "451021",
            "countyName": "田阳县",
            "isCity": false
          },
          {
            "countyCode": "451022",
            "countyName": "田东县",
            "isCity": false
          },
          {
            "countyCode": "451023",
            "countyName": "平果县",
            "isCity": false
          },
          {
            "countyCode": "451024",
            "countyName": "德保县",
            "isCity": false
          },
          {
            "countyCode": "451025",
            "countyName": "靖西县",
            "isCity": false
          },
          {
            "countyCode": "451026",
            "countyName": "那坡县",
            "isCity": false
          },
          {
            "countyCode": "451027",
            "countyName": "凌云县",
            "isCity": false
          },
          {
            "countyCode": "451028",
            "countyName": "乐业县",
            "isCity": false
          },
          {
            "countyCode": "451029",
            "countyName": "田林县",
            "isCity": false
          },
          {
            "countyCode": "451030",
            "countyName": "西林县",
            "isCity": false
          },
          {
            "countyCode": "451031",
            "countyName": "隆林各族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "451100",
        "cityName": "贺州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "451101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "451102",
            "countyName": "八步区",
            "isCity": false
          },
          {
            "countyCode": "451121",
            "countyName": "昭平县",
            "isCity": false
          },
          {
            "countyCode": "451122",
            "countyName": "钟山县",
            "isCity": false
          },
          {
            "countyCode": "451123",
            "countyName": "富川瑶族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "451200",
        "cityName": "河池市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "451201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "451202",
            "countyName": "金城江区",
            "isCity": false
          },
          {
            "countyCode": "451221",
            "countyName": "南丹县",
            "isCity": false
          },
          {
            "countyCode": "451222",
            "countyName": "天峨县",
            "isCity": false
          },
          {
            "countyCode": "451223",
            "countyName": "凤山县",
            "isCity": false
          },
          {
            "countyCode": "451224",
            "countyName": "东兰县",
            "isCity": false
          },
          {
            "countyCode": "451225",
            "countyName": "罗城仫佬族自治县",
            "isCity": false
          },
          {
            "countyCode": "451226",
            "countyName": "环江毛南族自治县",
            "isCity": false
          },
          {
            "countyCode": "451227",
            "countyName": "巴马瑶族自治县",
            "isCity": false
          },
          {
            "countyCode": "451228",
            "countyName": "都安瑶族自治县",
            "isCity": false
          },
          {
            "countyCode": "451229",
            "countyName": "大化瑶族自治县",
            "isCity": false
          },
          {
            "countyCode": "451281",
            "countyName": "宜州市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "451300",
        "cityName": "来宾市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "451301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "451302",
            "countyName": "兴宾区",
            "isCity": false
          },
          {
            "countyCode": "451321",
            "countyName": "忻城县",
            "isCity": false
          },
          {
            "countyCode": "451322",
            "countyName": "象州县",
            "isCity": false
          },
          {
            "countyCode": "451323",
            "countyName": "武宣县",
            "isCity": false
          },
          {
            "countyCode": "451324",
            "countyName": "金秀瑶族自治县",
            "isCity": false
          },
          {
            "countyCode": "451381",
            "countyName": "合山市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "451400",
        "cityName": "崇左市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "451401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "451402",
            "countyName": "江洲区",
            "isCity": false
          },
          {
            "countyCode": "451421",
            "countyName": "扶绥县",
            "isCity": false
          },
          {
            "countyCode": "451422",
            "countyName": "宁明县",
            "isCity": false
          },
          {
            "countyCode": "451423",
            "countyName": "龙州县",
            "isCity": false
          },
          {
            "countyCode": "451424",
            "countyName": "大新县",
            "isCity": false
          },
          {
            "countyCode": "451425",
            "countyName": "天等县",
            "isCity": false
          },
          {
            "countyCode": "451481",
            "countyName": "凭祥市",
            "isCity": true
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "460000",
    "provinceName": "海南省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "460100",
        "cityName": "海口市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "460101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "460105",
            "countyName": "秀英区",
            "isCity": false
          },
          {
            "countyCode": "460106",
            "countyName": "龙华区",
            "isCity": false
          },
          {
            "countyCode": "460107",
            "countyName": "琼山区",
            "isCity": false
          },
          {
            "countyCode": "460108",
            "countyName": "美兰区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "460200",
        "cityName": "三亚市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "460201",
            "countyName": "市辖区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "469000",
        "cityName": "省直辖县级行政单",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "469001",
            "countyName": "五指山市",
            "isCity": true
          },
          {
            "countyCode": "469002",
            "countyName": "琼海市",
            "isCity": true
          },
          {
            "countyCode": "469003",
            "countyName": "儋州市",
            "isCity": true
          },
          {
            "countyCode": "469005",
            "countyName": "文昌市",
            "isCity": true
          },
          {
            "countyCode": "469006",
            "countyName": "万宁市",
            "isCity": true
          },
          {
            "countyCode": "469007",
            "countyName": "东方市",
            "isCity": true
          },
          {
            "countyCode": "469025",
            "countyName": "定安县",
            "isCity": false
          },
          {
            "countyCode": "469026",
            "countyName": "屯昌县",
            "isCity": false
          },
          {
            "countyCode": "469027",
            "countyName": "澄迈县",
            "isCity": false
          },
          {
            "countyCode": "469028",
            "countyName": "临高县",
            "isCity": false
          },
          {
            "countyCode": "469030",
            "countyName": "白沙黎族自治县",
            "isCity": false
          },
          {
            "countyCode": "469031",
            "countyName": "昌江黎族自治县",
            "isCity": false
          },
          {
            "countyCode": "469033",
            "countyName": "乐东黎族自治县",
            "isCity": false
          },
          {
            "countyCode": "469034",
            "countyName": "陵水黎族自治县",
            "isCity": false
          },
          {
            "countyCode": "469035",
            "countyName": "保亭黎族苗族自治县",
            "isCity": false
          },
          {
            "countyCode": "469036",
            "countyName": "琼中黎族苗族自治县",
            "isCity": false
          },
          {
            "countyCode": "469037",
            "countyName": "西沙群岛",
            "isCity": false
          },
          {
            "countyCode": "469038",
            "countyName": "南沙群岛",
            "isCity": false
          },
          {
            "countyCode": "469039",
            "countyName": "中沙群岛的岛礁及其",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "500000",
    "provinceName": "重庆市",
    "provinceType": 1,
    "cities": [
      {
        "cityCode": "500100",
        "cityName": "市辖区",
        "cityType": 1,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "500101",
            "countyName": "万州区",
            "isCity": false
          },
          {
            "countyCode": "500102",
            "countyName": "涪陵区",
            "isCity": false
          },
          {
            "countyCode": "500103",
            "countyName": "渝中区",
            "isCity": false
          },
          {
            "countyCode": "500104",
            "countyName": "大渡口区",
            "isCity": false
          },
          {
            "countyCode": "500105",
            "countyName": "江北区",
            "isCity": false
          },
          {
            "countyCode": "500106",
            "countyName": "沙坪坝区",
            "isCity": false
          },
          {
            "countyCode": "500107",
            "countyName": "九龙坡区",
            "isCity": false
          },
          {
            "countyCode": "500108",
            "countyName": "南岸区",
            "isCity": false
          },
          {
            "countyCode": "500109",
            "countyName": "北碚区",
            "isCity": false
          },
          {
            "countyCode": "500110",
            "countyName": "万盛区",
            "isCity": false
          },
          {
            "countyCode": "500111",
            "countyName": "双桥区",
            "isCity": false
          },
          {
            "countyCode": "500112",
            "countyName": "渝北区",
            "isCity": false
          },
          {
            "countyCode": "500113",
            "countyName": "巴南区",
            "isCity": false
          },
          {
            "countyCode": "500114",
            "countyName": "黔江区",
            "isCity": false
          },
          {
            "countyCode": "500115",
            "countyName": "长寿区",
            "isCity": false
          },
          {
            "countyCode": "500116",
            "countyName": "江津区",
            "isCity": false
          },
          {
            "countyCode": "500117",
            "countyName": "合川区",
            "isCity": false
          },
          {
            "countyCode": "500118",
            "countyName": "永川区",
            "isCity": false
          },
          {
            "countyCode": "500119",
            "countyName": "南川区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "500000",
        "cityName": "县",
        "cityType": 2,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "500222",
            "countyName": "綦江县",
            "isCity": false
          },
          {
            "countyCode": "500223",
            "countyName": "潼南县",
            "isCity": false
          },
          {
            "countyCode": "500224",
            "countyName": "铜梁县",
            "isCity": false
          },
          {
            "countyCode": "500225",
            "countyName": "大足县",
            "isCity": false
          },
          {
            "countyCode": "500226",
            "countyName": "荣昌县",
            "isCity": false
          },
          {
            "countyCode": "500227",
            "countyName": "璧山县",
            "isCity": false
          },
          {
            "countyCode": "500228",
            "countyName": "梁平县",
            "isCity": false
          },
          {
            "countyCode": "500229",
            "countyName": "城口县",
            "isCity": false
          },
          {
            "countyCode": "500230",
            "countyName": "丰都县",
            "isCity": false
          },
          {
            "countyCode": "500231",
            "countyName": "垫江县",
            "isCity": false
          },
          {
            "countyCode": "500232",
            "countyName": "武隆县",
            "isCity": false
          },
          {
            "countyCode": "500233",
            "countyName": "忠县",
            "isCity": false
          },
          {
            "countyCode": "500234",
            "countyName": "开县",
            "isCity": false
          },
          {
            "countyCode": "500235",
            "countyName": "云阳县",
            "isCity": false
          },
          {
            "countyCode": "500236",
            "countyName": "奉节县",
            "isCity": false
          },
          {
            "countyCode": "500237",
            "countyName": "巫山县",
            "isCity": false
          },
          {
            "countyCode": "500238",
            "countyName": "巫溪县",
            "isCity": false
          },
          {
            "countyCode": "500240",
            "countyName": "石柱土家族自治县",
            "isCity": false
          },
          {
            "countyCode": "500241",
            "countyName": "秀山土家族苗族自治",
            "isCity": false
          },
          {
            "countyCode": "500242",
            "countyName": "酉阳土家族苗族自治",
            "isCity": false
          },
          {
            "countyCode": "500243",
            "countyName": "彭水苗族土家族自治",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "510000",
    "provinceName": "四川省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "510100",
        "cityName": "成都市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "510101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "510104",
            "countyName": "锦江区",
            "isCity": false
          },
          {
            "countyCode": "510105",
            "countyName": "青羊区",
            "isCity": false
          },
          {
            "countyCode": "510106",
            "countyName": "金牛区",
            "isCity": false
          },
          {
            "countyCode": "510107",
            "countyName": "武侯区",
            "isCity": false
          },
          {
            "countyCode": "510108",
            "countyName": "成华区",
            "isCity": false
          },
          {
            "countyCode": "510112",
            "countyName": "龙泉驿区",
            "isCity": false
          },
          {
            "countyCode": "510113",
            "countyName": "青白江区",
            "isCity": false
          },
          {
            "countyCode": "510114",
            "countyName": "新都区",
            "isCity": false
          },
          {
            "countyCode": "510115",
            "countyName": "温江区",
            "isCity": false
          },
          {
            "countyCode": "510121",
            "countyName": "金堂县",
            "isCity": false
          },
          {
            "countyCode": "510122",
            "countyName": "双流县",
            "isCity": false
          },
          {
            "countyCode": "510124",
            "countyName": "郫县",
            "isCity": false
          },
          {
            "countyCode": "510129",
            "countyName": "大邑县",
            "isCity": false
          },
          {
            "countyCode": "510131",
            "countyName": "蒲江县",
            "isCity": false
          },
          {
            "countyCode": "510132",
            "countyName": "新津县",
            "isCity": false
          },
          {
            "countyCode": "510181",
            "countyName": "都江堰市",
            "isCity": true
          },
          {
            "countyCode": "510182",
            "countyName": "彭州市",
            "isCity": true
          },
          {
            "countyCode": "510183",
            "countyName": "邛崃市",
            "isCity": true
          },
          {
            "countyCode": "510184",
            "countyName": "崇州市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "510300",
        "cityName": "自贡市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "510301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "510302",
            "countyName": "自流井区",
            "isCity": false
          },
          {
            "countyCode": "510303",
            "countyName": "贡井区",
            "isCity": false
          },
          {
            "countyCode": "510304",
            "countyName": "大安区",
            "isCity": false
          },
          {
            "countyCode": "510311",
            "countyName": "沿滩区",
            "isCity": false
          },
          {
            "countyCode": "510321",
            "countyName": "荣县",
            "isCity": false
          },
          {
            "countyCode": "510322",
            "countyName": "富顺县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "510400",
        "cityName": "攀枝花市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "510401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "510402",
            "countyName": "东区",
            "isCity": false
          },
          {
            "countyCode": "510403",
            "countyName": "西区",
            "isCity": false
          },
          {
            "countyCode": "510411",
            "countyName": "仁和区",
            "isCity": false
          },
          {
            "countyCode": "510421",
            "countyName": "米易县",
            "isCity": false
          },
          {
            "countyCode": "510422",
            "countyName": "盐边县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "510500",
        "cityName": "泸州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "510501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "510502",
            "countyName": "江阳区",
            "isCity": false
          },
          {
            "countyCode": "510503",
            "countyName": "纳溪区",
            "isCity": false
          },
          {
            "countyCode": "510504",
            "countyName": "龙马潭区",
            "isCity": false
          },
          {
            "countyCode": "510521",
            "countyName": "泸县",
            "isCity": false
          },
          {
            "countyCode": "510522",
            "countyName": "合江县",
            "isCity": false
          },
          {
            "countyCode": "510524",
            "countyName": "叙永县",
            "isCity": false
          },
          {
            "countyCode": "510525",
            "countyName": "古蔺县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "510600",
        "cityName": "德阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "510601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "510603",
            "countyName": "旌阳区",
            "isCity": false
          },
          {
            "countyCode": "510623",
            "countyName": "中江县",
            "isCity": false
          },
          {
            "countyCode": "510626",
            "countyName": "罗江县",
            "isCity": false
          },
          {
            "countyCode": "510681",
            "countyName": "广汉市",
            "isCity": true
          },
          {
            "countyCode": "510682",
            "countyName": "什邡市",
            "isCity": true
          },
          {
            "countyCode": "510683",
            "countyName": "绵竹市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "510700",
        "cityName": "绵阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "510701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "510703",
            "countyName": "涪城区",
            "isCity": false
          },
          {
            "countyCode": "510704",
            "countyName": "游仙区",
            "isCity": false
          },
          {
            "countyCode": "510722",
            "countyName": "三台县",
            "isCity": false
          },
          {
            "countyCode": "510723",
            "countyName": "盐亭县",
            "isCity": false
          },
          {
            "countyCode": "510724",
            "countyName": "安县",
            "isCity": false
          },
          {
            "countyCode": "510725",
            "countyName": "梓潼县",
            "isCity": false
          },
          {
            "countyCode": "510726",
            "countyName": "北川羌族自治县",
            "isCity": false
          },
          {
            "countyCode": "510727",
            "countyName": "平武县",
            "isCity": false
          },
          {
            "countyCode": "510781",
            "countyName": "江油市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "510800",
        "cityName": "广元市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "510801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "510802",
            "countyName": "市中区",
            "isCity": false
          },
          {
            "countyCode": "510811",
            "countyName": "元坝区",
            "isCity": false
          },
          {
            "countyCode": "510812",
            "countyName": "朝天区",
            "isCity": false
          },
          {
            "countyCode": "510821",
            "countyName": "旺苍县",
            "isCity": false
          },
          {
            "countyCode": "510822",
            "countyName": "青川县",
            "isCity": false
          },
          {
            "countyCode": "510823",
            "countyName": "剑阁县",
            "isCity": false
          },
          {
            "countyCode": "510824",
            "countyName": "苍溪县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "510900",
        "cityName": "遂宁市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "510901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "510903",
            "countyName": "船山区",
            "isCity": false
          },
          {
            "countyCode": "510904",
            "countyName": "安居区",
            "isCity": false
          },
          {
            "countyCode": "510921",
            "countyName": "蓬溪县",
            "isCity": false
          },
          {
            "countyCode": "510922",
            "countyName": "射洪县",
            "isCity": false
          },
          {
            "countyCode": "510923",
            "countyName": "大英县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "511000",
        "cityName": "内江市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "511001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "511002",
            "countyName": "市中区",
            "isCity": false
          },
          {
            "countyCode": "511011",
            "countyName": "东兴区",
            "isCity": false
          },
          {
            "countyCode": "511024",
            "countyName": "威远县",
            "isCity": false
          },
          {
            "countyCode": "511025",
            "countyName": "资中县",
            "isCity": false
          },
          {
            "countyCode": "511028",
            "countyName": "隆昌县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "511100",
        "cityName": "乐山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "511101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "511102",
            "countyName": "市中区",
            "isCity": false
          },
          {
            "countyCode": "511111",
            "countyName": "沙湾区",
            "isCity": false
          },
          {
            "countyCode": "511112",
            "countyName": "五通桥区",
            "isCity": false
          },
          {
            "countyCode": "511113",
            "countyName": "金口河区",
            "isCity": false
          },
          {
            "countyCode": "511123",
            "countyName": "犍为县",
            "isCity": false
          },
          {
            "countyCode": "511124",
            "countyName": "井研县",
            "isCity": false
          },
          {
            "countyCode": "511126",
            "countyName": "夹江县",
            "isCity": false
          },
          {
            "countyCode": "511129",
            "countyName": "沐川县",
            "isCity": false
          },
          {
            "countyCode": "511132",
            "countyName": "峨边彝族自治县",
            "isCity": false
          },
          {
            "countyCode": "511133",
            "countyName": "马边彝族自治县",
            "isCity": false
          },
          {
            "countyCode": "511181",
            "countyName": "峨眉山市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "511300",
        "cityName": "南充市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "511301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "511302",
            "countyName": "顺庆区",
            "isCity": false
          },
          {
            "countyCode": "511303",
            "countyName": "高坪区",
            "isCity": false
          },
          {
            "countyCode": "511304",
            "countyName": "嘉陵区",
            "isCity": false
          },
          {
            "countyCode": "511321",
            "countyName": "南部县",
            "isCity": false
          },
          {
            "countyCode": "511322",
            "countyName": "营山县",
            "isCity": false
          },
          {
            "countyCode": "511323",
            "countyName": "蓬安县",
            "isCity": false
          },
          {
            "countyCode": "511324",
            "countyName": "仪陇县",
            "isCity": false
          },
          {
            "countyCode": "511325",
            "countyName": "西充县",
            "isCity": false
          },
          {
            "countyCode": "511381",
            "countyName": "阆中市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "511400",
        "cityName": "眉山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "511401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "511402",
            "countyName": "东坡区",
            "isCity": false
          },
          {
            "countyCode": "511421",
            "countyName": "仁寿县",
            "isCity": false
          },
          {
            "countyCode": "511422",
            "countyName": "彭山县",
            "isCity": false
          },
          {
            "countyCode": "511423",
            "countyName": "洪雅县",
            "isCity": false
          },
          {
            "countyCode": "511424",
            "countyName": "丹棱县",
            "isCity": false
          },
          {
            "countyCode": "511425",
            "countyName": "青神县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "511500",
        "cityName": "宜宾市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "511501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "511502",
            "countyName": "翠屏区",
            "isCity": false
          },
          {
            "countyCode": "511521",
            "countyName": "宜宾县",
            "isCity": false
          },
          {
            "countyCode": "511522",
            "countyName": "南溪县",
            "isCity": false
          },
          {
            "countyCode": "511523",
            "countyName": "江安县",
            "isCity": false
          },
          {
            "countyCode": "511524",
            "countyName": "长宁县",
            "isCity": false
          },
          {
            "countyCode": "511525",
            "countyName": "高县",
            "isCity": false
          },
          {
            "countyCode": "511526",
            "countyName": "珙县",
            "isCity": false
          },
          {
            "countyCode": "511527",
            "countyName": "筠连县",
            "isCity": false
          },
          {
            "countyCode": "511528",
            "countyName": "兴文县",
            "isCity": false
          },
          {
            "countyCode": "511529",
            "countyName": "屏山县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "511600",
        "cityName": "广安市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "511601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "511602",
            "countyName": "广安区",
            "isCity": false
          },
          {
            "countyCode": "511621",
            "countyName": "岳池县",
            "isCity": false
          },
          {
            "countyCode": "511622",
            "countyName": "武胜县",
            "isCity": false
          },
          {
            "countyCode": "511623",
            "countyName": "邻水县",
            "isCity": false
          },
          {
            "countyCode": "511681",
            "countyName": "华蓥市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "511700",
        "cityName": "达州市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "511701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "511702",
            "countyName": "通川区",
            "isCity": false
          },
          {
            "countyCode": "511721",
            "countyName": "达县",
            "isCity": false
          },
          {
            "countyCode": "511722",
            "countyName": "宣汉县",
            "isCity": false
          },
          {
            "countyCode": "511723",
            "countyName": "开江县",
            "isCity": false
          },
          {
            "countyCode": "511724",
            "countyName": "大竹县",
            "isCity": false
          },
          {
            "countyCode": "511725",
            "countyName": "渠县",
            "isCity": false
          },
          {
            "countyCode": "511781",
            "countyName": "万源市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "511800",
        "cityName": "雅安市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "511801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "511802",
            "countyName": "雨城区",
            "isCity": false
          },
          {
            "countyCode": "511821",
            "countyName": "名山县",
            "isCity": false
          },
          {
            "countyCode": "511822",
            "countyName": "荥经县",
            "isCity": false
          },
          {
            "countyCode": "511823",
            "countyName": "汉源县",
            "isCity": false
          },
          {
            "countyCode": "511824",
            "countyName": "石棉县",
            "isCity": false
          },
          {
            "countyCode": "511825",
            "countyName": "天全县",
            "isCity": false
          },
          {
            "countyCode": "511826",
            "countyName": "芦山县",
            "isCity": false
          },
          {
            "countyCode": "511827",
            "countyName": "宝兴县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "511900",
        "cityName": "巴中市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "511901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "511902",
            "countyName": "巴州区",
            "isCity": false
          },
          {
            "countyCode": "511921",
            "countyName": "通江县",
            "isCity": false
          },
          {
            "countyCode": "511922",
            "countyName": "南江县",
            "isCity": false
          },
          {
            "countyCode": "511923",
            "countyName": "平昌县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "512000",
        "cityName": "资阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "512001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "512002",
            "countyName": "雁江区",
            "isCity": false
          },
          {
            "countyCode": "512021",
            "countyName": "安岳县",
            "isCity": false
          },
          {
            "countyCode": "512022",
            "countyName": "乐至县",
            "isCity": false
          },
          {
            "countyCode": "512081",
            "countyName": "简阳市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "513200",
        "cityName": "阿坝藏族羌族自治",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "513221",
            "countyName": "汶川县",
            "isCity": false
          },
          {
            "countyCode": "513222",
            "countyName": "理县",
            "isCity": false
          },
          {
            "countyCode": "513223",
            "countyName": "茂县",
            "isCity": false
          },
          {
            "countyCode": "513224",
            "countyName": "松潘县",
            "isCity": false
          },
          {
            "countyCode": "513225",
            "countyName": "九寨沟县",
            "isCity": false
          },
          {
            "countyCode": "513226",
            "countyName": "金川县",
            "isCity": false
          },
          {
            "countyCode": "513227",
            "countyName": "小金县",
            "isCity": false
          },
          {
            "countyCode": "513228",
            "countyName": "黑水县",
            "isCity": false
          },
          {
            "countyCode": "513229",
            "countyName": "马尔康县",
            "isCity": false
          },
          {
            "countyCode": "513230",
            "countyName": "壤塘县",
            "isCity": false
          },
          {
            "countyCode": "513231",
            "countyName": "阿坝县",
            "isCity": false
          },
          {
            "countyCode": "513232",
            "countyName": "若尔盖县",
            "isCity": false
          },
          {
            "countyCode": "513233",
            "countyName": "红原县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "513300",
        "cityName": "甘孜藏族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "513321",
            "countyName": "康定县",
            "isCity": false
          },
          {
            "countyCode": "513322",
            "countyName": "泸定县",
            "isCity": false
          },
          {
            "countyCode": "513323",
            "countyName": "丹巴县",
            "isCity": false
          },
          {
            "countyCode": "513324",
            "countyName": "九龙县",
            "isCity": false
          },
          {
            "countyCode": "513325",
            "countyName": "雅江县",
            "isCity": false
          },
          {
            "countyCode": "513326",
            "countyName": "道孚县",
            "isCity": false
          },
          {
            "countyCode": "513327",
            "countyName": "炉霍县",
            "isCity": false
          },
          {
            "countyCode": "513328",
            "countyName": "甘孜县",
            "isCity": false
          },
          {
            "countyCode": "513329",
            "countyName": "新龙县",
            "isCity": false
          },
          {
            "countyCode": "513330",
            "countyName": "德格县",
            "isCity": false
          },
          {
            "countyCode": "513331",
            "countyName": "白玉县",
            "isCity": false
          },
          {
            "countyCode": "513332",
            "countyName": "石渠县",
            "isCity": false
          },
          {
            "countyCode": "513333",
            "countyName": "色达县",
            "isCity": false
          },
          {
            "countyCode": "513334",
            "countyName": "理塘县",
            "isCity": false
          },
          {
            "countyCode": "513335",
            "countyName": "巴塘县",
            "isCity": false
          },
          {
            "countyCode": "513336",
            "countyName": "乡城县",
            "isCity": false
          },
          {
            "countyCode": "513337",
            "countyName": "稻城县",
            "isCity": false
          },
          {
            "countyCode": "513338",
            "countyName": "得荣县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "513400",
        "cityName": "凉山彝族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "513401",
            "countyName": "西昌市",
            "isCity": true
          },
          {
            "countyCode": "513422",
            "countyName": "木里藏族自治县",
            "isCity": false
          },
          {
            "countyCode": "513423",
            "countyName": "盐源县",
            "isCity": false
          },
          {
            "countyCode": "513424",
            "countyName": "德昌县",
            "isCity": false
          },
          {
            "countyCode": "513425",
            "countyName": "会理县",
            "isCity": false
          },
          {
            "countyCode": "513426",
            "countyName": "会东县",
            "isCity": false
          },
          {
            "countyCode": "513427",
            "countyName": "宁南县",
            "isCity": false
          },
          {
            "countyCode": "513428",
            "countyName": "普格县",
            "isCity": false
          },
          {
            "countyCode": "513429",
            "countyName": "布拖县",
            "isCity": false
          },
          {
            "countyCode": "513430",
            "countyName": "金阳县",
            "isCity": false
          },
          {
            "countyCode": "513431",
            "countyName": "昭觉县",
            "isCity": false
          },
          {
            "countyCode": "513432",
            "countyName": "喜德县",
            "isCity": false
          },
          {
            "countyCode": "513433",
            "countyName": "冕宁县",
            "isCity": false
          },
          {
            "countyCode": "513434",
            "countyName": "越西县",
            "isCity": false
          },
          {
            "countyCode": "513435",
            "countyName": "甘洛县",
            "isCity": false
          },
          {
            "countyCode": "513436",
            "countyName": "美姑县",
            "isCity": false
          },
          {
            "countyCode": "513437",
            "countyName": "雷波县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "520000",
    "provinceName": "贵州省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "520100",
        "cityName": "贵阳市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "520101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "520102",
            "countyName": "南明区",
            "isCity": false
          },
          {
            "countyCode": "520103",
            "countyName": "云岩区",
            "isCity": false
          },
          {
            "countyCode": "520111",
            "countyName": "花溪区",
            "isCity": false
          },
          {
            "countyCode": "520112",
            "countyName": "乌当区",
            "isCity": false
          },
          {
            "countyCode": "520113",
            "countyName": "白云区",
            "isCity": false
          },
          {
            "countyCode": "520114",
            "countyName": "小河区",
            "isCity": false
          },
          {
            "countyCode": "520121",
            "countyName": "开阳县",
            "isCity": false
          },
          {
            "countyCode": "520122",
            "countyName": "息烽县",
            "isCity": false
          },
          {
            "countyCode": "520123",
            "countyName": "修文县",
            "isCity": false
          },
          {
            "countyCode": "520181",
            "countyName": "清镇市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "520200",
        "cityName": "六盘水市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "520201",
            "countyName": "钟山区",
            "isCity": false
          },
          {
            "countyCode": "520203",
            "countyName": "六枝特区",
            "isCity": false
          },
          {
            "countyCode": "520221",
            "countyName": "水城县",
            "isCity": false
          },
          {
            "countyCode": "520222",
            "countyName": "盘县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "520300",
        "cityName": "遵义市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "520301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "520302",
            "countyName": "红花岗区",
            "isCity": false
          },
          {
            "countyCode": "520303",
            "countyName": "汇川区",
            "isCity": false
          },
          {
            "countyCode": "520321",
            "countyName": "遵义县",
            "isCity": false
          },
          {
            "countyCode": "520322",
            "countyName": "桐梓县",
            "isCity": false
          },
          {
            "countyCode": "520323",
            "countyName": "绥阳县",
            "isCity": false
          },
          {
            "countyCode": "520324",
            "countyName": "正安县",
            "isCity": false
          },
          {
            "countyCode": "520325",
            "countyName": "道真仡佬族苗族自治",
            "isCity": false
          },
          {
            "countyCode": "520326",
            "countyName": "务川仡佬族苗族自治",
            "isCity": false
          },
          {
            "countyCode": "520327",
            "countyName": "凤冈县",
            "isCity": false
          },
          {
            "countyCode": "520328",
            "countyName": "湄潭县",
            "isCity": false
          },
          {
            "countyCode": "520329",
            "countyName": "余庆县",
            "isCity": false
          },
          {
            "countyCode": "520330",
            "countyName": "习水县",
            "isCity": false
          },
          {
            "countyCode": "520381",
            "countyName": "赤水市",
            "isCity": true
          },
          {
            "countyCode": "520382",
            "countyName": "仁怀市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "520400",
        "cityName": "安顺市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "520401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "520402",
            "countyName": "西秀区",
            "isCity": false
          },
          {
            "countyCode": "520421",
            "countyName": "平坝县",
            "isCity": false
          },
          {
            "countyCode": "520422",
            "countyName": "普定县",
            "isCity": false
          },
          {
            "countyCode": "520423",
            "countyName": "镇宁布依族苗族自治",
            "isCity": false
          },
          {
            "countyCode": "520424",
            "countyName": "关岭布依族苗族自治",
            "isCity": false
          },
          {
            "countyCode": "520425",
            "countyName": "紫云苗族布依族自治",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "522200",
        "cityName": "铜仁地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "522201",
            "countyName": "铜仁市",
            "isCity": true
          },
          {
            "countyCode": "522222",
            "countyName": "江口县",
            "isCity": false
          },
          {
            "countyCode": "522223",
            "countyName": "玉屏侗族自治县",
            "isCity": false
          },
          {
            "countyCode": "522224",
            "countyName": "石阡县",
            "isCity": false
          },
          {
            "countyCode": "522225",
            "countyName": "思南县",
            "isCity": false
          },
          {
            "countyCode": "522226",
            "countyName": "印江土家族苗族自治",
            "isCity": false
          },
          {
            "countyCode": "522227",
            "countyName": "德江县",
            "isCity": false
          },
          {
            "countyCode": "522228",
            "countyName": "沿河土家族自治县",
            "isCity": false
          },
          {
            "countyCode": "522229",
            "countyName": "松桃苗族自治县",
            "isCity": false
          },
          {
            "countyCode": "522230",
            "countyName": "万山特区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "522300",
        "cityName": "黔西南布依族苗族",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "522301",
            "countyName": "兴义市",
            "isCity": true
          },
          {
            "countyCode": "522322",
            "countyName": "兴仁县",
            "isCity": false
          },
          {
            "countyCode": "522323",
            "countyName": "普安县",
            "isCity": false
          },
          {
            "countyCode": "522324",
            "countyName": "晴隆县",
            "isCity": false
          },
          {
            "countyCode": "522325",
            "countyName": "贞丰县",
            "isCity": false
          },
          {
            "countyCode": "522326",
            "countyName": "望谟县",
            "isCity": false
          },
          {
            "countyCode": "522327",
            "countyName": "册亨县",
            "isCity": false
          },
          {
            "countyCode": "522328",
            "countyName": "安龙县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "522400",
        "cityName": "毕节地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "522401",
            "countyName": "毕节市",
            "isCity": true
          },
          {
            "countyCode": "522422",
            "countyName": "大方县",
            "isCity": false
          },
          {
            "countyCode": "522423",
            "countyName": "黔西县",
            "isCity": false
          },
          {
            "countyCode": "522424",
            "countyName": "金沙县",
            "isCity": false
          },
          {
            "countyCode": "522425",
            "countyName": "织金县",
            "isCity": false
          },
          {
            "countyCode": "522426",
            "countyName": "纳雍县",
            "isCity": false
          },
          {
            "countyCode": "522427",
            "countyName": "威宁彝族回族苗族自",
            "isCity": false
          },
          {
            "countyCode": "522428",
            "countyName": "赫章县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "522600",
        "cityName": "黔东南苗族侗族自",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "522601",
            "countyName": "凯里市",
            "isCity": true
          },
          {
            "countyCode": "522622",
            "countyName": "黄平县",
            "isCity": false
          },
          {
            "countyCode": "522623",
            "countyName": "施秉县",
            "isCity": false
          },
          {
            "countyCode": "522624",
            "countyName": "三穗县",
            "isCity": false
          },
          {
            "countyCode": "522625",
            "countyName": "镇远县",
            "isCity": false
          },
          {
            "countyCode": "522626",
            "countyName": "岑巩县",
            "isCity": false
          },
          {
            "countyCode": "522627",
            "countyName": "天柱县",
            "isCity": false
          },
          {
            "countyCode": "522628",
            "countyName": "锦屏县",
            "isCity": false
          },
          {
            "countyCode": "522629",
            "countyName": "剑河县",
            "isCity": false
          },
          {
            "countyCode": "522630",
            "countyName": "台江县",
            "isCity": false
          },
          {
            "countyCode": "522631",
            "countyName": "黎平县",
            "isCity": false
          },
          {
            "countyCode": "522632",
            "countyName": "榕江县",
            "isCity": false
          },
          {
            "countyCode": "522633",
            "countyName": "从江县",
            "isCity": false
          },
          {
            "countyCode": "522634",
            "countyName": "雷山县",
            "isCity": false
          },
          {
            "countyCode": "522635",
            "countyName": "麻江县",
            "isCity": false
          },
          {
            "countyCode": "522636",
            "countyName": "丹寨县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "522700",
        "cityName": "黔南布依族苗族自",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "522701",
            "countyName": "都匀市",
            "isCity": true
          },
          {
            "countyCode": "522702",
            "countyName": "福泉市",
            "isCity": true
          },
          {
            "countyCode": "522722",
            "countyName": "荔波县",
            "isCity": false
          },
          {
            "countyCode": "522723",
            "countyName": "贵定县",
            "isCity": false
          },
          {
            "countyCode": "522725",
            "countyName": "瓮安县",
            "isCity": false
          },
          {
            "countyCode": "522726",
            "countyName": "独山县",
            "isCity": false
          },
          {
            "countyCode": "522727",
            "countyName": "平塘县",
            "isCity": false
          },
          {
            "countyCode": "522728",
            "countyName": "罗甸县",
            "isCity": false
          },
          {
            "countyCode": "522729",
            "countyName": "长顺县",
            "isCity": false
          },
          {
            "countyCode": "522730",
            "countyName": "龙里县",
            "isCity": false
          },
          {
            "countyCode": "522731",
            "countyName": "惠水县",
            "isCity": false
          },
          {
            "countyCode": "522732",
            "countyName": "三都水族自治县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "530000",
    "provinceName": "云南省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "530100",
        "cityName": "昆明市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "530101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "530102",
            "countyName": "五华区",
            "isCity": false
          },
          {
            "countyCode": "530103",
            "countyName": "盘龙区",
            "isCity": false
          },
          {
            "countyCode": "530111",
            "countyName": "官渡区",
            "isCity": false
          },
          {
            "countyCode": "530112",
            "countyName": "西山区",
            "isCity": false
          },
          {
            "countyCode": "530113",
            "countyName": "东川区",
            "isCity": false
          },
          {
            "countyCode": "530121",
            "countyName": "呈贡县",
            "isCity": false
          },
          {
            "countyCode": "530122",
            "countyName": "晋宁县",
            "isCity": false
          },
          {
            "countyCode": "530124",
            "countyName": "富民县",
            "isCity": false
          },
          {
            "countyCode": "530125",
            "countyName": "宜良县",
            "isCity": false
          },
          {
            "countyCode": "530126",
            "countyName": "石林彝族自治县",
            "isCity": false
          },
          {
            "countyCode": "530127",
            "countyName": "嵩明县",
            "isCity": false
          },
          {
            "countyCode": "530128",
            "countyName": "禄劝彝族苗族自治县",
            "isCity": false
          },
          {
            "countyCode": "530129",
            "countyName": "寻甸回族彝族自治县",
            "isCity": false
          },
          {
            "countyCode": "530181",
            "countyName": "安宁市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "530300",
        "cityName": "曲靖市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "530301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "530302",
            "countyName": "麒麟区",
            "isCity": false
          },
          {
            "countyCode": "530321",
            "countyName": "马龙县",
            "isCity": false
          },
          {
            "countyCode": "530322",
            "countyName": "陆良县",
            "isCity": false
          },
          {
            "countyCode": "530323",
            "countyName": "师宗县",
            "isCity": false
          },
          {
            "countyCode": "530324",
            "countyName": "罗平县",
            "isCity": false
          },
          {
            "countyCode": "530325",
            "countyName": "富源县",
            "isCity": false
          },
          {
            "countyCode": "530326",
            "countyName": "会泽县",
            "isCity": false
          },
          {
            "countyCode": "530328",
            "countyName": "沾益县",
            "isCity": false
          },
          {
            "countyCode": "530381",
            "countyName": "宣威市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "530400",
        "cityName": "玉溪市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "530401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "530402",
            "countyName": "红塔区",
            "isCity": false
          },
          {
            "countyCode": "530421",
            "countyName": "江川县",
            "isCity": false
          },
          {
            "countyCode": "530422",
            "countyName": "澄江县",
            "isCity": false
          },
          {
            "countyCode": "530423",
            "countyName": "通海县",
            "isCity": false
          },
          {
            "countyCode": "530424",
            "countyName": "华宁县",
            "isCity": false
          },
          {
            "countyCode": "530425",
            "countyName": "易门县",
            "isCity": false
          },
          {
            "countyCode": "530426",
            "countyName": "峨山彝族自治县",
            "isCity": false
          },
          {
            "countyCode": "530427",
            "countyName": "新平彝族傣族自治县",
            "isCity": false
          },
          {
            "countyCode": "530428",
            "countyName": "元江哈尼族彝族傣族",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "530500",
        "cityName": "保山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "530501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "530502",
            "countyName": "隆阳区",
            "isCity": false
          },
          {
            "countyCode": "530521",
            "countyName": "施甸县",
            "isCity": false
          },
          {
            "countyCode": "530522",
            "countyName": "腾冲县",
            "isCity": false
          },
          {
            "countyCode": "530523",
            "countyName": "龙陵县",
            "isCity": false
          },
          {
            "countyCode": "530524",
            "countyName": "昌宁县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "530600",
        "cityName": "昭通市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "530601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "530602",
            "countyName": "昭阳区",
            "isCity": false
          },
          {
            "countyCode": "530621",
            "countyName": "鲁甸县",
            "isCity": false
          },
          {
            "countyCode": "530622",
            "countyName": "巧家县",
            "isCity": false
          },
          {
            "countyCode": "530623",
            "countyName": "盐津县",
            "isCity": false
          },
          {
            "countyCode": "530624",
            "countyName": "大关县",
            "isCity": false
          },
          {
            "countyCode": "530625",
            "countyName": "永善县",
            "isCity": false
          },
          {
            "countyCode": "530626",
            "countyName": "绥江县",
            "isCity": false
          },
          {
            "countyCode": "530627",
            "countyName": "镇雄县",
            "isCity": false
          },
          {
            "countyCode": "530628",
            "countyName": "彝良县",
            "isCity": false
          },
          {
            "countyCode": "530629",
            "countyName": "威信县",
            "isCity": false
          },
          {
            "countyCode": "530630",
            "countyName": "水富县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "530700",
        "cityName": "丽江市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "530701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "530702",
            "countyName": "古城区",
            "isCity": false
          },
          {
            "countyCode": "530721",
            "countyName": "玉龙纳西族自治县",
            "isCity": false
          },
          {
            "countyCode": "530722",
            "countyName": "永胜县",
            "isCity": false
          },
          {
            "countyCode": "530723",
            "countyName": "华坪县",
            "isCity": false
          },
          {
            "countyCode": "530724",
            "countyName": "宁蒗彝族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "530800",
        "cityName": "思茅市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "530801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "530802",
            "countyName": "翠云区",
            "isCity": false
          },
          {
            "countyCode": "530821",
            "countyName": "普洱哈尼族彝族自治",
            "isCity": false
          },
          {
            "countyCode": "530822",
            "countyName": "墨江哈尼族自治县",
            "isCity": false
          },
          {
            "countyCode": "530823",
            "countyName": "景东彝族自治县",
            "isCity": false
          },
          {
            "countyCode": "530824",
            "countyName": "景谷傣族彝族自治县",
            "isCity": false
          },
          {
            "countyCode": "530825",
            "countyName": "镇沅彝族哈尼族拉祜",
            "isCity": false
          },
          {
            "countyCode": "530826",
            "countyName": "江城哈尼族彝族自治",
            "isCity": false
          },
          {
            "countyCode": "530827",
            "countyName": "孟连傣族拉祜族佤族",
            "isCity": false
          },
          {
            "countyCode": "530828",
            "countyName": "澜沧拉祜族自治县",
            "isCity": false
          },
          {
            "countyCode": "530829",
            "countyName": "西盟佤族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "530900",
        "cityName": "临沧市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "530901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "530902",
            "countyName": "临翔区",
            "isCity": false
          },
          {
            "countyCode": "530921",
            "countyName": "凤庆县",
            "isCity": false
          },
          {
            "countyCode": "530922",
            "countyName": "云县",
            "isCity": false
          },
          {
            "countyCode": "530923",
            "countyName": "永德县",
            "isCity": false
          },
          {
            "countyCode": "530924",
            "countyName": "镇康县",
            "isCity": false
          },
          {
            "countyCode": "530925",
            "countyName": "双江拉祜族佤族布朗",
            "isCity": false
          },
          {
            "countyCode": "530926",
            "countyName": "耿马傣族佤族自治县",
            "isCity": false
          },
          {
            "countyCode": "530927",
            "countyName": "沧源佤族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "532300",
        "cityName": "楚雄彝族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "532301",
            "countyName": "楚雄市",
            "isCity": true
          },
          {
            "countyCode": "532322",
            "countyName": "双柏县",
            "isCity": false
          },
          {
            "countyCode": "532323",
            "countyName": "牟定县",
            "isCity": false
          },
          {
            "countyCode": "532324",
            "countyName": "南华县",
            "isCity": false
          },
          {
            "countyCode": "532325",
            "countyName": "姚安县",
            "isCity": false
          },
          {
            "countyCode": "532326",
            "countyName": "大姚县",
            "isCity": false
          },
          {
            "countyCode": "532327",
            "countyName": "永仁县",
            "isCity": false
          },
          {
            "countyCode": "532328",
            "countyName": "元谋县",
            "isCity": false
          },
          {
            "countyCode": "532329",
            "countyName": "武定县",
            "isCity": false
          },
          {
            "countyCode": "532331",
            "countyName": "禄丰县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "532500",
        "cityName": "红河哈尼族彝族自",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "532501",
            "countyName": "个旧市",
            "isCity": true
          },
          {
            "countyCode": "532502",
            "countyName": "开远市",
            "isCity": true
          },
          {
            "countyCode": "532522",
            "countyName": "蒙自县",
            "isCity": false
          },
          {
            "countyCode": "532523",
            "countyName": "屏边苗族自治县",
            "isCity": false
          },
          {
            "countyCode": "532524",
            "countyName": "建水县",
            "isCity": false
          },
          {
            "countyCode": "532525",
            "countyName": "石屏县",
            "isCity": false
          },
          {
            "countyCode": "532526",
            "countyName": "弥勒县",
            "isCity": false
          },
          {
            "countyCode": "532527",
            "countyName": "泸西县",
            "isCity": false
          },
          {
            "countyCode": "532528",
            "countyName": "元阳县",
            "isCity": false
          },
          {
            "countyCode": "532529",
            "countyName": "红河县",
            "isCity": false
          },
          {
            "countyCode": "532530",
            "countyName": "金平苗族瑶族傣族自",
            "isCity": false
          },
          {
            "countyCode": "532531",
            "countyName": "绿春县",
            "isCity": false
          },
          {
            "countyCode": "532532",
            "countyName": "河口瑶族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "532600",
        "cityName": "文山壮族苗族自治",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "532621",
            "countyName": "文山县",
            "isCity": false
          },
          {
            "countyCode": "532622",
            "countyName": "砚山县",
            "isCity": false
          },
          {
            "countyCode": "532623",
            "countyName": "西畴县",
            "isCity": false
          },
          {
            "countyCode": "532624",
            "countyName": "麻栗坡县",
            "isCity": false
          },
          {
            "countyCode": "532625",
            "countyName": "马关县",
            "isCity": false
          },
          {
            "countyCode": "532626",
            "countyName": "丘北县",
            "isCity": false
          },
          {
            "countyCode": "532627",
            "countyName": "广南县",
            "isCity": false
          },
          {
            "countyCode": "532628",
            "countyName": "富宁县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "532800",
        "cityName": "西双版纳傣族自治",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "532801",
            "countyName": "景洪市",
            "isCity": true
          },
          {
            "countyCode": "532822",
            "countyName": "勐海县",
            "isCity": false
          },
          {
            "countyCode": "532823",
            "countyName": "勐腊县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "532900",
        "cityName": "大理白族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "532901",
            "countyName": "大理市",
            "isCity": true
          },
          {
            "countyCode": "532922",
            "countyName": "漾濞彝族自治县",
            "isCity": false
          },
          {
            "countyCode": "532923",
            "countyName": "祥云县",
            "isCity": false
          },
          {
            "countyCode": "532924",
            "countyName": "宾川县",
            "isCity": false
          },
          {
            "countyCode": "532925",
            "countyName": "弥渡县",
            "isCity": false
          },
          {
            "countyCode": "532926",
            "countyName": "南涧彝族自治县",
            "isCity": false
          },
          {
            "countyCode": "532927",
            "countyName": "巍山彝族回族自治县",
            "isCity": false
          },
          {
            "countyCode": "532928",
            "countyName": "永平县",
            "isCity": false
          },
          {
            "countyCode": "532929",
            "countyName": "云龙县",
            "isCity": false
          },
          {
            "countyCode": "532930",
            "countyName": "洱源县",
            "isCity": false
          },
          {
            "countyCode": "532931",
            "countyName": "剑川县",
            "isCity": false
          },
          {
            "countyCode": "532932",
            "countyName": "鹤庆县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "533100",
        "cityName": "德宏傣族景颇族自",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "533102",
            "countyName": "瑞丽市",
            "isCity": true
          },
          {
            "countyCode": "533103",
            "countyName": "潞西市",
            "isCity": true
          },
          {
            "countyCode": "533122",
            "countyName": "梁河县",
            "isCity": false
          },
          {
            "countyCode": "533123",
            "countyName": "盈江县",
            "isCity": false
          },
          {
            "countyCode": "533124",
            "countyName": "陇川县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "533300",
        "cityName": "怒江傈僳族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "533321",
            "countyName": "泸水县",
            "isCity": false
          },
          {
            "countyCode": "533323",
            "countyName": "福贡县",
            "isCity": false
          },
          {
            "countyCode": "533324",
            "countyName": "贡山独龙族怒族自治",
            "isCity": false
          },
          {
            "countyCode": "533325",
            "countyName": "兰坪白族普米族自治",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "533400",
        "cityName": "迪庆藏族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "533421",
            "countyName": "香格里拉县",
            "isCity": false
          },
          {
            "countyCode": "533422",
            "countyName": "德钦县",
            "isCity": false
          },
          {
            "countyCode": "533423",
            "countyName": "维西傈僳族自治县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "540000",
    "provinceName": "西藏自治区",
    "provinceType": 3,
    "cities": [
      {
        "cityCode": "540100",
        "cityName": "拉萨市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "540101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "540102",
            "countyName": "城关区",
            "isCity": false
          },
          {
            "countyCode": "540121",
            "countyName": "林周县",
            "isCity": false
          },
          {
            "countyCode": "540122",
            "countyName": "当雄县",
            "isCity": false
          },
          {
            "countyCode": "540123",
            "countyName": "尼木县",
            "isCity": false
          },
          {
            "countyCode": "540124",
            "countyName": "曲水县",
            "isCity": false
          },
          {
            "countyCode": "540125",
            "countyName": "堆龙德庆县",
            "isCity": false
          },
          {
            "countyCode": "540126",
            "countyName": "达孜县",
            "isCity": false
          },
          {
            "countyCode": "540127",
            "countyName": "墨竹工卡县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "542100",
        "cityName": "昌都地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "542121",
            "countyName": "昌都县",
            "isCity": false
          },
          {
            "countyCode": "542122",
            "countyName": "江达县",
            "isCity": false
          },
          {
            "countyCode": "542123",
            "countyName": "贡觉县",
            "isCity": false
          },
          {
            "countyCode": "542124",
            "countyName": "类乌齐县",
            "isCity": false
          },
          {
            "countyCode": "542125",
            "countyName": "丁青县",
            "isCity": false
          },
          {
            "countyCode": "542126",
            "countyName": "察雅县",
            "isCity": false
          },
          {
            "countyCode": "542127",
            "countyName": "八宿县",
            "isCity": false
          },
          {
            "countyCode": "542128",
            "countyName": "左贡县",
            "isCity": false
          },
          {
            "countyCode": "542129",
            "countyName": "芒康县",
            "isCity": false
          },
          {
            "countyCode": "542132",
            "countyName": "洛隆县",
            "isCity": false
          },
          {
            "countyCode": "542133",
            "countyName": "边坝县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "542200",
        "cityName": "山南地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "542221",
            "countyName": "乃东县",
            "isCity": false
          },
          {
            "countyCode": "542222",
            "countyName": "扎囊县",
            "isCity": false
          },
          {
            "countyCode": "542223",
            "countyName": "贡嘎县",
            "isCity": false
          },
          {
            "countyCode": "542224",
            "countyName": "桑日县",
            "isCity": false
          },
          {
            "countyCode": "542225",
            "countyName": "琼结县",
            "isCity": false
          },
          {
            "countyCode": "542226",
            "countyName": "曲松县",
            "isCity": false
          },
          {
            "countyCode": "542227",
            "countyName": "措美县",
            "isCity": false
          },
          {
            "countyCode": "542228",
            "countyName": "洛扎县",
            "isCity": false
          },
          {
            "countyCode": "542229",
            "countyName": "加查县",
            "isCity": false
          },
          {
            "countyCode": "542231",
            "countyName": "隆子县",
            "isCity": false
          },
          {
            "countyCode": "542232",
            "countyName": "错那县",
            "isCity": false
          },
          {
            "countyCode": "542233",
            "countyName": "浪卡子县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "542300",
        "cityName": "日喀则地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "542301",
            "countyName": "日喀则市",
            "isCity": true
          },
          {
            "countyCode": "542322",
            "countyName": "南木林县",
            "isCity": false
          },
          {
            "countyCode": "542323",
            "countyName": "江孜县",
            "isCity": false
          },
          {
            "countyCode": "542324",
            "countyName": "定日县",
            "isCity": false
          },
          {
            "countyCode": "542325",
            "countyName": "萨迦县",
            "isCity": false
          },
          {
            "countyCode": "542326",
            "countyName": "拉孜县",
            "isCity": false
          },
          {
            "countyCode": "542327",
            "countyName": "昂仁县",
            "isCity": false
          },
          {
            "countyCode": "542328",
            "countyName": "谢通门县",
            "isCity": false
          },
          {
            "countyCode": "542329",
            "countyName": "白朗县",
            "isCity": false
          },
          {
            "countyCode": "542330",
            "countyName": "仁布县",
            "isCity": false
          },
          {
            "countyCode": "542331",
            "countyName": "康马县",
            "isCity": false
          },
          {
            "countyCode": "542332",
            "countyName": "定结县",
            "isCity": false
          },
          {
            "countyCode": "542333",
            "countyName": "仲巴县",
            "isCity": false
          },
          {
            "countyCode": "542334",
            "countyName": "亚东县",
            "isCity": false
          },
          {
            "countyCode": "542335",
            "countyName": "吉隆县",
            "isCity": false
          },
          {
            "countyCode": "542336",
            "countyName": "聂拉木县",
            "isCity": false
          },
          {
            "countyCode": "542337",
            "countyName": "萨嘎县",
            "isCity": false
          },
          {
            "countyCode": "542338",
            "countyName": "岗巴县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "542400",
        "cityName": "那曲地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "542421",
            "countyName": "那曲县",
            "isCity": false
          },
          {
            "countyCode": "542422",
            "countyName": "嘉黎县",
            "isCity": false
          },
          {
            "countyCode": "542423",
            "countyName": "比如县",
            "isCity": false
          },
          {
            "countyCode": "542424",
            "countyName": "聂荣县",
            "isCity": false
          },
          {
            "countyCode": "542425",
            "countyName": "安多县",
            "isCity": false
          },
          {
            "countyCode": "542426",
            "countyName": "申扎县",
            "isCity": false
          },
          {
            "countyCode": "542427",
            "countyName": "索县",
            "isCity": false
          },
          {
            "countyCode": "542428",
            "countyName": "班戈县",
            "isCity": false
          },
          {
            "countyCode": "542429",
            "countyName": "巴青县",
            "isCity": false
          },
          {
            "countyCode": "542430",
            "countyName": "尼玛县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "542500",
        "cityName": "阿里地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "542521",
            "countyName": "普兰县",
            "isCity": false
          },
          {
            "countyCode": "542522",
            "countyName": "札达县",
            "isCity": false
          },
          {
            "countyCode": "542523",
            "countyName": "噶尔县",
            "isCity": false
          },
          {
            "countyCode": "542524",
            "countyName": "日土县",
            "isCity": false
          },
          {
            "countyCode": "542525",
            "countyName": "革吉县",
            "isCity": false
          },
          {
            "countyCode": "542526",
            "countyName": "改则县",
            "isCity": false
          },
          {
            "countyCode": "542527",
            "countyName": "措勤县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "542600",
        "cityName": "林芝地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "542621",
            "countyName": "林芝县",
            "isCity": false
          },
          {
            "countyCode": "542622",
            "countyName": "工布江达县",
            "isCity": false
          },
          {
            "countyCode": "542623",
            "countyName": "米林县",
            "isCity": false
          },
          {
            "countyCode": "542624",
            "countyName": "墨脱县",
            "isCity": false
          },
          {
            "countyCode": "542625",
            "countyName": "波密县",
            "isCity": false
          },
          {
            "countyCode": "542626",
            "countyName": "察隅县",
            "isCity": false
          },
          {
            "countyCode": "542627",
            "countyName": "朗县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "610000",
    "provinceName": "陕西省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "610100",
        "cityName": "西安市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "610101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "610102",
            "countyName": "新城区",
            "isCity": false
          },
          {
            "countyCode": "610103",
            "countyName": "碑林区",
            "isCity": false
          },
          {
            "countyCode": "610104",
            "countyName": "莲湖区",
            "isCity": false
          },
          {
            "countyCode": "610111",
            "countyName": "灞桥区",
            "isCity": false
          },
          {
            "countyCode": "610112",
            "countyName": "未央区",
            "isCity": false
          },
          {
            "countyCode": "610113",
            "countyName": "雁塔区",
            "isCity": false
          },
          {
            "countyCode": "610114",
            "countyName": "阎良区",
            "isCity": false
          },
          {
            "countyCode": "610115",
            "countyName": "临潼区",
            "isCity": false
          },
          {
            "countyCode": "610116",
            "countyName": "长安区",
            "isCity": false
          },
          {
            "countyCode": "610122",
            "countyName": "蓝田县",
            "isCity": false
          },
          {
            "countyCode": "610124",
            "countyName": "周至县",
            "isCity": false
          },
          {
            "countyCode": "610125",
            "countyName": "户县",
            "isCity": false
          },
          {
            "countyCode": "610126",
            "countyName": "高陵县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "610200",
        "cityName": "铜川市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "610201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "610202",
            "countyName": "王益区",
            "isCity": false
          },
          {
            "countyCode": "610203",
            "countyName": "印台区",
            "isCity": false
          },
          {
            "countyCode": "610204",
            "countyName": "耀州区",
            "isCity": false
          },
          {
            "countyCode": "610222",
            "countyName": "宜君县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "610300",
        "cityName": "宝鸡市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "610301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "610302",
            "countyName": "渭滨区",
            "isCity": false
          },
          {
            "countyCode": "610303",
            "countyName": "金台区",
            "isCity": false
          },
          {
            "countyCode": "610304",
            "countyName": "陈仓区",
            "isCity": false
          },
          {
            "countyCode": "610322",
            "countyName": "凤翔县",
            "isCity": false
          },
          {
            "countyCode": "610323",
            "countyName": "岐山县",
            "isCity": false
          },
          {
            "countyCode": "610324",
            "countyName": "扶风县",
            "isCity": false
          },
          {
            "countyCode": "610326",
            "countyName": "眉县",
            "isCity": false
          },
          {
            "countyCode": "610327",
            "countyName": "陇县",
            "isCity": false
          },
          {
            "countyCode": "610328",
            "countyName": "千阳县",
            "isCity": false
          },
          {
            "countyCode": "610329",
            "countyName": "麟游县",
            "isCity": false
          },
          {
            "countyCode": "610330",
            "countyName": "凤县",
            "isCity": false
          },
          {
            "countyCode": "610331",
            "countyName": "太白县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "610400",
        "cityName": "咸阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "610401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "610402",
            "countyName": "秦都区",
            "isCity": false
          },
          {
            "countyCode": "610403",
            "countyName": "杨凌区",
            "isCity": false
          },
          {
            "countyCode": "610404",
            "countyName": "渭城区",
            "isCity": false
          },
          {
            "countyCode": "610422",
            "countyName": "三原县",
            "isCity": false
          },
          {
            "countyCode": "610423",
            "countyName": "泾阳县",
            "isCity": false
          },
          {
            "countyCode": "610424",
            "countyName": "乾县",
            "isCity": false
          },
          {
            "countyCode": "610425",
            "countyName": "礼泉县",
            "isCity": false
          },
          {
            "countyCode": "610426",
            "countyName": "永寿县",
            "isCity": false
          },
          {
            "countyCode": "610427",
            "countyName": "彬县",
            "isCity": false
          },
          {
            "countyCode": "610428",
            "countyName": "长武县",
            "isCity": false
          },
          {
            "countyCode": "610429",
            "countyName": "旬邑县",
            "isCity": false
          },
          {
            "countyCode": "610430",
            "countyName": "淳化县",
            "isCity": false
          },
          {
            "countyCode": "610431",
            "countyName": "武功县",
            "isCity": false
          },
          {
            "countyCode": "610481",
            "countyName": "兴平市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "610500",
        "cityName": "渭南市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "610501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "610502",
            "countyName": "临渭区",
            "isCity": false
          },
          {
            "countyCode": "610521",
            "countyName": "华县",
            "isCity": false
          },
          {
            "countyCode": "610522",
            "countyName": "潼关县",
            "isCity": false
          },
          {
            "countyCode": "610523",
            "countyName": "大荔县",
            "isCity": false
          },
          {
            "countyCode": "610524",
            "countyName": "合阳县",
            "isCity": false
          },
          {
            "countyCode": "610525",
            "countyName": "澄城县",
            "isCity": false
          },
          {
            "countyCode": "610526",
            "countyName": "蒲城县",
            "isCity": false
          },
          {
            "countyCode": "610527",
            "countyName": "白水县",
            "isCity": false
          },
          {
            "countyCode": "610528",
            "countyName": "富平县",
            "isCity": false
          },
          {
            "countyCode": "610581",
            "countyName": "韩城市",
            "isCity": true
          },
          {
            "countyCode": "610582",
            "countyName": "华阴市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "610600",
        "cityName": "延安市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "610601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "610602",
            "countyName": "宝塔区",
            "isCity": false
          },
          {
            "countyCode": "610621",
            "countyName": "延长县",
            "isCity": false
          },
          {
            "countyCode": "610622",
            "countyName": "延川县",
            "isCity": false
          },
          {
            "countyCode": "610623",
            "countyName": "子长县",
            "isCity": false
          },
          {
            "countyCode": "610624",
            "countyName": "安塞县",
            "isCity": false
          },
          {
            "countyCode": "610625",
            "countyName": "志丹县",
            "isCity": false
          },
          {
            "countyCode": "610626",
            "countyName": "吴起县",
            "isCity": false
          },
          {
            "countyCode": "610627",
            "countyName": "甘泉县",
            "isCity": false
          },
          {
            "countyCode": "610628",
            "countyName": "富县",
            "isCity": false
          },
          {
            "countyCode": "610629",
            "countyName": "洛川县",
            "isCity": false
          },
          {
            "countyCode": "610630",
            "countyName": "宜川县",
            "isCity": false
          },
          {
            "countyCode": "610631",
            "countyName": "黄龙县",
            "isCity": false
          },
          {
            "countyCode": "610632",
            "countyName": "黄陵县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "610700",
        "cityName": "汉中市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "610701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "610702",
            "countyName": "汉台区",
            "isCity": false
          },
          {
            "countyCode": "610721",
            "countyName": "南郑县",
            "isCity": false
          },
          {
            "countyCode": "610722",
            "countyName": "城固县",
            "isCity": false
          },
          {
            "countyCode": "610723",
            "countyName": "洋县",
            "isCity": false
          },
          {
            "countyCode": "610724",
            "countyName": "西乡县",
            "isCity": false
          },
          {
            "countyCode": "610725",
            "countyName": "勉县",
            "isCity": false
          },
          {
            "countyCode": "610726",
            "countyName": "宁强县",
            "isCity": false
          },
          {
            "countyCode": "610727",
            "countyName": "略阳县",
            "isCity": false
          },
          {
            "countyCode": "610728",
            "countyName": "镇巴县",
            "isCity": false
          },
          {
            "countyCode": "610729",
            "countyName": "留坝县",
            "isCity": false
          },
          {
            "countyCode": "610730",
            "countyName": "佛坪县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "610800",
        "cityName": "榆林市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "610801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "610802",
            "countyName": "榆阳区",
            "isCity": false
          },
          {
            "countyCode": "610821",
            "countyName": "神木县",
            "isCity": false
          },
          {
            "countyCode": "610822",
            "countyName": "府谷县",
            "isCity": false
          },
          {
            "countyCode": "610823",
            "countyName": "横山县",
            "isCity": false
          },
          {
            "countyCode": "610824",
            "countyName": "靖边县",
            "isCity": false
          },
          {
            "countyCode": "610825",
            "countyName": "定边县",
            "isCity": false
          },
          {
            "countyCode": "610826",
            "countyName": "绥德县",
            "isCity": false
          },
          {
            "countyCode": "610827",
            "countyName": "米脂县",
            "isCity": false
          },
          {
            "countyCode": "610828",
            "countyName": "佳县",
            "isCity": false
          },
          {
            "countyCode": "610829",
            "countyName": "吴堡县",
            "isCity": false
          },
          {
            "countyCode": "610830",
            "countyName": "清涧县",
            "isCity": false
          },
          {
            "countyCode": "610831",
            "countyName": "子洲县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "610900",
        "cityName": "安康市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "610901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "610902",
            "countyName": "汉滨区",
            "isCity": false
          },
          {
            "countyCode": "610921",
            "countyName": "汉阴县",
            "isCity": false
          },
          {
            "countyCode": "610922",
            "countyName": "石泉县",
            "isCity": false
          },
          {
            "countyCode": "610923",
            "countyName": "宁陕县",
            "isCity": false
          },
          {
            "countyCode": "610924",
            "countyName": "紫阳县",
            "isCity": false
          },
          {
            "countyCode": "610925",
            "countyName": "岚皋县",
            "isCity": false
          },
          {
            "countyCode": "610926",
            "countyName": "平利县",
            "isCity": false
          },
          {
            "countyCode": "610927",
            "countyName": "镇坪县",
            "isCity": false
          },
          {
            "countyCode": "610928",
            "countyName": "旬阳县",
            "isCity": false
          },
          {
            "countyCode": "610929",
            "countyName": "白河县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "611000",
        "cityName": "商洛市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "611001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "611002",
            "countyName": "商州区",
            "isCity": false
          },
          {
            "countyCode": "611021",
            "countyName": "洛南县",
            "isCity": false
          },
          {
            "countyCode": "611022",
            "countyName": "丹凤县",
            "isCity": false
          },
          {
            "countyCode": "611023",
            "countyName": "商南县",
            "isCity": false
          },
          {
            "countyCode": "611024",
            "countyName": "山阳县",
            "isCity": false
          },
          {
            "countyCode": "611025",
            "countyName": "镇安县",
            "isCity": false
          },
          {
            "countyCode": "611026",
            "countyName": "柞水县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "620000",
    "provinceName": "甘肃省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "620100",
        "cityName": "兰州市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "620101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "620102",
            "countyName": "城关区",
            "isCity": false
          },
          {
            "countyCode": "620103",
            "countyName": "七里河区",
            "isCity": false
          },
          {
            "countyCode": "620104",
            "countyName": "西固区",
            "isCity": false
          },
          {
            "countyCode": "620105",
            "countyName": "安宁区",
            "isCity": false
          },
          {
            "countyCode": "620111",
            "countyName": "红古区",
            "isCity": false
          },
          {
            "countyCode": "620121",
            "countyName": "永登县",
            "isCity": false
          },
          {
            "countyCode": "620122",
            "countyName": "皋兰县",
            "isCity": false
          },
          {
            "countyCode": "620123",
            "countyName": "榆中县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "620200",
        "cityName": "嘉峪关市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "620201",
            "countyName": "市辖区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "620300",
        "cityName": "金昌市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "620301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "620302",
            "countyName": "金川区",
            "isCity": false
          },
          {
            "countyCode": "620321",
            "countyName": "永昌县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "620400",
        "cityName": "白银市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "620401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "620402",
            "countyName": "白银区",
            "isCity": false
          },
          {
            "countyCode": "620403",
            "countyName": "平川区",
            "isCity": false
          },
          {
            "countyCode": "620421",
            "countyName": "靖远县",
            "isCity": false
          },
          {
            "countyCode": "620422",
            "countyName": "会宁县",
            "isCity": false
          },
          {
            "countyCode": "620423",
            "countyName": "景泰县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "620500",
        "cityName": "天水市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "620501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "620502",
            "countyName": "秦城区",
            "isCity": false
          },
          {
            "countyCode": "620503",
            "countyName": "北道区",
            "isCity": false
          },
          {
            "countyCode": "620521",
            "countyName": "清水县",
            "isCity": false
          },
          {
            "countyCode": "620522",
            "countyName": "秦安县",
            "isCity": false
          },
          {
            "countyCode": "620523",
            "countyName": "甘谷县",
            "isCity": false
          },
          {
            "countyCode": "620524",
            "countyName": "武山县",
            "isCity": false
          },
          {
            "countyCode": "620525",
            "countyName": "张家川回族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "620600",
        "cityName": "武威市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "620601",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "620602",
            "countyName": "凉州区",
            "isCity": false
          },
          {
            "countyCode": "620621",
            "countyName": "民勤县",
            "isCity": false
          },
          {
            "countyCode": "620622",
            "countyName": "古浪县",
            "isCity": false
          },
          {
            "countyCode": "620623",
            "countyName": "天祝藏族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "620700",
        "cityName": "张掖市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "620701",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "620702",
            "countyName": "甘州区",
            "isCity": false
          },
          {
            "countyCode": "620721",
            "countyName": "肃南裕固族自治县",
            "isCity": false
          },
          {
            "countyCode": "620722",
            "countyName": "民乐县",
            "isCity": false
          },
          {
            "countyCode": "620723",
            "countyName": "临泽县",
            "isCity": false
          },
          {
            "countyCode": "620724",
            "countyName": "高台县",
            "isCity": false
          },
          {
            "countyCode": "620725",
            "countyName": "山丹县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "620800",
        "cityName": "平凉市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "620801",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "620802",
            "countyName": "崆峒区",
            "isCity": false
          },
          {
            "countyCode": "620821",
            "countyName": "泾川县",
            "isCity": false
          },
          {
            "countyCode": "620822",
            "countyName": "灵台县",
            "isCity": false
          },
          {
            "countyCode": "620823",
            "countyName": "崇信县",
            "isCity": false
          },
          {
            "countyCode": "620824",
            "countyName": "华亭县",
            "isCity": false
          },
          {
            "countyCode": "620825",
            "countyName": "庄浪县",
            "isCity": false
          },
          {
            "countyCode": "620826",
            "countyName": "静宁县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "620900",
        "cityName": "酒泉市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "620901",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "620902",
            "countyName": "肃州区",
            "isCity": false
          },
          {
            "countyCode": "620921",
            "countyName": "金塔县",
            "isCity": false
          },
          {
            "countyCode": "620922",
            "countyName": "瓜州县",
            "isCity": false
          },
          {
            "countyCode": "620923",
            "countyName": "肃北蒙古族自治县",
            "isCity": false
          },
          {
            "countyCode": "620924",
            "countyName": "阿克塞哈萨克族自治",
            "isCity": false
          },
          {
            "countyCode": "620981",
            "countyName": "玉门市",
            "isCity": true
          },
          {
            "countyCode": "620982",
            "countyName": "敦煌市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "621000",
        "cityName": "庆阳市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "621001",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "621002",
            "countyName": "西峰区",
            "isCity": false
          },
          {
            "countyCode": "621021",
            "countyName": "庆城县",
            "isCity": false
          },
          {
            "countyCode": "621022",
            "countyName": "环县",
            "isCity": false
          },
          {
            "countyCode": "621023",
            "countyName": "华池县",
            "isCity": false
          },
          {
            "countyCode": "621024",
            "countyName": "合水县",
            "isCity": false
          },
          {
            "countyCode": "621025",
            "countyName": "正宁县",
            "isCity": false
          },
          {
            "countyCode": "621026",
            "countyName": "宁县",
            "isCity": false
          },
          {
            "countyCode": "621027",
            "countyName": "镇原县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "621100",
        "cityName": "定西市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "621101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "621102",
            "countyName": "安定区",
            "isCity": false
          },
          {
            "countyCode": "621121",
            "countyName": "通渭县",
            "isCity": false
          },
          {
            "countyCode": "621122",
            "countyName": "陇西县",
            "isCity": false
          },
          {
            "countyCode": "621123",
            "countyName": "渭源县",
            "isCity": false
          },
          {
            "countyCode": "621124",
            "countyName": "临洮县",
            "isCity": false
          },
          {
            "countyCode": "621125",
            "countyName": "漳县",
            "isCity": false
          },
          {
            "countyCode": "621126",
            "countyName": "岷县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "621200",
        "cityName": "陇南市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "621201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "621202",
            "countyName": "武都区",
            "isCity": false
          },
          {
            "countyCode": "621221",
            "countyName": "成县",
            "isCity": false
          },
          {
            "countyCode": "621222",
            "countyName": "文县",
            "isCity": false
          },
          {
            "countyCode": "621223",
            "countyName": "宕昌县",
            "isCity": false
          },
          {
            "countyCode": "621224",
            "countyName": "康县",
            "isCity": false
          },
          {
            "countyCode": "621225",
            "countyName": "西和县",
            "isCity": false
          },
          {
            "countyCode": "621226",
            "countyName": "礼县",
            "isCity": false
          },
          {
            "countyCode": "621227",
            "countyName": "徽县",
            "isCity": false
          },
          {
            "countyCode": "621228",
            "countyName": "两当县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "622900",
        "cityName": "临夏回族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "622901",
            "countyName": "临夏市",
            "isCity": true
          },
          {
            "countyCode": "622921",
            "countyName": "临夏县",
            "isCity": false
          },
          {
            "countyCode": "622922",
            "countyName": "康乐县",
            "isCity": false
          },
          {
            "countyCode": "622923",
            "countyName": "永靖县",
            "isCity": false
          },
          {
            "countyCode": "622924",
            "countyName": "广河县",
            "isCity": false
          },
          {
            "countyCode": "622925",
            "countyName": "和政县",
            "isCity": false
          },
          {
            "countyCode": "622926",
            "countyName": "东乡族自治县",
            "isCity": false
          },
          {
            "countyCode": "622927",
            "countyName": "积石山保安族东乡族",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "623000",
        "cityName": "甘南藏族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "623001",
            "countyName": "合作市",
            "isCity": true
          },
          {
            "countyCode": "623021",
            "countyName": "临潭县",
            "isCity": false
          },
          {
            "countyCode": "623022",
            "countyName": "卓尼县",
            "isCity": false
          },
          {
            "countyCode": "623023",
            "countyName": "舟曲县",
            "isCity": false
          },
          {
            "countyCode": "623024",
            "countyName": "迭部县",
            "isCity": false
          },
          {
            "countyCode": "623025",
            "countyName": "玛曲县",
            "isCity": false
          },
          {
            "countyCode": "623026",
            "countyName": "碌曲县",
            "isCity": false
          },
          {
            "countyCode": "623027",
            "countyName": "夏河县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "630000",
    "provinceName": "青海省",
    "provinceType": 2,
    "cities": [
      {
        "cityCode": "630100",
        "cityName": "西宁市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "630101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "630102",
            "countyName": "城东区",
            "isCity": false
          },
          {
            "countyCode": "630103",
            "countyName": "城中区",
            "isCity": false
          },
          {
            "countyCode": "630104",
            "countyName": "城西区",
            "isCity": false
          },
          {
            "countyCode": "630105",
            "countyName": "城北区",
            "isCity": false
          },
          {
            "countyCode": "630121",
            "countyName": "大通回族土族自治县",
            "isCity": false
          },
          {
            "countyCode": "630122",
            "countyName": "湟中县",
            "isCity": false
          },
          {
            "countyCode": "630123",
            "countyName": "湟源县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "632100",
        "cityName": "海东地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "632121",
            "countyName": "平安县",
            "isCity": false
          },
          {
            "countyCode": "632122",
            "countyName": "民和回族土族自治县",
            "isCity": false
          },
          {
            "countyCode": "632123",
            "countyName": "乐都县",
            "isCity": false
          },
          {
            "countyCode": "632126",
            "countyName": "互助土族自治县",
            "isCity": false
          },
          {
            "countyCode": "632127",
            "countyName": "化隆回族自治县",
            "isCity": false
          },
          {
            "countyCode": "632128",
            "countyName": "循化撒拉族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "632200",
        "cityName": "海北藏族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "632221",
            "countyName": "门源回族自治县",
            "isCity": false
          },
          {
            "countyCode": "632222",
            "countyName": "祁连县",
            "isCity": false
          },
          {
            "countyCode": "632223",
            "countyName": "海晏县",
            "isCity": false
          },
          {
            "countyCode": "632224",
            "countyName": "刚察县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "632300",
        "cityName": "黄南藏族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "632321",
            "countyName": "同仁县",
            "isCity": false
          },
          {
            "countyCode": "632322",
            "countyName": "尖扎县",
            "isCity": false
          },
          {
            "countyCode": "632323",
            "countyName": "泽库县",
            "isCity": false
          },
          {
            "countyCode": "632324",
            "countyName": "河南蒙古族自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "632500",
        "cityName": "海南藏族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "632521",
            "countyName": "共和县",
            "isCity": false
          },
          {
            "countyCode": "632522",
            "countyName": "同德县",
            "isCity": false
          },
          {
            "countyCode": "632523",
            "countyName": "贵德县",
            "isCity": false
          },
          {
            "countyCode": "632524",
            "countyName": "兴海县",
            "isCity": false
          },
          {
            "countyCode": "632525",
            "countyName": "贵南县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "632600",
        "cityName": "果洛藏族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "632621",
            "countyName": "玛沁县",
            "isCity": false
          },
          {
            "countyCode": "632622",
            "countyName": "班玛县",
            "isCity": false
          },
          {
            "countyCode": "632623",
            "countyName": "甘德县",
            "isCity": false
          },
          {
            "countyCode": "632624",
            "countyName": "达日县",
            "isCity": false
          },
          {
            "countyCode": "632625",
            "countyName": "久治县",
            "isCity": false
          },
          {
            "countyCode": "632626",
            "countyName": "玛多县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "632700",
        "cityName": "玉树藏族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "632721",
            "countyName": "玉树县",
            "isCity": false
          },
          {
            "countyCode": "632722",
            "countyName": "杂多县",
            "isCity": false
          },
          {
            "countyCode": "632723",
            "countyName": "称多县",
            "isCity": false
          },
          {
            "countyCode": "632724",
            "countyName": "治多县",
            "isCity": false
          },
          {
            "countyCode": "632725",
            "countyName": "囊谦县",
            "isCity": false
          },
          {
            "countyCode": "632726",
            "countyName": "曲麻莱县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "632800",
        "cityName": "海西蒙古族藏族自",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "632801",
            "countyName": "格尔木市",
            "isCity": true
          },
          {
            "countyCode": "632802",
            "countyName": "德令哈市",
            "isCity": true
          },
          {
            "countyCode": "632821",
            "countyName": "乌兰县",
            "isCity": false
          },
          {
            "countyCode": "632822",
            "countyName": "都兰县",
            "isCity": false
          },
          {
            "countyCode": "632823",
            "countyName": "天峻县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "640000",
    "provinceName": "宁夏回族自治区",
    "provinceType": 3,
    "cities": [
      {
        "cityCode": "640100",
        "cityName": "银川市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "640101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "640104",
            "countyName": "兴庆区",
            "isCity": false
          },
          {
            "countyCode": "640105",
            "countyName": "西夏区",
            "isCity": false
          },
          {
            "countyCode": "640106",
            "countyName": "金凤区",
            "isCity": false
          },
          {
            "countyCode": "640121",
            "countyName": "永宁县",
            "isCity": false
          },
          {
            "countyCode": "640122",
            "countyName": "贺兰县",
            "isCity": false
          },
          {
            "countyCode": "640181",
            "countyName": "灵武市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "640200",
        "cityName": "石嘴山市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "640201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "640202",
            "countyName": "大武口区",
            "isCity": false
          },
          {
            "countyCode": "640205",
            "countyName": "惠农区",
            "isCity": false
          },
          {
            "countyCode": "640221",
            "countyName": "平罗县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "640300",
        "cityName": "吴忠市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "640301",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "640302",
            "countyName": "利通区",
            "isCity": false
          },
          {
            "countyCode": "640323",
            "countyName": "盐池县",
            "isCity": false
          },
          {
            "countyCode": "640324",
            "countyName": "同心县",
            "isCity": false
          },
          {
            "countyCode": "640381",
            "countyName": "青铜峡市",
            "isCity": true
          }
        ]
      },
      {
        "cityCode": "640400",
        "cityName": "固原市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "640401",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "640402",
            "countyName": "原州区",
            "isCity": false
          },
          {
            "countyCode": "640422",
            "countyName": "西吉县",
            "isCity": false
          },
          {
            "countyCode": "640423",
            "countyName": "隆德县",
            "isCity": false
          },
          {
            "countyCode": "640424",
            "countyName": "泾源县",
            "isCity": false
          },
          {
            "countyCode": "640425",
            "countyName": "彭阳县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "640500",
        "cityName": "中卫市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "640501",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "640502",
            "countyName": "沙坡头区",
            "isCity": false
          },
          {
            "countyCode": "640521",
            "countyName": "中宁县",
            "isCity": false
          },
          {
            "countyCode": "640522",
            "countyName": "海原县",
            "isCity": false
          }
        ]
      }
    ]
  },
  {
    "provinceCode": "650000",
    "provinceName": "新疆维吾尔自治区",
    "provinceType": 3,
    "cities": [
      {
        "cityCode": "650100",
        "cityName": "乌鲁木齐市",
        "cityType": 3,
        "isCapital": true,
        "counties": [
          {
            "countyCode": "650101",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "650102",
            "countyName": "天山区",
            "isCity": false
          },
          {
            "countyCode": "650103",
            "countyName": "沙依巴克区",
            "isCity": false
          },
          {
            "countyCode": "650104",
            "countyName": "新市区",
            "isCity": false
          },
          {
            "countyCode": "650105",
            "countyName": "水磨沟区",
            "isCity": false
          },
          {
            "countyCode": "650106",
            "countyName": "头屯河区",
            "isCity": false
          },
          {
            "countyCode": "650107",
            "countyName": "达坂城区",
            "isCity": false
          },
          {
            "countyCode": "650108",
            "countyName": "东山区",
            "isCity": false
          },
          {
            "countyCode": "650121",
            "countyName": "乌鲁木齐县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "650200",
        "cityName": "克拉玛依市",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "650201",
            "countyName": "市辖区",
            "isCity": false
          },
          {
            "countyCode": "650202",
            "countyName": "独山子区",
            "isCity": false
          },
          {
            "countyCode": "650203",
            "countyName": "克拉玛依区",
            "isCity": false
          },
          {
            "countyCode": "650204",
            "countyName": "白碱滩区",
            "isCity": false
          },
          {
            "countyCode": "650205",
            "countyName": "乌尔禾区",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "652100",
        "cityName": "吐鲁番地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "652101",
            "countyName": "吐鲁番市",
            "isCity": true
          },
          {
            "countyCode": "652122",
            "countyName": "鄯善县",
            "isCity": false
          },
          {
            "countyCode": "652123",
            "countyName": "托克逊县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "652200",
        "cityName": "哈密地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "652201",
            "countyName": "哈密市",
            "isCity": true
          },
          {
            "countyCode": "652222",
            "countyName": "巴里坤哈萨克自治县",
            "isCity": false
          },
          {
            "countyCode": "652223",
            "countyName": "伊吾县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "652300",
        "cityName": "昌吉回族自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "652301",
            "countyName": "昌吉市",
            "isCity": true
          },
          {
            "countyCode": "652302",
            "countyName": "阜康市",
            "isCity": true
          },
          {
            "countyCode": "652303",
            "countyName": "米泉市",
            "isCity": true
          },
          {
            "countyCode": "652323",
            "countyName": "呼图壁县",
            "isCity": false
          },
          {
            "countyCode": "652324",
            "countyName": "玛纳斯县",
            "isCity": false
          },
          {
            "countyCode": "652325",
            "countyName": "奇台县",
            "isCity": false
          },
          {
            "countyCode": "652327",
            "countyName": "吉木萨尔县",
            "isCity": false
          },
          {
            "countyCode": "652328",
            "countyName": "木垒哈萨克自治县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "652700",
        "cityName": "博尔塔拉蒙古自治",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "652701",
            "countyName": "博乐市",
            "isCity": true
          },
          {
            "countyCode": "652722",
            "countyName": "精河县",
            "isCity": false
          },
          {
            "countyCode": "652723",
            "countyName": "温泉县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "652800",
        "cityName": "巴音郭楞蒙古自治",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "652801",
            "countyName": "库尔勒市",
            "isCity": true
          },
          {
            "countyCode": "652822",
            "countyName": "轮台县",
            "isCity": false
          },
          {
            "countyCode": "652823",
            "countyName": "尉犁县",
            "isCity": false
          },
          {
            "countyCode": "652824",
            "countyName": "若羌县",
            "isCity": false
          },
          {
            "countyCode": "652825",
            "countyName": "且末县",
            "isCity": false
          },
          {
            "countyCode": "652826",
            "countyName": "焉耆回族自治县",
            "isCity": false
          },
          {
            "countyCode": "652827",
            "countyName": "和静县",
            "isCity": false
          },
          {
            "countyCode": "652828",
            "countyName": "和硕县",
            "isCity": false
          },
          {
            "countyCode": "652829",
            "countyName": "博湖县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "652900",
        "cityName": "阿克苏地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "652901",
            "countyName": "阿克苏市",
            "isCity": true
          },
          {
            "countyCode": "652922",
            "countyName": "温宿县",
            "isCity": false
          },
          {
            "countyCode": "652923",
            "countyName": "库车县",
            "isCity": false
          },
          {
            "countyCode": "652924",
            "countyName": "沙雅县",
            "isCity": false
          },
          {
            "countyCode": "652925",
            "countyName": "新和县",
            "isCity": false
          },
          {
            "countyCode": "652926",
            "countyName": "拜城县",
            "isCity": false
          },
          {
            "countyCode": "652927",
            "countyName": "乌什县",
            "isCity": false
          },
          {
            "countyCode": "652928",
            "countyName": "阿瓦提县",
            "isCity": false
          },
          {
            "countyCode": "652929",
            "countyName": "柯坪县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "653000",
        "cityName": "克孜勒苏柯尔克孜",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "653001",
            "countyName": "阿图什市",
            "isCity": true
          },
          {
            "countyCode": "653022",
            "countyName": "阿克陶县",
            "isCity": false
          },
          {
            "countyCode": "653023",
            "countyName": "阿合奇县",
            "isCity": false
          },
          {
            "countyCode": "653024",
            "countyName": "乌恰县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "653100",
        "cityName": "喀什地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "653101",
            "countyName": "喀什市",
            "isCity": true
          },
          {
            "countyCode": "653121",
            "countyName": "疏附县",
            "isCity": false
          },
          {
            "countyCode": "653122",
            "countyName": "疏勒县",
            "isCity": false
          },
          {
            "countyCode": "653123",
            "countyName": "英吉沙县",
            "isCity": false
          },
          {
            "countyCode": "653124",
            "countyName": "泽普县",
            "isCity": false
          },
          {
            "countyCode": "653125",
            "countyName": "莎车县",
            "isCity": false
          },
          {
            "countyCode": "653126",
            "countyName": "叶城县",
            "isCity": false
          },
          {
            "countyCode": "653127",
            "countyName": "麦盖提县",
            "isCity": false
          },
          {
            "countyCode": "653128",
            "countyName": "岳普湖县",
            "isCity": false
          },
          {
            "countyCode": "653129",
            "countyName": "伽师县",
            "isCity": false
          },
          {
            "countyCode": "653130",
            "countyName": "巴楚县",
            "isCity": false
          },
          {
            "countyCode": "653131",
            "countyName": "塔什库尔干塔吉克自",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "653200",
        "cityName": "和田地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "653201",
            "countyName": "和田市",
            "isCity": true
          },
          {
            "countyCode": "653221",
            "countyName": "和田县",
            "isCity": false
          },
          {
            "countyCode": "653222",
            "countyName": "墨玉县",
            "isCity": false
          },
          {
            "countyCode": "653223",
            "countyName": "皮山县",
            "isCity": false
          },
          {
            "countyCode": "653224",
            "countyName": "洛浦县",
            "isCity": false
          },
          {
            "countyCode": "653225",
            "countyName": "策勒县",
            "isCity": false
          },
          {
            "countyCode": "653226",
            "countyName": "于田县",
            "isCity": false
          },
          {
            "countyCode": "653227",
            "countyName": "民丰县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "654000",
        "cityName": "伊犁哈萨克自治州",
        "cityType": 5,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "654002",
            "countyName": "伊宁市",
            "isCity": true
          },
          {
            "countyCode": "654003",
            "countyName": "奎屯市",
            "isCity": true
          },
          {
            "countyCode": "654021",
            "countyName": "伊宁县",
            "isCity": false
          },
          {
            "countyCode": "654022",
            "countyName": "察布查尔锡伯自治县",
            "isCity": false
          },
          {
            "countyCode": "654023",
            "countyName": "霍城县",
            "isCity": false
          },
          {
            "countyCode": "654024",
            "countyName": "巩留县",
            "isCity": false
          },
          {
            "countyCode": "654025",
            "countyName": "新源县",
            "isCity": false
          },
          {
            "countyCode": "654026",
            "countyName": "昭苏县",
            "isCity": false
          },
          {
            "countyCode": "654027",
            "countyName": "特克斯县",
            "isCity": false
          },
          {
            "countyCode": "654028",
            "countyName": "尼勒克县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "654200",
        "cityName": "塔城地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "654201",
            "countyName": "塔城市",
            "isCity": true
          },
          {
            "countyCode": "654202",
            "countyName": "乌苏市",
            "isCity": true
          },
          {
            "countyCode": "654221",
            "countyName": "额敏县",
            "isCity": false
          },
          {
            "countyCode": "654223",
            "countyName": "沙湾县",
            "isCity": false
          },
          {
            "countyCode": "654224",
            "countyName": "托里县",
            "isCity": false
          },
          {
            "countyCode": "654225",
            "countyName": "裕民县",
            "isCity": false
          },
          {
            "countyCode": "654226",
            "countyName": "和布克赛尔蒙古自治",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "654300",
        "cityName": "阿勒泰地区",
        "cityType": 4,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "654301",
            "countyName": "阿勒泰市",
            "isCity": true
          },
          {
            "countyCode": "654321",
            "countyName": "布尔津县",
            "isCity": false
          },
          {
            "countyCode": "654322",
            "countyName": "富蕴县",
            "isCity": false
          },
          {
            "countyCode": "654323",
            "countyName": "福海县",
            "isCity": false
          },
          {
            "countyCode": "654324",
            "countyName": "哈巴河县",
            "isCity": false
          },
          {
            "countyCode": "654325",
            "countyName": "青河县",
            "isCity": false
          },
          {
            "countyCode": "654326",
            "countyName": "吉木乃县",
            "isCity": false
          }
        ]
      },
      {
        "cityCode": "659000",
        "cityName": "省直辖行政单位",
        "cityType": 3,
        "isCapital": false,
        "counties": [
          {
            "countyCode": "659001",
            "countyName": "石河子市",
            "isCity": true
          },
          {
            "countyCode": "659002",
            "countyName": "阿拉尔市",
            "isCity": true
          },
          {
            "countyCode": "659003",
            "countyName": "图木舒克市",
            "isCity": true
          },
          {
            "countyCode": "659004",
            "countyName": "五家渠市",
            "isCity": true
          }
        ]
      }
    ]
  }
]

export default cityData;