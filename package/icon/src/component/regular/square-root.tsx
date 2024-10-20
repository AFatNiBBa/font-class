
import { Icon } from "../../index";

/**
 * A component that renders the `square-root` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-root?s=regular square-root}
 * @preview ![square-root](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-root.svg)
 */
const SquareRoot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M344.3 80c-3.6 0-6.7 2.4-7.7 5.8L231.1 462.5c-2.6 9.4-10.7 16.3-20.5 17.4s-19.1-3.9-23.8-12.5L83.9 276.2c-1.4-2.6-4.1-4.2-7-4.2L24 272c-13.3 0-24-10.7-24-24s10.7-24 24-24l52.9 0c20.6 0 39.5 11.3 49.3 29.5l74.7 138.8L290.3 72.9C297.1 48.7 319.2 32 344.3 32L552 32c13.3 0 24 10.7 24 24s-10.7 24-24 24L344.3 80z" />
    </Icon>
);

export default SquareRoot;