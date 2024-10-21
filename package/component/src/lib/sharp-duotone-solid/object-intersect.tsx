
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-intersect` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-intersect?s=sharp-duotone-solid object-intersect}
 * @preview ![object-intersect](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/object-intersect.svg)
 */
const ObjectIntersect: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64l224 0 0 96 64 0 0 64 96 0 0 224-224 0 0-96-64 0 0-64-96 0L64 64zm96 288l0 96 0 64 64 0 224 0 64 0 0-64 0-224 0-64-64 0-96 0 0-96 0-64L288 0 64 0 0 0 0 64 0 288l0 64 64 0 96 0z" />
        <path d="M160 160H352V352H160V160z" />
    </Icon>
);

export default ObjectIntersect;