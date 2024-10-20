
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis-stroke` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke?s=duotone ellipsis-stroke}
 * @preview ![ellipsis-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ellipsis-stroke.svg)
 */
const EllipsisStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M184 256a72 72 0 1 0 144 0 72 72 0 1 0 -144 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M392 256a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm96 0a72 72 0 1 1 -144 0 72 72 0 1 1 144 0zM72 256a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm96 0A72 72 0 1 1 24 256a72 72 0 1 1 144 0z" />
    </Icon>
);

export default EllipsisStroke;