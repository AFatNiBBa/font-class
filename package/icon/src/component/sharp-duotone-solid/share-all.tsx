
import { Icon, generic } from "../../index";

/**
 * A component that renders the `share-all` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-all?s=sharp-duotone-solid share-all}
 * @preview ![share-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/share-all.svg)
 */
const ShareAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M352 32l0 88 96 88-96 88 0 88 32 0L576 208 384 32l-32 0z" />
        <path d="M448 208L256 384l-32 0 0-96-16 0c-61.9 0-112 50.1-112 112c0 48 32 80 32 80s-128-48-128-176c0-97.2 78.8-176 176-176l48 0 0-96 32 0L448 208z" />
    </Icon>
);

export default ShareAll;