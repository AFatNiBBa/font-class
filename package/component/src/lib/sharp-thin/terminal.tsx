
import { Icon } from "../../index";

/**
 * A component that renders the `terminal` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/terminal?s=sharp-thin terminal}
 * @preview ![terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/terminal.svg)
 */
const Terminal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M42.1 53.4l-5.4-5.9L48.4 36.7l5.4 5.9 192 208 5 5.4-5 5.4-192 208-5.4 5.9L36.7 464.4l5.4-5.9L229.1 256 42.1 53.4zM232 464l336 0 8 0 0 16-8 0-336 0-8 0 0-16 8 0z" />
    </Icon>
);

export default Terminal;