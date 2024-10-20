
import { Icon, generic } from "../../index";

/**
 * A component that renders the `browser` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=sharp-duotone-solid browser}
 * @preview ![browser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/browser.svg)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224L0 480l512 0 0-256L0 224zM64 96l0 64 64 0 0-64L64 96z" />
        <path d="M0 32l512 0 0 192L0 224 0 32zM64 96l0 64 64 0 0-64L64 96zm384 8l-288 0 0 48 288 0 0-48z" />
    </Icon>
);

export default Browser;