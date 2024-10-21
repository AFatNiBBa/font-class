
import { Icon } from "../../index";

/**
 * A component that renders the `square-kanban` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-kanban?s=sharp-thin square-kanban}
 * @preview ![square-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-kanban.svg)
 */
const SquareKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 464L16 48l416 0 0 416L16 464zM0 480l16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32 0 32 0 48 0 464l0 16zM112 144l32 0 0 16 0 128 0 16-32 0 0-16 0-128 0-16zm48 144l0-128 0-16 0-16-16 0-32 0-16 0 0 16 0 16 0 128 0 16 0 16 16 0 32 0 16 0 0-16 0-16zM336 160l0 192 0 16-32 0 0-16 0-192 0-16 32 0 0 16zm16-32l-16 0-32 0-16 0 0 16 0 16 0 192 0 16 0 16 16 0 32 0 16 0 0-16 0-16 0-192 0-16 0-16zM240 160l0 64 0 16-32 0 0-16 0-64 0-16 32 0 0 16zm16 0l0-16 0-16-16 0-32 0-16 0 0 16 0 16 0 64 0 16 0 16 16 0 32 0 16 0 0-16 0-16 0-64z" />
    </Icon>
);

export default SquareKanban;