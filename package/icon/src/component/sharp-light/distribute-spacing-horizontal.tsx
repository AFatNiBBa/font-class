
import { Icon } from "../../index";

/**
 * A component that renders the `distribute-spacing-horizontal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-horizontal?s=sharp-light distribute-spacing-horizontal}
 * @preview ![distribute-spacing-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/distribute-spacing-horizontal.svg)
 */
const DistributeSpacingHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 0L448 0l0 512 32 0L480 0zM320 384l-128 0 0-256 128 0 0 256zm32-256l0-32-32 0L192 96l-32 0 0 32 0 256 0 32 32 0 128 0 32 0 0-32 0-256zM64 512L64 0 32 0l0 512 32 0z" />
    </Icon>
);

export default DistributeSpacingHorizontal;