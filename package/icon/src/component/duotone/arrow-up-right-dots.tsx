
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-right-dots` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right-dots?s=duotone arrow-up-right-dots}
 * @preview ![arrow-up-right-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up-right-dots.svg)
 */
const ArrowUpRightDots: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 464a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM224 336a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM352 208a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM480 80a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm0 128a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M128 32c0-17.7 14.3-32 32-32L288 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-50.7L54.6 310.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 64 160 64c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default ArrowUpRightDots;