
import { Icon } from "../../index";

/**
 * A component that renders the `memo-pad` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-pad?s=sharp-thin memo-pad}
 * @preview ![memo-pad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/memo-pad.svg)
 */
const MemoPad: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 128l416 0 0 368L16 496l0-368zm0-16l0-96 416 0 0 96L16 112zm432 8l0-8 0-96 0-16L432 0 16 0 0 0 0 16l0 96 0 8 0 8L0 496l0 16 16 0 416 0 16 0 0-16 0-368 0-8zM104 208l-8 0 0 16 8 0 240 0 8 0 0-16-8 0-240 0zm0 96l-8 0 0 16 8 0 240 0 8 0 0-16-8 0-240 0zm0 96l-8 0 0 16 8 0 144 0 8 0 0-16-8 0-144 0z" />
    </Icon>
);

export default MemoPad;