
import { Icon } from "../../index";

/**
 * A component that renders the `page-caret-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-up?s=sharp-regular page-caret-up}
 * @preview ![page-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/page-caret-up.svg)
 */
const PageCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 131.9L336 464 48 464 48 48l204.1 0L336 131.9zM384 112L272 0 48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-352zM96 320l192 0 0-32-96-96L96 288l0 32z" />
    </Icon>
);

export default PageCaretUp;