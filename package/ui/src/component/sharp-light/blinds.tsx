
import { Icon } from "../../index";

/**
 * A component that renders the `blinds` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds?s=sharp-light blinds}
 * @preview ![blinds](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/blinds.svg)
 */
const Blinds: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L16 0 496 0l16 0 0 16 0 64 0 16-16 0L160 96l0 162.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L128 96 16 96 0 96 0 80 0 16 0 0zM32 32l0 32 448 0 0-32L32 32zM96 192l0 32-63 0L0 224l8-32 16-64 33 0L41 192l55 0zm96 32l0-32 279 0-16-64 33 0 16 64 8 32-33 0-287 0zM65.6 288c-1 5.2-1.6 10.5-1.6 16s.6 10.8 1.6 16L33 320 0 320l8-32 8-32 33 0-8 32 24.6 0zm156.8 32c1-5.2 1.6-10.5 1.6-16s-.6-10.8-1.6-16L471 288l-8-32 33 0 8 32 8 32-33 0-256.6 0zM144 384l327 0-8-32 33 0 8 32 8 32-33 0L33 416 0 416l8-32 8-32 33 0-8 32 103 0zM512 512l-33 0L33 512 0 512l8-32 8-32 33 0-8 32 430 0-8-32 33 0 8 32 8 32zM144 320a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Blinds;