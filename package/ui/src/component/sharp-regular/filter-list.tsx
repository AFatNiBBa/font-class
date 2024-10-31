
import { Icon } from "../../index";

/**
 * A component that renders the `filter-list` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-list?s=sharp-regular filter-list}
 * @preview ![filter-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/filter-list.svg)
 */
const FilterList: typeof Icon = x => (
    <Icon {...x}>
        <path d="M152 232l0-19.9-14.1-14.1L51.9 112l248.2 0-86.1 86.1L200 212.1l0 19.9 0 130.4-48-29.3L152 232zM0 64l0 48 0 16L104 232l0 128 96 58.7L248 448l0-56.3L248 232 352 128l0-16 0-48-48 0L48 64 0 64zm384 8l0 48 24 0 80 0 24 0 0-48-24 0-80 0-24 0zM344 232l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0zm0 160l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default FilterList;