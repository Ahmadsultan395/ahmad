document.addEventListener('DOMContentLoaded', function () {
    const pdfFileInput = document.getElementById('pdfFileInput');
    const convertButton = document.getElementById('convertButton');
    const downloadLink = document.getElementById('downloadLink');
    const pdfViewer = document.getElementById('pdfViewer');

    let pdfDoc = null;
    let pageNum = 1;
    let pageRendering = false;
    let pageNumPending = null;

    const scale = 1.5;

    function renderPage(num) {
        pageRendering = true;
        pdfDoc.getPage(num).then(function (page) {
            const viewport = page.getViewport({ scale });
            pdfViewer.innerHTML = '';
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            pdfViewer.appendChild(canvas);

            page.render({ canvasContext: ctx, viewport }).promise.then(function () {
                pageRendering = false;
                if (pageNumPending !== null) {
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
        });
    }

    function queueRenderPage(num) {
        if (pageRendering) {
            pageNumPending = num;
        } else {
            renderPage(num);
        }
    }

    pdfFileInput.addEventListener('change', function () {
        const file = pdfFileInput.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = function () {
                const typedArray = new Uint8Array(this.result);
                pdfjsLib.getDocument(typedArray).promise.then(function (pdf) {
                    pdfDoc = pdf;
                    renderPage(pageNum);
                    convertButton.disabled = false;
                });
            };
            fileReader.readAsArrayBuffer(file);
        }
    });

    convertButton.addEventListener('click', function () {
        // Simulate PDF to Word conversion (server-side process)
        // In reality, you would need a server to handle this conversion.
        // Here, we're just demonstrating the download link.
        const wordBlob = new Blob(['This is a sample Word document.'], { type: 'application/msword' });
        downloadLink.href = URL.createObjectURL(wordBlob);
        downloadLink.style.display = 'block';
    });

    pdfViewer.addEventListener('wheel', function (e) {
        if (e.deltaY < 0 && pageNum > 1) {
            pageNum--;
            queueRenderPage(pageNum);
        } else if (e.deltaY > 0 && pageNum < pdfDoc.numPages) {
            pageNum++;
            queueRenderPage(pageNum);
        }
    });
});
