
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-plus?s=sharp-duotone-solid bell-plus}
 * @preview ![bell-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bell-plus.svg)
 */
const BellPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 368l0 48 448 0 0-48-64-72 0-88c0-77.4-55-142-128-156.8L256 0 192 0l0 51.2C119 66 64 130.6 64 208l0 88L0 368zM136 216l24 0 40 0 0-40 0-24 48 0 0 24 0 40 40 0 24 0 0 48-24 0-40 0 0 40 0 24-48 0 0-24 0-40-40 0-24 0 0-48z" />
        <path d="M248 152l0 24 0 40 40 0 24 0 0 48-24 0-40 0 0 40 0 24-48 0 0-24 0-40-40 0-24 0 0-48 24 0 40 0 0-40 0-24 48 0zm40 296c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3l64 0 64 0z" />
    </Icon>
);

export default BellPlus;