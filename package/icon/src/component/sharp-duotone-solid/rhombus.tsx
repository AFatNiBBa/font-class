
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=sharp-duotone-solid rhombus}
 * @preview ![rhombus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rhombus.svg)
 */
const Rhombus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 256L224 512 448 256 224 0 0 256z" />
    </Icon>
);

export default Rhombus;