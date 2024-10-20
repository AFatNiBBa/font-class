
import { Icon } from "../../index";

/**
 * A component that renders the `scalpel` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel?s=sharp-regular scalpel}
 * @preview ![scalpel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/scalpel.svg)
 */
const Scalpel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M459.1 83.6c3.2-3.6 4.9-8.3 4.9-13.1c0-10.4-7.9-19-18.2-19.8c-6.2-.5-12.3 1.9-16.5 6.6L266.9 240l55.3 0L459.1 83.6zm36.1 31.6L344 288l-119.8 0L160 288l42.7-48L393.5 25.3C407.7 9.4 428.5 1 449.8 2.8C485 5.7 512 35.2 512 70.5c0 16.4-6 32.4-16.8 44.7zM176 320l112 0C288 496 0 512 0 512L176 320z" />
    </Icon>
);

export default Scalpel;