
import { Icon, generic } from "../../index";

/**
 * A component that renders the `merge` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/merge?s=sharp-duotone-solid merge}
 * @preview ![merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/merge.svg)
 */
const Merge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384l0 64 32 0 128 0 15.4 0 9.6-12L303.4 288 288 288l-15.4 0L263 276c-5.3-6.7-10.7-13.3-16-20L144.6 384 32 384 0 384z" />
        <path d="M160 64l15.4 0L185 76 303.4 224l80.6 0 0-64 32 0 96 96-96 96-32 0 0-64-96 0-15.4 0L263 276 144.6 128 32 128 0 128 0 64l32 0 128 0z" />
    </Icon>
);

export default Merge;