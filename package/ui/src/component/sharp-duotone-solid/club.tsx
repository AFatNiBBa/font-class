
import { Icon, generic } from "../../index";

/**
 * A component that renders the `club` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/club?s=sharp-duotone-solid club}
 * @preview ![club](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/club.svg)
 */
const Club: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288c0 70.7 57.3 128 128 128c38.2 0 72.5-16.8 96-43.3L224 256l0-32 64 0 0 32 0 116.7c23.5 26.6 57.8 43.3 96 43.3c70.7 0 128-57.3 128-128s-57.3-128-128-128c-1.4 0-2.7 0-4 .1c2.6-10.2 4-21 4-32.1C384 57.3 326.7 0 256 0S128 57.3 128 128c0 11.1 1.4 21.8 4 32.1c-1.3 0-2.7-.1-4-.1C57.3 160 0 217.3 0 288z" />
        <path d="M288 224l0 32 0 192 32 0 32 0 0 64-32 0-32 0-64 0-32 0-32 0 0-64 32 0 32 0 0-192 0-32 64 0z" />
    </Icon>
);

export default Club;