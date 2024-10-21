
import { Icon } from "../../index";

/**
 * A component that renders the `bars-sort` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-sort?s=sharp-light bars-sort}
 * @preview ![bars-sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bars-sort.svg)
 */
const BarsSort: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64l448 0 0 32L0 96 0 64zM0 224l320 0 0 32L0 256l0-32zM192 384l0 32L0 416l0-32 192 0z" />
    </Icon>
);

export default BarsSort;