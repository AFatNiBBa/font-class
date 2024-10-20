
import { Icon } from "../../index";

/**
 * A component that renders the `down-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-right?s=sharp-solid down-right}
 * @preview ![down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/down-right.svg)
 */
const DownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 432l0-288-32-32L232 216 80 64 0 144 152 296 48 400l32 32 288 0z" />
    </Icon>
);

export default DownRight;