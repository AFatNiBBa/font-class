
import { Icon } from "../../index";

/**
 * A component that renders the `outdent` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outdent?s=sharp-solid outdent}
 * @preview ![outdent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/outdent.svg)
 */
const Outdent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 64L0 96 0 32zM192 160l256 0 0 64-256 0 0-64zM448 288l0 64-256 0 0-64 256 0zM0 416l448 0 0 64L0 480l0-64zm128-64L0 256l128-96 0 192z" />
    </Icon>
);

export default Outdent;