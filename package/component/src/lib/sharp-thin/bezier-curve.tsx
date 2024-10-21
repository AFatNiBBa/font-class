
import { Icon } from "../../index";

/**
 * A component that renders the `bezier-curve` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bezier-curve?s=sharp-thin bezier-curve}
 * @preview ![bezier-curve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bezier-curve.svg)
 */
const BezierCurve: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M368 80l0 41.4 0 16.1 0 38.5-96 0 0-38.5 0-16.1L272 80l96 0zm56.1 56L528 136c.2 0 .4 0 .6 0c3.9 27.1 27.2 48 55.4 48c30.9 0 56-25.1 56-56s-25.1-56-56-56c-28.2 0-51.6 20.9-55.4 48c-.2 0-.4 0-.6 0l-144 0 0-40 0-16-16 0-96 0-16 0 0 16 0 40-144 0c-.2 0-.4 0-.6 0C107.6 92.9 84.2 72 56 72C25.1 72 0 97.1 0 128s25.1 56 56 56c28.2 0 51.6-20.9 55.4-48c.2 0 .4 0 .6 0l103.9 0C143.1 166.4 91.3 237 88.2 320L48 320l-16 0 0 16 0 96 0 16 16 0 96 0 16 0 0-16 0-96 0-16-16 0-39.8 0c3.6-88.7 67.5-162 151.8-179.8l0 35.8 0 16 16 0 96 0 16 0 0-16 0-35.8C468.3 158 532.2 231.3 535.8 320L496 320l-16 0 0 16 0 96 0 16 16 0 96 0 16 0 0-16 0-96 0-16-16 0-40.2 0c-3.1-83-54.9-153.6-127.7-184zM16 128a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm528 0a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM48 336l96 0 0 96-96 0 0-96zm448 96l0-96 96 0 0 96-96 0z" />
    </Icon>
);

export default BezierCurve;