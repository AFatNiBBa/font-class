
import { Icon } from "../../index";

/**
 * A component that renders the `head-side` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side?s=light head-side}
 * @preview ![head-side](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/head-side.svg)
 */
const HeadSide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 224C32 118 118 32 224 32l16 0c66.1 0 127.1 40 153.8 96.9c3.2 6.9 6.5 14.2 9.9 21.7c0 0 0 0 0 0s0 0 0 0c6.2 13.9 12.7 28.5 19.8 42c11.1 21.3 24.8 42.3 44 59.4l3.2 2.8c6 5.3 9.5 13 9.5 21.1c0 15.6-12.6 28.2-28.2 28.2L432 304c-8.8 0-16 7.2-16 16l0 64c0 17.7-14.3 32-32 32l-80 0c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 64 0c35.3 0 64-28.7 64-64l0-48 3.8 0c33.2 0 60.2-26.9 60.2-60.2c0-17.2-7.4-33.6-20.2-45l-3.2-2.8c-15.1-13.5-26.6-30.6-36.9-50.3c-6.7-12.7-12.3-25.5-18.2-38.7c0 0 0 0 0 0c-3.5-7.8-7-15.7-10.8-23.8C390.8 47.3 318.6 0 240 0L224 0C100.3 0 0 100.3 0 224c0 52.9 18.4 101.6 49.1 140C58.5 375.6 64 388.6 64 401.4L64 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-94.6c0-22.1-9.5-41.9-21.9-57.4C47.7 311.1 32 269.4 32 224zm312 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default HeadSide;