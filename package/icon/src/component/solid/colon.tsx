
import { Icon } from "../../index";

/**
 * A component that renders the `colon` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/colon?s=solid colon}
 * @preview ![colon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/colon.svg)
 */
const Colon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M96 192A64 64 0 1 0 96 64a64 64 0 1 0 0 128zm0 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Colon;