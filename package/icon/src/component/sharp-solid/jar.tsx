
import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=sharp-solid jar}
 * @preview ![jar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/jar.svg)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 0L288 0l0 64L32 64 32 0zM0 96l320 0 0 416L0 512 0 96zM256 224L64 224l0 160 192 0 0-160z" />
    </Icon>
);

export default Jar;