
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-history` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history?s=sharp-thin rectangle-history}
 * @preview ![rectangle-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rectangle-history.svg)
 */
const RectangleHistory: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 144L16 144l0 352 480 0 0-352zm16-16l0 16 0 352 0 16-16 0L16 512 0 512l0-16L0 144l0-16 16 0 480 0 16 0zM464 64l0 16L48 80l0-16 416 0zM416 0l0 16L96 16 96 0 416 0z" />
    </Icon>
);

export default RectangleHistory;