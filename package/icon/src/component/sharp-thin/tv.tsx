
import { Icon } from "../../index";

/**
 * A component that renders the `tv` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=sharp-thin tv}
 * @preview ![tv](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tv.svg)
 */
const Tv: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M624 16l0 416L16 432 16 16l608 0zM16 0L0 0 0 16 0 432l0 16 16 0 608 0 16 0 0-16 0-416 0-16L624 0 16 0zM96 496l0 16 8 0 432 0 8 0 0-16-8 0-432 0-8 0zM80 80l480 0 0 288L80 368 80 80zM64 64l0 16 0 288 0 16 16 0 480 0 16 0 0-16 0-288 0-16-16 0L80 64 64 64z" />
    </Icon>
);

export default Tv;