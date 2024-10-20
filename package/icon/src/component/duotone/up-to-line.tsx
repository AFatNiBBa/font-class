
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-line?s=duotone up-to-line}
 * @preview ![up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/up-to-line.svg)
 */
const UpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 46.3 14.3 32 32 32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64z" />
        <path d="M219.3 139.3L342.1 262.1c6.4 6.4 9.9 15 9.9 24c0 18.7-15.2 33.9-33.9 33.9L256 320l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128-62.1 0C47.2 320 32 304.8 32 286.1c0-9 3.6-17.6 9.9-24L164.7 139.3c7.2-7.2 17.1-11.3 27.3-11.3s20.1 4.1 27.3 11.3z" />
    </Icon>
);

export default UpToLine;