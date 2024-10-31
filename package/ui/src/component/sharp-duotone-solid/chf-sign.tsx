
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chf-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chf-sign?s=sharp-duotone-solid chf-sign}
 * @preview ![chf-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chf-sign.svg)
 */
const ChfSign: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 32l0 32 0 384 0 32 64 0 0-32 0-160 96 0 0 160 0 32 64 0 0-32 0-384 0-32-64 0 0 32 0 160-96 0 0-160 0-32-64 0z" />
        <path d="M80 96c-8.8 0-16 7.2-16 16l0 272 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 64 0 0 16c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-16L0 112C0 67.8 35.8 32 80 32s80 35.8 80 80l0 16-64 0 0-16c0-8.8-7.2-16-16-16zM448 32l32 0 128 0 32 0 0 64-32 0-96 0 0 128 64 0 32 0 0 64-32 0-64 0 0 160 0 32-64 0 0-32 0-384 0-32z" />
    </Icon>
);

export default ChfSign;