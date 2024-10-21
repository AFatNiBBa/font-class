
import { Icon } from "../../index";

/**
 * A component that renders the `mattress-pillow` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mattress-pillow?s=sharp-light mattress-pillow}
 * @preview ![mattress-pillow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mattress-pillow.svg)
 */
const MattressPillow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 96l0 320L32 416 32 96l224 0zm32 0l320 0 0 320-320 0 0-320zM32 64L0 64 0 96 0 416l0 32 32 0 576 0 32 0 0-32 0-320 0-32-32 0L32 64zm160 96l0 192-96 0 0-192 96 0zM96 128l-32 0 0 32 0 192 0 32 32 0 96 0 32 0 0-32 0-192 0-32-32 0-96 0z" />
    </Icon>
);

export default MattressPillow;