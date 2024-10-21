
import { Icon } from "../../index";

/**
 * A component that renders the `ditto` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ditto?s=sharp-light ditto}
 * @preview ![ditto](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ditto.svg)
 */
const Ditto: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M58.9 256L32 101.2 32 64l64 0 0 37.2L69.1 256l-10.2 0zM128 32L96 32 32 32 0 32 0 64l0 40L32 288l64 0 32-184 0-40 0-32zM250.9 256L224 101.2 224 64l64 0 0 37.2L261.1 256l-10.2 0zM320 32l-32 0-64 0-32 0 0 32 0 40 32 184 64 0 32-184 0-40 0-32z" />
    </Icon>
);

export default Ditto;