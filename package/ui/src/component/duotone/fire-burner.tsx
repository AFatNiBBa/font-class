
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire-burner` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-burner?s=duotone fire-burner}
 * @preview ![fire-burner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fire-burner.svg)
 */
const FireBurner: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64c0 17.7 14.3 32 32 32l576 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-104c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l24 0 0 80L80 384l0-80 24 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 104c-17.7 0-32 14.3-32 32zm224 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M358 34.5L345.7 48.3l-19-19.9c-2-2.1-4-4.4-6-6.7C311.8 11.4 302.1 .4 288 0c-7.3-.2-14.6 2.3-20.3 7.5c-23.4 21.1-50 48.9-70.9 80.2C176 118.8 160 154.8 160 192.2C160 280.7 230.4 352 320 352c88.7 0 160-71.2 160-159.8c0-30-11-60.9-26.2-88.1c-15.2-27.4-35.3-52.3-55-70.6c-5.6-5.2-12.8-7.8-19.9-7.8c-7.6 0-15.5 2.8-20.9 8.9zM320 304.2c-35.3 0-64-28.7-64-64c0-36.5 37-73 54.8-88.4c5.4-4.7 13.1-4.7 18.5 0C347 167.1 384 203.6 384 240.2c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default FireBurner;