
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spinner` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=sharp-duotone-solid spinner}
 * @preview ![spinner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/spinner.svg)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M41 403.1l67.9-67.9 67.9 67.9L108.9 471 41 403.1zM208 416l96 0 0 96-96 0 0-96zM335.2 108.9L403.1 41 471 108.9l-67.9 67.9-67.9-67.9zm0 294.2l67.9-67.9L471 403.1 403.1 471l-67.9-67.9zM416 208l96 0 0 96-96 0 0-96z" />
        <path d="M208 96l96 0 0-96L208 0l0 96zM0 208l0 96 96 0 0-96L0 208zm41-99.1l67.9 67.9 67.9-67.9L108.9 41 41 108.9z" />
    </Icon>
);

export default Spinner;