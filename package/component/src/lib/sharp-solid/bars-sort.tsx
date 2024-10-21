
import { Icon } from "../../index";

/**
 * A component that renders the `bars-sort` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-sort?s=sharp-solid bars-sort}
 * @preview ![bars-sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bars-sort.svg)
 */
const BarsSort: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64l448 0 0 64L0 128 0 64zM0 224l320 0 0 64L0 288l0-64zM192 384l0 64L0 448l0-64 192 0z" />
    </Icon>
);

export default BarsSort;