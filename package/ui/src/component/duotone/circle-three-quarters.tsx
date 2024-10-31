
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-three-quarters` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters?s=duotone circle-three-quarters}
 * @preview ![circle-three-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-three-quarters.svg)
 */
const CircleThreeQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0l0 256 256 0C512 114.6 397.4 0 256 0z" />
        <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256H256V0z" />
    </Icon>
);

export default CircleThreeQuarters;