
import { Icon } from "../../index";

/**
 * A component that renders the `repeat` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/repeat?s=sharp-thin repeat}
 * @preview ![repeat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/repeat.svg)
 */
const Repeat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M345.4 16l80 80-80 80-9.4 0 0-72 0-16 0-72 9.4 0zM320 16l0 72L8 88 0 88l0 8L0 264l0 8 16 0 0-8 0-160 304 0 0 72 0 16 16 0 16 0 84.7-84.7L448 96 436.7 84.7 352 0 336 0 320 0l0 16zM166.6 496l-80-80 80-80 9.4 0 0 72 0 16 0 72-9.4 0zm25.4 0l0-72 312 0 8 0 0-8 0-168 0-8-16 0 0 8 0 160-304 0 0-72 0-16-16 0-16 0L75.3 404.7 64 416l11.3 11.3L160 512l16 0 16 0 0-16z" />
    </Icon>
);

export default Repeat;