
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-kanban` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-kanban?s=duotone chart-kanban}
 * @preview ![chart-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-kanban.svg)
 */
const ChartKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 80l0 160c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-32 0c-26.5 0-48 21.5-48 48z" />
        <path d="M368 480c-26.5 0-48-21.5-48-48l0-352c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0zM48 416c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0z" />
    </Icon>
);

export default ChartKanban;