
import { Icon } from "../../index";

/**
 * A component that renders the `stethoscope` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stethoscope?s=sharp-regular stethoscope}
 * @preview ![stethoscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/stethoscope.svg)
 */
const Stethoscope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M150.9 46l-22.5 8.4L80 72.6 80 200c0 57.4 46.6 104 104 104l8 0 8 0c57.4 0 104-46.6 104-104l0-127.4L255.6 54.5 233.1 46 250 1.1l22.5 8.4 64 24L352 39.4 352 56l0 144c0 78.5-59.5 143.1-135.8 151.1C219.9 414.1 272.1 464 336 464c66.3 0 120-53.7 120-120l0-75.7c-32.5-10.2-56-40.5-56-76.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3l0 75.7c0 92.8-75.2 168-168 168c-90.4 0-164.1-71.4-167.8-160.8C91.7 343.3 32 278.6 32 200L32 56l0-16.6 15.6-5.8 64-24L134 1.1 150.9 46zM480 160a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Stethoscope;