
import { Icon } from "../../index";

/**
 * A component that renders the `cross` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=sharp-solid cross}
 * @preview ![cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cross.svg)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 0L128 0l0 128L0 128 0 256l128 0 0 256 128 0 0-256 128 0 0-128-128 0L256 0z" />
    </Icon>
);

export default Cross;