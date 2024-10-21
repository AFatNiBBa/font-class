
import { Icon } from "../../index";

/**
 * A component that renders the `square-kanban` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-kanban?s=sharp-light square-kanban}
 * @preview ![square-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-kanban.svg)
 */
const SquareKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 448L32 64l384 0 0 384L32 448zM0 480l32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32 0 32 0 64 0 448l0 32zM144 288l0-160-32 0 0 160 32 0zm160 64l32 0 0-224-32 0 0 224zm-64-96l0-128-32 0 0 128 32 0z" />
    </Icon>
);

export default SquareKanban;