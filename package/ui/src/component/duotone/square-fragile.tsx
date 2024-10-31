
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-fragile` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-fragile?s=duotone square-fragile}
 * @preview ![square-fragile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-fragile.svg)
 */
const SquareFragile: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm128 22.3C128 106 138 96 150.3 96L176 96l64 0 57.7 0C310 96 320 106 320 118.3l0 89.7c0 47.6-34.6 87.1-80 94.7l0 81.3 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-81.3c-45.4-7.6-80-47.1-80-94.7l0-89.7z" />
        <path d="M150.3 96C138 96 128 106 128 118.3l0 89.7c0 47.6 34.6 87.1 80 94.7l0 81.3-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-81.3c45.4-7.6 80-47.1 80-94.7l0-89.7C320 106 310 96 297.7 96L240 96l32 64-48 32 32 64-80-64 32-32L176 96l-25.7 0z" />
    </Icon>
);

export default SquareFragile;