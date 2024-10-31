
import { Icon } from "../../index";

/**
 * A component that renders the `vr-cardboard` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vr-cardboard?s=sharp-thin vr-cardboard}
 * @preview ![vr-cardboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/vr-cardboard.svg)
 */
const VrCardboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M294.1 304l9.9 0 32 0 9.9 0 4.4 8.8L409.9 432 624 432l0-352L16 80l0 352 214.1 0 59.6-119.2 4.4-8.8zM240 448L16 448 0 448l0-16L0 80 0 64l16 0 608 0 16 0 0 16 0 352 0 16-16 0-224 0L336 320l-32 0L240 448zM176 304a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm352 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-144 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default VrCardboard;