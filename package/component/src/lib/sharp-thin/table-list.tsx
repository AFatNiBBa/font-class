
import { Icon } from "../../index";

/**
 * A component that renders the `table-list` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-list?s=sharp-thin table-list}
 * @preview ![table-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/table-list.svg)
 */
const TableList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 48l0 128 336 0 0-128L160 48zm-16 0L16 48l0 128 128 0 0-128zM16 192l0 128 128 0 0-128L16 192zm0 144l0 128 128 0 0-128L16 336zM160 464l336 0 0-128-336 0 0 128zM496 320l0-128-336 0 0 128 336 0zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32z" />
    </Icon>
);

export default TableList;