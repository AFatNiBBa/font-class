
import { Icon } from "../../index";

/**
 * A component that renders the `fill-drip` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill-drip?s=regular fill-drip}
 * @preview ![fill-drip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/fill-drip.svg)
 */
const FillDrip: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M39 7C48.4-2.3 63.6-2.3 73 7l89.4 89.4 58.7-58.7c28.1-28.1 73.7-28.1 101.8 0L474.3 189.1c28.1 28.1 28.1 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.6 363.9c-37.5-37.5-37.5-98.3 0-135.8l97.8-97.8L39 41C29.7 31.6 29.7 16.4 39 7zM231 233l-68.7-68.7L64.6 262.1c-7.3 7.3-11.8 16.4-13.4 25.9l358.2 0 31-31c9.4-9.4 9.4-24.6 0-33.9L289 71.6c-9.4-9.4-24.6-9.4-33.9 0l-58.7 58.7L265 199c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0zM512 512c-35.3 0-64-28.7-64-64c0-25.2 32.6-79.6 51.2-108.7c6-9.4 19.5-9.4 25.5 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default FillDrip;