
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-file` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-file?s=sharp-light laptop-file}
 * @preview ![laptop-file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/laptop-file.svg)
 */
const LaptopFile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 32L96 32l0 256 224 0 0 32L96 320l-32 0-32 0 0 2.7L61.3 352 320 352l0 32L48 384 0 336l0-16 0-32 32 0 32 0L64 32 64 0 96 0 480 0l32 0 0 32 0 64-32 0 0-64zm0 128l-96 0 0 320 224 0 0-192-112 0-16 0 0-16 0-112zm32 0l0 96 96 0 0-2.7L514.7 160l-2.7 0zm16-32L640 240l0 240 0 32-32 0-224 0-32 0 0-32 0-320 0-32 32 0 144 0z" />
    </Icon>
);

export default LaptopFile;