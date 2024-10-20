
import { Icon } from "../../index";

/**
 * A component that renders the `terminal` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/terminal?s=sharp-light terminal}
 * @preview ![terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/terminal.svg)
 */
const Terminal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M12.9 67.5L1.4 56.4 23.6 33.4 35.1 44.5l208 200 12 11.5-12 11.5-208 200L23.6 478.6 1.4 455.6l11.5-11.1L208.9 256 12.9 67.5zM240 448l320 0 16 0 0 32-16 0-320 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Terminal;