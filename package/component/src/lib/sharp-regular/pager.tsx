
import { Icon } from "../../index";

/**
 * A component that renders the `pager` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=sharp-regular pager}
 * @preview ![pager](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pager.svg)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 112l0 288 416 0 0-288L48 112zM0 64l48 0 416 0 48 0 0 48 0 288 0 48-48 0L48 448 0 448l0-48L0 112 0 64zm96 96l320 0 0 96L96 256l0-96zm96 144l0 48-96 0 0-48 96 0zm32 48l0-48 96 0 0 48-96 0z" />
    </Icon>
);

export default Pager;