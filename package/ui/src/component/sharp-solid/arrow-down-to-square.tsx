
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-square` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-square?s=sharp-solid arrow-down-to-square}
 * @preview ![arrow-down-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-down-to-square.svg)
 */
const ArrowDownToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M278.6 342.6l96-96L397.3 224 352 178.7l-22.6 22.6L288 242.7 288 32l0-32L224 0l0 32 0 210.7-41.4-41.4L160 178.7 114.7 224l22.6 22.6 96 96L256 365.3l22.6-22.6zM32 32L0 32 0 64 0 480l0 32 32 0 448 0 32 0 0-32 0-416 0-32-32 0-96 0 0 64 64 0 0 352L64 448 64 96l64 0 0-64L32 32z" />
    </Icon>
);

export default ArrowDownToSquare;