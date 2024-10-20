
import { Icon } from "../../index";

/**
 * A component that renders the `filter-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-slash?s=sharp-regular filter-slash}
 * @preview ![filter-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/filter-slash.svg)
 */
const FilterSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L408.3 294.2 576 96l0-16 0-48-48 0L112 32 70.5 32 48.4 14.8zm84 65.2l394.3 0L370.3 264.7 132.4 80zM400 411.2l-48-37.8 0 38.8-64-51.2 0-38-48-37.8 0 98.9 112 89.6L400 512l0-61.5 0-39.4z" />
    </Icon>
);

export default FilterSlash;