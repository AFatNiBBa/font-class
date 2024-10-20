
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-undo` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-undo?s=sharp-solid trash-can-undo}
 * @preview ![trash-can-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/trash-can-undo.svg)
 */
const TrashCanUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0 304 0zM32 128l384 0 0 384L32 512l0-384zM209 241l17-17L192 190.1l-17 17-64 64-17 17 17 17 64 64 17 17L225.9 352l-17-17-23-23 54.1 0c22.1 0 40 17.9 40 40l0 40 0 24 48 0 0-24 0-40c0-48.6-39.4-88-88-88l-54.1 0 23-23z" />
    </Icon>
);

export default TrashCanUndo;