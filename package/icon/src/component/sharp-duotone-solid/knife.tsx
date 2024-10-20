
import { Icon, generic } from "../../index";

/**
 * A component that renders the `knife` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife?s=sharp-duotone-solid knife}
 * @preview ![knife](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/knife.svg)
 */
const Knife: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M209.4 257.4c15.1 15.1 30.2 30.2 45.3 45.3c21.8 21.8 43.6 43.6 65.4 65.4C430.6 257.4 512 184 512 104C512 40 466.7 0 466.7 0L320 146.7c-36.9 36.9-73.8 73.8-110.6 110.6z" />
        <path d="M320 146.7a0 0 0 1 1 0 0 0 0 0 1 1 0 0zM209.4 257.4l45.3 45.3-184 184L48 509.3 2.7 464l22.6-22.6 184-184z" />
    </Icon>
);

export default Knife;