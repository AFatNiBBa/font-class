
import { Icon } from "../../index";

/**
 * A component that renders the `billboard` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/billboard?s=sharp-thin billboard}
 * @preview ![billboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/billboard.svg)
 */
const Billboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M424 8l0-8L408 0l0 8 0 24L232 32l0-24 0-8L216 0l0 8 0 24L48 32 32 32l0 16 0 320L0 368l0 16 32 0 16 0 264 0 0 120 0 8 16 0 0-8 0-120 264 0 16 0 32 0 0-16-32 0 0-320 0-16-16 0L424 32l0-24zM328 368l-16 0L48 368 48 48l168 0 0 80-24 0-8 0 0 16 8 0 32 0 32 0 8 0 0-16-8 0-24 0 0-80 176 0 0 80-24 0-8 0 0 16 8 0 32 0 32 0 8 0 0-16-8 0-24 0 0-80 168 0 0 320-264 0z" />
    </Icon>
);

export default Billboard;