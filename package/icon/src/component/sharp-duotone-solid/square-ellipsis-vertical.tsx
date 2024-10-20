
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-ellipsis-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ellipsis-vertical?s=sharp-duotone-solid square-ellipsis-vertical}
 * @preview ![square-ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-ellipsis-vertical.svg)
 */
const SquareEllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm192 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M256 128l0 64-64 0 0-64 64 0zm0 96l0 64-64 0 0-64 64 0zm0 160l-64 0 0-64 64 0 0 64z" />
    </Icon>
);

export default SquareEllipsisVertical;