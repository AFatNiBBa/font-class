
import { Icon } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=sharp-thin ramp-loading}
 * @preview ![ramp-loading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ramp-loading.svg)
 */
const RampLoading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 16l352 0 0 371.8L415.4 416l.6 0 0-16 0-384 0-16L400 0 48 0 32 0l0 16 0 384 0 16 .6 0L48 387.8 48 16zm96 272l-4.8 0-2.3 4.2L25 500.2 18.6 512 32 512l384 0 13.4 0L423 500.2l-112-208-2.3-4.2-4.8 0-160 0zM402.6 496L45.4 496 148.8 304l150.4 0L402.6 496z" />
    </Icon>
);

export default RampLoading;