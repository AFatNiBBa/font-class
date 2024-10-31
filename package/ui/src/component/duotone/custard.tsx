
import { Icon, generic } from "../../index";

/**
 * A component that renders the `custard` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/custard?s=duotone custard}
 * @preview ![custard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/custard.svg)
 */
const Custard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64.2 350.9L512 352 476.7 193.3C453.9 184.9 424 176 400 176c-22.7 0-39.4 8-56 16s-33.3 16-56 16s-39.4-8-56-16s-33.3-16-56-16c-24 0-53.9 8.9-76.7 17.3c-11.7 52.5-23.3 105-35 157.5z" />
        <path d="M396.7 64L179.3 64c-30 0-56 20.8-62.5 50.1L99.3 193.3C122.1 184.9 152 176 176 176c22.7 0 39.4 8 56 16s33.3 16 56 16s39.4-8 56-16s33.3-16 56-16c24 0 53.9 8.9 76.7 17.3l-17.6-79.2C452.6 84.8 426.7 64 396.7 64zM32 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 384z" />
    </Icon>
);

export default Custard;