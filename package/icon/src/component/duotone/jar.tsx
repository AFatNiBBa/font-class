
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=duotone jar}
 * @preview ![jar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/jar.svg)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm64 96c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32L96 384c-17.7 0-32-14.3-32-32l0-128z" />
        <path d="M64 0C46.3 0 32 14.3 32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 0zM96 192c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L96 192z" />
    </Icon>
);

export default Jar;