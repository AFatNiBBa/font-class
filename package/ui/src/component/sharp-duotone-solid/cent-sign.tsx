
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cent-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cent-sign?s=sharp-duotone-solid cent-sign}
 * @preview ![cent-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cent-sign.svg)
 */
const CentSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M192 0l0 32 0 34.7c10.4-1.7 21.1-2.7 32-2.7c1.4 0 2.7 0 4.1 0s2.7 .1 4.1 .1c2.7 .1 5.4 .3 8 .5c5.3 .4 10.6 1.1 15.8 2L256 32l0-32L192 0zm0 445.3l0 34.7 0 32 64 0 0-32 0-34.7c-10.4 1.7-21.1 2.7-32 2.7c-1.4 0-2.7 0-4.1 0s-2.7-.1-4.1-.1c-2.7-.1-5.4-.3-8.1-.5c-5.3-.4-10.6-1.1-15.8-2z" />
        <path d="M224 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c41.9 0 79-20.1 102.4-51.2l51.2 38.4C342.6 417.8 286.8 448 224 448C118 448 32 362 32 256S118 64 224 64c62.8 0 118.6 30.2 153.6 76.8l-51.2 38.4C303 148.1 265.9 128 224 128z" />
    </Icon>
);

export default CentSign;