
import { Icon } from "../../index";

/**
 * A component that renders the `up-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right?s=sharp-solid up-right}
 * @preview ![up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/up-right.svg)
 */
const UpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 80l0 288-32 32L232 296 80 448 0 368 152 216 48 112 80 80l288 0z" />
    </Icon>
);

export default UpRight;