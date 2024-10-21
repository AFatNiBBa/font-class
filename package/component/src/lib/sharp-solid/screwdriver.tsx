
import { Icon } from "../../index";

/**
 * A component that renders the `screwdriver` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=sharp-solid screwdriver}
 * @preview ![screwdriver](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/screwdriver.svg)
 */
const Screwdriver: typeof Icon = x => (
    <Icon {...x}>
        <path d="M353.9 192l62.1 0L512 64 448 0 320 96l0 62.1-82.3 82.3 33.9 33.9L353.9 192zM0 416l96 96L280 328l-96-96L0 416z" />
    </Icon>
);

export default Screwdriver;