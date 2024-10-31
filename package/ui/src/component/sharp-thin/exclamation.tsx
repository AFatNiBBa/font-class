
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=sharp-thin exclamation}
 * @preview ![exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/exclamation.svg)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M72 40l0-8L56 32l0 8 0 328 0 8 16 0 0-8L72 40zm8 392l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default Exclamation;