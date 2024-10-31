
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=sharp-solid text}
 * @preview ![text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/text.svg)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l32 0 160 0 64 0 160 0 32 0 0 32 0 64 0 32-64 0 0-32 0-32L256 96l0 320 48 0 32 0 0 64-32 0-160 0-32 0 0-64 32 0 48 0 0-320L64 96l0 32 0 32L0 160l0-32L0 64 0 32z" />
    </Icon>
);

export default Text;