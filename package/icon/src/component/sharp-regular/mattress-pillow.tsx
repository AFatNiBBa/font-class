
import { Icon } from "../../index";

/**
 * A component that renders the `mattress-pillow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mattress-pillow?s=sharp-regular mattress-pillow}
 * @preview ![mattress-pillow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mattress-pillow.svg)
 */
const MattressPillow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M240 112l0 288L48 400l0-288 192 0zm48 0l304 0 0 288-304 0 0-288zM48 64L0 64l0 48L0 400l0 48 48 0 544 0 48 0 0-48 0-288 0-48-48 0L48 64zm32 80l0 224 128 0 0-224L80 144z" />
    </Icon>
);

export default MattressPillow;