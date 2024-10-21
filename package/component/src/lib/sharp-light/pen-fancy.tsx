
import { Icon } from "../../index";

/**
 * A component that renders the `pen-fancy` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy?s=sharp-light pen-fancy}
 * @preview ![pen-fancy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pen-fancy.svg)
 */
const PenFancy: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 272l128-40L386.2 23.4 408 0l22.6 22.6 58.7 58.7L512 104l-23.4 21.8L280 320 240 448 32 512 0 480 64 272zm151.4-18.2l-1.4 1.5L256.6 298l1.5-1.4L465.9 103.2 408.8 46.1 215.4 253.8zM182 268.6L89.6 297.5 44.2 445.2 112 377.3c0-.4 0-.9 0-1.3c0-13.3 10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24c-.4 0-.9 0-1.3 0L66.8 467.8l147.7-45.4L243.4 330 182 268.6z" />
    </Icon>
);

export default PenFancy;