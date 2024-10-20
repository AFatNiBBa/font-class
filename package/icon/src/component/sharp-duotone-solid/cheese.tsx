
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cheese` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=sharp-duotone-solid cheese}
 * @preview ![cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cheese.svg)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256l512 0C512 132.3 411.7 32 288 32L0 256z" />
        <path d="M0 256H512V480H0V256z" />
    </Icon>
);

export default Cheese;