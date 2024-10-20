
import { Icon } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=sharp-solid box-archive}
 * @preview ![box-archive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/box-archive.svg)
 */
const BoxArchive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32l0 96L0 128 0 32l512 0zM32 160l448 0 0 320L32 480l0-320zm128 64l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0z" />
    </Icon>
);

export default BoxArchive;