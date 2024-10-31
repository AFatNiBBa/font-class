
import { Icon } from "../../index";

/**
 * A component that renders the `bars-sort` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-sort?s=sharp-regular bars-sort}
 * @preview ![bars-sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bars-sort.svg)
 */
const BarsSort: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64l448 0 0 48L0 112 0 64zM0 224l320 0 0 48L0 272l0-48zM192 384l0 48L0 432l0-48 192 0z" />
    </Icon>
);

export default BarsSort;