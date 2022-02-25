// In this file keep track of state and based on a prop hide or show
// coupon or store-finder component - keeping state intact
import { html, LitElement } from "lit-element";

import "./store-finder.js";
import "./coupon.js";

class MainApp extends LitElement {

    static get properties() {
        return {
          searchText: { type: String },
          couponValue: { type: String }
        };
    }

    constructor() {
        super();

        this.searchText = "";
        this.couponValue = "";
    }

    couponTextListener(e) {
        this.couponValue = e.detail.couponName;
    }

    storeTextListener(e) {
        this.searchText = e.detail.storeName;
    }

    render() {
        return html`
        <p>
            Store Search Text is: ${this.searchText} <br />
            and Coupon Text is: ${this.couponValue}
        </p>
        <p @storetext=${this.storeTextListener} @coupontext=${this.couponTextListener}>
            <slot></slot>
        </p>
        `;
    }
}

window.customElements.define("main-app", MainApp);
