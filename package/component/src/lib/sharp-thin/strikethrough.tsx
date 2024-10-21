
import { Icon } from "../../index";

/**
 * A component that renders the `strikethrough` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/strikethrough?s=sharp-thin strikethrough}
 * @preview ![strikethrough](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/strikethrough.svg)
 */
const Strikethrough: typeof Icon = x => (
    <Icon {...x}>
        <path d="M113.9 125.9c5.6-30.4 26.3-52.3 57.8-65c31.8-12.9 74.4-16.3 121.9-9.3C308.2 53.8 353.2 62 368 65.8l7.8 2 3.9-15.5-7.8-2c-15.5-3.9-61.1-12.3-76-14.5c-49.3-7.3-95-4-130.3 10.3c-35.5 14.4-60.8 40.2-67.6 77.2c0 0 0 0 0 0l-.1 .4c-2.8 22.3 .6 41.1 9.1 57c8.4 15.8 21.5 28.1 37.1 38.1c25.8 16.5 59.7 27.4 93.8 37.2L8 256l-8 0 0 16 8 0 496 0 8 0 0-16-8 0-208.6 0c-11-3.4-22.2-6.6-33.3-9.7l-2.2-.6c-40.4-11.5-79.3-22.5-107.2-40.4c-14-9-24.8-19.4-31.6-32.1c-6.7-12.5-9.7-27.9-7.3-47.2zM394 336.5c5.8 13 7.8 29 4.1 49.3c-5.6 30.5-26.2 52.4-57.9 65.3c-31.8 12.9-74.4 16.3-121.9 9.3c-24.2-3.7-64.7-16.8-94.7-26.5c0 0 0 0 0 0s0 0 0 0c-6.3-2-12.2-3.9-17.3-5.5L98.8 426 94 441.2l7.6 2.4c4.8 1.5 10.4 3.3 16.6 5.3c0 0 0 0 0 0c29.9 9.7 72.2 23.3 97.8 27.3c0 0 0 0 0 0c49.3 7.3 95 4 130.3-10.3c35.5-14.4 60.8-40.2 67.6-77.2c4.2-22.9 2.1-42.2-5.3-58.7c-1.6-3.5-3.3-6.8-5.3-10l-19.8 0c4.3 5.1 7.8 10.6 10.5 16.5z" />
    </Icon>
);

export default Strikethrough;