
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters?s=sharp-solid circle-three-quarters}
 * @preview ![circle-three-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-three-quarters.svg)
 */
const CircleThreeQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256H256V0z" />
    </Icon>
);

export default CircleThreeQuarters;