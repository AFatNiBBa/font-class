
import { Icon } from "../../index";

/**
 * A component that renders the `bell-concierge` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-concierge?s=sharp-light bell-concierge}
 * @preview ![bell-concierge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bell-concierge.svg)
 */
const BellConcierge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 64l-16 0 0 32 16 0 32 0 0 48.6C123.8 152.8 32 249.7 32 368l0 16 32 0 0-16c0-106 86-192 192-192s192 86 192 192l0 16 32 0 0-16c0-118.3-91.8-215.2-208-223.4L272 96l32 0 16 0 0-32-16 0-48 0-48 0zM16 416L0 416l0 32 16 0 480 0 16 0 0-32-16 0L16 416z" />
    </Icon>
);

export default BellConcierge;