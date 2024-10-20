
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-dashed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=sharp-duotone-solid square-dashed}
 * @preview ![square-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-dashed.svg)
 */
const SquareDashed: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64l0 96 64 0 0-64 64 0 0-64L32 32 0 32zM0 352l0 96 0 32 32 0 96 0 0-64-64 0 0-64L0 352zM320 32l0 64 64 0 0 64 64 0 0-96 0-32-32 0-96 0zm0 384l0 64 96 0 32 0 0-32 0-96-64 0 0 64-64 0z" />
        <path d="M0 192L0 320l64 0 0-128L0 192zm384 0l0 128 64 0 0-128-64 0zM288 480l0-64-128 0 0 64 128 0zM160 96l128 0 0-64L160 32l0 64z" />
    </Icon>
);

export default SquareDashed;