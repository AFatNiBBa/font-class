
import { Icon } from "../../index";

/**
 * A component that renders the `trowel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel?s=sharp-solid trowel}
 * @preview ![trowel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trowel.svg)
 */
const Trowel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M376 232l-25.4-25.4-112 112L320 400l-40 40L0 512 72 232l40-40 81.4 81.4 112-112L280 136 416 0l96 96L376 232z" />
    </Icon>
);

export default Trowel;