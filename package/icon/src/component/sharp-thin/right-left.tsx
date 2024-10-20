
import { Icon } from "../../index";

/**
 * A component that renders the `right-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left?s=sharp-thin right-left}
 * @preview ![right-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/right-left.svg)
 */
const RightLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 144l-11.3-11.3L400 32l-32 0-16 0 0 16 0 88-8 0L8 136l-8 0 0 16 8 0 336 0 8 0 0 88 0 16 16 0 32 0L500.7 155.3 512 144zM368 48l25.4 0 96 96-96 96L368 240l0-192zM160 464l0-88 344 0 8 0 0-16-8 0-344 0 0-88 0-16-16 0-32 0L11.3 356.7 0 368l11.3 11.3L112 480l32 0 16 0 0-16zm-41.4 0l-96-96 96-96 25.4 0 0 192-25.4 0z" />
    </Icon>
);

export default RightLeft;