
import { Icon } from "../../index";

/**
 * A component that renders the `chart-kanban` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-kanban?s=regular chart-kanban}
 * @preview ![chart-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chart-kanban.svg)
 */
const ChartKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 432l0-352 32 0 0 352-32 0zm-48 0c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-32 0c-26.5 0-48 21.5-48 48l0 352zM80 368l-32 0L48 80l32 0 0 288zM48 416l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 32C21.5 32 0 53.5 0 80L0 368c0 26.5 21.5 48 48 48zM240 240l-32 0 0-160 32 0 0 160zm-32 48l32 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-32 0c-26.5 0-48 21.5-48 48l0 160c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default ChartKanban;