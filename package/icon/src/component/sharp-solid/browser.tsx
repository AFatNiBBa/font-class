
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=sharp-solid browser}
 * @preview ![browser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/browser.svg)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 448L0 480 0 32zm160 72l0 48 288 0 0-48-288 0zm-32-8L64 96l0 64 64 0 0-64z" />
    </Icon>
);

export default Browser;