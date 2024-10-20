
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-valve` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-valve?s=sharp-solid pipe-valve}
 * @preview ![pipe-valve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pipe-valve.svg)
 */
const PipeValve: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 12.8L96 64l0 64 160-16 160 16 0-64L288 76.8 288 64zm0 84.2l-32-4-32 4 0 43.8L96 192l0 256 320 0 0-256-128 0 0-43.8zM64 160L0 160l0 32L0 448l0 32 64 0 0-32 0-256 0-32zm448 32l0-32-64 0 0 32 0 256 0 32 64 0 0-32 0-256z" />
    </Icon>
);

export default PipeValve;