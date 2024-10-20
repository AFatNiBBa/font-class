
import { Icon } from "../../index";

/**
 * A component that renders the `text` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=sharp-thin text}
 * @preview ![text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/text.svg)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 32l8 0 200 0 200 0 8 0 0 8 0 64 0 8-16 0 0-8 0-56L232 48l0 416 80 0 8 0 0 16-8 0-88 0-88 0-8 0 0-16 8 0 80 0 0-416L32 48l0 56 0 8-16 0 0-8 0-64 0-8z" />
    </Icon>
);

export default Text;