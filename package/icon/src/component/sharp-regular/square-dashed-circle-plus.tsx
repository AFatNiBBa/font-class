
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed-circle-plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed-circle-plus?s=sharp-regular square-dashed-circle-plus}
 * @preview ![square-dashed-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-dashed-circle-plus.svg)
 */
const SquareDashedCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 32L0 32 0 56 0 160l48 0 0-80 80 0 0-48L24 32zM0 192L0 320l48 0 0-128L0 192zM0 352L0 456l0 24 24 0 104 0 0-48-80 0 0-80L0 352zM400 80l0 112 48 0 0-136 0-24-24 0L320 32l0 48 80 0zM160 480l96 0 0-48-96 0 0 48zm0-400l128 0 0-48L160 32l0 48zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 48 0 16 0 0 32-16 0-48 0 0 48 0 16-32 0 0-16 0-48-48 0-16 0 0-32 16 0 48 0 0-48 0-16 32 0 0 16z" />
    </Icon>
);

export default SquareDashedCirclePlus;