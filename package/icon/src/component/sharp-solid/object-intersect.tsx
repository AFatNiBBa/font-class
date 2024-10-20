
import { Icon } from "../../index";

/**
 * A component that renders the `object-intersect` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-intersect?s=sharp-solid object-intersect}
 * @preview ![object-intersect](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/object-intersect.svg)
 */
const ObjectIntersect: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 64l0 96-64 0-64 0 0 64 0 64-96 0L64 64l224 0zM64 352l96 0 0 96 0 64 64 0 224 0 64 0 0-64 0-224 0-64-64 0-96 0 0-96 0-64L288 0 64 0 0 0 0 64 0 288l0 64 64 0zM448 224l0 224-224 0 0-96 64 0 64 0 0-64 0-64 96 0z" />
    </Icon>
);

export default ObjectIntersect;