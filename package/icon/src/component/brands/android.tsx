
import { Icon } from "../../index";

/**
 * A component that renders the `android` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/android?s=brands android}
 * @preview ![android](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/android.svg)
 */
const Android: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
    </Icon>
);

export default Android;