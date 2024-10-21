
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-check?s=sharp-duotone-solid list-check}
 * @preview ![list-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/list-check.svg)
 */
const ListCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 384l0 64 32 0 288 0 32 0 0-64-32 0-288 0-32 0zM224 64l0 64 32 0 224 0 32 0 0-64-32 0L256 64l-32 0zm0 160l0 64 32 0 224 0 32 0 0-64-32 0-224 0-32 0z" />
        <path d="M153.8 72.1l16.1-17.8L134.2 22.1 118.2 39.9 63.1 101.1 41 79l-17-17L-9.9 96 7 113l40 40 17.9 17.9 16.9-18.8 72-80zm0 160l16.1-17.8-35.7-32.1-16.1 17.8L63.1 261.1 41 239l-17-17L-9.9 256 7 273l40 40 17.9 17.9 16.9-18.8 72-80zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default ListCheck;