
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-undo` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=sharp-duotone-solid trash-undo}
 * @preview ![trash-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trash-undo.svg)
 */
const TrashUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96l384 0L392 512 56 512 32 96zM94.1 256l17 17 64 64 17 17L225.9 320l-17-17-23-23 54.1 0c22.1 0 40 17.9 40 40l0 40 0 24 48 0 0-24 0-40c0-48.6-39.4-88-88-88l-54.1 0 23-23 17-17L192 158.1l-17 17-64 64-17 17z" />
        <path d="M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zm65 209l17-17L192 158.1l-17 17-64 64-17 17 17 17 64 64 17 17L225.9 320l-17-17-23-23 54.1 0c22.1 0 40 17.9 40 40l0 40 0 24 48 0 0-24 0-40c0-48.6-39.4-88-88-88l-54.1 0 23-23z" />
    </Icon>
);

export default TrashUndo;