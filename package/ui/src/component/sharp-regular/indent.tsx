
import { Icon } from "../../index";

/**
 * A component that renders the `indent` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=sharp-regular indent}
 * @preview ![indent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/indent.svg)
 */
const Indent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 40L0 88l24 0 400 0 24 0 0-48-24 0L24 40 0 40zM192 168l0 48 24 0 208 0 24 0 0-48-24 0-208 0-24 0zm24 128l-24 0 0 48 24 0 208 0 24 0 0-48-24 0-208 0zM0 424l0 48 24 0 400 0 24 0 0-48-24 0L24 424 0 424zm0-72l128-96L0 160 0 352z" />
    </Icon>
);

export default Indent;