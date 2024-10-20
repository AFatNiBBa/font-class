
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-right?s=sharp-duotone-solid square-right}
 * @preview ![square-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-right.svg)
 */
const SquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 208l128 0 0-80 32 0L384 256 256 384l-32 0 0-80L96 304l0-96z" />
        <path d="M224 304l0 80 32 0L384 256 256 128l-32 0 0 80L96 208l0 96 128 0z" />
    </Icon>
);

export default SquareRight;