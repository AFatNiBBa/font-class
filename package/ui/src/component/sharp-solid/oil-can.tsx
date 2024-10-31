
import { Icon } from "../../index";

/**
 * A component that renders the `oil-can` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oil-can?s=sharp-solid oil-can}
 * @preview ![oil-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/oil-can.svg)
 */
const OilCan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 128l64 0 0-64L160 64l0 64 64 0 0 32-80 0-48 0-48 0L0 160l0 48 0 96 96 42.7L96 416l288 0 48 0L640 192l-32-32L448 192l-64-32-96 0 0-32zM96 208l0 86.1L48 272.8 48 208l48 0z" />
    </Icon>
);

export default OilCan;