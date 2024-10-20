
import { Icon } from "../../index";

/**
 * A component that renders the `table-list` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-list?s=thin table-list}
 * @preview ![table-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/table-list.svg)
 */
const TableList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 48l0 128 336 0 0-80c0-26.5-21.5-48-48-48L160 48zm-16 0L64 48C37.5 48 16 69.5 16 96l0 80 128 0 0-128zM16 192l0 128 128 0 0-128L16 192zm0 144l0 80c0 26.5 21.5 48 48 48l80 0 0-128L16 336zM160 464l288 0c26.5 0 48-21.5 48-48l0-80-336 0 0 128zM496 320l0-128-336 0 0 128 336 0zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default TableList;