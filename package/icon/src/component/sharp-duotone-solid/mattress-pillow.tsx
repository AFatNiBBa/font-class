
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mattress-pillow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mattress-pillow?s=sharp-duotone-solid mattress-pillow}
 * @preview ![mattress-pillow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mattress-pillow.svg)
 */
const MattressPillow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l256 0 0-384L0 64zm64 64l128 0 0 256L64 384l0-256z" />
        <path d="M256 64H640V448H256V64z" />
    </Icon>
);

export default MattressPillow;