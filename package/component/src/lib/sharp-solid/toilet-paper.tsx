
import { Icon } from "../../index";

/**
 * A component that renders the `toilet-paper` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper?s=sharp-solid toilet-paper}
 * @preview ![toilet-paper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/toilet-paper.svg)
 */
const ToiletPaper: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 192c0-65.5 13.2-142.4 60.2-192L160 0C107 0 64 86 64 192c0 89.9-3.9 190.6-37.6 275.8L8 512l325.3 0C376 409.7 384 301.9 384 192zM512 384c53 0 96-86 96-192S565 0 512 0s-96 86-96 192s43 192 96 192zm0-128c-17.7 0-32-28.7-32-64s14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64zM112 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default ToiletPaper;