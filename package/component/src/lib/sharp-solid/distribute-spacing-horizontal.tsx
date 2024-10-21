
import { Icon } from "../../index";

/**
 * A component that renders the `distribute-spacing-horizontal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-horizontal?s=sharp-solid distribute-spacing-horizontal}
 * @preview ![distribute-spacing-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/distribute-spacing-horizontal.svg)
 */
const DistributeSpacingHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0L80 0l0 512-48 0L32 0zM160 96l192 0 0 320-192 0 0-320zM480 0l0 512-48 0L432 0l48 0z" />
    </Icon>
);

export default DistributeSpacingHorizontal;