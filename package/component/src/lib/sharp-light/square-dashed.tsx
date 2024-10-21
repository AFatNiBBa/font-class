
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=sharp-light square-dashed}
 * @preview ![square-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-dashed.svg)
 */
const SquareDashed: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 32l112 0 0 32L32 64l0 96L0 160 0 48 0 32l16 0zM0 192l32 0 0 128L0 320 0 192zm416 0l32 0 0 128-32 0 0-128zm32-32l-32 0 0-96-96 0 0-32 112 0 16 0 0 16 0 112zm0 192l0 112 0 16-16 0-112 0 0-32 96 0 0-96 32 0zM32 352l0 96 96 0 0 32L16 480 0 480l0-16L0 352l32 0zM288 480l-128 0 0-32 128 0 0 32zM160 64l0-32 128 0 0 32L160 64z" />
    </Icon>
);

export default SquareDashed;