
import { Icon } from "../../index";

/**
 * A component that renders the `pipe` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=sharp-light pipe}
 * @preview ![pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pipe.svg)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path d="M48 0l0 16 0 480 0 16-32 0 0-16L16 16 16 0 48 0z" />
    </Icon>
);

export default Pipe;