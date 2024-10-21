
import { Icon } from "../../index";

/**
 * A component that renders the `square-ellipsis-vertical` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis-vertical?s=sharp-light square-ellipsis-vertical}
 * @preview ![square-ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-ellipsis-vertical.svg)
 */
const SquareEllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM200 328l48 0 0 48-48 0 0-48zm0-48l0-48 48 0 0 48-48 0zm0-144l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default SquareEllipsisVertical;