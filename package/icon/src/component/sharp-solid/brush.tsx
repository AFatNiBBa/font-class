
import { Icon } from "../../index";

/**
 * A component that renders the `brush` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=sharp-solid brush}
 * @preview ![brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/brush.svg)
 */
const Brush: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 64L160 0 128 0 96 64 64 0 0 0 0 256l384 0L384 0 224 0 192 64zM0 288l0 96 128 0 0 128 128 0 0-128 128 0 0-96L0 288zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Brush;