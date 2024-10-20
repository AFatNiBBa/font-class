
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-chef` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-chef?s=sharp-duotone-solid hat-chef}
 * @preview ![hat-chef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hat-chef.svg)
 */
const HatChef: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 127.2c0 11.1 1.9 22.1 5.7 32.5L64 320l74.2 0-26-149.3L109.5 155l31.5-5.5 2.7 15.8L170.7 320l69.3 0 0-160 0-16 32 0 0 16 0 160 69.3 0 26.9-154.7 2.7-15.8 31.5 5.5-2.7 15.8L373.8 320l74.2 0 58.3-160.2c3.8-10.4 5.7-21.4 5.7-32.5C512 74.6 469 32 416.4 32c-21.7 0-41.8 7.2-57.9 19.3C335.1 20.2 297.9 0 256 0s-79.1 20.2-102.5 51.3C137.4 39.2 117.3 32 95.6 32C43 32 0 74.6 0 127.2z" />
        <path d="M64 320H448V512H64V320z" />
    </Icon>
);

export default HatChef;