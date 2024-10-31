
import { Icon } from "../../index";

/**
 * A component that renders the `trash-undo` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=sharp-light trash-undo}
 * @preview ![trash-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/trash-undo.svg)
 */
const TrashUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l-8.9 0-4.7 7.5L111.1 64 64.1 64 32 64 0 64 0 96l34.3 0L64 512l320 0L413.7 96 448 96l0-32-32 0-32.1 0-47.1 0L301.6 7.5 296.9 0 288 0 160 0zM299.1 64L148.9 64l20-32 110.3 0 20 32zM93.8 480L66.4 96l315.3 0L354.2 480 93.8 480zM230.6 201.2l-21.4-23.8-11.9 10.7-80 72L104.1 272l13.2 11.9 80 72 11.9 10.7 21.4-23.8-11.9-10.7-49-44.1 70.3 0c26.5 0 48 21.5 48 48l0 40 0 16 32 0 0-16 0-40c0-44.2-35.8-80-80-80l-70.3 0 49-44.1 11.9-10.7z" />
    </Icon>
);

export default TrashUndo;