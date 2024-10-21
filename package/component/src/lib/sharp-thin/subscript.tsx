
import { Icon } from "../../index";

/**
 * A component that renders the `subscript` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/subscript?s=sharp-thin subscript}
 * @preview ![subscript](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/subscript.svg)
 */
const Subscript: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 64L0 64 0 80l8 0 28 0L166.1 256 36 432 8 432l-8 0 0 16 8 0 32 0 4 0 2.4-3.2L176 269.5 305.6 444.8 308 448l4 0 32 0 8 0 0-16-8 0-28 0L185.9 256 316 80l28 0 8 0 0-16-8 0-32 0-4 0-2.4 3.2L176 242.5 46.4 67.2 44 64l-4 0L8 64zM424 352l-8 0 0 16 8 0 24 0 0 128-32 0 0 16 40 0 8 0 32 0 8 0 0-16-8 0-32 0 0-136 0-8-8 0-32 0z" />
    </Icon>
);

export default Subscript;