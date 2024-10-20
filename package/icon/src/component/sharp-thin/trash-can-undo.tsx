
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-undo` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-undo?s=sharp-thin trash-can-undo}
 * @preview ![trash-can-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/trash-can-undo.svg)
 */
const TrashCanUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L288 0l4.4 0 2.4 3.8L332.4 64 448 64l0 16L0 80 0 64l115.6 0L153.2 3.8 155.6 0 160 0zM313.6 64l-30-48L164.4 16l-30 48 179.1 0zM32 504l0-392 16 0 0 384 352 0 0-384 16 0 0 392 0 8-8 0L40 512l-8 0 0-8zM219.3 192.5l-5.9 5.4L140.7 264 248 264c39.8 0 72 32.2 72 72l0 40 0 8-16 0 0-8 0-40c0-30.9-25.1-56-56-56l-107.3 0 72.7 66.1 5.9 5.4-10.8 11.8-5.9-5.4-88-80-6.5-5.9 6.5-5.9 88-80 5.9-5.4 10.8 11.8z" />
    </Icon>
);

export default TrashCanUndo;