
import { Icon } from "../../index";

/**
 * A component that renders the `square-list` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-list?s=sharp-light square-list}
 * @preview ![square-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-list.svg)
 */
const SquareList: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM104 160a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88-16l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 96l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm0 96l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32zm-64-56a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm-24 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default SquareList;