
import { Icon, generic } from "../../index";

/**
 * A component that renders the `distribute-spacing-horizontal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-horizontal?s=sharp-duotone-solid distribute-spacing-horizontal}
 * @preview ![distribute-spacing-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/distribute-spacing-horizontal.svg)
 */
const DistributeSpacingHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 96l192 0 0 320-192 0 0-320z" />
        <path d="M80 0L32 0l0 512 48 0L80 0zM480 0L432 0l0 512 48 0L480 0z" />
    </Icon>
);

export default DistributeSpacingHorizontal;