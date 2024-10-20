
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right-from-square` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right-from-square?s=sharp-regular arrow-up-right-from-square}
 * @preview ![arrow-up-right-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-up-right-from-square.svg)
 */
const ArrowUpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328 0L304 0l0 48 24 0 102.1 0L207 271l-17 17L224 321.9l17-17 223-223L464 184l0 24 48 0 0-24 0-160 0-24L488 0 328 0zM24 32L0 32 0 56 0 488l0 24 24 0 432 0 24 0 0-24 0-176 0-24-48 0 0 24 0 152L48 464 48 80l152 0 24 0 0-48-24 0L24 32z" />
    </Icon>
);

export default ArrowUpRightFromSquare;