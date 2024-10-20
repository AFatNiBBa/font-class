
import { Icon } from "../../index";

/**
 * A component that renders the `page-caret-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-down?s=sharp-light page-caret-down}
 * @preview ![page-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/page-caret-down.svg)
 */
const PageCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 125.3L352 480 32 480 32 32l226.7 0L352 125.3zM384 112L272 0 32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-368zM192 306.7L141.3 256l101.5 0L192 306.7zm0 45.3l22.6-22.6L288 256l0-32-32 0-128 0-32 0 0 32 73.4 73.4L192 352z" />
    </Icon>
);

export default PageCaretDown;