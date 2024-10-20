
import { Icon } from "../../index";

/**
 * A component that renders the `object-intersect` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-intersect?s=solid object-intersect}
 * @preview ![object-intersect](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/object-intersect.svg)
 */
const ObjectIntersect: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 64l0 96-64 0c-35.3 0-64 28.7-64 64l0 64-96 0L64 64l224 0zM64 352l96 0 0 96c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0 0-96c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 288c0 35.3 28.7 64 64 64zM448 224l0 224-224 0 0-96 64 0c35.3 0 64-28.7 64-64l0-64 96 0z" />
    </Icon>
);

export default ObjectIntersect;