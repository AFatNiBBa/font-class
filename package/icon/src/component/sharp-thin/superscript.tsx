
import { Icon } from "../../index";

/**
 * A component that renders the `superscript` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/superscript?s=sharp-thin superscript}
 * @preview ![superscript](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/superscript.svg)
 */
const Superscript: typeof Icon = x => (
    <Icon {...x}>
        <path d="M424 0l-8 0 0 16 8 0 24 0 0 128-32 0 0 16 40 0 8 0 32 0 8 0 0-16-8 0-32 0L464 8l0-8-8 0L424 0zM8 64L0 64 0 80l8 0 28 0L166.1 256 36 432 8 432l-8 0 0 16 8 0 32 0 4 0 2.4-3.2L176 269.5 305.6 444.8 308 448l4 0 32 0 8 0 0-16-8 0-28 0L185.9 256 316 80l28 0 8 0 0-16-8 0-32 0-4 0-2.4 3.2L176 242.5 46.4 67.2 44 64l-4 0L8 64z" />
    </Icon>
);

export default Superscript;