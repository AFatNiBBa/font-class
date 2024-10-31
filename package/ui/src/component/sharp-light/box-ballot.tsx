
import { Icon } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=sharp-light box-ballot}
 * @preview ![box-ballot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/box-ballot.svg)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 32l0 192 256 0 0-192L160 32zM128 0l32 0L416 0l32 0 0 32 0 192 0 32-32 0-256 0-32 0 0-32 0-192 0-32zM32 160l64 0 0 32-64 0 0 128 512 0 0-128-64 0 0-32 64 0 32 0 0 32 0 128 0 16 0 16 0 128 0 32-32 0L32 512 0 512l0-32L0 352l0-16 0-16L0 192l0-32 32 0zM544 352L32 352l0 128 512 0 0-128z" />
    </Icon>
);

export default BoxBallot;