
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=sharp-duotone-solid jar}
 * @preview ![jar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/jar.svg)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 64l32 0 256 0 32 0 0 448L0 512 0 64zM64 192l0 192 192 0 0-192L64 192z" />
        <path d="M288 0L32 0l0 64 256 0 0-64zM256 192L64 192l0 192 192 0 0-192z" />
    </Icon>
);

export default Jar;