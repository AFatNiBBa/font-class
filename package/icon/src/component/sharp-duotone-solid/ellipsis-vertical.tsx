
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-vertical?s=sharp-duotone-solid ellipsis-vertical}
 * @preview ![ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ellipsis-vertical.svg)
 */
const EllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path class={generic.secondary} d="M16 208l96 0 0 96-96 0 0-96z" />
        <path d="M112 48L16 48l0 96 96 0 0-96zm0 320l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default EllipsisVertical;