
import { Icon } from "../../index";

/**
 * A component that renders the `bars-filter` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=sharp-light bars-filter}
 * @preview ![bars-filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bars-filter.svg)
 */
const BarsFilter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64l448 0 0 32L0 96 0 64zM64 224l320 0 0 32L64 256l0-32zM288 384l0 32-128 0 0-32 128 0z" />
    </Icon>
);

export default BarsFilter;