
import { Icon } from "../../index";

/**
 * A component that renders the `plus-minus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=solid plus-minus}
 * @preview ![plus-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/plus-minus.svg)
 */
const PlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112L48 144c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0 0 112c0 17.7 14.3 32 32 32s32-14.3 32-32l0-112 112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0 0-112zM0 480c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default PlusMinus;