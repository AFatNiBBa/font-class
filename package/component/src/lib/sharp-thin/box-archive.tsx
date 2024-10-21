
import { Icon } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=sharp-thin box-archive}
 * @preview ![box-archive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/box-archive.svg)
 */
const BoxArchive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 48L16 48l0 80 16 0 16 0 416 0 16 0 16 0 0-80zm-16 96l-16 0L48 144l-16 0-16 0L0 144l0-16L0 48 0 32l16 0 480 0 16 0 0 16 0 80 0 16-16 0-16 0zM160 224l8 0 176 0 8 0 0 16-8 0-176 0-8 0 0-16zm304-48l16 0 0 288 0 16-16 0L48 480l-16 0 0-16 0-288 16 0 0 288 416 0 0-288z" />
    </Icon>
);

export default BoxArchive;