
import { Icon } from "../../index";

/**
 * A component that renders the `escalator` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=sharp-thin escalator}
 * @preview ![escalator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/escalator.svg)
 */
const Escalator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M280 56a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm-96 0a56 56 0 1 1 112 0A56 56 0 1 1 184 56zm236.9 88l3 0 24 0 120 0 64 0 8 0 0 8 0 128 0 8-8 0-64 0-92.9 0L239.4 494.2 221.3 510l-2.3 2-3 0-24 0L72 512 8 512l-8 0 0-8L0 376l0-8 8 0 64 0 92.9 0L400.6 161.8 418.7 146l2.3-2zm6 16l-15.8 13.9L173.2 382l-2.3 2-3 0-96 0-56 0 0 112 56 0 120 0 21 0 15.8-13.9L466.8 274l2.3-2 3 0 96 0 56 0 0-112-56 0-120 0-21 0zM320 184.5l-16 14 0-38.5-128 0 0 150.5-16 14L160 160l0-16 16 0 128 0 16 0 0 16 0 24.5z" />
    </Icon>
);

export default Escalator;