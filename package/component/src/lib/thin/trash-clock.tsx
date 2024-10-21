
import { Icon } from "../../index";

/**
 * A component that renders the `trash-clock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-clock?s=thin trash-clock}
 * @preview ![trash-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/trash-clock.svg)
 */
const TrashClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M177.7 16l92.5 0c8.3 0 16 4.3 20.4 11.3l23 36.7L134.4 64l23-36.7c4.4-7 12.1-11.3 20.4-11.3zm-33.9 2.8L115.6 64 8 64c-4.4 0-8 3.6-8 8s3.6 8 8 8l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L332.4 64 304.2 18.8C296.9 7.1 284.1 0 270.3 0L177.7 0c-13.8 0-26.6 7.1-33.9 18.8zM48 119.3c-.4-4.4-4.2-7.7-8.6-7.3s-7.7 4.2-7.3 8.6l28.3 340c2.4 29 26.7 51.4 55.8 51.4l214.6 0c-6.9-4.9-13.5-10.2-19.6-16l-195 0c-20.8 0-38.1-15.9-39.9-36.7L48 119.3zm368 1.3c.4-4.4-2.9-8.3-7.3-8.6s-8.3 2.9-8.6 7.3l-6.4 76.9c5.3-1.2 10.8-2.1 16.3-2.8l6.1-72.7zM432 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-224c-4.4 0-8 3.6-8 8l0 72c0 4.4 3.6 8 8 8l56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-48 0 0-64c0-4.4-3.6-8-8-8z" />
    </Icon>
);

export default TrashClock;