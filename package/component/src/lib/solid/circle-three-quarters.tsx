
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters?s=solid circle-three-quarters}
 * @preview ![circle-three-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-three-quarters.svg)
 */
const CircleThreeQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32c0-17.7-14.4-32.2-31.9-30C97.8 17.7 0 125.4 0 256C0 397.4 114.6 512 256 512c130.6 0 238.3-97.8 254-224.1c2.2-17.5-12.4-31.9-30-31.9H256V32z" />
    </Icon>
);

export default CircleThreeQuarters;