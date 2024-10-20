
import { Icon } from "../../index";

/**
 * A component that renders the `clapperboard` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=sharp-thin clapperboard}
 * @preview ![clapperboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clapperboard.svg)
 */
const Clapperboard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 192l480 0 0 272L16 464l0-272zm339.3-16L477.7 53.7l5.7-5.7L496 48l0 128-140.7 0zm-22.6 0l-129.4 0L325.7 53.7l5.7-5.7 129.4 0L338.3 170.3l-5.7 5.7zm-152 0L51.3 176 173.7 53.7l5.7-5.7 129.4 0L186.3 170.3l-5.7 5.7zm-152 0L16 176 16 48l140.7 0L34.3 170.3 28.7 176zM512 184l0-8 0-128 0-16-16 0L16 32 0 32 0 48 0 176l0 8 0 8L0 464l0 16 16 0 480 0 16 0 0-16 0-272 0-8z" />
    </Icon>
);

export default Clapperboard;