
import { Icon } from "../../index";

/**
 * A component that renders the `mattress-pillow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mattress-pillow?s=sharp-thin mattress-pillow}
 * @preview ![mattress-pillow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mattress-pillow.svg)
 */
const MattressPillow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 80l0 352L16 432 16 80l240 0zm16 0l352 0 0 352-352 0 0-352zM16 64L0 64 0 80 0 432l0 16 16 0 608 0 16 0 0-16 0-352 0-16-16 0L16 64zm192 80l0 224L80 368l0-224 128 0zM80 128l-16 0 0 16 0 224 0 16 16 0 128 0 16 0 0-16 0-224 0-16-16 0L80 128z" />
    </Icon>
);

export default MattressPillow;