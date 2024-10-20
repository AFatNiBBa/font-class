
import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=sharp-thin jar}
 * @preview ![jar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/jar.svg)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 16l0 48 192 0 0-48L64 16zM48 64l0-48L48 0 64 0 256 0l16 0 0 16 0 48 32 0 16 0 0 16 0 416 0 16-16 0L16 512 0 512l0-16L0 80 0 64l16 0 32 0zM272 80l-16 0L64 80 48 80 16 80l0 112 288 0 0-112-32 0zM16 368l288 0 0-160L16 208l0 160zm0 16l0 112 288 0 0-112L16 384z" />
    </Icon>
);

export default Jar;