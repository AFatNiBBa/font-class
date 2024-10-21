
import { Icon } from "../../index";

/**
 * A component that renders the `money-bills-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills-simple?s=regular money-bills-simple}
 * @preview ![money-bills-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/money-bills-simple.svg)
 */
const MoneyBillsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 80c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-416 0c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l416 0zM160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM448 208a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 360c0 66.3 53.7 120 120 120l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-400 0c-39.8 0-72-32.2-72-72l0-240z" />
    </Icon>
);

export default MoneyBillsSimple;