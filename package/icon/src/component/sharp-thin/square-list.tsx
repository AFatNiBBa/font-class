
import { Icon } from "../../index";

/**
 * A component that renders the `square-list` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-list?s=sharp-thin square-list}
 * @preview ![square-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-list.svg)
 */
const SquareList: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 416L16 464 16 48l416 0zM16 32L0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32zM160 152l0 16 8 0 192 0 8 0 0-16-8 0-192 0-8 0zm0 96l0 16 8 0 192 0 8 0 0-16-8 0-192 0-8 0zm0 96l0 16 8 0 192 0 8 0 0-16-8 0-192 0-8 0zM96 144a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm16 112a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM96 336a16 16 0 1 0 0 32 16 16 0 1 0 0-32z" />
    </Icon>
);

export default SquareList;