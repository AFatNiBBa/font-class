
import { Icon, generic } from "../../index";

/**
 * A component that renders the `citrus-slice` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/citrus-slice?s=sharp-duotone-solid citrus-slice}
 * @preview ![citrus-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/citrus-slice.svg)
 */
const CitrusSlice: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M34.6 384.6c2.1 2.1 4.3 4.3 6.4 6.4c38.2 38.2 85.6 61.3 135 69.8l0-12.8 0-194c-2.8-.7-5.5-1.6-8.1-2.7C123.5 295.7 79 340.2 34.6 384.6zM208 254l0 194 0 15.7c36.8 1.3 73.8-5.7 108.1-20.7c3.2-1.4 6.3-2.9 9.4-4.4l.4-.2c1.4-.7 2.8-1.4 4.1-2.1c1.5-.8 3-1.6 4.5-2.4c3.2-1.7 6.3-3.5 9.4-5.4c.4-.2 .8-.5 1.2-.7c3-1.8 5.9-3.7 8.8-5.6c6-4 11.7-8.2 17.3-12.7c2.7-2.2 5.4-4.4 8-6.7c.1-.1 .3-.2 .4-.4l-7-7L224.5 247.1c-5.1 3-10.6 5.3-16.5 6.8zm39.1-29.5L395.3 372.7l7 7 .3-.4c2.3-2.6 4.6-5.3 6.8-8s4.3-5.5 6.4-8.3l.3-.4c2.1-2.8 4.1-5.7 6-8.6s3.8-5.9 5.7-8.8c.2-.4 .5-.8 .7-1.1c1.8-3 3.5-6 5.2-9.1s3.3-6.1 4.8-9.3c18.1-36.9 26.5-77.4 25.3-117.6L448 208l-194 0c-1.5 5.9-3.8 11.4-6.8 16.5zm4.2-56.6c1.1 2.6 2 5.3 2.7 8.1l194 0 12.5 0c-8.1-49.4-31.3-96.9-69.5-135c-2.1-2.1-4.3-4.3-6.2-6.6C340.2 79 295.8 123.4 251.3 167.9z" />
        <path d="M34.6 384.6L41 391s0 0 0 0c96.9 96.9 253.6 97.1 350.4 .3s96.6-253.5-.3-350.4l-6.4-6.4L418.6 .6 425 7c115.6 115.6 116 302.6 .3 418.3S122.6 540.5 7 425c0 0 0 0 0 0L.6 418.6l33.9-33.9z" />
    </Icon>
);

export default CitrusSlice;