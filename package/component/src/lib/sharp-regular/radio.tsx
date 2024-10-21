
import { Icon } from "../../index";

/**
 * A component that renders the `radio` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=sharp-regular radio}
 * @preview ![radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/radio.svg)
 */
const Radio: typeof Icon = x => (
    <Icon {...x}>
        <path d="M485.7 55.3L509 49.6 497.6 3 474.3 8.7l-456 112L0 125.2 0 128l0 16 0 32L0 304l0 24L0 464l0 48 48 0 416 0 48 0 0-48 0-288 0-48-48 0-274.2 0 296-72.7zM48 176l416 0 0 288L48 464l0-136 0-24 0-128zM352 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 112a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM112 240l-16 0 0 32 16 0 96 0 16 0 0-32-16 0-96 0zM96 304l-16 0 0 32 16 0 128 0 16 0 0-32-16 0L96 304zm16 64l-16 0 0 32 16 0 96 0 16 0 0-32-16 0-96 0z" />
    </Icon>
);

export default Radio;