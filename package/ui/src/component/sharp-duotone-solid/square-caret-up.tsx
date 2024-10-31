
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-caret-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-up?s=sharp-duotone-solid square-caret-up}
 * @preview ![square-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-caret-up.svg)
 */
const SquareCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 288L224 160 352 288l0 32L96 320l0-32z" />
        <path d="M96 320V288L224 160 352 288v32H96z" />
    </Icon>
);

export default SquareCaretUp;