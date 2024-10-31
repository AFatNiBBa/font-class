
import { Icon } from "../../index";

/**
 * A component that renders the `fence` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fence?s=sharp-solid fence}
 * @preview ![fence](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fence.svg)
 */
const Fence: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32L0 96 0 480l128 0 0-64 32 0 0-64-32 0 0-128 32 0 0-64-32 0 0-64L64 32zM320 352l0-128 32 0 0-64-32 0 0-64L256 32 192 96l0 384 128 0 0-64 32 0 0-64-32 0zM448 32L384 96l0 384 128 0 0-384L448 32z" />
    </Icon>
);

export default Fence;