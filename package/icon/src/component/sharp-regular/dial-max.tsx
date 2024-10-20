
import { Icon } from "../../index";

/**
 * A component that renders the `dial-max` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-max?s=sharp-regular dial-max}
 * @preview ![dial-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dial-max.svg)
 */
const DialMax: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0L256 0l0 64 64 0 0-64zM128 64L64 64l0 64 64 0 0-64zm384 0l-64 0 0 64 64 0 0-64zm0 192l0 64 64 0 0-64-64 0zm0 192l-64 0 0 64 64 0 0-64zM64 448l0 64 64 0 0-64-64 0zM0 256l0 64 64 0 0-64L0 256zm271 49l77.4 77.4c-43.4 27.8-101.7 22.8-139.6-15.1c-43.7-43.7-43.7-114.7 0-158.4s114.7-43.7 158.4 0c37.9 37.9 43 96.2 15.1 139.6L305 271l-17-17L254.1 288l17 17zm130.1 96.2A160 160 0 1 0 174.9 174.9 160 160 0 1 0 401.1 401.1z" />
    </Icon>
);

export default DialMax;