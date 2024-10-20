
import { Icon } from "../../index";

/**
 * A component that renders the `h1` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h1?s=sharp-light h1}
 * @preview ![h1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/h1.svg)
 */
const H1: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 80l0-16L0 64 0 80 0 256 0 432l0 16 32 0 0-16 0-160 256 0 0 160 0 16 32 0 0-16 0-176 0-176 0-16-32 0 0 16 0 160L32 240 32 80zm352.5 73.6L464 103.9 464 416l-64 0-16 0 0 32 16 0 80 0 80 0 16 0 0-32-16 0-64 0 0-336 0-16-16 0-8 0-4.6 0-3.9 2.4L384 116.1l0 37.7 .5-.3z" />
    </Icon>
);

export default H1;