
import { Icon } from "../../index";

/**
 * A component that renders the `bars-filter` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=regular bars-filter}
 * @preview ![bars-filter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bars-filter.svg)
 */
const BarsFilter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 88C0 74.7 10.7 64 24 64l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 112C10.7 112 0 101.3 0 88zM64 248c0-13.3 10.7-24 24-24l272 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 272c-13.3 0-24-10.7-24-24zM288 408c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c13.3 0 24 10.7 24 24z" />
    </Icon>
);

export default BarsFilter;