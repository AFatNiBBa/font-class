
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-line?s=duotone down-to-line}
 * @preview ![down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/down-to-line.svg)
 */
const DownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 448c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z" />
        <path d="M219.3 372.7L342.1 249.9c6.4-6.4 9.9-15 9.9-24c0-18.7-15.2-33.9-33.9-33.9L256 192l0-128c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 128-62.1 0C47.2 192 32 207.2 32 225.9c0 9 3.6 17.6 9.9 24L164.7 372.7c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3z" />
    </Icon>
);

export default DownToLine;