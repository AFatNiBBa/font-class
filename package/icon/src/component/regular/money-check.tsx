
import { Icon } from "../../index";

/**
 * A component that renders the `money-check` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check?s=regular money-check}
 * @preview ![money-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/money-check.svg)
 */
const MoneyCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm120 80l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM96 328c0-13.3 10.7-24 24-24l336 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-336 0c-13.3 0-24-10.7-24-24zM376 160l80 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default MoneyCheck;