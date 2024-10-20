
import { Icon } from "../../index";

/**
 * A component that renders the `table-list` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-list?s=light table-list}
 * @preview ![table-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/table-list.svg)
 */
const TableList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 64l0 96 288 0 0-64c0-17.7-14.3-32-32-32L192 64zm-32 0L64 64C46.3 64 32 78.3 32 96l0 64 128 0 0-96zM32 192l0 128 128 0 0-128L32 192zm0 160l0 64c0 17.7 14.3 32 32 32l96 0 0-96L32 352zm160 96l256 0c17.7 0 32-14.3 32-32l0-64-288 0 0 96zM480 320l0-128-288 0 0 128 288 0zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default TableList;