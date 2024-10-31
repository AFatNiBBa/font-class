
import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=sharp-light jar}
 * @preview ![jar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/jar.svg)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 0l0 32L48 32 48 0 272 0zM32 96l0 96 256 0 0-96L32 96zm0 128l0 128 256 0 0-128L32 224zm0 160l0 96 256 0 0-96L32 384zM0 64l32 0 256 0 32 0 0 32 0 384 0 32-32 0L32 512 0 512l0-32L0 96 0 64z" />
    </Icon>
);

export default Jar;