
import { Icon } from "../../index";

/**
 * A component that renders the `bars-sort` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-sort?s=sharp-duotone-solid bars-sort}
 * @preview ![bars-sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bars-sort.svg)
 */
const BarsSort: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 64L0 64l0 64 448 0 0-64zM192 384L0 384l0 64 192 0 0-64z" />
    </Icon>
);

export default BarsSort;