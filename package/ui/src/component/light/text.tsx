
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=light text}
 * @preview ![text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/text.svg)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 46.3 14.3 32 32 32l384 0c17.7 0 32 14.3 32 32l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48L240 64l0 384 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-384L32 64l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 64z" />
    </Icon>
);

export default Text;