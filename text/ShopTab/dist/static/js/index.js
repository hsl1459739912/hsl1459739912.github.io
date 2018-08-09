'use strict';

$(function () {
    var myChart = echarts.init($('.barTab')[0]);

    var legend = ['Chinese', 'Math', 'English', 'history'];
    var stus = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'];

    myChart.setOption({
        title: {
            text: '本周生活消费数据'
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

    $.ajax({
        url: "./json/data.json",
        type: "GET",
        dataType: "json",
        success: function success(response) {
            var htmlStr = '';
            var htmlStrs = '';
            var addStr = '';
            var count = 0;
            for (var i = 0; i < response.length; i++) {
                for (var j = 0; j < response[i].length; j++) {
                    if (j != 0) {
                        htmlStr += '\n                            <td  contenteditable="true">' + response[i][j] + '</td>\n                    ';
                    } else {
                        htmlStr += '\n                            <td>' + response[i][j] + '</td>\n                    ';
                    }
                }
                htmlStrs += '\n                    <tr>' + htmlStr + '</tr>\n                ';
                htmlStr = '';
            }
            for (var _i = 1; _i < response[1].length; _i++) {
                for (var _j = 0; _j < response.length; _j++) {
                    count += parseInt(response[_j][_i]);
                }
                addStr += '\n                    <td>' + count + '</td>\n                ';
                count = 0;
            }
            $('.td1').html('\n            <td>\u603B\u8BA1</td>\n                ' + addStr + '\n            ');
            $('.td').html(htmlStrs);
        }
    });
});