
function showCustomer(){
    model.screen.current = "customerScreen";
console.log("hei showCustomer kjører!" , model.screen.current);
    if (model.screen.current = 'customerScreen') {
        document.getElementById('content').innerHTML = `
        <div id="explanation-table">
        <table width="100%" border="0">
            <table>
                <h1> Customer Journey </h1>
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>dag for dag graph</td>
                    </tr>
                    <!--
                        <tr>
                            <td scope="row" data-label="Account">Visa - 6076</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td scope="row" data-label="Account">Corporate AMEX</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>-->
                </tbody>
            </table>
    </div>
    <div id="example">
        <div class="demo-section k-content wide">
            <div id="chart"></div>
        </div>


    <button style="position: absolute; left:200px;" id="btn" class="btn" onclick="pastlog()">Past log for Customer</button>
     <div id="output">${model.datavar.data}</div>
    </div>
 `;

        } 
       
 

        function createChart() {
            
            $("#chart").kendoChart({
                //title: { text: "Customer Journey Map"},
                legend: {
                    visible: false
                },
                dataSource: {
                    data: [{
                        value: 30,
                        order: "uke 1"
                    }, {
                        value: 20,
                        order: "uke 2"
                    }, {
                        value: 40,
                        order: "uke 3"
                    }, {
                        value: 15,
                        order: "uke 4"
                    }, {
                        value: 40,
                        order: "uke 5"
                    }, ]
                },
                series: [{
                    type: "area",
                    aggregate: "avg",
                    field: "value",
                    categoryField: "order",
                    line: {
                        style: "smooth"
                    }

                }],
                categoryAxis: {
                    baseUnit: "order"
                },
                valueAxis: {
                    majorGridLines: {
                        visible: false
                    },
                    visible: true
                }

            });
        }

        $(document).ready(createChart);
        $("#example").bind("kendo:skinChange", createChart);
        $(".box").bind("change", refresh);

        function refresh() {
            var chart = $("#chart").data("kendoChart"),
                series = chart.options.series,
                categoryAxis = chart.options.categoryAxis,
                baseUnitInputs = $("input:radio[name=baseUnit]"),
                aggregateInputs = $("input:radio[name=aggregate]");

            for (var i = 0, length = series.length; i < length; i++) {
                series[i].aggregate = aggregateInputs.filter(":checked").val();
            };

            categoryAxis.baseUnit = baseUnitInputs.filter(":checked").val();

            chart.refresh();
        }

  
  
}