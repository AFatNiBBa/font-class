
import { Icon } from "../../index";

/**
 * A component that renders the `table` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=sharp-regular table}
 * @preview ![table](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/table.svg)
 */
const Table: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 264l0-104 184 0 0 104L48 264zm0 48l184 0 0 120L48 432l0-120zM280 432l0-120 184 0 0 120-184 0zM464 264l-184 0 0-104 184 0 0 104zM48 32L0 32 0 80 0 432l0 48 48 0 416 0 48 0 0-48 0-352 0-48-48 0L48 32z" />
    </Icon>
);

export default Table;