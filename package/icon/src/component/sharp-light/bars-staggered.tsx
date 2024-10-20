
import { Icon } from "../../index";

/**
 * A component that renders the `bars-staggered` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=sharp-light bars-staggered}
 * @preview ![bars-staggered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bars-staggered.svg)
 */
const BarsStaggered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l448 0 0 32L0 96 0 64zM64 224l448 0 0 32L64 256l0-32zM448 384l0 32L0 416l0-32 448 0z" />
    </Icon>
);

export default BarsStaggered;