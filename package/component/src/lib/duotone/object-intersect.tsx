
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-intersect` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-intersect?s=duotone object-intersect}
 * @preview ![object-intersect](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/object-intersect.svg)
 */
const ObjectIntersect: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64l224 0 0 96 64 0 0 64 96 0 0 224-224 0 0-96-64 0 0-64-96 0L64 64zm96 288l0 96c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0 0-96c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 288c0 35.3 28.7 64 64 64l96 0z" />
        <path d="M160 224c0-35.3 28.7-64 64-64H352V288c0 35.3-28.7 64-64 64H160V224z" />
    </Icon>
);

export default ObjectIntersect;