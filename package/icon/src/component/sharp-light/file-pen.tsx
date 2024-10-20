
import { Icon } from "../../index";

/**
 * A component that renders the `file-pen` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pen?s=sharp-light file-pen}
 * @preview ![file-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-pen.svg)
 */
const FilePen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 192l0 124.9 32-32L384 152 232 0 32 0 0 0 0 32 0 480l0 32 32 0 221.8 0 5-32L32 480 32 32l160 0 0 144 0 16 16 0 144 0zm-5.3-32L224 160l0-122.7L346.7 160zm142.3 64L304 409.1l-10.8 69.4L288 511.7l33.2-5.2 69.4-10.8L553.1 333.3l22.6-22.6c0 0 0 0 .1-.1L553.1 288l-63.8-63.8-.2-.2zM334 424.3L443.7 314.6 485.1 356 375.4 465.7l-49 7.6 7.6-49zM530.4 310.6l-22.7 22.7L466.4 292l22.7-22.7 41.4 41.4z" />
    </Icon>
);

export default FilePen;