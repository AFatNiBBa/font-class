
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-fair` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-fair?s=sharp-solid wifi-fair}
 * @preview ![wifi-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wifi-fair.svg)
 */
const WifiFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M171.8 312c39.5-34.9 91.3-56 148.2-56s108.6 21.1 148.2 56l42.4-48C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72l42.4 48zM320 480a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default WifiFair;