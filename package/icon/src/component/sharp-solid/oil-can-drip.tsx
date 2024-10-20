
import { Icon } from "../../index";

/**
 * A component that renders the `oil-can-drip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oil-can-drip?s=sharp-solid oil-can-drip}
 * @preview ![oil-can-drip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/oil-can-drip.svg)
 */
const OilCanDrip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 128l-64 0 0 32 96 0 64 32 160-32 32 32L432 416l-48 0L96 416l0-69.3L0 304l0-96 0-48 48 0 48 0 48 0 80 0 0-32-64 0 0-64 192 0 0 64zM48 208l0 64.8 48 21.3L96 208l-48 0zM592 448c-26.5 0-48-21.5-48-48c0-32 48-96 48-96s48 64 48 96s-21.5 48-48 48z" />
    </Icon>
);

export default OilCanDrip;