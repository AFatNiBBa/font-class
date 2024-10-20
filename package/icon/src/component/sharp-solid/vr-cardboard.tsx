
import { Icon } from "../../index";

/**
 * A component that renders the `vr-cardboard` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vr-cardboard?s=sharp-solid vr-cardboard}
 * @preview ![vr-cardboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/vr-cardboard.svg)
 */
const VrCardboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 64L0 64 0 448l224 0 64-128 64 0 64 128 224 0 0-384zM96 240a64 64 0 1 1 128 0A64 64 0 1 1 96 240zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default VrCardboard;