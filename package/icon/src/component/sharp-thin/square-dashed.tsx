
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=sharp-thin square-dashed}
 * @preview ![square-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-dashed.svg)
 */
const SquareDashed: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 32l120 0 0 16L16 48l0 112L0 160 0 40l0-8 8 0zM0 192l16 0 0 128L0 320 0 192zm432 0l16 0 0 128-16 0 0-128zm16-32l-16 0 0-112L320 48l0-16 120 0 8 0 0 8 0 120zm0 192l0 120 0 8-8 0-120 0 0-16 112 0 0-112 16 0zM16 352l0 112 112 0 0 16L8 480l-8 0 0-8L0 352l16 0zM288 480l-128 0 0-16 128 0 0 16zM160 48l0-16 128 0 0 16L160 48z" />
    </Icon>
);

export default SquareDashed;