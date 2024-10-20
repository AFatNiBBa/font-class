
import { Icon, generic } from "../../index";

/**
 * A component that renders the `minimize` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minimize?s=sharp-duotone-solid minimize}
 * @preview ![minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/minimize.svg)
 */
const Minimize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 456l56 56 84-84 52 52 32-32 0-160L64 288 32 320l52 52L0 456zM288 64l0 160 160 0 32-32-52-52 84-84L456 0 372 84 320 32 288 64z" />
        <path d="M224 64L192 32 140 84 56 0 0 56l84 84L32 192l32 32 160 0 0-160zm64 384l32 32 52-52 84 84 56-56-84-84 52-52-32-32-160 0 0 160z" />
    </Icon>
);

export default Minimize;