
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-dot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=sharp-light envelope-dot}
 * @preview ![envelope-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/envelope-dot.svg)
 */
const EnvelopeDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0A80 80 0 1 0 416 80a80 80 0 1 0 160 0zM512 416l0-225.1c-5.2 .7-10.6 1.1-16 1.1c-17.2 0-33.5-3.9-48-10.8l-192 132L32 159.2 32 96l353.1 0c-.7-5.2-1.1-10.6-1.1-16s.4-10.8 1.1-16L32 64 0 64 0 96l0 80L0 416l0 32 32 0 448 0 32 0 0-32zM480 198l0 218L32 416l0-218L256 352 480 198z" />
    </Icon>
);

export default EnvelopeDot;