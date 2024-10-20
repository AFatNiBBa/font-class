
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chimney` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=duotone chimney}
 * @preview ![chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chimney.svg)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 192l0 128 96 0 0-128-96 0zm0 160l0 128 256 0 0-128L32 352zM160 192l0 128 256 0 0-128-256 0zM320 352l0 128 96 0 0-128-96 0z" />
        <path d="M32 32C14.3 32 0 46.3 0 64l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L32 32z" />
    </Icon>
);

export default Chimney;