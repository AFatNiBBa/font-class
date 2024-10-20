
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-to-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-square?s=sharp-duotone-solid arrow-down-to-square}
 * @preview ![arrow-down-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-to-square.svg)
 */
const ArrowDownToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l32 0 96 0 0 64L64 96l0 352 384 0 0-352-64 0 0-64 96 0 32 0 0 32 0 416 0 32-32 0L32 512 0 512l0-32L0 64 0 32z" />
        <path d="M256 365.3l22.6-22.6 96-96L397.3 224 352 178.7l-22.6 22.6L288 242.7 288 32l0-32L224 0l0 32 0 210.7-41.4-41.4L160 178.7 114.7 224l22.6 22.6 96 96L256 365.3z" />
    </Icon>
);

export default ArrowDownToSquare;