
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-list` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-list?s=sharp-duotone-solid square-list}
 * @preview ![square-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-list.svg)
 */
const SquareList: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zm64 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zm0 96l0 64 64 0 0-64-64 0zM168 136l0 48 24 0 160 0 24 0 0-48-24 0-160 0-24 0zm0 96l0 48 24 0 160 0 24 0 0-48-24 0-160 0-24 0zm0 96l0 48 24 0 160 0 24 0 0-48-24 0-160 0-24 0z" />
        <path d="M168 136l24 0 160 0 24 0 0 48-24 0-160 0-24 0 0-48zm0 192l24 0 160 0 24 0 0 48-24 0-160 0-24 0 0-48zm24-96l160 0 24 0 0 48-24 0-160 0-24 0 0-48 24 0z" />
    </Icon>
);

export default SquareList;