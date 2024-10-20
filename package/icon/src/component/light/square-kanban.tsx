
import { Icon } from "../../index";

/**
 * A component that renders the `square-kanban` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-kanban?s=light square-kanban}
 * @preview ![square-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-kanban.svg)
 */
const SquareKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448zM0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 288c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16zm176 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-192c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 192zm-80-80c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16z" />
    </Icon>
);

export default SquareKanban;