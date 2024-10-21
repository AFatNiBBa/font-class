
import { Icon } from "../../index";

/**
 * A component that renders the `air-conditioner` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/air-conditioner?s=light air-conditioner}
 * @preview ![air-conditioner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/air-conditioner.svg)
 */
const AirConditioner: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 128c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 256c-35.3 0-64-28.7-64-64L0 64zm112 64l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-352 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 288l0 144c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-29.6 16.1-55.5 40-69.3c7.6-4.4 17.4-1.8 21.9 5.8s1.8 17.4-5.8 21.9c-14.4 8.3-24 23.8-24 41.6c0 26.5 21.5 48 48 48s48-21.5 48-48l0-144 32 0zm64 112l0-112 32 0 0 112c0 26.5 21.5 48 48 48s48-21.5 48-48c0-17.7-9.6-33.3-24-41.6c-7.6-4.4-10.3-14.2-5.8-21.9s14.2-10.3 21.9-5.8c23.9 13.8 40 39.7 40 69.3c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
    </Icon>
);

export default AirConditioner;