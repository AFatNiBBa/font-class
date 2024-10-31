
import { Icon } from "../../index";

/**
 * A component that renders the `broom-wide` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom-wide?s=sharp-solid broom-wide}
 * @preview ![broom-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/broom-wide.svg)
 */
const BroomWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M328 136L464 0l48 48L376 184l40 40-37.8 61.9L226.1 133.8 288 96l40 40zM191 155.3L356.7 321 240 512 108 380l20-60L68 340 0 272 191 155.3z" />
    </Icon>
);

export default BroomWide;