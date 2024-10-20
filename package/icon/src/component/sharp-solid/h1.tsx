
import { Icon } from "../../index";

/**
 * A component that renders the `h1` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h1?s=sharp-solid h1}
 * @preview ![h1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/h1.svg)
 */
const H1: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 96l0-32L0 64 0 96 0 256 0 416l0 32 64 0 0-32 0-128 192 0 0 128 0 32 64 0 0-32 0-160 0-160 0-32-64 0 0 32 0 128L64 224 64 96zm341 61.2l43-19.1L448 384l-32 0-32 0 0 64 32 0 64 0 64 0 32 0 0-64-32 0-32 0 0-288 0-32-32 0-16 0-6.8 0L451 66.8 384 96.5l0 70 21-9.3z" />
    </Icon>
);

export default H1;