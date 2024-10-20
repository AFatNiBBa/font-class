
import { Icon } from "../../index";

/**
 * A component that renders the `square-kanban` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-kanban?s=sharp-solid square-kanban}
 * @preview ![square-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-kanban.svg)
 */
const SquareKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM288 384l0-256 64 0 0 256-64 0zM256 256l-64 0 0-128 64 0 0 128zM96 320l0-192 64 0 0 192-64 0z" />
    </Icon>
);

export default SquareKanban;