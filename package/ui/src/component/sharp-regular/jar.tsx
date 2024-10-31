
import { Icon } from "../../index";

/**
 * A component that renders the `jar` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jar?s=sharp-regular jar}
 * @preview ![jar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/jar.svg)
 */
const Jar: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 0l0 48 256 0 0-48L32 0zM272 128l0 96L48 224l0-96 224 0zm0 240l0 96L48 464l0-96 224 0zM48 80L0 80l0 48L0 464l0 48 48 0 224 0 48 0 0-48 0-336 0-48-48 0L48 80z" />
    </Icon>
);

export default Jar;