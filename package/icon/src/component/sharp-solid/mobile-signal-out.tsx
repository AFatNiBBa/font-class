
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-signal-out` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal-out?s=sharp-solid mobile-signal-out}
 * @preview ![mobile-signal-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mobile-signal-out.svg)
 */
const MobileSignalOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l160 0 0-64L64 0 0 0 0 64 0 448l0 64 64 0 224 0 64 0 0-64 0-160-64 0 0 160L64 448 64 64zm80 320l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0zM256 48c114.9 0 208 93.1 208 208l48 0C512 114.6 397.4 0 256 0l0 48zm32 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80 0l48 0c0-88.4-71.6-160-160-160l0 48c61.9 0 112 50.1 112 112z" />
    </Icon>
);

export default MobileSignalOut;