
import { Icon } from "../../index";

/**
 * A component that renders the `snowplow` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowplow?s=light snowplow}
 * @preview ![snowplow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/snowplow.svg)
 */
const Snowplow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 32c0-17.7 14.3-32 32-32L298.9 0c19.2 0 36.6 11.4 44.1 29.1l85.1 198.6c2.6 6 3.9 12.4 3.9 18.9l0 41.4 96 0 0-48c0-3.7 1.3-7.4 3.7-10.2l80-96c5.7-6.8 15.7-7.7 22.5-2s7.7 15.7 2 22.5L560 245.8l0 148.4 76.3 91.5c5.7 6.8 4.7 16.9-2 22.5s-16.9 4.7-22.5-2l-80-96c-2.4-2.9-3.7-6.5-3.7-10.2l0-80-81.6 0c20.7 20.3 33.6 48.7 33.6 80c0 61.9-50.1 112-112 112l-256 0C50.1 512 0 461.9 0 400c0-44.7 26.2-83.2 64-101.2L64 168c0-22.1 17.9-40 40-40l24 0 0-96zM400 256l-192 0c-5.3 0-10.3-2.7-13.3-7.1L135.4 160 104 160c-4.4 0-8 3.6-8 8l0 121.1c5.2-.7 10.6-1.1 16-1.1l256 0c11.1 0 21.9 1.6 32 4.6l0-36.6zM160 139.2L216.6 224l175.2 0L313.6 41.7c-2.5-5.9-8.3-9.7-14.7-9.7L160 32l0 107.2zM368 320l-256 0c-44.2 0-80 35.8-80 80s35.8 80 80 80l256 0c44.2 0 80-35.8 80-80s-35.8-80-80-80zM120 376a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Snowplow;