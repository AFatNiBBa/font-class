
import { Icon } from "../../index";

/**
 * A component that renders the `square-pen` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-pen?s=sharp-light square-pen}
 * @preview ![square-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-pen.svg)
 */
const SquarePen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM289.3 149.3L266.5 172 308 213.5l22.8-22.8-41.5-41.5zM134 304.5l-7.7 49.1 49.1-7.7L285.4 236.1l-41.5-41.5L134 304.5zM353.4 168.1L376 190.7l-22.6 22.6L190.7 376l-69.5 10.8L88 392l5.2-33.2L104 289.3 289.3 104l64.1 64.1z" />
    </Icon>
);

export default SquarePen;