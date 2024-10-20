
import { Icon } from "../../index";

/**
 * A component that renders the `tents` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tents?s=sharp-regular tents}
 * @preview ![tents](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tents.svg)
 */
const Tents: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M591.5 352l-134 0-6.9-48 134 0L563.5 156 416 57.7 272.1 153.6l-30.4-20.2-12.9-8.6L416 0 608 128l25.1 176 6.9 48-48.5 0zM48.5 512L0 512l6.9-48L32 288 224 160 416 288l25.1 176 6.9 48-48.5 0-351 0zM200 233.7L76.5 316 55.3 464 200 464l0-230.3zm48 0L248 360l62.4 104 82.3 0L371.5 316 248 233.7z" />
    </Icon>
);

export default Tents;