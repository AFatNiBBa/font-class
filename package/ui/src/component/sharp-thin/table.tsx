
import { Icon } from "../../index";

/**
 * A component that renders the `table` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=sharp-thin table}
 * @preview ![table](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/table.svg)
 */
const Table: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l480 0 0 112L16 160 16 48zM248 176l0 128L16 304l0-128 232 0zm16 0l232 0 0 128-232 0 0-128zM248 320l0 144L16 464l0-144 232 0zm16 144l0-144 232 0 0 144-232 0zM0 464l0 16 16 0 480 0 16 0 0-16 0-416 0-16-16 0L16 32 0 32 0 48 0 464z" />
    </Icon>
);

export default Table;