
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=sharp-light exclamation}
 * @preview ![exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/exclamation.svg)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M80 48l0-16L48 32l0 16 0 304 0 16 32 0 0-16L80 48zm8 376l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default Exclamation;