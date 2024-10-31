
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hashtag-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag-lock?s=sharp-duotone-solid hashtag-lock}
 * @preview ![hashtag-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hashtag-lock.svg)
 */
const HashtagLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M3.1 384L16 384l74.2 0-16 96 64.9 0 16-96 95.1 0-16 96 64.9 0 16-96 4.9 0 0-96 11.1 0 16-96 38.5 0c14.5-14.2 32.9-24.6 53.5-29.2l5.8-34.8L432 128l-74.2 0 16-96-64.9 0-16 96-95.1 0 16-96-64.9 0-16 96L48 128l-2.2 0L35.1 192 48 192l74.2 0L100.9 320 16 320l-2.2 0L3.1 384zm162.7-64l21.3-128 95.1 0L260.9 320l-95.1 0z" />
        <path d="M432 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default HashtagLock;