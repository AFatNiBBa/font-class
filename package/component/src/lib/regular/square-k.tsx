
import { Icon } from "../../index";

/**
 * A component that renders the `square-k` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-k?s=regular square-k}
 * @preview ![square-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-k.svg)
 */
const SquareK: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm313.1 72.8l-73 74.3 75.3 102.7c7.8 10.7 5.5 25.7-5.2 33.5s-25.7 5.5-33.5-5.2L206 277.8l-30 30.5 0 51.7c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-61.5L128 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 87.8L278.9 135.2c9.3-9.5 24.5-9.6 33.9-.3s9.6 24.5 .3 33.9z" />
    </Icon>
);

export default SquareK;