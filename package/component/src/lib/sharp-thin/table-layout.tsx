
import { Icon } from "../../index";

/**
 * A component that renders the `table-layout` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-layout?s=sharp-thin table-layout}
 * @preview ![table-layout](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/table-layout.svg)
 */
const TableLayout: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l480 0 0 112L16 160 16 48zm0 416l0-288 128 0 0 288L16 464zm144 0l0-288 336 0 0 288-336 0zM0 464l0 16 16 0 480 0 16 0 0-16 0-416 0-16-16 0L16 32 0 32 0 48 0 464z" />
    </Icon>
);

export default TableLayout;