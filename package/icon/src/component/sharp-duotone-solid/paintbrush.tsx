
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paintbrush` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paintbrush?s=sharp-duotone-solid paintbrush}
 * @preview ![paintbrush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/paintbrush.svg)
 */
const Paintbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 448l0 64 32 0 144 0c2.7-.1 5.3 0 8 0c66.3 0 120-53.7 120-120c0-2.8-.1-5.5-.2-8.3C271.8 346.5 239.9 309.2 208 272l-24 0c-66.3 0-120 53.7-120 120l0 56-32 0L0 448z" />
        <path d="M240 192L512 0l64 64L384 352l-80 32L208 272l32-80z" />
    </Icon>
);

export default Paintbrush;