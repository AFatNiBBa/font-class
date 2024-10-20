
import { Icon, generic } from "../../index";

/**
 * A component that renders the `oven` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oven?s=duotone oven}
 * @preview ![oven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/oven.svg)
 */
const Oven: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l448 0 0 32-64 0L64 192 0 192l0-32zm64 96l320 0 0 192L64 448l0-192zm32 48c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-224 0c-8.8 0-16 7.2-16 16z" />
        <path d="M96 0L352 0c53 0 96 43 96 96l0 64L0 160 0 96C0 43 43 0 96 0zM80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM200 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM392 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM64 256l0 192 320 0 0-192L64 256zM0 192l64 0 320 0 64 0 0 64 0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256l0-64z" />
    </Icon>
);

export default Oven;