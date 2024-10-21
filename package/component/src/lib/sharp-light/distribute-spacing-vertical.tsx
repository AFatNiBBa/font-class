
import { Icon } from "../../index";

/**
 * A component that renders the `distribute-spacing-vertical` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-vertical?s=sharp-light distribute-spacing-vertical}
 * @preview ![distribute-spacing-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/distribute-spacing-vertical.svg)
 */
const DistributeSpacingVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480l0-32L0 448l0 32 512 0zM128 320l0-128 256 0 0 128-256 0zm256 32l32 0 0-32 0-128 0-32-32 0-256 0-32 0 0 32 0 128 0 32 32 0 256 0zM0 64l512 0 0-32L0 32 0 64z" />
    </Icon>
);

export default DistributeSpacingVertical;