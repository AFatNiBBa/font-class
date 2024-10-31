
import { Icon } from "../../index";

/**
 * A component that renders the `distribute-spacing-vertical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-vertical?s=sharp-solid distribute-spacing-vertical}
 * @preview ![distribute-spacing-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/distribute-spacing-vertical.svg)
 */
const DistributeSpacingVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 48L0 80 0 32zM96 160l320 0 0 192L96 352l0-192zM512 432l0 48L0 480l0-48 512 0z" />
    </Icon>
);

export default DistributeSpacingVertical;