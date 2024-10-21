
import { Icon } from "../../index";

/**
 * A component that renders the `square-kanban` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-kanban?s=sharp-regular square-kanban}
 * @preview ![square-kanban](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-kanban.svg)
 */
const SquareKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM152 288l-48 0 0-160 48 0 0 160zm144 64l0-224 48 0 0 224-48 0zm-48-96l-48 0 0-128 48 0 0 128z" />
    </Icon>
);

export default SquareKanban;