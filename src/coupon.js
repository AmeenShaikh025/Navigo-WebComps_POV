import { html, LitElement, css } from "lit-element";

class CouponApp extends LitElement {
  static styles = css`
    input {
      display: block;
      width: 80%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 0.25rem;
    }
    button {
      display: inline-block;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      border-radius: 0.25rem;
      color: #fff;
      background-color: SlateBlue;
      border-color: SlateBlue;
      margin-top: 10px;
    }
    .coupon {
      width: 50%;
      margin: 60px auto 0 auto;
    }
  `;

  get input() {
    return (this.___input ??= this.renderRoot?.querySelector("input") ?? null);
  }

  constructor() {
    super();

    // this.searchText = "search"; // setting initial state
    // this.couponValue = "enter coupon"; // setting initial state
  }

  render() {
    return html`
      <div class="coupon">
        <h2>Coupon Web Component</h2>
        <label>Enter Coupon</label>
        <input type="text" name="coupon" />
        <button @click=${this.saveCouponCode} alt="Save Coupon">
          Save coupon code
        </button>
      </div>
    `;
  }

  saveCouponCode() {
    const couponName = this.input.value.trim();
    if (couponName) {
      const options = {
        detail: { couponName },
        bubbles: true,
        cancelable: false,
        composed: true // so the data can pass through shdow dom
      };
      this.dispatchEvent(new CustomEvent("coupontext", options));
    }
  }
}

window.customElements.define("coupon-app", CouponApp);
