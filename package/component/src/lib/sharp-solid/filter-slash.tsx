
import { Icon } from "../../index";

/**
 * A component that renders the `filter-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-slash?s=sharp-solid filter-slash}
 * @preview ![filter-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/filter-slash.svg)
 */
const FilterSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L407 293.2 576 96l0-64L70.5 32 48.4 14.8zM384 398.5L256 297.7 256 416l128 96 0-113.5z" />
    </Icon>
);

export default FilterSlash;