
import { Icon } from "../../index";

/**
 * A component that renders the `table-list` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-list?s=sharp-light table-list}
 * @preview ![table-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/table-list.svg)
 */
const TableList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 64l0 96 288 0 0-96L192 64zm-32 0L32 64l0 96 128 0 0-96zM32 192l0 128 128 0 0-128L32 192zm0 160l0 96 128 0 0-96L32 352zm160 96l288 0 0-96-288 0 0 96zM480 320l0-128-288 0 0 128 288 0zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default TableList;