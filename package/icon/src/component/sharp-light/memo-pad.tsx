
import { Icon } from "../../index";

/**
 * A component that renders the `memo-pad` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-pad?s=sharp-light memo-pad}
 * @preview ![memo-pad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/memo-pad.svg)
 */
const MemoPad: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 128l384 0 0 352L32 480l0-352zm0-32l0-64 384 0 0 64L32 96zm416 16l0-16 0-64 0-32L416 0 32 0 0 0 0 32 0 96l0 16 0 16L0 480l0 32 32 0 384 0 32 0 0-32 0-352 0-16zM112 192l-16 0 0 32 16 0 224 0 16 0 0-32-16 0-224 0zm0 96l-16 0 0 32 16 0 224 0 16 0 0-32-16 0-224 0zm0 96l-16 0 0 32 16 0 128 0 16 0 0-32-16 0-128 0z" />
    </Icon>
);

export default MemoPad;