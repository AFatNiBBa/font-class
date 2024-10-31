
import { Icon } from "../../index";

/**
 * A component that renders the `filter-list` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-list?s=sharp-solid filter-list}
 * @preview ![filter-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/filter-list.svg)
 */
const FilterList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 256l0 128 128 96 0-224L352 128l0-64L0 64l0 64L112 256zM352 384l-32 0 0 64 32 0 128 0 32 0 0-64-32 0-128 0zM320 224l0 64 32 0 128 0 32 0 0-64-32 0-128 0-32 0zM416 64l-32 0 0 64 32 0 64 0 32 0 0-64-32 0-64 0z" />
    </Icon>
);

export default FilterList;