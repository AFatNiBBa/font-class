
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=sharp-duotone-solid rectangle}
 * @preview ![rectangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rectangle.svg)
 */
const Rectangle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64H512V448H0V64z" />
    </Icon>
);

export default Rectangle;