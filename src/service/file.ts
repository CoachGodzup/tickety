import { Card } from "@/model/card";

export const saveFile = (data: any, fileName: string) => {
    // Create a blob of the data
    const blob = new Blob([JSON.stringify(data, undefined, 2)], {
        type: 'application/json'
    });

    // Save the file
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = `${fileName}.json`;
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')

    const container = document.getElementsByTagName('body')[0];
    container.appendChild(a);
    a.click();
    container.removeChild(a);
}

export const loadFile = (onchange: (data: Card[]) => void) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const text = await file.text();
            const cards = JSON.parse(text).cards;
            onchange(cards);
        }
    };
    input.click();
}