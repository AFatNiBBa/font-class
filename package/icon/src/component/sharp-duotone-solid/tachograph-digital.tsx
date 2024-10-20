
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tachograph-digital` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tachograph-digital?s=sharp-duotone-solid tachograph-digital}
 * @preview ![tachograph-digital](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tachograph-digital.svg)
 */
const TachographDigital: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l640 0 0-384L0 64zm64 64l288 0 0 128L64 256l0-128zm0 160l32 0 0 32-32 0 0-32zm0 64l16 0 256 0 16 0 0 32-16 0L80 384l-16 0 0-32zm64-64l32 0 0 32-32 0 0-32zm64 0l32 0 0 32-32 0 0-32zm64 0l32 0 0 32-32 0 0-32zm64 0l32 0 0 32-32 0 0-32zm64 64l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32z" />
        <path d="M352 128L64 128l0 128 288 0 0-128zM80 352l-16 0 0 32 16 0 256 0 16 0 0-32-16 0L80 352zm320 0l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0z" />
    </Icon>
);

export default TachographDigital;