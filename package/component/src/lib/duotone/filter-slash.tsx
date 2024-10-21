
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filter-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-slash?s=duotone filter-slash}
 * @preview ![filter-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/filter-slash.svg)
 */
const FilterSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M81.7 38.8L406.6 293.4 567 97.3c9.8-12 11.8-28.5 5.2-42.5S551.5 32 536 32L104 32c-8.1 0-15.8 2.4-22.3 6.8zM202.5 255.5L256 320.9l0 79.1c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3s17.7-16.5 17.7-28.6l0-49.5-181.5-143z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default FilterSlash;