
import { Icon } from "../../index";

/**
 * A component that renders the `mountains` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountains?s=sharp-solid mountains}
 * @preview ![mountains](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mountains.svg)
 */
const Mountains: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 32L0 416l0 64 320 0 192 0 128 0 0-64L480 160 412.9 267.4 256 32z" />
    </Icon>
);

export default Mountains;