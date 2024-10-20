
import { Icon } from "../../index";

/**
 * A component that renders the `knife` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife?s=sharp-solid knife}
 * @preview ![knife](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/knife.svg)
 */
const Knife: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 146.7L466.7 0s45.3 40 45.3 104c0 73.2-68 140.8-164.3 236.4c-9 8.9-18.3 18.1-27.7 27.6l-65.4-65.4s0 0 0 0l-184 184L48 509.3 2.7 464l22.6-22.6 272-272L320 146.7s0 0 0 0z" />
    </Icon>
);

export default Knife;