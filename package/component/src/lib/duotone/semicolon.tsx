
import { Icon, generic } from "../../index";

/**
 * A component that renders the `semicolon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/semicolon?s=duotone semicolon}
 * @preview ![semicolon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/semicolon.svg)
 */
const Semicolon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M9.5 472c0 21.5 17.5 40 40.1 40c14 0 26.9-7.3 34.2-19.2L150.8 383c6-9.8 9.2-21.2 9.2-32.7c0-34.2-27.7-62.3-61.9-62.3c-29.2 0-54.4 20.4-60.6 49L10.4 463.6c-.6 2.9-.9 5.7-.9 8.5z" />
        <path d="M32 128a64 64 0 1 1 128 0A64 64 0 1 1 32 128z" />
    </Icon>
);

export default Semicolon;