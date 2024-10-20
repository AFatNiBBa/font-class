
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis-stroke-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke-vertical?s=sharp-duotone-solid ellipsis-stroke-vertical}
 * @preview ![ellipsis-stroke-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ellipsis-stroke-vertical.svg)
 */
const EllipsisStrokeVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M32 192l0 48 0 32 0 48 48 0 32 0 48 0 0-48 0-32 0-48-48 0-32 0-48 0zm48 48l32 0 0 32-32 0 0-32z" />
        <path d="M80 80l0 32 32 0 0-32L80 80zM32 32l48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0 0-48 0-32 0-48zM80 400l0 32 32 0 0-32-32 0zM32 352l48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0 0-48 0-32 0-48z" />
    </Icon>
);

export default EllipsisStrokeVertical;