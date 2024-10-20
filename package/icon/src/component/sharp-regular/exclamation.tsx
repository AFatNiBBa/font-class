
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=sharp-regular exclamation}
 * @preview ![exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/exclamation.svg)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M88 56l0-24L40 32l0 24 0 288 0 24 48 0 0-24L88 56zm8 360l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default Exclamation;