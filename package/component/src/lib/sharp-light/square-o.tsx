
import { Icon } from "../../index";

/**
 * A component that renders the `square-o` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-o?s=sharp-light square-o}
 * @preview ![square-o](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-o.svg)
 */
const SquareO: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM128 256a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm96 128a128 128 0 1 1 0-256 128 128 0 1 1 0 256z" />
    </Icon>
);

export default SquareO;