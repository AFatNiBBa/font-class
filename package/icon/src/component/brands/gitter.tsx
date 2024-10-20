
import { Icon } from "../../index";

/**
 * A component that renders the `gitter` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gitter?s=brands gitter}
 * @preview ![gitter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/gitter.svg)
 */
const Gitter: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M66.4 322.5H16V0h50.4v322.5zM166.9 76.1h-50.4V512h50.4V76.1zm100.6 0h-50.4V512h50.4V76.1zM368 76h-50.4v247H368V76z" />
    </Icon>
);

export default Gitter;