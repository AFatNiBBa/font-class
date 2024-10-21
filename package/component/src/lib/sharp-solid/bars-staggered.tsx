
import { Icon } from "../../index";

/**
 * A component that renders the `bars-staggered` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=sharp-solid bars-staggered}
 * @preview ![bars-staggered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bars-staggered.svg)
 */
const BarsStaggered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l448 0 0 64L0 128 0 64zM64 224l448 0 0 64L64 288l0-64zM448 384l0 64L0 448l0-64 448 0z" />
    </Icon>
);

export default BarsStaggered;