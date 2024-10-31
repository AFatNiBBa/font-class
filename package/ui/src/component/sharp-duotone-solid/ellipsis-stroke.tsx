
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke?s=sharp-duotone-solid ellipsis-stroke}
 * @preview ![ellipsis-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ellipsis-stroke.svg)
 */
const EllipsisStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 192l0 48 0 32 0 48 48 0 32 0 48 0 0-48 0-32 0-48-48 0-32 0-48 0zm48 48l32 0 0 32-32 0 0-32z" />
        <path d="M80 272l32 0 0-32-32 0 0 32zM32 320l0-48 0-32 0-48 48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0zm368-48l32 0 0-32-32 0 0 32zm-48 48l0-48 0-32 0-48 48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0z" />
    </Icon>
);

export default EllipsisStroke;