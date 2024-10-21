
import { Icon } from "../../index";

/**
 * A component that renders the `calculator-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calculator-simple?s=regular calculator-simple}
 * @preview ![calculator-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/calculator-simple.svg)
 */
const CalculatorSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c13.3 0 24 10.7 24 24l0 208 208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0 0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208L24 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l208 0 0-208c0-13.3 10.7-24 24-24zM400 32c13.3 0 24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32c0-13.3 10.7-24 24-24zM55.4 343.4c9.4-9.4 24.6-9.4 33.9 0L112 366.1l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L145.9 400l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L112 433.9 89.4 456.6c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L78.1 400 55.4 377.4c-9.4-9.4-9.4-24.6 0-33.9zM64 88l96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM352 336l96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default CalculatorSimple;