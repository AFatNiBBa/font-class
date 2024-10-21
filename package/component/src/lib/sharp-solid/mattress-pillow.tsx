
import { Icon } from "../../index";

/**
 * A component that renders the `mattress-pillow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mattress-pillow?s=sharp-solid mattress-pillow}
 * @preview ![mattress-pillow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mattress-pillow.svg)
 */
const MattressPillow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 64L0 64 0 448l256 0 0-384zm32 384l352 0 0-384L288 64l0 384zM64 128l128 0 0 256L64 384l0-256z" />
    </Icon>
);

export default MattressPillow;