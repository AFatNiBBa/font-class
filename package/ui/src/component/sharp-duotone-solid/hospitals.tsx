
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hospitals` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospitals?s=sharp-duotone-solid hospitals}
 * @preview ![hospitals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hospitals.svg)
 */
const Hospitals: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M256 0L576 0l0 256-112 0-16 0 0 32 16 0 112 0 0 64-112 0-16 0 0 32 16 0 112 0 0 128-256 0 0-448-64 0 0-64zM368 120l0 48 40 0 0 40 48 0 0-40 40 0 0-48-40 0 0-40-48 0 0 40-40 0z" />
        <path d="M408 80l0 40-40 0 0 48 40 0 0 40 48 0 0-40 40 0 0-48-40 0 0-40-48 0zM288 96L0 96 0 384l144 0 16 0 0 32-16 0L0 416l0 96 288 0 0-416zM168 176l0 40 40 0 0 48-40 0 0 40-48 0 0-40-40 0 0-48 40 0 0-40 48 0z" />
    </Icon>
);

export default Hospitals;