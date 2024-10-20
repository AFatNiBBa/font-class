
import { Icon } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=sharp-regular box-archive}
 * @preview ![box-archive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/box-archive.svg)
 */
const BoxArchive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 80L48 80l0 48 32 0 352 0 32 0 0-48zm16 96l-16 0-32 0L80 176l-32 0-16 0L0 176l0-48L0 80 0 32l48 0 416 0 48 0 0 48 0 48 0 48-32 0zM160 224l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48zm272-16l48 0 0 224 0 48-48 0L80 480l-48 0 0-48 0-224 48 0 0 224 352 0 0-224z" />
    </Icon>
);

export default BoxArchive;