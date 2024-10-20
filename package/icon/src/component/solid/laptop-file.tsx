
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-file` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-file?s=solid laptop-file}
 * @preview ![laptop-file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/laptop-file.svg)
 */
const LaptopFile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0C92.7 0 64 28.7 64 64l0 224-44.8 0C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384L320 384l0-96-192 0 0-224 320 0 0 32 64 0 0-32c0-35.3-28.7-64-64-64L128 0zM512 128l-112 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-208-96 0c-17.7 0-32-14.3-32-32l0-96zm32 0l0 96 96 0-96-96z" />
    </Icon>
);

export default LaptopFile;