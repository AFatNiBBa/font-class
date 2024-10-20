
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=sharp-duotone-solid cowbell}
 * @preview ![cowbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cowbell.svg)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 448l160 0 128 0 160 0L384 96l-64 0 0-72 0-24L296 0 152 0 128 0l0 24 0 72L64 96 0 448zM176 48l96 0 0 48-96 0 0-48z" />
        <path d="M224 512c35.3 0 64-28.7 64-64H160c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default Cowbell;