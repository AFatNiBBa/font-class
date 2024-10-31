
import { Icon } from "../../index";

/**
 * A component that renders the `bezier-curve` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bezier-curve?s=sharp-solid bezier-curve}
 * @preview ![bezier-curve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bezier-curve.svg)
 */
const BezierCurve: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M344 88l0 48-48 0 0-48 48 0zM296 32l-56 0 0 52L121.6 84C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36l66.9 0c-58.9 39.6-98.9 105-104 180L32 320l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-51.3 0c5.6-63.8 44.6-118.1 99.3-145.3l0 17.3 56 0 48 0 56 0 0-17.3c54.7 27.2 93.7 81.5 99.3 145.3L448 320l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-52.5 0c-5-75-45.1-140.4-104-180l66.9 0c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36L400 84l0-52-56 0-48 0zM136 376l0 48-48 0 0-48 48 0zm368 0l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default BezierCurve;