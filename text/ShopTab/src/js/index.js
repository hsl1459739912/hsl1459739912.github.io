$(function(){
    let myChart = echarts.init($('.barTab')[0]);

    let legend = ['Chinese','Math','English','history'];
    let stus = ['aa','bb','cc','dd','ee','ff'];

    myChart.setOption({
        title:{
            text:'本周生活消费数据'
        },
        toolbox:{
            feature:{
                saveAsImage:{},
                restore:{},
                dataZoom:{},
                //切换图表类型
                magicType:{
                    type:['bar','line']
                }
            }
        },
        tooltip:{
            trigger:'axis', 
        },
        legend:{
            type:'scroll',
            data:legend,
            bottom:0,
            selectedMode:'single',
            selected:(function(){
                let selected = {};
                legend.forEach((key,index)=>{
                    if(index<1){
                        selected[key] = true;
                    }else{
                        selected[key] = false;
                    }
                })
                return selected;
            })(),
        },
        xAxis:{
            type: "category",
            data:stus,
        },
        yAxis: {},
        series:(function(){
            let series = [];
            legend.forEach(item => {
                series.push({
                    name:item,
                    type:'line',
                    markPoint:{
                        data:[
                            {type:'min',name:'最小值'},
                            {type:'max',name:'最大值'}
                        ]
                    },
                    markLine:{
                        data:[{type:'average',name:'平均值'}]
                    },
                    data:(function(){
                        let grades = [];
                        stus.forEach(nums =>{
                            grades.push(Math.floor(Math.random()*100)+1);
                            })
                            return grades;
                    })()
                })
            });
            return series;
        })(),
    })


    $.ajax({
        url:"./json/data.json",
        type:"GET",
        dataType:"json",
        success:(response)=>{
            let htmlStr = '';
            let htmlStrs = '';
            let addStr = '';
            let count = 0;
            for(let i = 0 ; i < response.length;i++){ 
                for( let j = 0;j<response[i].length ;j++){
                    if(j != 0){
                    htmlStr += `
                            <td  contenteditable="true">${response[i][j]}</td>
                    `;
                }else{
                    htmlStr += `
                            <td>${response[i][j]}</td>
                    `;
                }
            }
                htmlStrs += `
                    <tr>${htmlStr}</tr>
                `
                htmlStr = '';
            }
            for(let i =1; i<response[1].length;i++){
                for(let j=0; j<response.length;j++){
                    count += parseInt(response[j][i]);
                }
                addStr += `
                    <td>${count}</td>
                `
                count = 0;
            }
            $('.td1').html(`
            <td>总计</td>
                ${addStr}
            `)
            $('.td').html(htmlStrs);
        }
    })
})
