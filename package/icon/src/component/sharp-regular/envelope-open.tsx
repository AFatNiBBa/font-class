
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-open` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open?s=sharp-regular envelope-open}
 * @preview ![envelope-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/envelope-open.svg)
 */
const EnvelopeOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 271.9L48 464l416 0 0-192.1-194.5 132L256 413l-13.5-9.1L48 271.9zm414.5-57L256 60 49.5 214.9 256 355 462.5 214.9zM0 192L256 0 512 192l0 272 0 48-48 0L48 512 0 512l0-48L0 192z" />
    </Icon>
);

export default EnvelopeOpen;