
import { Icon } from "../../index";

/**
 * A component that renders the `starship` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starship?s=sharp-regular starship}
 * @preview ![starship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/starship.svg)
 */
const Starship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 32l24 0 208 0 24 0 0 24 0 80 0 24-24 0-67.2 0 37.7 26.1 70.1-8.4C302.6 110.7 369.9 64 448 64c106 0 192 86 192 192s-86 192-192 192c-78.1 0-145.4-46.7-175.3-113.7l-70.1-8.4L164.8 352l67.2 0 24 0 0 24 0 80 0 24-24 0L24 480 0 480l0-24 0-80 0-24 24 0 56.5 0 50.1-34.7-45.5-5.5L64 309.3 64 288l0-64 0-21.3 21.1-2.5 45.5-5.5L80.5 160 24 160 0 160l0-24L0 56 0 32zM48 80l0 32 160 0 0-32L48 80zm64 165.3l0 21.4 146.1 17.5c-1.4-9.2-2.1-18.6-2.1-28.2s.7-19 2.1-28.2L112 245.3zM48 432l160 0 0-32L48 400l0 32zm400-32a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm32-144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-112 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default Starship;