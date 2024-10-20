
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-up-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-left?s=sharp-duotone-solid square-up-left}
 * @preview ![square-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-up-left.svg)
 */
const SquareUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM128 160l160 0 24 24-52 52 76 76-56 56-76-76-52 52-24-24 0-160z" />
        <path d="M152 344l-24-24 0-160 160 0 24 24-52 52 76 76-56 56-76-76-52 52z" />
    </Icon>
);

export default SquareUpLeft;