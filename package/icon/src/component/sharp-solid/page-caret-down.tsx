
import { Icon } from "../../index";

/**
 * A component that renders the `page-caret-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-down?s=sharp-solid page-caret-down}
 * @preview ![page-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/page-caret-down.svg)
 */
const PageCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 112l0 400L0 512 0 0 272 0 384 112zM96 224l0 32 96 96 96-96 0-32L96 224z" />
    </Icon>
);

export default PageCaretDown;