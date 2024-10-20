
import { Icon } from "../../index";

/**
 * A component that renders the `vector-polygon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-polygon?s=sharp-solid vector-polygon}
 * @preview ![vector-polygon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/vector-polygon.svg)
 */
const VectorPolygon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l128 0 0 32 192 0 0-32 128 0 0 128-63.7 0-4.5 7.9L352 216.5l0 79 27.8 48.6 4.5 7.9 63.7 0 0 128-128 0 0-32-192 0 0 32L0 480 0 352l32 0 0-192L0 160 0 32zM320 368.5L292.3 320 224 320l0-128 68.3 0L320 143.5l0-15.5-192 0 0 32-32 0 0 192 32 0 0 32 192 0 0-15.5zM48 80l0 32 32 0 0-32L48 80zm320 0l0 32 32 0 0-32-32 0zM80 400l-32 0 0 32 32 0 0-32zm288 0l0 32 32 0 0-32-32 0zM304 240l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default VectorPolygon;