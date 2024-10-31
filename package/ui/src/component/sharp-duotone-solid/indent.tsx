
import { Icon, generic } from "../../index";

/**
 * A component that renders the `indent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=sharp-duotone-solid indent}
 * @preview ![indent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/indent.svg)
 */
const Indent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l448 0 0-64L0 32zM0 416l0 64 448 0 0-64L0 416zM192 160l0 64 256 0 0-64-256 0zm0 128l0 64 256 0 0-64-256 0z" />
        <path d="M128 256L0 352V160l128 96z" />
    </Icon>
);

export default Indent;