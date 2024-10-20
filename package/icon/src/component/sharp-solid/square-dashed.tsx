
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=sharp-solid square-dashed}
 * @preview ![square-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-dashed.svg)
 */
const SquareDashed: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32l96 0 0 64L64 96l0 64L0 160 0 64 0 32l32 0zM0 192l64 0 0 128L0 320 0 192zm384 0l64 0 0 128-64 0 0-128zm64-32l-64 0 0-64-64 0 0-64 96 0 32 0 0 32 0 96zm0 192l0 96 0 32-32 0-96 0 0-64 64 0 0-64 64 0zM64 352l0 64 64 0 0 64-96 0L0 480l0-32 0-96 64 0zM288 480l-128 0 0-64 128 0 0 64zM160 96l0-64 128 0 0 64L160 96z" />
    </Icon>
);

export default SquareDashed;