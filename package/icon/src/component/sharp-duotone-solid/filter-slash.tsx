
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filter-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-slash?s=sharp-duotone-solid filter-slash}
 * @preview ![filter-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/filter-slash.svg)
 */
const FilterSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M70.5 32L576 32l0 64L407 293.2C294.8 206.1 182.7 119.1 70.5 32zM256 297.7L384 398.5 384 512 256 416l0-118.3z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default FilterSlash;