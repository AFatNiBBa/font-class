
import { Icon } from "../../index";

/**
 * A component that renders the `pipe` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=sharp-thin pipe}
 * @preview ![pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pipe.svg)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path d="M40 0l0 8 0 496 0 8-16 0 0-8L24 8l0-8L40 0z" />
    </Icon>
);

export default Pipe;