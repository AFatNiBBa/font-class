
import { Icon } from "../../index";

/**
 * A component that renders the `broom-wide` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom-wide?s=sharp-regular broom-wide}
 * @preview ![broom-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/broom-wide.svg)
 */
const BroomWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 144L480 0l32 32L368 176l48 48L265.7 469.9 240 512l-34.9-34.9L34.9 306.9 0 272l42.1-25.7L288 96l48 48zM77 281.2L102.9 307 160 288l-19 57.1L230.8 435l89.6-146.6-96.8-96.8L77 281.2z" />
    </Icon>
);

export default BroomWide;