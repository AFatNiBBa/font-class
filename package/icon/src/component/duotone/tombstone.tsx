
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=duotone tombstone}
 * @preview ![tombstone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tombstone.svg)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 192l0 256 384 0 0-256C416 86 330 0 224 0S32 86 32 192zm96 24c0-13.3 10.7-24 24-24l48 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 120c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-120-48 0c-13.3 0-24-10.7-24-24z" />
        <path d="M248 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0 0 120c0 13.3 10.7 24 24 24s24-10.7 24-24l0-120 48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-40zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default Tombstone;