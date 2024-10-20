
import { Icon } from "../../index";

/**
 * A component that renders the `colon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon?s=sharp-solid colon}
 * @preview ![colon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/colon.svg)
 */
const Colon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M160 64L32 64l0 128 128 0 0-128zm0 256L32 320l0 128 128 0 0-128z" />
    </Icon>
);

export default Colon;