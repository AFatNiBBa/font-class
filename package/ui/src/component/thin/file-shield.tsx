
import { Icon } from "../../index";

/**
 * A component that renders the `file-shield` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-shield?s=thin file-shield}
 * @preview ![file-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/file-shield.svg)
 */
const FileShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 496L64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l140.1 0c1.3 0 2.6 .1 3.9 .2L208 136c0 22.1 17.9 40 40 40l119.8 0c.2 1.3 .2 2.6 .2 3.9l0 33.6 16-6.4 0-27.2c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c10.9 0 21.2-2.7 30.2-7.6c-4.6-3.7-9.1-7.6-13.3-11.5c-5.3 2-11 3.1-16.9 3.1zm41.1-336L248 160c-13.3 0-24-10.7-24-24l0-113.1c1 .8 1.9 1.6 2.7 2.4L358.6 157.3c.9 .9 1.7 1.8 2.4 2.7zM309 288.6l115-46 0 250.7c-96.1-42.9-120-138-120-197.3c0-3.3 2-6.2 5-7.4zM560 296c0 59.3-23.9 154.4-120 197.3l0-250.7 115 46c3 1.2 5 4.2 5 7.4zM440.9 225.7c-5.7-2.3-12.1-2.3-17.8 0l-120 48C294 277.4 288 286.2 288 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C550.1 464.8 576 359.3 576 296c0-9.8-6-18.6-15.1-22.3l-120-48z" />
    </Icon>
);

export default FileShield;