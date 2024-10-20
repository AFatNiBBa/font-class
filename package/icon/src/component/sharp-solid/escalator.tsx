
import { Icon } from "../../index";

/**
 * A component that renders the `escalator` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=sharp-solid escalator}
 * @preview ![escalator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/escalator.svg)
 */
const Escalator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM424 160l24 0 96 0 64 0 0 128-64 0-72 0L234.1 496.2 216 512l-24 0-96 0-64 0 0-128 64 0 72 0L405.9 175.8 424 160zM320 128l0 80.4-128 112L192 128l128 0z" />
    </Icon>
);

export default Escalator;