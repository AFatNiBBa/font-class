
import { Icon } from "../../index";

/**
 * A component that renders the `bars-filter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=sharp-thin bars-filter}
 * @preview ![bars-filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bars-filter.svg)
 */
const BarsFilter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 80l448 0 0 16L0 96 0 80zM64 240l320 0 0 16L64 256l0-16zM288 400l0 16-128 0 0-16 128 0z" />
    </Icon>
);

export default BarsFilter;