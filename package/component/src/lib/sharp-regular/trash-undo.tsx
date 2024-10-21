
import { Icon } from "../../index";

/**
 * A component that renders the `trash-undo` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=sharp-regular trash-undo}
 * @preview ![trash-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trash-undo.svg)
 */
const TrashUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0L147.2 0 140 10.7 93.8 80 80.1 80 32 80 0 80l0 48 35.6 0L64 512l320 0 28.4-384 35.6 0 0-48-32 0-48.1 0-13.7 0L308 10.7 300.8 0 288 0 160 0zM296.5 80l-145 0 21.3-32 102.3 0 21.3 32zM108.6 464L83.7 128l280.6 0L339.4 464l-230.8 0zM244.2 209.7l-26.6-29.9-14.9 13.3-72 64L113.9 272l16.8 14.9 72 64 14.9 13.3 26.6-29.9-14.9-13.3L196.6 292l43.4 0c24.3 0 44 19.7 44 44l0 24 0 20 40 0 0-20 0-24c0-46.4-37.6-84-84-84l-43.4 0 32.7-29.1 14.9-13.3z" />
    </Icon>
);

export default TrashUndo;