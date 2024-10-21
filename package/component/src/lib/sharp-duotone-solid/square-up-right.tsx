
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-right?s=sharp-duotone-solid square-up-right}
 * @preview ![square-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-up-right.svg)
 */
const SquareUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM112 312l56 56 76-76 52 52 24-24 0-160-160 0-24 24 52 52-76 76z" />
        <path d="M296 344l24-24 0-160-160 0-24 24 52 52-76 76 56 56 76-76 52 52z" />
    </Icon>
);

export default SquareUpRight;