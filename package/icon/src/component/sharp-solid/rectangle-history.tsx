
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-history` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history?s=sharp-solid rectangle-history}
 * @preview ![rectangle-history](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rectangle-history.svg)
 */
const RectangleHistory: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 512l0-352L0 160 0 512l512 0zM464 80L48 80l0 48 416 0 0-48zM416 0L96 0l0 48 320 0 0-48z" />
    </Icon>
);

export default RectangleHistory;