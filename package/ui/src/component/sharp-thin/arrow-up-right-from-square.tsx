
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right-from-square` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right-from-square?s=sharp-thin arrow-up-right-from-square}
 * @preview ![arrow-up-right-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-up-right-from-square.svg)
 */
const ArrowUpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328 16l-8 0 0 16 8 0 140.7 0L202.3 298.3l-5.7 5.7L208 315.3l5.7-5.7L480 43.3 480 184l0 8 16 0 0-8 0-160 0-8-8 0L328 16zM8 32L0 32l0 8L0 504l0 8 8 0 464 0 8 0 0-8 0-192 0-8-16 0 0 8 0 184L16 496 16 48l184 0 8 0 0-16-8 0L8 32z" />
    </Icon>
);

export default ArrowUpRightFromSquare;