
import { Icon } from "../../index";

/**
 * A component that renders the `backpack` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backpack?s=regular backpack}
 * @preview ![backpack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/backpack.svg)
 */
const Backpack: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 48l64 0c4.4 0 8 3.6 8 8l0 24-80 0 0-24c0-4.4 3.6-8 8-8zm-56 8l0 24-8 0C57.3 80 0 137.3 0 208L0 448c0 35.3 28.7 64 64 64l40 0 240 0 40 0c35.3 0 64-28.7 64-64l0-240c0-70.7-57.3-128-128-128l-8 0 0-24c0-30.9-25.1-56-56-56L192 0c-30.9 0-56 25.1-56 56zM368 464l0-88 0-64c0-39.8-32.2-72-72-72l-144 0c-39.8 0-72 32.2-72 72l0 64 0 88-16 0c-8.8 0-16-7.2-16-16l0-240c0-44.2 35.8-80 80-80l32 0 128 0 32 0c44.2 0 80 35.8 80 80l0 240c0 8.8-7.2 16-16 16l-16 0zm-240 0l0-64 192 0 0 64-192 0zm16-304c-13.3 0-24 10.7-24 24s10.7 24 24 24l160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-160 0zM320 352l-192 0 0-40c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24l0 40z" />
    </Icon>
);

export default Backpack;