
import { Icon } from "../../index";

/**
 * A component that renders the `whale` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whale?s=sharp-solid whale}
 * @preview ![whale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/whale.svg)
 */
const Whale: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 0l24 104 104 24-80 80-80.8-11.5L90.6 255c-6.7 10.7-8.3 23.9-4.3 35.9c5.8 17.3 22 29 40.3 29l1.1 0c10.5 0 20.7-3.8 28.6-10.6l103.8-89C329.7 160.8 418.4 128 510.1 128L640 128l0 352-477.6 0C72.7 480 0 407.3 0 317.6c0-39.5 15.7-77.3 43.6-105.2L92 164 80 80 160 0zM400 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Whale;