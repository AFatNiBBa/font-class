
import { Icon } from "../../index";

/**
 * A component that renders the `litecoin-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/litecoin-sign?s=sharp-light litecoin-sign}
 * @preview ![litecoin-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/litecoin-sign.svg)
 */
const LitecoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 48l0-16L64 32l0 16 0 179.5-51.9 13-15.5 3.9 7.8 31 15.5-3.9 44.1-11L64 464l0 16 16 0 288 0 16 0 0-32-16 0L96 448l0-195.5 179.9-45 15.5-3.9-7.8-31-15.5 3.9L96 219.5 96 48z" />
    </Icon>
);

export default LitecoinSign;