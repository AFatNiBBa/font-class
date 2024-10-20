
import { Icon } from "../../index";

/**
 * A component that renders the `stamp` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stamp?s=sharp-solid stamp}
 * @preview ![stamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/stamp.svg)
 */
const Stamp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 167.6c19.6-17.6 32-43.1 32-71.6c0-53-43-96-96-96s-96 43-96 96c0 28.4 12.4 54 32 71.6l0 88.4-80 0C50.1 256 0 306.1 0 368l0 48 32 0 0 32 0 64 64 0 320 0 64 0 0-64 0-32 32 0 0-48c0-61.9-50.1-112-112-112l-80 0 0-88.4zM416 416l0 32L96 448l0-32 320 0z" />
    </Icon>
);

export default Stamp;