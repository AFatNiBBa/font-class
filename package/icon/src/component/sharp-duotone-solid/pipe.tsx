
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=sharp-duotone-solid pipe}
 * @preview ![pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pipe.svg)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path class={generic.secondary} d="M64 0l0 32 0 448 0 32L0 512l0-32L0 32 0 0 64 0z" />
    </Icon>
);

export default Pipe;