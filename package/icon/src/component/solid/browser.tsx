
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=solid browser}
 * @preview ![browser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/browser.svg)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm384 0c0-13.3-10.7-24-24-24l-240 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24z" />
    </Icon>
);

export default Browser;