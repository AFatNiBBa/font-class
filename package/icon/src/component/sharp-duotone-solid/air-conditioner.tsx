
import { Icon, generic } from "../../index";

/**
 * A component that renders the `air-conditioner` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/air-conditioner?s=sharp-duotone-solid air-conditioner}
 * @preview ![air-conditioner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/air-conditioner.svg)
 */
const AirConditioner: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 128l0 32 16 0 416 0 16 0 0-32-16 0L80 128l-16 0zm0 288c0 53 43 96 96 96s96-43 96-96l0-192-64 0 0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-11.8 6.4-22.2 16-27.7l-32-55.4C83.4 349.4 64 380.4 64 416zM320 224l0 160c0 53 43 96 96 96s96-43 96-96c0-35.6-19.4-66.6-48-83.1l-32 55.4c9.6 5.6 16 15.9 16 27.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160-64 0z" />
        <path d="M576 0L0 0 0 224l576 0L576 0zM80 128l416 0 16 0 0 32-16 0L80 160l-16 0 0-32 16 0z" />
    </Icon>
);

export default AirConditioner;