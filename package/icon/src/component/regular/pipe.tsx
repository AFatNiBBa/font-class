
import { Icon } from "../../index";

/**
 * A component that renders the `pipe` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=regular pipe}
 * @preview ![pipe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pipe.svg)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path d="M32 0C45.3 0 56 10.7 56 24l0 464c0 13.3-10.7 24-24 24s-24-10.7-24-24L8 24C8 10.7 18.7 0 32 0z" />
    </Icon>
);

export default Pipe;