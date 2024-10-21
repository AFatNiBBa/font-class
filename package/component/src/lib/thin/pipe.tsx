
import { Icon } from "../../index";

/**
 * A component that renders the `pipe` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=thin pipe}
 * @preview ![pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pipe.svg)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path d="M32 0c4.4 0 8 3.6 8 8l0 496c0 4.4-3.6 8-8 8s-8-3.6-8-8L24 8c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default Pipe;