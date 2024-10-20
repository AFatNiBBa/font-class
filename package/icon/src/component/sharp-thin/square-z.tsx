
import { Icon } from "../../index";

/**
 * A component that renders the `square-z` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-z?s=sharp-thin square-z}
 * @preview ![square-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-z.svg)
 */
const SquareZ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm320 96l8 0 0 10.8-1.8 2.2L144.6 368 320 368l8 0 0 16-8 0-192 0-8 0 0-10.8 1.8-2.2L303.4 144 128 144l-8 0 0-16 8 0 192 0z" />
    </Icon>
);

export default SquareZ;