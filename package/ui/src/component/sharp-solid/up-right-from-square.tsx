
import { Icon } from "../../index";

/**
 * A component that renders the `up-right-from-square` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-from-square?s=sharp-solid up-right-from-square}
 * @preview ![up-right-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-right-from-square.svg)
 */
const UpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 176l-32 32-65.4-65.4-168 168L224 333.3 178.7 288l22.6-22.6 168-168L304 32 336 0 512 0l0 176zM0 32l32 0 128 0 32 0 0 64-32 0L64 96l0 352 352 0 0-96 0-32 64 0 0 32 0 128 0 32-32 0L32 512 0 512l0-32L0 64 0 32z" />
    </Icon>
);

export default UpRightFromSquare;