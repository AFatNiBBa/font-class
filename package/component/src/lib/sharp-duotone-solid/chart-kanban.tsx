
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-kanban` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-kanban?s=sharp-duotone-solid chart-kanban}
 * @preview ![chart-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-kanban.svg)
 */
const ChartKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 32l0 256 128 0 0-256L160 32z" />
        <path d="M448 480l-128 0 0-448 128 0 0 448zM128 416L0 416 0 32l128 0 0 384z" />
    </Icon>
);

export default ChartKanban;