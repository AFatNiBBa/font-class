
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree-christmas` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-christmas?s=sharp-duotone-solid tree-christmas}
 * @preview ![tree-christmas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tree-christmas.svg)
 */
const TreeChristmas: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 480l0 32 448 0 0-32L368 352l56 0 0-32L252.6 105.7c-.6 .3-1.3 .6-1.9 1c-8.9 17.8-17.8 35.6-26.7 53.3c-8.9-17.8-17.8-35.6-26.7-53.3c-.6-.3-1.3-.6-1.9-.9L24 320l0 32 56 0L0 480zM184 288a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm80 128c0-.4 0-.8 0 0z" />
        <path d="M144 81.3l53.3-28L224 0l26.7 53.3L304 80l-53.3 26.7L224 160l-26.7-53.3L144 81.3zM288 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TreeChristmas;