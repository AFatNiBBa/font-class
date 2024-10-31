
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-outer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-outer?s=duotone border-outer}
 * @preview ![border-outer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/border-outer.svg)
 */
const BorderOuter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96-96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M384 96l0 320L64 416 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default BorderOuter;