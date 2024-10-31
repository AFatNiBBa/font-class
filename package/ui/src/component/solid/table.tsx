
import { Icon } from "../../index";

/**
 * A component that renders the `table` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=solid table}
 * @preview ![table](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/table.svg)
 */
const Table: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 256l0-96 160 0 0 96L64 256zm0 64l160 0 0 96L64 416l0-96zm224 96l0-96 160 0 0 96-160 0zM448 256l-160 0 0-96 160 0 0 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default Table;