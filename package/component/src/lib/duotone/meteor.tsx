
import { Icon, generic } from "../../index";

/**
 * A component that renders the `meteor` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meteor?s=duotone meteor}
 * @preview ![meteor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/meteor.svg)
 */
const Meteor: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3L480.8 234.3c6.5-11.1-2.2-25-15.1-24l-29.3 2.3L511.1 18.3c.6-1.5 .9-3.2 .9-4.8C512 6 506 0 498.5 0c-1.7 0-3.3 .3-4.8 .9L299.4 75.6l2.3-29.3c1-12.8-12.8-21.5-24-15.1L101.3 133.4C38.6 169.7 0 236.6 0 309zm320 11A128 128 0 1 1 64 320a128 128 0 1 1 256 0z" />
        <path d="M64 320a128 128 0 1 1 256 0A128 128 0 1 1 64 320zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm16 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Meteor;