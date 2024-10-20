
import { Icon } from "../../index";

/**
 * A component that renders the `square-kanban` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-kanban?s=thin square-kanban}
 * @preview ![square-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-kanban.svg)
 */
const SquareKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464zM0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 144c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm208 16l0 192c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16s16 7.2 16 16zm-96 0l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16zM96 160l0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32zm256 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192zm-96 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64z" />
    </Icon>
);

export default SquareKanban;