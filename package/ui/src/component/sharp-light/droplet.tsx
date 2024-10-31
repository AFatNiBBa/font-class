
import { Icon } from "../../index";

/**
 * A component that renders the `droplet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=sharp-light droplet}
 * @preview ![droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/droplet.svg)
 */
const Droplet: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 320c0-18.5-8.9-46-26.5-80.1c-17-33-40-68.3-63.5-101c-23.4-32.6-47-62.1-64.7-83.4c-1.9-2.2-3.6-4.4-5.4-6.4c-1.7 2.1-3.5 4.2-5.4 6.4c-17.7 21.3-41.2 50.8-64.7 83.4c-23.5 32.7-46.5 68-63.5 101C40.9 274 32 301.5 32 320c0 88.4 71.6 160 160 160s160-71.6 160-160zM0 320C0 235.8 121 83.6 170.9 24.4C183.8 9.1 192 0 192 0s8.2 9.1 21.1 24.4C263 83.6 384 235.8 384 320c0 106-86 192-192 192S0 426 0 320zm192 80l0 32c-61.9 0-112-50.1-112-112l32 0c0 44.2 35.8 80 80 80z" />
    </Icon>
);

export default Droplet;