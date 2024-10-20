
import { Icon } from "../../index";

/**
 * A component that renders the `distribute-spacing-vertical` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-vertical?s=sharp-thin distribute-spacing-vertical}
 * @preview ![distribute-spacing-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/distribute-spacing-vertical.svg)
 */
const DistributeSpacingVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480l0-16L0 464l0 16 512 0zM112 368l0-224 288 0 0 224-288 0zm288 16l16 0 0-16 0-224 0-16-16 0-288 0-16 0 0 16 0 224 0 16 16 0 288 0zM0 48l512 0 0-16L0 32 0 48z" />
    </Icon>
);

export default DistributeSpacingVertical;