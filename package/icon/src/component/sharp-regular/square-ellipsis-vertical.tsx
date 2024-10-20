
import { Icon } from "../../index";

/**
 * A component that renders the `square-ellipsis-vertical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis-vertical?s=sharp-regular square-ellipsis-vertical}
 * @preview ![square-ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-ellipsis-vertical.svg)
 */
const SquareEllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM192 320l64 0 0 64-64 0 0-64zm0-32l0-64 64 0 0 64-64 0zm0-160l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default SquareEllipsisVertical;