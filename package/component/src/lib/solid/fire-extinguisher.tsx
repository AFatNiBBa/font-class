
import { Icon } from "../../index";

/**
 * A component that renders the `fire-extinguisher` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-extinguisher?s=solid fire-extinguisher}
 * @preview ![fire-extinguisher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/fire-extinguisher.svg)
 */
const FireExtinguisher: typeof Icon = x => (
    <Icon {...x}>
        <path d="M500.3 7.3C507.7 13.3 512 22.4 512 32l0 96c0 9.6-4.3 18.7-11.7 24.7s-17.2 8.5-26.6 6.6l-160-32C301.5 124.9 292 115.7 289 104l-65 0 0 34.8c37.8 18 64 56.5 64 101.2l0 144L64 384l0-144c0-44.7 26.2-83.2 64-101.2l0-28.8c-36.2 11.1-66 36.9-82.3 70.5c-5.8 11.9-20.2 16.9-32.1 11.1S-3.3 171.4 2.5 159.5C26.7 109.8 72.7 72.6 128 60.4L128 32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 24 65 0c3-11.7 12.5-20.9 24.7-23.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM288 416l0 32c0 35.3-28.7 64-64 64l-96 0c-35.3 0-64-28.7-64-64l0-32 224 0zM176 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default FireExtinguisher;