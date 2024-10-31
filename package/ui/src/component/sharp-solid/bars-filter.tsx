
import { Icon } from "../../index";

/**
 * A component that renders the `bars-filter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=sharp-solid bars-filter}
 * @preview ![bars-filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bars-filter.svg)
 */
const BarsFilter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64l448 0 0 64L0 128 0 64zM64 224l320 0 0 64L64 288l0-64zM288 384l0 64-128 0 0-64 128 0z" />
    </Icon>
);

export default BarsFilter;