
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brush` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=sharp-duotone-solid brush}
 * @preview ![brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/brush.svg)
 */
const Brush: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 288l384 0L384 0 224 0 192 64 160 0 128 0 96 64 64 0 0 0z" />
        <path d="M0 288l384 0 0 96-128 0 0 128-128 0 0-128L0 384l0-96zM192 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Brush;