
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-check?s=duotone box-check}
 * @preview ![box-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/box-check.svg)
 */
const BoxCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5L0 160zM240 32l0 128 208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32z" />
        <path d="M448 160l-208 0 0-128-32 0 0 128L0 160 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256zM337 265L209 393c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 231c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </Icon>
);

export default BoxCheck;