
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=light browser}
 * @preview ![browser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/browser.svg)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 64l0 64 320 0 0-32c0-17.7-14.3-32-32-32L160 64zm-32 0L64 64C46.3 64 32 78.3 32 96l0 32 96 0 0-64zM32 160l0 256c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-256-336 0L32 160zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default Browser;