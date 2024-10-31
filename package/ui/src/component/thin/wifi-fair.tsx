
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-fair` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-fair?s=thin wifi-fair}
 * @preview ![wifi-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/wifi-fair.svg)
 */
const WifiFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M133.5 282c48.7-45.9 114.3-74 186.5-74s137.8 28.1 186.5 74c3.2 3 8.3 2.9 11.3-.3s2.9-8.3-.3-11.3C465.9 221.8 396.4 192 320 192s-145.9 29.8-197.5 78.4c-3.2 3-3.4 8.1-.3 11.3s8.1 3.4 11.3 .3zM272 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default WifiFair;