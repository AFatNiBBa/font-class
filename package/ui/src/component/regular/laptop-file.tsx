
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-file` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-file?s=regular laptop-file}
 * @preview ![laptop-file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/laptop-file.svg)
 */
const LaptopFile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 48L128 48c-8.8 0-16 7.2-16 16l0 256 208 0 0 64L48 384c-26.5 0-48-21.5-48-48c0-8.8 7.2-16 16-16l48 0L64 64C64 28.7 92.7 0 128 0L448 0c35.3 0 64 28.7 64 64l0 32-48 0 0-32c0-8.8-7.2-16-16-16zM400 464l192 0 0-208-48 0c-17.7 0-32-14.3-32-32l0-48-112 0 0 288zm192 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l124.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L640 464c0 26.5-21.5 48-48 48z" />
    </Icon>
);

export default LaptopFile;