
import { Icon } from "../../index";

/**
 * A component that renders the `timeline` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline?s=thin timeline}
 * @preview ![timeline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/timeline.svg)
 */
const Timeline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm8 111.5c31.6-3.9 56-30.9 56-63.5c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 32.6 24.4 59.6 56 63.5L152 256 8 256c-4.4 0-8 3.6-8 8s3.6 8 8 8l304 0 0 96.5c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5l0-96.5 304 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-144 0 0-112.5c31.6-3.9 56-30.9 56-63.5c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 32.6 24.4 59.6 56 63.5L472 256l-304 0 0-112.5zM432 80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM272 432a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default Timeline;