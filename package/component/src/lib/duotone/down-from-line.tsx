
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-from-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-line?s=duotone down-from-line}
 * @preview ![down-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/down-from-line.svg)
 */
const DownFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 46.3 14.3 32 32 32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64z" />
        <path d="M164.7 468.7L41.9 345.9c-6.4-6.4-9.9-15-9.9-24C32 303.2 47.2 288 65.9 288l62.1 0 0-128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 128 62.1 0c18.7 0 33.9 15.2 33.9 33.9c0 9-3.6 17.6-9.9 24L219.3 468.7c-7.2 7.2-17.1 11.3-27.3 11.3s-20.1-4.1-27.3-11.3z" />
    </Icon>
);

export default DownFromLine;