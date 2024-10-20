
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond-half` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half?s=sharp-duotone-solid diamond-half}
 * @preview ![diamond-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diamond-half.svg)
 */
const DiamondHalf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0L512 256 256 512 256 0z" />
        <path d="M256 0L0 256 256 512 256 0z" />
    </Icon>
);

export default DiamondHalf;