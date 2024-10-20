
import { Icon } from "../../index";

/**
 * A component that renders the `pen-to-square` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-to-square?s=sharp-light pen-to-square}
 * @preview ![pen-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pen-to-square.svg)
 */
const PenToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 384l6.3-33.7L152 256 385.4 22.6 408 0l22.6 22.6 58.7 58.7L512 104l-22.6 22.6L256 360l-94.3 17.7L128 384zm112.4-53.6L410.1 160.7l-58.7-58.7L181.6 271.6l-13.6 72.3 72.3-13.6zM432.7 138.1L466.7 104 408 45.3 373.9 79.3l58.7 58.7zM0 64l16 0 192 0 16 0 0 32-16 0L32 96l0 384 384 0 0-176 0-16 32 0 0 16 0 192 0 16-16 0L16 512 0 512l0-16L0 80 0 64z" />
    </Icon>
);

export default PenToSquare;