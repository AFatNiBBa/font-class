
import { Icon } from "../../index";

/**
 * A component that renders the `pipe` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=sharp-regular pipe}
 * @preview ![pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pipe.svg)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path d="M56 0l0 24 0 464 0 24L8 512l0-24L8 24 8 0 56 0z" />
    </Icon>
);

export default Pipe;