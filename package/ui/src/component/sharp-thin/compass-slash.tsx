
import { Icon } from "../../index";

/**
 * A component that renders the `compass-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass-slash?s=sharp-thin compass-slash}
 * @preview ![compass-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/compass-slash.svg)
 */
const CompassSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M455.1 454.4C416.6 480.6 370.1 496 320 496C187.5 496 80 388.5 80 256c0-30.1 5.5-58.9 15.6-85.4L82.5 160.2C70.6 189.8 64 222.1 64 256c0 141.4 114.6 256 256 256c55.2 0 106.4-17.5 148.2-47.2l-13.1-10.4zM320 0C264.8 0 213.6 17.5 171.8 47.2l13.1 10.4C223.4 31.4 269.9 16 320 16c132.5 0 240 107.5 240 240c0 30.1-5.5 58.9-15.6 85.4l13.1 10.4C569.4 322.2 576 289.9 576 256C576 114.6 461.4 0 320 0zM198.3 365L192 384l19-6.3 103.3-34.4-15-11.9-82 27.3 24.3-72.9-13.4-10.5L198.3 365zM325.7 168.8l15 11.9 82-27.3-24.3 72.9 13.4 10.5L441.7 147l6.3-19-19 6.3L325.7 168.8zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default CompassSlash;