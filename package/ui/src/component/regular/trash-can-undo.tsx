
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-undo` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-undo?s=regular trash-can-undo}
 * @preview ![trash-can-undo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/trash-can-undo.svg)
 */
const TrashCanUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm145.9 64.1c8.8 9.9 7.9 25.1-2 33.9L199.1 248l40.9 0c48.6 0 88 39.4 88 88l0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-24c0-22.1-17.9-40-40-40l-40.9 0 24.8 22.1c9.9 8.8 10.8 24 2 33.9s-24 10.8-33.9 2l-72-64c-5.1-4.6-8.1-11.1-8.1-17.9s2.9-13.4 8.1-17.9l72-64c9.9-8.8 25.1-7.9 33.9 2z" />
    </Icon>
);

export default TrashCanUndo;