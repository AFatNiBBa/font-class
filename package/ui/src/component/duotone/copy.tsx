
import { Icon, generic } from "../../index";

/**
 * A component that renders the `copy` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=duotone copy}
 * @preview ![copy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/copy.svg)
 */
const Copy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 176L0 464c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-48-64 0 0 32L64 448l0-256 64 0 0-64-80 0c-26.5 0-48 21.5-48 48z" />
        <path d="M160 48c0-26.5 21.5-48 48-48H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48z" />
    </Icon>
);

export default Copy;