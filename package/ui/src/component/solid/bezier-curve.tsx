
import { Icon } from "../../index";

/**
 * A component that renders the `bezier-curve` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bezier-curve?s=solid bezier-curve}
 * @preview ![bezier-curve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bezier-curve.svg)
 */
const BezierCurve: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M296 136l0-48 48 0 0 48-48 0zM288 32c-26.5 0-48 21.5-48 48l0 4L121.6 84C111.2 62.7 89.3 48 64 48C28.7 48 0 76.7 0 112s28.7 64 64 64c25.3 0 47.2-14.7 57.6-36l66.9 0c-58.9 39.6-98.9 105-104 180L80 320c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-3.3 0c5.9-67 48.5-123.4 107.5-149.1c8.6 12.7 23.2 21.1 39.8 21.1l64 0c16.6 0 31.1-8.4 39.8-21.1c59 25.7 101.6 82.1 107.5 149.1l-3.3 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-4.5 0c-5-75-45.1-140.4-104-180l66.9 0c10.4 21.3 32.3 36 57.6 36c35.3 0 64-28.7 64-64s-28.7-64-64-64c-25.3 0-47.2 14.7-57.6 36L400 84l0-4c0-26.5-21.5-48-48-48l-64 0zM88 376l48 0 0 48-48 0 0-48zm416 48l0-48 48 0 0 48-48 0z" />
    </Icon>
);

export default BezierCurve;