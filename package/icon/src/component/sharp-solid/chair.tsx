
import { Icon } from "../../index";

/**
 * A component that renders the `chair` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair?s=sharp-solid chair}
 * @preview ![chair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chair.svg)
 */
const Chair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M296 48l0 208-48 0 0-208-48 0 0 208-48 0 0-208-40 0 0 208-48 0L64 48 64 0l48 0L336 0l48 0 0 48 0 208-48 0 0-208-40 0zM0 384l0-32 32-64 384 0 32 64 0 32-32 0 0 96 0 32-64 0 0-32 0-96L96 384l0 96 0 32-64 0 0-32 0-96L0 384z" />
    </Icon>
);

export default Chair;