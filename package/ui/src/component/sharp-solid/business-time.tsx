
import { Icon } from "../../index";

/**
 * A component that renders the `business-time` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/business-time?s=sharp-solid business-time}
 * @preview ![business-time](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/business-time.svg)
 */
const BusinessTime: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0l24 0L360 0l24 0 0 24 0 72 128 0 0 96.7c-5.3-.5-10.6-.7-16-.7c-54.7 0-103.5 24.9-135.8 64l-8.2 0-160 0L0 256 0 96l128 0 0-72 0-24zM320 368c0 42.5 15.1 81.6 40.2 112L0 480 0 288l192 0 0 64 128.7 0c-.5 5.3-.7 10.6-.7 16zM336 48L176 48l0 48 160 0 0-48zm16 320a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 64 0 16 16 0 48 0 16 0 0-32-16 0-32 0 0-48 0-16z" />
    </Icon>
);

export default BusinessTime;