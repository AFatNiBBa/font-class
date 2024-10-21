
import { Icon } from "../../index";

/**
 * A component that renders the `eraser` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eraser?s=thin eraser}
 * @preview ![eraser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/eraser.svg)
 */
const Eraser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M364.3 63c-15.6-15.6-40.9-15.6-56.6 0L191 179.7 396.3 385 513 268.3c15.6-15.6 15.6-40.9 0-56.6L364.3 63zM63 307.7c-15.6 15.6-15.6 40.9 0 56.6l88 88c7.5 7.5 17.7 11.7 28.3 11.7l121.4 0c10.6 0 20.8-4.2 28.3-11.7l56-56L179.7 191 63 307.7zm233.4-256c21.9-21.9 57.3-21.9 79.2 0L524.3 200.4c21.9 21.9 21.9 57.3 0 79.2l-184 184c-.1 .1-.3 .3-.4 .4L536 464c4.4 0 8 3.6 8 8s-3.6 8-8 8l-248 0s0 0 0 0l-108.7 0c-14.9 0-29.1-5.9-39.6-16.4l-88-88c-21.9-21.9-21.9-57.3 0-79.2L296.4 51.7z" />
    </Icon>
);

export default Eraser;