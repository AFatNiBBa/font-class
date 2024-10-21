
import { Icon } from "../../index";

/**
 * A component that renders the `angel` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angel?s=sharp-thin angel}
 * @preview ![angel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/angel.svg)
 */
const Angel: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M400 64c0-8.3-7.2-20.2-28.6-30.9C350.8 22.8 321.4 16 288 16s-62.8 6.8-83.4 17.1C183.2 43.8 176 55.7 176 64c0 6.3 4.1 14.7 15.5 23.1c-2.7 4.6-5.1 9.5-7.2 14.5C169 91 160 78 160 64c0-35.3 57.3-64 128-64s128 28.7 128 64c0 14-9 27-24.3 37.5c-2.1-5-4.5-9.9-7.2-14.5C395.9 78.7 400 70.3 400 64zM288 208a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM62.6 345.5l2.9 6.6-3 6.6L16 459.5 16 496l88 0L224 256l1.4 0-80-80L32 176l0 100.6 30.6 68.9zM248 256l80 0 96-96 120 0 16 0 0 16 0 104-32 72 48 104 0 40 0 16-16 0-80 0-17.9 0-348.2 0L96 512l-80 0L0 512l0-16 0-40L48 352 16 280l0-104 0-16 16 0 120 0 96 96zm102.6 0l1.4 0L472 496l88 0 0-36.5L513.5 358.7l-3-6.6 2.9-6.6L544 276.6 544 176l-113.4 0-80 80zM121.9 496l332.2 0-112-224-108.2 0-112 224z" />
    </Icon>
);

export default Angel;