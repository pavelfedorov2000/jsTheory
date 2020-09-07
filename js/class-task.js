class Options {
    constructor (height, width, bg, fontSize, textAlign, mt) {
        this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.mt = mt;
    }
    newDiv() {
        let element = document.createElement('div');
        document.body.appendChild(element);
        let parameters = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}; margin-top:${this.mt}px;`;
        element.style.cssText = parameters;
    }
}

const item = new Options(200, 300, "green", 14, "center", 20);

item.newDiv();