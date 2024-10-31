
import { Icon } from "../../index";

/**
 * A component that renders the `bars-staggered` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=sharp-thin bars-staggered}
 * @preview ![bars-staggered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bars-staggered.svg)
 */
const BarsStaggered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 80l448 0 0 16L0 96 0 80zM64 240l448 0 0 16L64 256l0-16zM448 400l0 16L0 416l0-16 448 0z" />
    </Icon>
);

export default BarsStaggered;