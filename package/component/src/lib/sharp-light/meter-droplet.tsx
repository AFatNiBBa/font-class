
import { Icon } from "../../index";

/**
 * A component that renders the `meter-droplet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-droplet?s=sharp-light meter-droplet}
 * @preview ![meter-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/meter-droplet.svg)
 */
const MeterDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 480c49.7 0 95.5-16.2 132.7-43.5c2.8 10.8 6.9 21.1 12 30.7C359.5 495.5 309.7 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0C369.8 0 466.3 74.3 499.6 177l-23.6 36.3C456 110 365.1 32 256 32C132.3 32 32 132.3 32 256s100.3 224 224 224zM176 144l0 64 0 16-32 0 0-16 0-64 0-16 32 0 0 16zm96 0l0 64 0 16-32 0 0-16 0-64 0-16 32 0 0 16zm96 0l0 64 0 16-32 0 0-16 0-64 0-16 32 0 0 16zm93.3 209.1C452.6 366.4 448 382 448 397.9l0 2.1c0 44.2 35.8 80 80 80s80-35.8 80-80l0-2.1c0-15.9-4.6-31.5-13.3-44.8L528 250.6 461.3 353.1zm-26.8-17.5l74.4-114.3L528 192l19.1 29.3 74.4 114.3c12.1 18.5 18.5 40.2 18.5 62.3l0 2.1c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-2.1c0-22.1 6.4-43.7 18.5-62.3z" />
    </Icon>
);

export default MeterDroplet;