
import { Icon } from "../../index";

/**
 * A component that renders the `fence` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fence?s=sharp-regular fence}
 * @preview ![fence](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/fence.svg)
 */
const Fence: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 115.9l16-16 16 16L80 432l-32 0 0-316.1zM30.1 65.9L0 96 0 432l0 48 48 0 32 0 48 0 0-48 0-32 64 0 0 32 0 48 48 0 32 0 48 0 0-48 0-32 64 0 0 32 0 48 48 0 32 0 48 0 0-48 0-336L481.9 65.9 448 32 414.1 65.9 384 96l0 64-64 0 0-64L289.9 65.9 256 32 222.1 65.9 192 96l0 64-64 0 0-64L97.9 65.9 64 32 30.1 65.9zM384 352l-64 0 0-144 64 0 0 144zm-192 0l-64 0 0-144 64 0 0 144zm48-236.1l16-16 16 16L272 432l-32 0 0-316.1zM432 432l0-316.1 16-16 16 16L464 432l-32 0z" />
    </Icon>
);

export default Fence;