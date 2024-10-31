
import { Icon } from "../../index";

/**
 * A component that renders the `trash-undo` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=solid trash-undo}
 * @preview ![trash-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/trash-undo.svg)
 */
const TrashUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128zM217.8 199.9c8.9 9.9 8.1 25-1.8 33.9L182.5 264l57.5 0c48.6 0 88 39.4 88 88l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40c0-22.1-17.9-40-40-40l-57.5 0 33.5 30.2c9.9 8.9 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c9.9-8.9 25-8.1 33.9 1.8z" />
    </Icon>
);

export default TrashUndo;