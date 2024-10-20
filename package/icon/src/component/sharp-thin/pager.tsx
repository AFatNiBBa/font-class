
import { Icon } from "../../index";

/**
 * A component that renders the `pager` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=sharp-thin pager}
 * @preview ![pager](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pager.svg)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 80l0 352L16 432 16 80l480 0zM16 64L0 64 0 80 0 432l0 16 16 0 480 0 16 0 0-16 0-352 0-16-16 0L16 64zM64 320l0 16 8 0 80 0 8 0 0-16-8 0-80 0-8 0zm128 0l0 16 8 0 80 0 8 0 0-16-8 0-80 0-8 0zM80 144l352 0 0 96L80 240l0-96zM64 128l0 16 0 96 0 16 16 0 352 0 16 0 0-16 0-96 0-16-16 0L80 128l-16 0z" />
    </Icon>
);

export default Pager;