
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=sharp-light text}
 * @preview ![text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/text.svg)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l16 0 416 0 16 0 0 16 0 64 0 16-32 0 0-16 0-48L240 64l0 384 64 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0 64 0 0-384L32 64l0 48 0 16L0 128l0-16L0 48 0 32z" />
    </Icon>
);

export default Text;