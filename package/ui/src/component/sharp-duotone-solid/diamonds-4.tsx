
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamonds-4` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamonds-4?s=sharp-duotone-solid diamonds-4}
 * @preview ![diamonds-4](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diamonds-4.svg)
 */
const Diamonds_4: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M139.3 116.7L256 0 372.7 116.7 256 233.4 139.3 116.7zm0 278.6L256 278.6 372.7 395.3 256 512 139.3 395.3z" />
        <path d="M116.7 139.3L0 256 116.7 372.7 233.4 256 116.7 139.3zm278.6 0L278.6 256 395.3 372.7 512 256 395.3 139.3z" />
    </Icon>
);

export default Diamonds_4;