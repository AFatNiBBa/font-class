
import { Icon } from "../../index";

/**
 * A component that renders the `terminal` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/terminal?s=thin terminal}
 * @preview ![terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/terminal.svg)
 */
const Terminal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M34.2 45.5c-3.1-3.2-3-8.2 .2-11.3s8.2-3 11.3 .2l208 216c3 3.1 3 8 0 11.1l-208 216c-3.1 3.2-8.1 3.3-11.3 .2s-3.3-8.1-.2-11.3L236.9 256 34.2 45.5zM232 464l336 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-336 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default Terminal;