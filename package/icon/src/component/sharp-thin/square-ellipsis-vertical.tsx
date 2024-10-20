
import { Icon } from "../../index";

/**
 * A component that renders the `square-ellipsis-vertical` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis-vertical?s=sharp-thin square-ellipsis-vertical}
 * @preview ![square-ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-ellipsis-vertical.svg)
 */
const SquareEllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM208 336l32 0 0 32-32 0 0-32zm0-64l0-32 32 0 0 32-32 0zm0-128l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default SquareEllipsisVertical;