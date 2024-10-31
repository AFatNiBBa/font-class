
import { Icon } from "../../index";

/**
 * A component that renders the `police-box` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/police-box?s=sharp-solid police-box}
 * @preview ![police-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/police-box.svg)
 */
const PoliceBox: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M208 0l0 16 0 16 112 0 0 32 32 0 0 384 32 0 0 64L0 512l0-64 32 0L32 64l32 0 0-32 112 0 0-16 0-16 32 0zM96 128l0 32 32 0 0-32-32 0zm0 48l0 32 32 0 0-32-32 0zm80-48l-32 0 0 32 32 0 0-32zm-32 48l0 32 32 0 0-32-32 0zm96-48l-32 0 0 32 32 0 0-32zm0 48l-32 0 0 32 32 0 0-32zm16-48l0 32 32 0 0-32-32 0zm32 48l-32 0 0 32 32 0 0-32zM96 240l0 80 80 0 0-80-80 0z" />
    </Icon>
);

export default PoliceBox;