
import { Icon } from "../../index";

/**
 * A component that renders the `square-kanban` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-kanban?s=solid square-kanban}
 * @preview ![square-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-kanban.svg)
 */
const SquareKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zm-64-96c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32s32 14.3 32 32l0 192c0 17.7-14.3 32-32 32zM256 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64zM128 320c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32z" />
    </Icon>
);

export default SquareKanban;