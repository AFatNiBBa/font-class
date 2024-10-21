
import { Icon } from "../../index";

/**
 * A component that renders the `distribute-spacing-vertical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-vertical?s=sharp-regular distribute-spacing-vertical}
 * @preview ![distribute-spacing-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/distribute-spacing-vertical.svg)
 */
const DistributeSpacingVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32L0 80l512 0 0-48L0 32zM368 208l0 96-224 0 0-96 224 0zM144 160l-48 0 0 48 0 96 0 48 48 0 224 0 48 0 0-48 0-96 0-48-48 0-224 0zM512 432L0 432l0 48 512 0 0-48z" />
    </Icon>
);

export default DistributeSpacingVertical;