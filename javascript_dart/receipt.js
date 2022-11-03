function printReceipt(obj) {
    // console.log(obj);
    try {
        window.chrome.webview.postMessage(obj);
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
}

function exportFileExcel(obj) {
    // console.log(obj);
    try {
        // console.log(obj);
        window.chrome.webview.postMessage(obj);
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
}

function postMessage(obj) {
    // console.log(obj);
    try {
        window.chrome.webview.postMessage(obj);
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
}

function pdfViewer(obj) {


    try {
        var data = JSON.parse(obj)
        var content = data.data;
        var printWindow = window.open('', '_blank', 'height="100%",width="100%"');
        printWindow.document.write(content);
        printWindow.document.close();
    } catch (e) {
        console.log(e);
        return false;
    }


    return true;
}
// static List<OutputSaleType> listOutputForm(){
//     return [
//       OutputSaleType(name: "Tất cả", type: 0),
//       OutputSaleType(name: "Xuất bán trực tiếp", type: 1),
//       OutputSaleType(name: "Xuất bán hàng online", type: 2),
//     ];
//   }

//   static List<OutputSaleType> listOutputType(){
//     return [
//       OutputSaleType(name: "Tất cả", type: 0),
//       OutputSaleType(name: "App bán hàng", type: 1),
//       OutputSaleType(name: "PosMobile", type: 7),
//     ];
//   }

//   static List<OutputSaleType> listOutputSaleType(){
//     return [
//       OutputSaleType(name: "Phiếu xuất", type: 1),
//       OutputSaleType(name: "Sản phẩm", type: 2),
//       OutputSaleType(name: "Khách hàng", type: 3),
//     ];
//   }

function getDataSync() {

    var data = {
        "version": 20221002,
        "listOutputForm": [
            { "name": "Tất cả", "type": 0 },
            { "name": "Xuất bán trực tiếp", "type": 1 },
            { "name": "Xuất bán hàng online", "type": 2 }
        ],
        "listOutputType": [
            { "name": "Tất cả", "type": 0 },
            { "name": "App bán hàng", "type": 1 },
            { "name": "PosMobile", "type": 7 }
        ],
        "listOutputSaleType": [
            { "name": "Phiếu xuất", "type": 1 },
            { "name": "Sản phẩm", "type": 2 },
            { "name": "Khách hàng", "type": 3 }
        ]

    }

    return JSON.stringify(data);
}
// syncData(JSON.stringify({
//     "version": 20221002,
//     "listOutputForm": [
//         { "name": "Tất cả", "type": 0 },
//         { "name": "Xuất bán trực tiếp", "type": 1 },
//         { "name": "Xuất bán hàng online", "type": 2 }
//     ],
//     "listOutputType": [
//         { "name": "Tất cả", "type": 0 },
//         { "name": "App bán hàng", "type": 1 },
//         { "name": "PosMobile", "type": 7 }
//     ],
//     "listOutputSaleType": [
//         { "name": "Phiếu xuất", "type": 1 },
//         { "name": "Sản phẩm", "type": 2 },
//         { "name": "Khách hàng", "type": 3 }
//     ]

// }))