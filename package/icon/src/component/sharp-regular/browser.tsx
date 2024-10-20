
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=sharp-regular browser}
 * @preview ![browser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/browser.svg)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 432l0-272L48 160l0 272 416 0zm48-272l0 272 0 48-48 0L48 480 0 480l0-48L0 160 0 96 0 80 0 32l48 0 16 0 384 0 16 0 48 0 0 48 0 16 0 64z" />
    </Icon>
);

export default Browser;