
import { Icon, generic } from "../../index";

/**
 * A component that renders the `caret-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-down?s=sharp-duotone-solid caret-down}
 * @preview ![caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/caret-down.svg)
 */
const CaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M160 384L0 240l0-48 320 0 0 48L160 384z" />
    </Icon>
);

export default CaretDown;