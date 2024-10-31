
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-goggles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-goggles?s=sharp-duotone-solid head-side-goggles}
 * @preview ![head-side-goggles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/head-side-goggles.svg)
 */
const HeadSideGoggles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 192c.1 3.2 0 6.5 0 9.7c0 53.5 21.3 104.8 59.1 142.6l4.9 4.9L96 480l0 32 32 0 160 0 32 0 0-32 0-32 96 0 32 0 0-32 0-96 32 0 32 0 0-32 0-16 0-11.2-7-8.8-22.4-28-2.6 0-32 0-32 0-64 0-48 0c-26.2 0-49.4-12.6-64-32L32 192zm13.9-64l179.7 0C233 91.5 265.3 64 304 64l48 0 47.1 0C364 24.7 312.9 0 256 0L233.7 0C148.3 0 75.3 53.1 45.9 128z" />
        <path d="M304 64l112 0 0 160-112 0c-26.2 0-49.4-12.6-64-32L32 192 0 192l0-64 32 0 193.6 0C233 91.5 265.3 64 304 64zM512 224l-64 0 0-160 64 0 0 160z" />
    </Icon>
);

export default HeadSideGoggles;