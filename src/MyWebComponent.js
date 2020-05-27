export class MyWebComponent extends HTMLElement {
    anyOtherInstanceAttribute = '123'
    connectedCallback() {
      this.innerHTML = `<b>${this.getAttribute("text")}!</b>`;
    }
  }
  