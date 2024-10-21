
import { Icon } from "../../index";

/**
 * A component that renders the `chart-kanban` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-kanban?s=sharp-solid chart-kanban}
 * @preview ![chart-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-kanban.svg)
 */
const ChartKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 480l-128 0 0-448 128 0 0 448zM0 416L0 32l128 0 0 384L0 416zM160 288l0-256 128 0 0 256-128 0z" />
    </Icon>
);

export default ChartKanban;