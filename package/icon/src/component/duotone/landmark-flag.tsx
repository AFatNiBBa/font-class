
import { Icon, generic } from "../../index";

/**
 * A component that renders the `landmark-flag` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-flag?s=duotone landmark-flag}
 * @preview ![landmark-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/landmark-flag.svg)
 */
const LandmarkFlag: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 3.1 .4 6.2 1.4 9.3C5.5 502.8 17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7c.9-3.1 1.4-6.2 1.4-9.3c0-10.5-5.2-20.6-14.2-26.6l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 192l-64 0 0 224-40 0 0-224-64 0 0 224-48 0 0-224-64 0 0 224-40 0 0-224-64 0 0 228.3c-.6 .3-1.2 .7-1.7 1.1l-48 32C5.2 459.4 0 469.5 0 480z" />
        <path d="M272 0l80 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-80 0 0 32 192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0 0-112c0-8.8 7.2-16 16-16l16 0z" />
    </Icon>
);

export default LandmarkFlag;