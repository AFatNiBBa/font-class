
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screwdriver` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=sharp-duotone-solid screwdriver}
 * @preview ![screwdriver](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/screwdriver.svg)
 */
const Screwdriver: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M215 263L249 297l105-105 62.1 0L512 64 448 0 320 96l0 62.1L215 263z" />
        <path d="M0 416l96 96L280 328l-96-96L0 416z" />
    </Icon>
);

export default Screwdriver;