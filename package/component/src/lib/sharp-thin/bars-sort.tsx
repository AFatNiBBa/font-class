
import { Icon } from "../../index";

/**
 * A component that renders the `bars-sort` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-sort?s=sharp-thin bars-sort}
 * @preview ![bars-sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bars-sort.svg)
 */
const BarsSort: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 80l448 0 0 16L0 96 0 80zM0 240l320 0 0 16L0 256l0-16zM192 400l0 16L0 416l0-16 192 0z" />
    </Icon>
);

export default BarsSort;