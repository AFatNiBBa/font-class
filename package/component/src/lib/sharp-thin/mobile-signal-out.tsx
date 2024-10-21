
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-signal-out` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal-out?s=sharp-thin mobile-signal-out}
 * @preview ![mobile-signal-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mobile-signal-out.svg)
 */
const MobileSignalOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 16l176 0 0-16L48 0 32 0l0 16 0 480 0 16 16 0 288 0 16 0 0-16 0-208-16 0 0 208L48 496 48 16zm96 416l-8 0 0 16 8 0 96 0 8 0 0-16-8 0-96 0zM256 16c132.5 0 240 107.5 240 240l16 0C512 114.6 397.4 0 256 0l0 16zm16 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32l16 0c0-88.4-71.6-160-160-160l0 16c79.5 0 144 64.5 144 144z" />
    </Icon>
);

export default MobileSignalOut;