
import { Icon } from "../../index";

/**
 * A component that renders the `chimney` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=sharp-light chimney}
 * @preview ![chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chimney.svg)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 64 32 0 96 0 32 0 192 0 32 0 0-64L32 64zm0 96L0 160l0-32L0 64 0 32l32 0 384 0 32 0 0 32 0 64 0 32-32 0 0 112 0 128 0 64 0 16-32 0 0-16 0-48-112 0-80 0 0 48 0 16-32 0 0-16 0-48-96 0 0 48 0 16-32 0 0-16 0-64 0-128 0-112zm32 0l0 96 96 0 0-96-96 0zm128 0l0 96 80 0 112 0 0-96-192 0zM176 384l80 0 0-96-80 0L64 288l0 96 112 0zm112 0l96 0 0-96-96 0 0 96z" />
    </Icon>
);

export default Chimney;