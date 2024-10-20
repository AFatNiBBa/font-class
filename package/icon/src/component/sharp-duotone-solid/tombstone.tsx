
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=sharp-duotone-solid tombstone}
 * @preview ![tombstone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tombstone.svg)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 192l0 256 384 0 0-256C416 86 330 0 224 0S32 86 32 192zm96 0l24 0 48 0 0-40 0-24 48 0 0 24 0 40 48 0 24 0 0 48-24 0-48 0 0 120 0 24-48 0 0-24 0-120-48 0-24 0 0-48z" />
        <path d="M248 152l0-24-48 0 0 24 0 40-48 0-24 0 0 48 24 0 48 0 0 120 0 24 48 0 0-24 0-120 48 0 24 0 0-48-24 0-48 0 0-40zM32 448L0 448l0 64 32 0 384 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default Tombstone;