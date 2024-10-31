
import { Icon, generic } from "../../index";

/**
 * A component that renders the `starfighter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter?s=duotone starfighter}
 * @preview ![starfighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/starfighter.svg)
 */
const Starfighter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144c0 13.3 10.7 24 24 24l0 280c0 13.3 10.7 24 24 24s24-10.7 24-24l0-4 0-92 0-184c13.3 0 24-10.7 24-24s-10.7-24-24-24l0-24c0-13.3-10.7-24-24-24S24 82.7 24 96l0 24c-13.3 0-24 10.7-24 24zM128 320l0 32 0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64 0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm160-64l0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm128 64l0 32 0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64 0-32c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zM544 144c0 13.3 10.7 24 24 24l0 184 0 92 0 4c0 13.3 10.7 24 24 24s24-10.7 24-24l0-280c13.3 0 24-10.7 24-24s-10.7-24-24-24l0-24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24c-13.3 0-24 10.7-24 24z" />
        <path d="M353.8 14c-1-8-7.8-14-15.9-14L302.1 0c-8.1 0-14.9 6-15.9 14L256 256l0 96-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-56 0 0 92 88 26.4 0 9.6c0 17.7 14.3 32 32 32s32-14.3 32-32l48 0 96 0 48 0c0 17.7 14.3 32 32 32s32-14.3 32-32l0-9.6L568 444l0-92-56 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0 0-96L353.8 14zM288 256c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48z" />
    </Icon>
);

export default Starfighter;