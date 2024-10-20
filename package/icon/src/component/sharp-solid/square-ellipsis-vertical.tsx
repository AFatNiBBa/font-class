
import { Icon } from "../../index";

/**
 * A component that renders the `square-ellipsis-vertical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis-vertical?s=sharp-solid square-ellipsis-vertical}
 * @preview ![square-ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-ellipsis-vertical.svg)
 */
const SquareEllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM256 192l-64 0 0-64 64 0 0 64zm0 32l0 64-64 0 0-64 64 0zm0 160l-64 0 0-64 64 0 0 64z" />
    </Icon>
);

export default SquareEllipsisVertical;