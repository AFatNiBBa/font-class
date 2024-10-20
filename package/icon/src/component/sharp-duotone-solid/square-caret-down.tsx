
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-caret-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-down?s=sharp-duotone-solid square-caret-down}
 * @preview ![square-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-caret-down.svg)
 */
const SquareCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 192l256 0 0 32L224 352 96 224l0-32z" />
        <path d="M96 192v32L224 352 352 224V192H96z" />
    </Icon>
);

export default SquareCaretDown;