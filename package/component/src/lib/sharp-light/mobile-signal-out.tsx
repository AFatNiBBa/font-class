
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-signal-out` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal-out?s=sharp-light mobile-signal-out}
 * @preview ![mobile-signal-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mobile-signal-out.svg)
 */
const MobileSignalOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32l160 0 0-32L64 0 32 0l0 32 0 448 0 32 32 0 256 0 32 0 0-32 0-192-32 0 0 192L64 480 64 32zm96 368l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0zM256 32c123.7 0 224 100.3 224 224l32 0C512 114.6 397.4 0 256 0l0 32zm32 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96 0l32 0c0-88.4-71.6-160-160-160l0 32c70.7 0 128 57.3 128 128z" />
    </Icon>
);

export default MobileSignalOut;