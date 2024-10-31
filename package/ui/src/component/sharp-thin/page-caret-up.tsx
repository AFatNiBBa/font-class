
import { Icon } from "../../index";

/**
 * A component that renders the `page-caret-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-up?s=sharp-thin page-caret-up}
 * @preview ![page-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/page-caret-up.svg)
 */
const PageCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 118.6L368 496 16 496 16 16l249.4 0L368 118.6zm16-6.6L272 0 16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-384zM96 304l0 16 16 0 160 0 16 0 0-16 0-16-84.7-84.7L192 192l-11.3 11.3L96 288l0 16zm16-9.4l80-80 80 80 0 9.4-160 0 0-9.4z" />
    </Icon>
);

export default PageCaretUp;