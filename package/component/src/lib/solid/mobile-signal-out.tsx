
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-signal-out` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal-out?s=solid mobile-signal-out}
 * @preview ![mobile-signal-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/mobile-signal-out.svg)
 */
const MobileSignalOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l160 0 0-64L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-160-64 0 0 160L64 448 64 64zm80 320c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0zM280 0c-13.3 0-24 10.7-24 24s10.7 24 24 24c101.6 0 184 82.4 184 184c0 13.3 10.7 24 24 24s24-10.7 24-24C512 103.9 408.1 0 280 0zm8 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM256 120c0 13.3 10.7 24 24 24c48.6 0 88 39.4 88 88c0 13.3 10.7 24 24 24s24-10.7 24-24c0-75.1-60.9-136-136-136c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default MobileSignalOut;