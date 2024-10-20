
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-fair` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-fair?s=sharp-light wifi-fair}
 * @preview ![wifi-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wifi-fair.svg)
 */
const WifiFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 224c-74.1 0-140.8 31.5-187.5 81.7L110.9 282c52.5-55.4 126.8-90 209.1-90s156.6 34.6 209.1 90l-21.6 23.8C460.8 255.5 394.1 224 320 224zm32 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default WifiFair;