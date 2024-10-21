
import { Icon } from "../../index";

/**
 * A component that renders the `scythe` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=sharp-thin scythe}
 * @preview ![scythe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/scythe.svg)
 */
const Scythe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 0L540.6 0l-3.2 16L352 16C221 16 137 69.7 85.5 123.1c-25.9 26.8-43.6 53.6-54.8 73.7c-2.3 4-4.2 7.8-6 11.2L499 208l-3.2 16L17.2 224 0 224s2.1-6 6.9-16C31.3 156.8 124.5 0 352 0zM636.6 16l-18.3 85.5 5.8-29.1L569.6 326.7 529.9 512l-49.1 0-16.4 0 3.4-16 27.4-128 3.4-16-16.4 0L416 352l-16 0-16 0 0-16 0-32 0-16 16 0 16 0 96.4 0L574.1 0l49.1 0 15.3 0 1 0 .4 0-3.4 16zM416 336l82.7 0 19.8 0-4.1 19.4L484.2 496l32.7 0 37-172.6L619.8 16l-32.7 0-59 275.4L525.4 304l-12.9 0L416 304l-16 0 0 32 16 0z" />
    </Icon>
);

export default Scythe;