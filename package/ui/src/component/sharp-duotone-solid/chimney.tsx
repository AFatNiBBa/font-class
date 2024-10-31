
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chimney` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=sharp-duotone-solid chimney}
 * @preview ![chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chimney.svg)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 192l0 128 96 0 0-128-96 0zm0 160l0 128 256 0 0-128L32 352zM160 192l0 128 256 0 0-128-256 0zM320 352l0 128 96 0 0-128-96 0z" />
        <path d="M448 32L0 32 0 160l448 0 0-128z" />
    </Icon>
);

export default Chimney;