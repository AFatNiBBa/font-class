
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-dot` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=light envelope-dot}
 * @preview ![envelope-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/envelope-dot.svg)
 */
const EnvelopeDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0A80 80 0 1 0 416 80a80 80 0 1 0 160 0zM512 384l0-193.1c-5.2 .7-10.6 1.1-16 1.1c-13.8 0-27-2.5-39.2-7.1L284.4 311.3c-16.9 12.4-39.9 12.4-56.8 0L32 167.9 32 128c0-17.7 14.3-32 32-32l321.1 0c-.7-5.2-1.1-10.6-1.1-16s.4-10.8 1.1-16L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64zM32 207.6L208.7 337.1c28.2 20.6 66.5 20.6 94.6 0L480 207.6 480 384c0 17.7-14.3 32-32 32L64 416c-17.7 0-32-14.3-32-32l0-176.4z" />
    </Icon>
);

export default EnvelopeDot;