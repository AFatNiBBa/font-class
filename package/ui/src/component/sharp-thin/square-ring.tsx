
import { Icon } from "../../index";

/**
 * A component that renders the `square-ring` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ring?s=sharp-thin square-ring}
 * @preview ![square-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-ring.svg)
 */
const SquareRing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 416L16 464 16 48l416 0zM16 32L0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32zm208 80a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 304a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM144 256a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm176 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </Icon>
);

export default SquareRing;