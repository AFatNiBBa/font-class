
import { Icon } from "../../index";

/**
 * A component that renders the `terminal` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/terminal?s=light terminal}
 * @preview ![terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/terminal.svg)
 */
const Terminal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M5.1 59.7c-6.5-6-6.9-16.1-.8-22.6s16.1-6.9 22.6-.8l224 208c3.3 3 5.1 7.3 5.1 11.7s-1.9 8.7-5.1 11.7l-224 208c-6.5 6-16.6 5.6-22.6-.8s-5.6-16.6 .8-22.6L216.5 256 5.1 59.7zM240 448l320 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-320 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Terminal;