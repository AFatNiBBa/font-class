
import { Icon } from "../../index";

/**
 * A component that renders the `pipe` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=light pipe}
 * @preview ![pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pipe.svg)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path d="M32 0c8.8 0 16 7.2 16 16l0 480c0 8.8-7.2 16-16 16s-16-7.2-16-16L16 16C16 7.2 23.2 0 32 0z" />
    </Icon>
);

export default Pipe;