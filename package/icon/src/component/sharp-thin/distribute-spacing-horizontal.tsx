
import { Icon } from "../../index";

/**
 * A component that renders the `distribute-spacing-horizontal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-horizontal?s=sharp-thin distribute-spacing-horizontal}
 * @preview ![distribute-spacing-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/distribute-spacing-horizontal.svg)
 */
const DistributeSpacingHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 512l16 0L48 0 32 0l0 512zM144 112l224 0 0 288-224 0 0-288zM128 400l0 16 16 0 224 0 16 0 0-16 0-288 0-16-16 0L144 96l-16 0 0 16 0 288zM464 0l0 512 16 0L480 0 464 0z" />
    </Icon>
);

export default DistributeSpacingHorizontal;