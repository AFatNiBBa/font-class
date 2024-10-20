
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=sharp-light browser}
 * @preview ![browser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/browser.svg)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 64l0 64 320 0 0-64L160 64zm-32 0L32 64l0 64 96 0 0-64zM32 160l0 288 448 0 0-288-336 0L32 160zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32z" />
    </Icon>
);

export default Browser;