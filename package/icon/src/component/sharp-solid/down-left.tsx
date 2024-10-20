
import { Icon } from "../../index";

/**
 * A component that renders the `down-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left?s=sharp-solid down-left}
 * @preview ![down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/down-left.svg)
 */
const DownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 432l0-288 32-32L152 216 304 64l80 80L232 296 336 400l-32 32L16 432z" />
    </Icon>
);

export default DownLeft;