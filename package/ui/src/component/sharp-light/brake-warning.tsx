
import { Icon } from "../../index";

/**
 * A component that renders the `brake-warning` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brake-warning?s=sharp-light brake-warning}
 * @preview ![brake-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/brake-warning.svg)
 */
const BrakeWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 416a224 224 0 1 0 0-448 224 224 0 1 0 0 448zm16-336l0-16-32 0 0 16 0 128 0 16 32 0 0-16 0-128zM296 320l0 48 48 0 0-48-48 0zM77.5 100.6l8.6-13.5L59.2 69.9 50.5 83.3C18.5 133.2 0 192.4 0 256s18.5 122.8 50.5 172.7l8.6 13.5 26.9-17.3-8.6-13.5C48.7 366.6 32 313.3 32 256s16.7-110.6 45.5-155.4zm512-17.3l-8.6-13.5L553.9 87.2l8.6 13.5C591.3 145.4 608 198.7 608 256s-16.7 110.6-45.5 155.4l-8.6 13.5 26.9 17.3 8.6-13.5C621.4 378.8 640 319.6 640 256s-18.6-122.8-50.5-172.7z" />
    </Icon>
);

export default BrakeWarning;