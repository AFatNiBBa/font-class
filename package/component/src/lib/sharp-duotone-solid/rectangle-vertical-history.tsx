
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-vertical-history` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical-history?s=sharp-duotone-solid rectangle-vertical-history}
 * @preview ![rectangle-vertical-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rectangle-vertical-history.svg)
 */
const RectangleVerticalHistory: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416l48 0L48 96 0 96zM96 48l0 416 48 0 0-416L96 48z" />
        <path d="M192 0H576V512H192V0z" />
    </Icon>
);

export default RectangleVerticalHistory;