
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-bottom-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-bottom-right?s=duotone border-bottom-right}
 * @preview ![border-bottom-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/border-bottom-right.svg)
 */
const BorderBottomRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64a32 32 0 1 0 64 0A32 32 0 1 0 0 64zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 160zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 256zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 352zM96 64a32 32 0 1 0 64 0A32 32 0 1 0 96 64zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M416 32c17.7 0 32 14.3 32 32l0 336c0 44.2-35.8 80-80 80L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l336 0c8.8 0 16-7.2 16-16l0-336c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default BorderBottomRight;