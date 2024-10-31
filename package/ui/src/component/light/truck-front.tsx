
import { Icon } from "../../index";

/**
 * A component that renders the `truck-front` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-front?s=light truck-front}
 * @preview ![truck-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/truck-front.svg)
 */
const TruckFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 32C53.5 32 32 53.5 32 80l0 168.4c10.8-9.7 23.9-17 38.3-21l31.3-88.8c9-25.6 33.2-42.7 60.4-42.7L350 96c27.1 0 51.3 17.1 60.4 42.7l31.3 88.8c14.4 4 27.4 11.3 38.3 21L480 80c0-26.5-21.5-48-48-48L80 32zM32 320l0 48c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-48c0-35.3-28.7-64-64-64L96 256c-35.3 0-64 28.7-64 64zM0 320L0 80C0 35.8 35.8 0 80 0L432 0c44.2 0 80 35.8 80 80l0 240 0 48c0 26.2-12.6 49.4-32 64l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-49.6c-5.2 1-10.5 1.6-16 1.6L80 448c-5.5 0-10.8-.6-16-1.6L64 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64C12.6 417.4 0 394.2 0 368l0-48zm105.4-96l301.1 0-26.3-74.7C375.7 136.6 363.6 128 350 128L162 128c-13.6 0-25.7 8.6-30.2 21.3L105.4 224zM80 328a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm328-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TruckFront;