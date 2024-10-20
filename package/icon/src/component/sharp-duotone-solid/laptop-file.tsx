
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop-file` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-file?s=sharp-duotone-solid laptop-file}
 * @preview ![laptop-file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/laptop-file.svg)
 */
const LaptopFile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 48 48 48 272 0 0-96-192 0 0-224 320 0 0 32 64 0 0-64 0-32L480 0 96 0 64 0l0 32 0 256L0 288z" />
        <path d="M352 128l160 0 0 128 128 0 0 256-288 0 0-384zm192 0l96 96-96 0 0-96z" />
    </Icon>
);

export default LaptopFile;