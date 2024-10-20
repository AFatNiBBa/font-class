
import { Icon } from "../../index";

/**
 * A component that renders the `bezier-curve` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bezier-curve?s=sharp-light bezier-curve}
 * @preview ![bezier-curve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bezier-curve.svg)
 */
const BezierCurve: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M368 64l0 37.2 0 10.8 0 22 0 26-96 0 0-26 0-22 0-10.8L272 64l96 0zm67.4 64l78.6 0c7.1 27.6 32.2 48 62 48c35.3 0 64-28.7 64-64s-28.7-64-64-64c-29.8 0-54.9 20.4-62 48L400 96l0-32 0-32-32 0-96 0-32 0 0 32 0 32L126 96c-7.1-27.6-32.2-48-62-48C28.7 48 0 76.7 0 112s28.7 64 64 64c29.8 0 54.9-20.4 62-48l78.6 0C139.5 167.2 96 238.5 96 320l-32 0-32 0 0 32 0 96 0 32 32 0 96 0 32 0 0-32 0-96 0-32-32 0-32 0c0-77.5 45.9-144.3 112-174.6l0 14.6 0 32 32 0 96 0 32 0 0-32 0-14.6c66.1 30.3 112 97.1 112 174.6l-32 0-32 0 0 32 0 96 0 32 32 0 96 0 32 0 0-32 0-96 0-32-32 0-32 0c0-81.5-43.5-152.8-108.6-192zM544 352l32 0 0 96-96 0 0-96 32 0 32 0zm-416 0l32 0 0 96-96 0 0-96 32 0 32 0zM32 112a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm512 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default BezierCurve;