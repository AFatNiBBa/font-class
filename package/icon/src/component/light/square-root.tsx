
import { Icon } from "../../index";

/**
 * A component that renders the `square-root` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-root?s=light square-root}
 * @preview ![square-root](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-root.svg)
 */
const SquareRoot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352.1 64c-7.1 0-13.4 4.7-15.4 11.6L223.4 468.4c-1.8 6.3-7.2 10.8-13.7 11.5s-12.7-2.6-15.8-8.4L82.9 264.4c-2.8-5.2-8.2-8.4-14.1-8.4L16 256c-8.8 0-16-7.2-16-16s7.2-16 16-16l52.8 0c17.7 0 34 9.7 42.3 25.3l92.4 172.4L306 66.7C311.9 46.1 330.7 32 352.1 32L560 32c8.8 0 16 7.2 16 16s-7.2 16-16 16L352.1 64z" />
    </Icon>
);

export default SquareRoot;