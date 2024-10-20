
import { Icon } from "../../index";

/**
 * A component that renders the `indent` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=sharp-solid indent}
 * @preview ![indent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/indent.svg)
 */
const Indent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 64L0 96 0 32zM192 160l256 0 0 64-256 0 0-64zM448 288l0 64-256 0 0-64 256 0zM0 416l448 0 0 64L0 480l0-64zm0-64L0 160l128 96L0 352z" />
    </Icon>
);

export default Indent;