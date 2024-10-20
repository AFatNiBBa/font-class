
import { Icon } from "../../index";

/**
 * A component that renders the `hospitals` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospitals?s=sharp-solid hospitals}
 * @preview ![hospitals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hospitals.svg)
 */
const Hospitals: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 0L256 0l0 64 64 0 0 448 256 0 0-128-112 0-16 0 0-32 16 0 112 0 0-64-112 0-16 0 0-32 16 0 112 0L576 0zM408 80l48 0 0 40 40 0 0 48-40 0 0 40-48 0 0-40-40 0 0-48 40 0 0-40zM0 96L0 384l144 0 16 0 0 32-16 0L0 416l0 96 288 0 0-416L0 96zm120 80l48 0 0 40 40 0 0 48-40 0 0 40-48 0 0-40-40 0 0-48 40 0 0-40z" />
    </Icon>
);

export default Hospitals;