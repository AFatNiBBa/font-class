
import { Icon } from "../../index";

/**
 * A component that renders the `vr-cardboard` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vr-cardboard?s=sharp-light vr-cardboard}
 * @preview ![vr-cardboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/vr-cardboard.svg)
 */
const VrCardboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 320l64 128 208 0 32 0 0-32 0-320 0-32-32 0L32 64 0 64 0 96 0 416l0 32 32 0 208 0 64-128 32 0zM220.2 416L32 416 32 96l576 0 0 320-188.2 0L364.6 305.7 355.8 288 336 288l-32 0-19.8 0-8.8 17.7L220.2 416zM176 192a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm240-80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default VrCardboard;