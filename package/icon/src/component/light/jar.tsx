
import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=light jar}
 * @preview ![jar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/jar.svg)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 0L256 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 32c-8.8 0-16-7.2-16-16S55.2 0 64 0zm0 96c-17.7 0-32 14.3-32 32l0 64 256 0 0-64c0-17.7-14.3-32-32-32L64 96zM32 224l0 128 256 0 0-128L32 224zm0 160l0 64c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-64L32 384zM0 128C0 92.7 28.7 64 64 64l192 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128z" />
    </Icon>
);

export default Jar;