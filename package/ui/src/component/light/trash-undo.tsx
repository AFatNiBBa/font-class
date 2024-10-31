
import { Icon } from "../../index";

/**
 * A component that renders the `trash-undo` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=light trash-undo}
 * @preview ![trash-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/trash-undo.svg)
 */
const TrashUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M177.7 32l92.5 0c5.5 0 10.6 2.8 13.6 7.5L299.1 64 148.9 64l15.3-24.5c2.9-4.7 8.1-7.5 13.6-7.5zM336.9 64L311 22.6C302.2 8.5 286.8 0 270.3 0L177.7 0C161.2 0 145.8 8.5 137 22.6L111.1 64 64.1 64 32 64 16 64C7.2 64 0 71.2 0 80s7.2 16 16 16l18.3 0L59.8 452.6C62.1 486.1 90 512 123.6 512l200.8 0c33.6 0 61.4-25.9 63.8-59.4L413.7 96 432 96c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0-32.1 0-47.1 0zm44.8 32L356.3 450.3C355.1 467 341.2 480 324.4 480l-200.8 0c-16.8 0-30.7-13-31.9-29.7L66.4 96l315.3 0zM219.9 189.3c-5.9-6.6-16-7.1-22.6-1.2l-80 72c-3.4 3-5.3 7.4-5.3 11.9s1.9 8.9 5.3 11.9l80 72c6.6 5.9 16.7 5.4 22.6-1.2s5.4-16.7-1.2-22.6l-49-44.1 70.3 0c26.5 0 48 21.5 48 48l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40c0-44.2-35.8-80-80-80l-70.3 0 49-44.1c6.6-5.9 7.1-16 1.2-22.6z" />
    </Icon>
);

export default TrashUndo;