
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bars-filter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=sharp-duotone-solid bars-filter}
 * @preview ![bars-filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bars-filter.svg)
 */
const BarsFilter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 224l320 0 0 64L64 288l0-64z" />
        <path d="M448 64L0 64l0 64 448 0 0-64zM288 384l-128 0 0 64 128 0 0-64z" />
    </Icon>
);

export default BarsFilter;