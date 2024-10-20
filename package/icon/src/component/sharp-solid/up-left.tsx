
import { Icon } from "../../index";

/**
 * A component that renders the `up-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-left?s=sharp-solid up-left}
 * @preview ![up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-left.svg)
 */
const UpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 80l0 288 32 32L152 296 304 448l80-80L232 216 336 112 304 80 16 80z" />
    </Icon>
);

export default UpLeft;