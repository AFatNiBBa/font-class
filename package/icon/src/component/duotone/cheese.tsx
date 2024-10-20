
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cheese` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=duotone cheese}
 * @preview ![cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cheese.svg)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7C418.8 32 512 125.2 512 240.2l0 15.8L0 256z" />
        <path d="M0 256H512V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256z" />
    </Icon>
);

export default Cheese;