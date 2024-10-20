
import { Icon } from "../../index";

/**
 * A component that renders the `cloudsmith` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloudsmith?s=brands cloudsmith}
 * @preview ![cloudsmith](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/cloudsmith.svg)
 */
const Cloudsmith: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 227.6v56.9L284.4 512H227.6L0 284.4V227.6L227.6 0h56.9L512 227.6zm-256 162a133.6 133.6 0 1 0 0-267.1 133.6 133.6 0 1 0 0 267.1z" />
    </Icon>
);

export default Cloudsmith;