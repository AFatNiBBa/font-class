
import { Icon } from "../../index";

/**
 * A component that renders the `business-time` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/business-time?s=sharp-light business-time}
 * @preview ![business-time](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/business-time.svg)
 */
const BusinessTime: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 0L128 0l0 16 0 80L32 96 0 96l0 32L0 448l0 32 32 0 328.2 0c-8.1-9.8-15.2-20.6-21-32L32 448l0-160 144 0 0 48 0 32 32 0 112 0c0-10.9 1-21.6 2.9-32L208 336l0-48 131.2 0c5.9-11.4 12.9-22.2 21-32l-8.2 0-144 0-32 0L32 256l0-128 112 0 224 0 112 0 0 64.7c5.3-.5 10.6-.7 16-.7s10.7 .2 16 .7l0-64.7 0-32-32 0-96 0 0-80 0-16L368 0 144 0zM352 96L160 96l0-64 192 0 0 64zM496 256a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-224l-32 0 0 16 0 64 0 16 16 0 48 0 16 0 0-32-16 0-32 0 0-48 0-16z" />
    </Icon>
);

export default BusinessTime;