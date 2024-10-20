
import { Icon } from "../../index";

/**
 * A component that renders the `file` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file?s=sharp-light file}
 * @preview ![file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file.svg)
 */
const File: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 192l-144 0-16 0 0-16 0-144L32 32l0 448 320 0 0-288zm-5.3-32L224 37.3 224 160l122.7 0zM32 0L232 0 384 152l0 328 0 32-32 0L32 512 0 512l0-32L0 32 0 0 32 0z" />
    </Icon>
);

export default File;