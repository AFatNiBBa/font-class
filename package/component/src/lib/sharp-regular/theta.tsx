
import { Icon } from "../../index";

/**
 * A component that renders the `theta` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/theta?s=sharp-regular theta}
 * @preview ![theta](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/theta.svg)
 */
const Theta: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M56 256c0-55 16.6-103.9 42.1-138.4S157.2 64 192 64s68.3 19 93.9 53.6S328 201 328 256s-16.6 103.9-42.1 138.5S226.8 448 192 448s-68.3-19-93.9-53.5S56 311 56 256zM192 16C138.4 16 91.9 45.4 59.6 89S8 191.7 8 256s19.3 123.4 51.6 167s78.9 73 132.4 73s100.1-29.4 132.4-73S376 320.3 376 256s-19.3-123.4-51.6-167S245.6 16 192 16zM120 232l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default Theta;