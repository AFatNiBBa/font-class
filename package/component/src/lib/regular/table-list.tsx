
import { Icon } from "../../index";

/**
 * A component that renders the `table-list` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table-list?s=regular table-list}
 * @preview ![table-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/table-list.svg)
 */
const TableList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 80l0 88 272 0 0-72c0-8.8-7.2-16-16-16L192 80zm-48 0L64 80c-8.8 0-16 7.2-16 16l0 72 96 0 0-88zM48 216l0 80 96 0 0-80-96 0zm0 128l0 72c0 8.8 7.2 16 16 16l80 0 0-88-96 0zm144 88l256 0c8.8 0 16-7.2 16-16l0-72-272 0 0 88zM464 296l0-80-272 0 0 80 272 0zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default TableList;