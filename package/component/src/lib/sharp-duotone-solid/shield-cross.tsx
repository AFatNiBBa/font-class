
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-cross` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-cross?s=sharp-duotone-solid shield-cross}
 * @preview ![shield-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield-cross.svg)
 */
const ShieldCross: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16.6 113l1.2-20.5L36.9 85 224 12.4c0 49.2 0 98.4 0 147.6c-69 0-138.1 0-207.1 0c-1.1-17.3-1.1-33.2-.3-47zm9 111c66.1 0 132.3 0 198.4 0c0 90.9 0 181.9 0 273.5c-.3-.2-.6-.3-1-.5C136.8 453.4 84.2 383.9 53.9 313.9C40.7 283.6 31.6 253 25.6 224zM288 12.4C350.4 36.6 412.7 60.8 475.1 85l19.2 7.4 1.2 20.5c.8 13.8 .8 29.7-.3 47c-69.1 0-138.1 0-207.1 0c0-49.2 0-98.4 0-147.6zM288 224c66.1 0 132.3 0 198.4 0c-6 29-15.1 59.6-28.3 89.9C427.7 384.1 374.8 453.9 288 497.5c0-91.2 0-182.3 0-273.5z" />
        <path d="M288 12.4L267.6 4.5 256 0 244.4 4.5 224 12.4 224 160 16.9 160c1.3 19.8 4 41.4 8.7 64L224 224l0 273.5c6.3 3.1 12.7 6.1 19.3 9L256 512l12.7-5.5c6.6-2.9 13-5.9 19.3-9L288 224l198.4 0c4.7-22.6 7.4-44.2 8.7-64L288 160l0-147.6z" />
    </Icon>
);

export default ShieldCross;