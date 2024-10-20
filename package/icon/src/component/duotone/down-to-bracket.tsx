
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-to-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-bracket?s=duotone down-to-bracket}
 * @preview ![down-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/down-to-bracket.svg)
 */
const DownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M251.3 340.7L374.1 217.9c6.4-6.4 9.9-15 9.9-24c0-18.7-15.2-33.9-33.9-33.9L288 160l0-128c0-17.7-14.3-32-32-32L192 0c-17.7 0-32 14.3-32 32l0 128-62.1 0C79.2 160 64 175.2 64 193.9c0 9 3.6 17.6 9.9 24L196.7 340.7c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3z" />
    </Icon>
);

export default DownToBracket;