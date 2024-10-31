
import { Icon } from "../../index";

/**
 * A component that renders the `page-caret-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-up?s=sharp-solid page-caret-up}
 * @preview ![page-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/page-caret-up.svg)
 */
const PageCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 112l0 400L0 512 0 0 272 0 384 112zM96 320l192 0 0-32-96-96L96 288l0 32z" />
    </Icon>
);

export default PageCaretUp;