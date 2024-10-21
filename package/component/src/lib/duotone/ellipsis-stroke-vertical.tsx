
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis-stroke-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke-vertical?s=duotone ellipsis-stroke-vertical}
 * @preview ![ellipsis-stroke-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ellipsis-stroke-vertical.svg)
 */
const EllipsisStrokeVertical: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M24 256a72 72 0 1 0 144 0A72 72 0 1 0 24 256zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M96 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0 96A72 72 0 1 1 96 24a72 72 0 1 1 0 144zm0 224a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0 96a72 72 0 1 1 0-144 72 72 0 1 1 0 144z" />
    </Icon>
);

export default EllipsisStrokeVertical;