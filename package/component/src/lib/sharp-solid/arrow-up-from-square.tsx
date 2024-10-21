
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-square` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-square?s=sharp-solid arrow-up-from-square}
 * @preview ![arrow-up-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-up-from-square.svg)
 */
const ArrowUpFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M278.6 25.4L256 2.7 233.4 25.4l-96 96L114.7 144 160 189.3l22.6-22.6L224 125.3 224 320l0 32 64 0 0-32 0-194.7 41.4 41.4L352 189.3 397.3 144l-22.6-22.6-96-96zM32 32L0 32 0 64 0 480l0 32 32 0 448 0 32 0 0-32 0-416 0-32-32 0-64 0 0 64 32 0 0 352L64 448 64 96l32 0 0-64L32 32z" />
    </Icon>
);

export default ArrowUpFromSquare;