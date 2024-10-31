
import { Icon, generic } from "../../index";

/**
 * A component that renders the `note` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note?s=sharp-duotone-solid note}
 * @preview ![note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/note.svg)
 */
const Note: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 288-32 0-32 0-96 0 0 96 0 32 0 32L0 480 0 32zm64 80l0 48 48 0 0-48-48 0zm0 120l0 48 48 0 0-48-48 0zm0 120l0 48 48 0 0-48-48 0z" />
        <path d="M288 320l0 96 0 32 0 32 16 0 13.3 0 9.4-9.4 112-112 9.4-9.4 0-13.3 0-16-32 0-32 0-96 0z" />
    </Icon>
);

export default Note;