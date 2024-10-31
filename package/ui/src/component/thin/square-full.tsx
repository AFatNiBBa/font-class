
import { Icon } from "../../index";

/**
 * A component that renders the `square-full` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-full?s=thin square-full}
 * @preview ![square-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-full.svg)
 */
const SquareFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 16l0 480L16 496 16 16l480 0zM16 0L0 0 0 16 0 496l0 16 16 0 480 0 16 0 0-16 0-480 0-16L496 0 16 0z" />
    </Icon>
);

export default SquareFull;