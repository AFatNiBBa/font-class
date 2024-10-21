
import { Icon } from "../../index";

/**
 * A component that renders the `bars-staggered` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=sharp-regular bars-staggered}
 * @preview ![bars-staggered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bars-staggered.svg)
 */
const BarsStaggered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l448 0 0 48L0 112 0 64zM64 224l448 0 0 48L64 272l0-48zM448 384l0 48L0 432l0-48 448 0z" />
    </Icon>
);

export default BarsStaggered;