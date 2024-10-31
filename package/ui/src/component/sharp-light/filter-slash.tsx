
import { Icon } from "../../index";

/**
 * A component that renders the `filter-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-slash?s=sharp-light filter-slash}
 * @preview ![filter-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/filter-slash.svg)
 */
const FilterSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18zM576 96l0-32 0-32-32 0L139.6 32l40.5 32L544 64l0 20.2L407.4 243.5l25.1 19.8L576 96zM352 362.8l0 78.7-64-56 0-73.2L256 287l0 113 96 84 32 28 0-42.5 0-81.4-32-25.3z" />
    </Icon>
);

export default FilterSlash;