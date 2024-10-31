
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filter-list` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-list?s=sharp-duotone-solid filter-list}
 * @preview ![filter-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/filter-list.svg)
 */
const FilterList: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l0 64L112 256l0 128 128 96 0-224L352 128l0-64L0 64z" />
        <path d="M416 64l64 0 32 0 0 64-32 0-64 0-32 0 0-64 32 0zM320 224l32 0 128 0 32 0 0 64-32 0-128 0-32 0 0-64zm0 160l32 0 128 0 32 0 0 64-32 0-128 0-32 0 0-64z" />
    </Icon>
);

export default FilterList;