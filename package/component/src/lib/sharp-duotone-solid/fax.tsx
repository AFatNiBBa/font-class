
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fax` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fax?s=sharp-duotone-solid fax}
 * @preview ![fax](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fax.svg)
 */
const Fax: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 0l0 192 352 0 0-128L416 0 128 0zm96 256l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM352 256l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
        <path d="M96 128L0 128 0 512l96 0 0-384zm416 64l-384 0 0 320 384 0 0-320zM288 256l0 64-64 0 0-64 64 0zM224 384l64 0 0 64-64 0 0-64zM416 256l0 64-64 0 0-64 64 0zM352 384l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default Fax;