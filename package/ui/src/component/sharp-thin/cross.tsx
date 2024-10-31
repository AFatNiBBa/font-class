
import { Icon } from "../../index";

/**
 * A component that renders the `cross` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=sharp-thin cross}
 * @preview ![cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cross.svg)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 0l8 0L248 0l8 0 0 8 0 120 120 0 8 0 0 8 0 112 0 8-8 0-120 0 0 248 0 8-8 0-112 0-8 0 0-8 0-248L8 256l-8 0 0-8L0 136l0-8 8 0 120 0L128 8l0-8zm16 16l0 120 0 8-8 0L16 144l0 96 120 0 8 0 0 8 0 248 96 0 0-248 0-8 8 0 120 0 0-96-120 0-8 0 0-8 0-120-96 0z" />
    </Icon>
);

export default Cross;