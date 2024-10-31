
import { Icon } from "../../index";

/**
 * A component that renders the `bell-concierge` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-concierge?s=light bell-concierge}
 * @preview ![bell-concierge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bell-concierge.svg)
 */
const BellConcierge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 48.6C123.8 152.8 32 249.7 32 368l0 16 32 0 0-16c0-106 86-192 192-192s192 86 192 192l0 16 32 0 0-16c0-118.3-91.8-215.2-208-223.4L272 96l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-48 0zM16 416c-8.8 0-16 7.2-16 16s7.2 16 16 16l480 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 416z" />
    </Icon>
);

export default BellConcierge;