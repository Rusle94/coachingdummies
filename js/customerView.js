
function showCustomer(){

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


        <button id="btn" class="btn" onclick="pastlog">Past log for Customer</button>
        <script>
            var stats = [{
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
            }, `;
        } 
}ww