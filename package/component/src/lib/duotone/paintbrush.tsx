
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paintbrush` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paintbrush?s=duotone paintbrush}
 * @preview ![paintbrush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/paintbrush.svg)
 */
const Paintbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 480c0 17.7 14.3 32 32 32l143.9 0c.1-.2 .2-.3 .3-.3c2.6 .2 5.2 .3 7.9 .3c66.3 0 120-53.7 120-120c0-2.8-.1-5.5-.2-8.3l-.6-.6L208 272c-.5 0-1.1 0-1.7 0L184 272c-66.3 0-120 53.7-120 120c0 6.2 .5 12.4 1.4 18.4C68.1 428.2 56.1 448 38 448l-6 0c-17.7 0-32 14.3-32 32z" />
        <path d="M411 331.6c-19.9 32.6-55.3 52.4-93.4 52.4c-4.8 0-9.6-.3-14.3-.9L208 272c.2-35.9 17.8-69.4 47.1-90.1L500.2 8.8C518.8-4.3 544.1-2.6 560.7 13s20 40.6 8.2 60.1L411 331.6z" />
    </Icon>
);

export default Paintbrush;