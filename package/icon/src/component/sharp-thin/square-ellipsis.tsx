
import { Icon } from "../../index";

/**
 * A component that renders the `square-ellipsis` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis?s=sharp-thin square-ellipsis}
 * @preview ![square-ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-ellipsis.svg)
 */
const SquareEllipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48L16 48l0 416 416 0 0-416zm16-16l0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 416 0 16 0zM144 240l0 32-32 0 0-32 32 0zm64 0l32 0 0 32-32 0 0-32zm128 0l0 32-32 0 0-32 32 0z" />
    </Icon>
);

export default SquareEllipsis;