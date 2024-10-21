
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glass-water-droplet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-water-droplet?s=duotone glass-water-droplet}
 * @preview ![glass-water-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/glass-water-droplet.svg)
 */
const GlassWaterDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32c0 .8 0 1.5 .1 2.3L28.9 437.7c3 41.9 37.8 74.3 79.8 74.3l166.6 0c42 0 76.8-32.4 79.8-74.3L383.9 34.3c.1-.8 .1-1.5 .1-2.3c0-8.1-3-15.9-8.6-21.8C369.4 3.7 360.9 0 352 0L32 0C23.1 0 14.6 3.7 8.6 10.2C3 16.1 0 23.9 0 32zM66.4 64l251.3 0c-5.6 77.8-11.1 155.7-16.7 233.5c-3.2 45.2-6.5 90.4-9.7 135.6c-.6 8.4-7.6 14.9-16 14.9l-166.6 0c-8.4 0-15.4-6.5-16-14.9c-3.2-45.2-6.5-90.4-9.7-135.6C77.5 219.7 71.9 141.9 66.4 64z" />
        <path d="M301 297.5L288 304c-20.1 10.1-43.9 10.1-64 0s-43.9-10.1-64 0s-43.9 10.1-64 0l-13-6.5 9.7 135.6c.6 8.4 7.6 14.9 16 14.9l166.6 0c8.4 0 15.4-6.5 16-14.9L301 297.5zM256 196c0-24-33.7-70.1-52.2-93.5c-6.1-7.7-17.5-7.7-23.6 0C161.7 125.9 128 172 128 196c0 33.1 28.7 60 64 60s64-26.9 64-60z" />
    </Icon>
);

export default GlassWaterDroplet;