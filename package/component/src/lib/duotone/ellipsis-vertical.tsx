
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-vertical?s=duotone ellipsis-vertical}
 * @preview ![ellipsis-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ellipsis-vertical.svg)
 */
const EllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path class={generic.secondary} d="M8 256a56 56 0 1 0 112 0A56 56 0 1 0 8 256z" />
        <path d="M120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0zm0 320A56 56 0 1 0 8 416a56 56 0 1 0 112 0z" />
    </Icon>
);

export default EllipsisVertical;