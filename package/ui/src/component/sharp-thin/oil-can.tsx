
import { Icon } from "../../index";

/**
 * A component that renders the `oil-can` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oil-can?s=sharp-thin oil-can}
 * @preview ![oil-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/oil-can.svg)
 */
const OilCan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M264 80l88 0 0-16L160 64l0 16 88 0 0 80-136 0-16 0-80 0L0 160l0 16L0 304l96 41.1L96 400l0 16 16 0 272 0 48 0L640 192l-32-32L448 192l-64-32-120 0 0-80zM16 176l80 0 0 151.7L16 293.4 16 176zm424.8 30.3l4.9 2.5 5.4-1.1 151.6-30.3 15 15L425 400l-41 0-272 0 0-48 0-17.4L112 176l268.2 0 60.6 30.3z" />
    </Icon>
);

export default OilCan;