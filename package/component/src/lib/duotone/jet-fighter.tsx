
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jet-fighter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jet-fighter?s=duotone jet-fighter}
 * @preview ![jet-fighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/jet-fighter.svg)
 */
const JetFighter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 48l0 144 192 0L280 48l-88 0zm0 272l0 144 88 0L384 320l-192 0z" />
        <path d="M160 24c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L184 0c-13.3 0-24 10.7-24 24zm32 168l-32 0-54.6-54.6c-6-6-14.1-9.4-22.6-9.4L48 128c-8.8 0-16 7.2-16 16l0 80c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 80c0 8.8 7.2 16 16 16l34.7 0c8.5 0 16.6-3.4 22.6-9.4L160 320l32 0 308.4 0c7.7 0 15.3-1.4 22.5-4.1L625 277.6c9-3.4 15-12 15-21.6s-6-18.2-15-21.6L522.9 196.1c-7.2-2.7-14.8-4.1-22.5-4.1L192 192zM80 240l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM184 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z" />
    </Icon>
);

export default JetFighter;