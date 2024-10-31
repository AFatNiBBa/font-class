
import { Icon } from "../../index";

/**
 * A component that renders the `notdef` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=light notdef}
 * @preview ![notdef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/notdef.svg)
 */
const Notdef: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 452.5L172.3 256 32 59.5l0 392.9zM51.7 480l280.7 0L192 283.5 51.7 480zm160-224L352 452.5l0-392.9L211.7 256zM332.3 32L51.7 32 192 228.5 332.3 32zM0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 48z" />
    </Icon>
);

export default Notdef;