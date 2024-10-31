
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road?s=sharp-duotone-solid road}
 * @preview ![road](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/road.svg)
 */
const Road: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M256 32l0 64 0 32 64 0 0-32 0-64-64 0zm0 160l0 32 0 64 0 32 64 0 0-32 0-64 0-32-64 0zm0 192l0 32 0 64 64 0 0-64 0-32-64 0z" />
        <path d="M256 32L128 32 0 480l256 0 0-64 0-32 64 0 0 32 0 64 256 0L448 32 320 32l0 64 0 32-64 0 0-32 0-64zm64 192l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32z" />
    </Icon>
);

export default Road;