
import { Icon, generic } from "../../index";

/**
 * A component that renders the `distribute-spacing-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-vertical?s=sharp-duotone-solid distribute-spacing-vertical}
 * @preview ![distribute-spacing-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/distribute-spacing-vertical.svg)
 */
const DistributeSpacingVertical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 160l320 0 0 192L96 352l0-192z" />
        <path d="M512 32L0 32 0 80l512 0 0-48zm0 400L0 432l0 48 512 0 0-48z" />
    </Icon>
);

export default DistributeSpacingVertical;