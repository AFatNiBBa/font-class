
import { Icon } from "../../index";

/**
 * A component that renders the `escalator` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=sharp-regular escalator}
 * @preview ![escalator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/escalator.svg)
 */
const Escalator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm206.9 64l9 0 24 0 104 0 64 0 24 0 0 24 0 128 0 24-24 0-64 0-70.9 0L249.9 490.2l-18.1 15.8-6.8 5.9-9 0-24 0L88 512l-64 0L0 512l0-24L0 360l0-24 24 0 64 0 70.9 0L390.1 133.8l18.1-15.8 6.8-5.9zm18 48l-11.3 9.9L183.8 378.1 177 384l-9 0-80 0-40 0 0 80 40 0 104 0 15 0 11.3-9.9L456.2 245.9 463 240l9 0 80 0 40 0 0-80-40 0-104 0-15 0zM320 128l0 24.5-128 112L192 128l128 0z" />
    </Icon>
);

export default Escalator;