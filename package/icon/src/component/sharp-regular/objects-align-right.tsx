
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-right?s=sharp-regular objects-align-right}
 * @preview ![objects-align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/objects-align-right.svg)
 */
const ObjectsAlignRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 512L512 0 464 0l0 512 48 0zM336 176L48 176l0-64 288 0 0 64zm48-64l0-48-48 0L48 64 0 64l0 48 0 64 0 48 48 0 288 0 48 0 0-48 0-64zM336 400l-160 0 0-64 160 0 0 64zm48-64l0-48-48 0-160 0-48 0 0 48 0 64 0 48 48 0 160 0 48 0 0-48 0-64z" />
    </Icon>
);

export default ObjectsAlignRight;