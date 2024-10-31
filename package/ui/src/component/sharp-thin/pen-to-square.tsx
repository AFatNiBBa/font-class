
import { Icon } from "../../index";

/**
 * A component that renders the `pen-to-square` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-to-square?s=sharp-thin pen-to-square}
 * @preview ![pen-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pen-to-square.svg)
 */
const PenToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M442.3 143l47-47L416 22.6l-47 47L442.3 143zM431 154.3L357.7 81 174.4 264.2 150 362l97.8-24.5L431 154.3zM352 64l5.7-5.7 47-47L416 0l11.3 11.3 73.4 73.4L512 96l-11.3 11.3-47 47L448 160l-5.7 5.7L256 352 145.6 379.6 128 384l4.4-17.6L160 256 346.3 69.7 352 64zM0 72c0-4.4 3.6-8 8-8l208 0 8 0 0 16-8 0L16 80l0 416 416 0 0-200 0-8 16 0 0 8 0 208c0 4.4-3.6 8-8 8L8 512c-4.4 0-8-3.6-8-8L0 72z" />
    </Icon>
);

export default PenToSquare;