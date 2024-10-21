
import { Icon } from "../../index";

/**
 * A component that renders the `barcode` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=light barcode}
 * @preview ![barcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/barcode.svg)
 */
const Barcode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 416c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 48zm64 0c0-8.8 7.2-16 16-16s16 7.2 16 16l0 416c0 8.8-7.2 16-16 16s-16-7.2-16-16L64 48zm80-16c8.8 0 16 7.2 16 16l0 416c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-416c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 416c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-416zm80-16c8.8 0 16 7.2 16 16l0 416c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-416c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 416c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-416zM496 32c8.8 0 16 7.2 16 16l0 416c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-416c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Barcode;