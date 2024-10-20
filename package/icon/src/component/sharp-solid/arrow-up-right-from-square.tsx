
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right-from-square` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right-from-square?s=sharp-solid arrow-up-right-from-square}
 * @preview ![arrow-up-right-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-up-right-from-square.svg)
 */
const ArrowUpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 0L288 0l0 64 32 0 82.7 0L201.4 265.4 178.7 288 224 333.3l22.6-22.6L448 109.3l0 82.7 0 32 64 0 0-32 0-160 0-32L480 0 320 0zM32 32L0 32 0 64 0 480l0 32 32 0 424 0 32 0 0-32 0-128 0-32-64 0 0 32 0 96L64 448 64 96l96 0 32 0 0-64-32 0L32 32z" />
    </Icon>
);

export default ArrowUpRightFromSquare;