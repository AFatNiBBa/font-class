
import { Icon } from "../../index";

/**
 * A component that renders the `pager` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=sharp-light pager}
 * @preview ![pager](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pager.svg)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 96l0 320L32 416 32 96l448 0zM32 64L0 64 0 96 0 416l0 32 32 0 448 0 32 0 0-32 0-320 0-32-32 0L32 64zM64 320l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zm128 0l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zM96 160l320 0 0 96L96 256l0-96zM64 128l0 32 0 96 0 32 32 0 320 0 32 0 0-32 0-96 0-32-32 0L96 128l-32 0z" />
    </Icon>
);

export default Pager;