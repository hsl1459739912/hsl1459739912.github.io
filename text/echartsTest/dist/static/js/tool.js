'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tool = function () {
    function Tool() {
        _classCallCheck(this, Tool);
    }

    _createClass(Tool, [{
        key: 'basic',
        value: function basic() {
            var myChart = echarts.init(document.getElementById('main'));

            var legend = ['Chinese', 'Math', 'English', 'history'];
            var stus = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'];

            myChart.setOption({
                title: {
                    text: '学员成绩表',
                    subtext: '数据统计',
                    link: 'http://www.baidu.com'
                },
                toolbox: {
                    feature: {
                        saveAsImage: {},
                        restore: {},
                        dataZoom: {},
                        //切换图表类型
                        magicType: {
                            type: ['bar', 'line']
                        }
                    }
                },
                tooltip: {
                    trigger: 'axis'

                },
                legend: {
                    type: 'scroll',
                    data: legend,
                    bottom: 0,
                    selectedMode: 'single',
                    selected: function () {
                        var selected = {};
                        legend.forEach(function (key, index) {
                            if (index < 1) {
                                selected[key] = true;
                            } else {
                                selected[key] = false;
                            }
                        });
                        return selected;
                    }()
                },
                xAxis: {
                    type: "category",
                    data: stus
                },
                yAxis: {},
                series: function () {
                    var series = [];
                    legend.forEach(function (item) {
                        series.push({
                            name: item,
                            type: 'line',
                            markPoint: {
                                data: [{ type: 'min', name: '最小值' }, { type: 'max', name: '最大值' }]
                            },
                            markLine: {
                                data: [{ type: 'average', name: '平均值' }]
                            },
                            data: function () {
                                var grades = [];
                                stus.forEach(function (nums) {
                                    grades.push(Math.floor(Math.random() * 100) + 1);
                                });
                                return grades;
                            }()
                        });
                    });
                    return series;
                }()
            });
        }
    }, {
        key: 'test',
        value: function test() {
            var myChart = echarts.init($('#test')[0]);
            //预先设置图表基本结构
            myChart.setOption({
                title: {
                    text: '一周消费情况',
                    subtext: '数据仅供参考'
                },
                toolbox: {
                    saveAsImage: {},
                    dataZoom: {},
                    magicType: {
                        type: ['line', 'bar']
                    },
                    restore: {}
                },
                tooltip: {
                    show: true
                },
                legend: {
                    data: ['休闲娱乐']
                },
                xAxis: {
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {},
                series: []
            });
            myChart.showLoading();
            setTimeout(function () {
                $.ajax({
                    url: "./json/data.json",
                    type: "GET",
                    dataType: "json",
                    success: function success(response) {
                        myChart.hideLoading();
                        //更新数据
                        myChart.setOption({
                            series: [{
                                name: "休闲娱乐",
                                type: "line",
                                data: response,
                                markPoint: {
                                    data: [{ type: 'min', name: '最小值' }, { type: 'max', name: '最大值' }]
                                },
                                markLine: {
                                    data: [{ type: 'average', name: '平均值' }]
                                }
                            }]
                        });
                    }
                });
            }, 1500);
        }
    }, {
        key: 'test1',
        value: function test1() {
            var myChart = echarts.init($('#test1')[0]);
            myChart.setOption({
                title: {
                    text: '天气统计'
                },
                xAxis: {
                    data: function () {
                        var month = [];
                        for (var i = 1; i <= 12; i++) {
                            month.push(i + '\u6708');
                        }
                        return month;
                    }()

                },
                toolbox: {
                    feature: {
                        saveAsImage: {},
                        restore: {}
                    }
                },
                tooltip: {
                    show: true
                },
                yAxis: [{
                    type: 'value',
                    name: "水量",
                    min: 0,
                    max: 250,
                    intarval: 50,
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                }, {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    intarval: 5,
                    axisLabel: {
                        formatter: '{value} C'
                    }
                }],
                legend: {
                    data: ['降水量', '气温', '蒸发量', '平均温度']
                },
                series: [{
                    name: "降水量",
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                }, {
                    name: "蒸发量",
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                }, {
                    name: "平均温度",
                    type: 'line',
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                    yAxisIndex: 1
                }]
            });
        }
    }]);

    return Tool;
}();