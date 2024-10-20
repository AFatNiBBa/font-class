
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up?s=regular arrow-up}
 * @preview ![arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-up.svg)
 */
const ArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M209.4 39.4C204.8 34.7 198.6 32 192 32s-12.8 2.7-17.4 7.4l-168 176c-9.2 9.6-8.8 24.8 .8 33.9s24.8 8.8 33.9-.8L168 115.9 168 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-340.1L342.6 248.6c9.2 9.6 24.3 9.9 33.9 .8s9.9-24.3 .8-33.9l-168-176z" />
    </Icon>
);

export default ArrowUp;