
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right-from-square` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right-from-square?s=sharp-light arrow-up-right-from-square}
 * @preview ![arrow-up-right-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-up-right-from-square.svg)
 */
const ArrowUpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 0L320 0l0 32 16 0 121.4 0L212.7 276.7 201.4 288 224 310.6l11.3-11.3L480 54.6 480 176l0 16 32 0 0-16 0-160 0-16L496 0 336 0zM16 32L0 32 0 48 0 496l0 16 16 0 448 0 16 0 0-16 0-192 0-16-32 0 0 16 0 176L32 480 32 64l176 0 16 0 0-32-16 0L16 32z" />
    </Icon>
);

export default ArrowUpRightFromSquare;