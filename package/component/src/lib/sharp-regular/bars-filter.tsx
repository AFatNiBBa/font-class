
import { Icon } from "../../index";

/**
 * A component that renders the `bars-filter` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=sharp-regular bars-filter}
 * @preview ![bars-filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bars-filter.svg)
 */
const BarsFilter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64l448 0 0 48L0 112 0 64zM64 224l320 0 0 48L64 272l0-48zM288 384l0 48-128 0 0-48 128 0z" />
    </Icon>
);

export default BarsFilter;