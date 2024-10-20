
import { Icon } from "../../index";

/**
 * A component that renders the `headset` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headset?s=sharp-light headset}
 * @preview ![headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/headset.svg)
 */
const Headset: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224l0 192.1L352 448s0 0 0 0l0-32-32 0-96 0-32 0 0 32 0 32 0 32 32 0 96 0 32 0 0-32 144 .1 16 0 0-16L512 256C512 114.6 397.4 0 256 0S0 114.6 0 256l0 48 0 16 32 0 0-16 0-48zM320 464l0 16s0 0 0 0s0 0 0 0l-96 0 0-32 96 0 0 16zM96 224l64 0 0 128-64 0 0-128zM64 192l0 32 0 128 0 32 32 0 64 0 32 0 0-32 0-128 0-32-32 0-64 0-32 0zm288 32l64 0 0 128-64 0 0-128zm64-32l-64 0-32 0 0 32 0 128 0 32 32 0 64 0 32 0 0-32 0-128 0-32-32 0z" />
    </Icon>
);

export default Headset;