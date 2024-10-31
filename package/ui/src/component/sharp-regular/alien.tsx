
import { Icon } from "../../index";

/**
 * A component that renders the `alien` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alien?s=sharp-regular alien}
 * @preview ![alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/alien.svg)
 */
const Alien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48C126.8 48 48 126.8 48 224c0 67.2 43.3 127.2 96 174.2c25.5 22.8 51.2 40.7 70.6 53c3.3 2.1 6.5 4 9.4 5.8c2.9-1.8 6-3.7 9.4-5.8c19.4-12.3 45.1-30.2 70.6-53c52.7-47 96-106.9 96-174.2c0-97.2-78.8-176-176-176zM0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 176-224 288-224 288S0 400 0 224zm240 80c0-44.2 35.8-80 80-80l48 0 0 16c0 44.2-35.8 80-80 80l-48 0 0-16zM128 224c44.2 0 80 35.8 80 80l0 16-48 0c-44.2 0-80-35.8-80-80l0-16 48 0z" />
    </Icon>
);

export default Alien;