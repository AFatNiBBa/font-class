
import { Icon } from "../../index";

/**
 * A component that renders the `spinner` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=sharp-solid spinner}
 * @preview ![spinner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/spinner.svg)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 0l0 96 96 0 0-96L208 0zM0 208l0 96 96 0 0-96L0 208zM208 512l96 0 0-96-96 0 0 96zM512 208l-96 0 0 96 96 0 0-96zM41 403.1L108.9 471l67.9-67.9-67.9-67.9L41 403.1zm362 67.9L471 403.1l-67.9-67.9-67.9 67.9L403.1 471zM41 108.9l67.9 67.9 67.9-67.9L108.9 41 41 108.9z" />
    </Icon>
);

export default Spinner;