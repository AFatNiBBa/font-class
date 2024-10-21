
import { Icon } from "../../index";

/**
 * A component that renders the `sickle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sickle?s=sharp-solid sickle}
 * @preview ![sickle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sickle.svg)
 */
const Sickle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 352l-43-43c-33.9-33.9-53-80-53-128C128 81 209 0 309 0l11 0C426 0 512 86 512 192l-22.7-31.2C463.3 125.1 421.9 104 377.8 104C301.7 104 240 165.7 240 241.8l0 9.8c0 18.8 3.6 37.4 10.6 54.8L256 320l-32 32zM0 448l88-88L64 336l48-48L224 400l-48 48-24-24L64 512 0 448z" />
    </Icon>
);

export default Sickle;