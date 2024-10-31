
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-file` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-file?s=light laptop-file}
 * @preview ![laptop-file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/laptop-file.svg)
 */
const LaptopFile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 32L128 32c-17.7 0-32 14.3-32 32l0 224 224 0 0 32L96 320l-32 0-30.1 0c5.5 18.5 22.7 32 42.9 32L320 352l0 32L76.8 384C34.4 384 0 349.6 0 307.2C0 296.6 8.6 288 19.2 288L64 288 64 64C64 28.7 92.7 0 128 0L448 0c35.3 0 64 28.7 64 64l0 32-32 0 0-32c0-17.7-14.3-32-32-32zM384 464c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16l0-176-80 0c-26.5 0-48-21.5-48-48l0-80-80 0c-8.8 0-16 7.2-16 16l0 288zM512 160.5l0 79.5c0 8.8 7.2 16 16 16l79.5 0c-.7-2.8-2.1-5.4-4.2-7.4l-83.9-83.9c-2.1-2.1-4.6-3.5-7.4-4.2zm30.1-18.4l83.9 83.9c9 9 14.1 21.2 14.1 33.9L640 464c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l108.1 0c12.7 0 24.9 5.1 33.9 14.1z" />
    </Icon>
);

export default LaptopFile;